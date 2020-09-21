import React, { useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
    clearSubmittedStatus,
    postResourceRequest,
} from "../resourceRequests/resourceRequestsSlice";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formField: {
        marginTop: theme.spacing(4),
        // marginRight: theme.spacing(2),
        display: "block",
    },
}));

function AddResourceRequest() {
    const [managerName, setManagerName] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [employeeFunction, SetemployeeFunction] = useState("");
    const [probability, setProbability] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeTitle, setEmployeeTitle] = useState("");
    const [resourceDate, setResourceDate] = useState(
        new Date().toLocaleString()
    );
    const [resourcePercentage, setResourcePercentage] = useState("");
    const [resourceReason, setResourceReason] = useState("");
    const [leaving, setLeaving] = useState(false);

    const submitted = useSelector((state) => state.resource.submitted);
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
            resourceDate,
            resourcePercentage,
            resourceReason,
            referenceNumber: 10,
        };
        console.log(data);
        dispatch(postResourceRequest(data));
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to="/requests/resource" />;
        }
    };
    return (
        <div>
            {renderRedirect()}
            <Typography variant="h6">Add Resource Request</Typography>
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
                    label="Resource Name"
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
                    value={resourceDate}
                    label="Resource Date"
                    onChange={(e) => setResourceDate(e.target.value)}
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
                    value={resourcePercentage}
                    label="Percentage"
                    onChange={(e) => setResourcePercentage(e.target.value)}
                />
                <TextField
                    className={classes.formField}
                    size="small"
                    variant="outlined"
                    value={resourceReason}
                    label="Resource Reason"
                    onChange={(e) => setResourceReason(e.target.value)}
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

export default AddResourceRequest;
