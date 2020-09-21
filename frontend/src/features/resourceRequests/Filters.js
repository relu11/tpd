import { TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "./resourceRequestsSlice";

function Filters() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.resource.filters);

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
                value={filters.title}
                name="title"
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
                label="Status"
                size="small"
                value={filters.request_status}
                name="status"
                onChange={setFilter}
            />
        </div>
    );
}

export default Filters;
