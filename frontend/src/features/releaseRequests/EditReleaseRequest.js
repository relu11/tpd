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
    getReleaseRequest,
    updateCurrentReleaseRequest,
    selectCurrentReleaseRequest,
    patchReleaseRequest,
} from './releaseRequestsSlice';

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

function EditReleaseRequest() {
    const currentRequest = useSelector(selectCurrentReleaseRequest);
    const submitted = useSelector(state => state.release.submitted);
    const dispatch = useDispatch();

    const { requestId } = useParams();

    useEffect(() => {
        console.log(currentRequest);
        if (!currentRequest) dispatch(getReleaseRequest(requestId));
    }, [currentRequest, dispatch]);

    const classes = useStyles();

    const handleChange = e => {
        dispatch(
            updateCurrentReleaseRequest({ [e.target.name]: e.target.value })
        );
    };

    const handleReleaseDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        dispatch(updateCurrentReleaseRequest({ release_date: date }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(patchReleaseRequest(currentRequest));
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/release' />;
        }
    };

    const handleLeavingChange = e =>
        dispatch(
            dispatch(updateCurrentReleaseRequest({ leaving: e.target.checked }))
        );

    const renderForm = () => {
        if (currentRequest)
            return (
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {renderRedirect()}
                        <Typography variant='h6'>
                            Edit Release Request
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
                                        label='Release Date'
                                        value={
                                            new Date(
                                                currentRequest.release_date
                                            )
                                        }
                                        onChange={handleReleaseDateChange}
                                        KeyboardButtonProps={{
                                            name: 'release_date',
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
                                        name='release_percentage'
                                        value={
                                            currentRequest.release_percentage
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
                                        name='release_reason'
                                        value={currentRequest.release_reason}
                                        label='Release Reason'
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
                                            className={classes.selectField}
                                            labelId='status-select-label'
                                            variant='outlined'
                                            value={
                                                currentRequest.request_status
                                            }
                                            name='request_status'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value='open'>
                                                Open
                                            </MenuItem>
                                            <MenuItem value='cancelled'>
                                                Cancelled
                                            </MenuItem>
                                            <MenuItem value='moved'>
                                                Moved
                                            </MenuItem>
                                            <MenuItem value='left'>
                                                Left
                                            </MenuItem>
                                            <MenuItem value='booked'>
                                                Booked
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
                                    to='/requests/release'
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

export default EditReleaseRequest;
