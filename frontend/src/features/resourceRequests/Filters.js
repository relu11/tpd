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
import { resetFilters, updateFilters } from './resourceRequestsSlice';

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
    const filters = useSelector(state => state.resource.filters);

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
                name='manager_name'
                value={filters.manager_name}
                onChange={setFilter}
            />
            <TextField
                className={classes.textField}
                variant='outlined'
                label='Title'
                size='small'
                value={filters.title}
                name='title'
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
            <FormControl size='small'>
                <InputLabel id='status-select-label'>Status</InputLabel>
                <Select
                    labelId='status-select-label'
                    className={classes.textField}
                    variant='outlined'
                    value={filters.status}
                    name='status'
                    onChange={setFilter}
                >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='open'>Open</MenuItem>
                    <MenuItem value='cancelled'>Cancelled</MenuItem>
                    <MenuItem value='hold'>On-hold</MenuItem>
                    <MenuItem value='moved'>Moved</MenuItem>
                    <MenuItem value='pending-hiring'>
                        Pending Hiring Request
                    </MenuItem>
                    <MenuItem value='hired'>Hired</MenuItem>
                    <MenuItem value='pending-outsourcing'>
                        Pending Outsourcing Request
                    </MenuItem>
                    <MenuItem value='outsourced'>Outsourced</MenuItem>
                    <MenuItem value='over-allocated'>Over Allocated</MenuItem>
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
