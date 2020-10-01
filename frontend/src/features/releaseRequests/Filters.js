import {
    Button,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, updateFilters } from './releaseRequestsSlice';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    textField: {
        marginRight: theme.spacing(2),
        minWidth: 120,
    },
}));

function Filters() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const filters = useSelector(state => state.release.filters);

    const setFilter = e => {
        dispatch(updateFilters({ [e.target.name]: e.target.value }));
    };

    const resetAll = () => dispatch(resetFilters());

    return (
        <div className={classes.root}>
            <Typography variant='body1'>Filters:</Typography>
            <TextField
                className={classes.textField}
                variant='outlined'
                label='Manager'
                size='small'
                name='managerName'
                value={filters.managerName}
                onChange={setFilter}
            />
            <TextField
                className={classes.textField}
                variant='outlined'
                label='Employee Title'
                size='small'
                value={filters.employeeTitle}
                name='employeeTitle'
                onChange={setFilter}
            />
            <TextField
                className={classes.textField}
                variant='outlined'
                label='Function'
                size='small'
                value={filters.function}
                name='function'
                onChange={setFilter}
            />
            <TextField
                className={classes.textField}
                variant='outlined'
                label='Employee Name'
                size='small'
                value={filters.employeeName}
                name='employeeName'
                onChange={setFilter}
            />
            <FormControl size='small'>
                <InputLabel id='status-select-label'>Status</InputLabel>
                <Select
                    labelId='status-select-label'
                    className={classes.textField}
                    variant='outlined'
                    value={filters.requestStatus}
                    name='requestStatus'
                    onChange={setFilter}
                >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='open'>Open</MenuItem>
                    <MenuItem value='cancelled'>Cancelled</MenuItem>
                    <MenuItem value='moved'>Moved</MenuItem>
                    <MenuItem value='left'>Left</MenuItem>
                    <MenuItem value='booked'>Booked</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant='outlined'
                color='primary'
                onClick={() => resetAll()}
            >
                Reset
            </Button>
        </div>
    );
}

export default Filters;
