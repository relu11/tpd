import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    getResourceRequest,
    updateCurrentResourceRequest,
    selectCurrentResourceRequest,
    patchResourceRequest,
} from './resourceRequestsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
    textArea: {
        marginTop: theme.spacing(4),
        display: 'block',
        width: '100%',
    },
    selectField: {
        marginTop: theme.spacing(2),
        display: 'block',
        width: 190,
    },
}));

function EditResourceRequest() {
    const currentRequest = useSelector(selectCurrentResourceRequest);
    const submitted = useSelector(state => state.resource.submitted);
    const dispatch = useDispatch();

    const { requestId } = useParams();

    useEffect(() => {
        console.log(currentRequest);
        if (!currentRequest) dispatch(getResourceRequest(requestId));
    }, [currentRequest, dispatch]);

    const classes = useStyles();

    const handleChange = e => {
        dispatch(
            updateCurrentResourceRequest({ [e.target.name]: e.target.value })
        );
    };

    const handleResourceDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        dispatch(updateCurrentResourceRequest({ resource_date: date }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(patchResourceRequest(currentRequest));
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/resource' />;
        }
    };

    const handleLeavingChange = e =>
        dispatch(
            dispatch(
                updateCurrentResourceRequest({ leaving: e.target.checked })
            )
        );

    const renderForm = () => {
        if (currentRequest)
            return (
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {renderRedirect()}
                        <Typography variant='h6'>
                            Edit Resource Request
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='manager_name'
                                        value={currentRequest.reference_number}
                                        label='Reference Number'
                                        disabled
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='manager_name'
                                        value={currentRequest.manager_name}
                                        label='Manager'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='employee_name'
                                        value={currentRequest.employee_name}
                                        label='Employee Name'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='employee_id'
                                        value={currentRequest.employee_id}
                                        label='Employee ID'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='employee_title'
                                        value={currentRequest.employee_title}
                                        label='Employee Title'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='function'
                                        value={currentRequest.function}
                                        label='Function'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <KeyboardDatePicker
                                        variant='inline'
                                        format='dd/MM/yyyy'
                                        margin='normal'
                                        label='Resource Date'
                                        value={
                                            new Date(
                                                currentRequest.resource_date
                                            )
                                        }
                                        onChange={handleResourceDateChange}
                                        KeyboardButtonProps={{
                                            name: 'resource_date',
                                            'aria-label': 'choose date',
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='probability'
                                        defaultValue='0'
                                        value={currentRequest.probability}
                                        label='Probability'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='resource_percentage'
                                        value={
                                            currentRequest.resource_percentage
                                        }
                                        label='Percentage'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='resource_reason'
                                        value={currentRequest.resource_reason}
                                        label='Resource Reason'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <FormControl
                                        size='small'
                                        className={classes.formField}
                                    >
                                        <InputLabel id='status-select-label'>
                                            Status
                                        </InputLabel>
                                        <Select
                                            labelId='status-select-label'
                                            className={classes.selectField}
                                            variant='outlined'
                                            value={currentRequest.status}
                                            name='status'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value=''></MenuItem>
                                            <MenuItem value='open'>
                                                Open
                                            </MenuItem>
                                            <MenuItem value='cancelled'>
                                                Cancelled
                                            </MenuItem>
                                            <MenuItem value='hold'>
                                                On-hold
                                            </MenuItem>
                                            <MenuItem value='moved'>
                                                Moved
                                            </MenuItem>
                                            <MenuItem value='pending-hiring'>
                                                Pending Hiring Request
                                            </MenuItem>
                                            <MenuItem value='hired'>
                                                Hired
                                            </MenuItem>
                                            <MenuItem value='pending-outsourcing'>
                                                Pending Outsourcing Request
                                            </MenuItem>
                                            <MenuItem value='outsourced'>
                                                Outsourced
                                            </MenuItem>
                                            <MenuItem value='over-allocated'>
                                                Over Allocated
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <FormControl
                                        size='small'
                                        className={classes.formField}
                                    >
                                        <InputLabel id='action-taken-select-label'>
                                            Action Taken
                                        </InputLabel>
                                        <Select
                                            className={classes.selectField}
                                            labelId='action-taken-select-label'
                                            variant='outlined'
                                            value={currentRequest.action_taken}
                                            name='action_taken'
                                            onChange={handleChange}
                                            disabled={
                                                currentRequest.hasActionTaken
                                                    ? true
                                                    : false
                                            }
                                        >
                                            <MenuItem value='moving-list'>
                                                Added to moving list
                                            </MenuItem>
                                            <MenuItem value='leaving-list'>
                                                Added to leaving list
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textArea}
                                        multiline
                                        rows={4}
                                        // size='small'
                                        fullWidth
                                        variant='outlined'
                                        name='comments'
                                        value={currentRequest.comments}
                                        label='Comments'
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                className={classes.formField}
                                control={
                                    <Checkbox
                                        checked={currentRequest.leaving}
                                        onChange={handleLeavingChange}
                                        name='leaving'
                                    />
                                }
                                label='Leaving?'
                            />
                            <ButtonGroup>
                                <Button
                                    className={classes.formField}
                                    color='primary'
                                    variant='outlined'
                                    type='submit'
                                >
                                    Save
                                </Button>
                                <Link
                                    component={Button}
                                    to='/requests/resource'
                                    className={classes.formField}
                                    color='secondary'
                                    variant='outlined'
                                    type='button'
                                >
                                    Canel
                                </Link>
                            </ButtonGroup>
                        </form>
                    </MuiPickersUtilsProvider>
                </div>
            );
        else return 'Loading....';
    };
    return <div>{renderForm()}</div>;
}

export default EditResourceRequest;
