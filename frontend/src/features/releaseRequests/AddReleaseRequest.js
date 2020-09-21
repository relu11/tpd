import React, { useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
    clearSubmittedStatus,
    postReleaseRequest,
} from "../releaseRequests/releaseRequestsSlice";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formField: {
        marginTop: theme.spacing(4),
        // marginRight: theme.spacing(2),
        display: "block",
    },
}));

function AddReleaseRequest() {
    const [managerName, setManagerName] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [employeeFunction, SetemployeeFunction] = useState("");
    const [probability, setProbability] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeTitle, setEmployeeTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState(new Date().toLocaleString());
    const [releasePercentage, setReleasePercentage] = useState("");
    const [releaseReason, setReleaseReason] = useState("");
    const [leaving, setLeaving] = useState(false);

    const submitted = useSelector((state) => state.release.submitted);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            managerName,
            employeeID,
            employeeFunction,
            probability,
            employeeName,
            employeeTitle,
            releaseDate,
            releasePercentage,
            releaseReason,
            referenceNumber: 10,
        };
        console.log(data);
        dispatch(postReleaseRequest(data));
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to="/requests/release" />;
        }
    };
    return (
        <div>
            {renderRedirect()}
            <Typography variant="h6">Add Release Request</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={managerName}
                    label="Manager"
                    onChange={(e) => setManagerName(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={employeeName}
                    label="Release Name"
                    onChange={(e) => setEmployeeName(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={employeeID}
                    label="Employee ID"
                    onChange={(e) => setEmployeeID(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={employeeTitle}
                    label="Employee Title"
                    onChange={(e) => setEmployeeTitle(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={employeeFunction}
                    label="Function"
                    onChange={(e) => SetemployeeFunction(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={releaseDate}
                    label="Release Date"
                    onChange={(e) => setReleaseDate(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={probability}
                    label="Probability"
                    onChange={(e) => setProbability(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={releasePercentage}
                    label="Percentage"
                    onChange={(e) => setReleasePercentage(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={releaseReason}
                    label="Release Reason"
                    onChange={(e) => setReleaseReason(e.target.value)}
                />
                <Button
                    className={classes.formField}
                    color="primary"
                    variant="outlined"
                    type="submit"
                    size="small"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default AddReleaseRequest;
