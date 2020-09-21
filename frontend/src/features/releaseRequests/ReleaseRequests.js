import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@material-ui/core";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import {
    clearSubmittedStatus,
    fetchReleaseRequests,
    selectReleaseRequestsState,
} from "./releaseRequestsSlice";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from "@material-ui/icons/Send";
import InfoButton from "../../app/components/InfoButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    actions: {},
    button: {
        "&$root": {
            borderColor: theme.palette.info.main,
            color: theme.palette.info.main,
        },
    },
}));

function ReleaseRequests() {
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const requests = useSelector((state) => state.release.requests);
    const dispatch = useDispatch();
    const fetchState = useSelector(selectReleaseRequestsState);
    const filters = useSelector((state) => state.release.filters);

    useEffect(() => {
        if (fetchState === "idle") dispatch(fetchReleaseRequests());
        dispatch(clearSubmittedStatus());
    }, [fetchState, dispatch]);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const filterRows = (rows) =>
        rows.filter((r) => {
            let valid = true;
            for (let key in filters) {
                if (
                    filters[key].length > 0 &&
                    !r[key].toLowerCase().includes(filters[key].toLowerCase())
                )
                    valid = false;
            }
            return valid;
        });

    return (
        <div>
            <Typography variant="h6">Release Requests</Typography>
            <TableContainer component={Paper}>
                <Filters />
                <div className={classes.actions}>
                    <InfoButton
                        component={Link}
                        to="/requests/release/add"
                        variant="outlined"
                        classname={classes.button}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </InfoButton>
                    <InfoButton
                        variant="outlined"
                        classname={classes.button}
                        startIcon={<SendIcon />}
                    >
                        Export
                    </InfoButton>
                </div>
                <Table aria-label="release requests table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ref No.</TableCell>
                            <TableCell>Manager</TableCell>
                            <TableCell>Resource Name</TableCell>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Employee Title</TableCell>
                            <TableCell>Function</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>Release Reason</TableCell>
                            <TableCell>Leaving</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action Taken</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterRows(requests).map((row) => (
                            <TableRow key={row.reference_number}>
                                <TableCell component="th" scope="row">
                                    {row.reference_number}
                                </TableCell>
                                <TableCell>{row.managerName}</TableCell>
                                <TableCell>{row.employeeName}</TableCell>
                                <TableCell>{row.employeeID}</TableCell>
                                <TableCell>{row.employeeTitle}</TableCell>
                                <TableCell>{row.employeeFunction}</TableCell>
                                <TableCell>{row.releaseDate}</TableCell>
                                <TableCell>{row.releaseReason}</TableCell>
                                <TableCell>{row.leaving}</TableCell>
                                <TableCell>{row.requestStatus}</TableCell>
                                <TableCell>{row.actionTaken || "-"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                rowsPerPageOptions={[
                                    10,
                                    20,
                                    30,
                                    40,
                                    50,
                                    { value: -1, label: "All" },
                                ]}
                                component="div"
                                count={requests.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                }}
                                onChange={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ReleaseRequests;
