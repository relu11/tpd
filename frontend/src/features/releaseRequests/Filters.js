import { TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "./releaseRequestsSlice";

function Filters() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.release.filters);

    const setFilter = (e) => {
        console.log(e.target.name);
        dispatch(updateFilters({ [e.target.name]: e.target.value }));
    };
    return (
        <div>
            <Typography variant="body1">Filters:</Typography>
            <TextField
                variant="outlined"
                label="Manager"
                size="small"
                name="managerName"
                value={filters.managerName}
                onChange={setFilter}
            />
            <TextField
                variant="outlined"
                label="Employee Title"
                size="small"
                value={filters.employeeTitle}
                name="employeeTitle"
                onChange={setFilter}
            />
            <TextField
                variant="outlined"
                label="Function"
                size="small"
                value={filters.employeeFunction}
                name="employeeFunction"
                onChange={setFilter}
            />
            <TextField
                variant="outlined"
                label="Employee Name"
                size="small"
                value={filters.employeeName}
                name="employeeName"
                onChange={setFilter}
            />
            <TextField
                variant="outlined"
                label="Status"
                size="small"
                value={filters.requestStatus}
                name="requestStatus"
                onChange={setFilter}
            />
        </div>
    );
}

export default Filters;
