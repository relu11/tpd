import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { postReleaseRequest } from '../releaseRequests/releaseRequestsSlice';
import { Redirect } from 'react-router-dom';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        // marginRight: theme.spacing(2),
        display: 'block',
    },
}));

function AddReleaseRequest() {
    const [managerName, setManagerName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeFunction, SetemployeeFunction] = useState('');
    const [probability, setProbability] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeTitle, setEmployeeTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState(new Date().toDateString());
    const [releasePercentage, setReleasePercentage] = useState('');
    const [releaseReason, setReleaseReason] = useState('');
    const [leaving, setLeaving] = useState(false);

    const submitted = useSelector(state => state.release.submitted);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        let release_date = new Date(releaseDate);
        release_date = `${release_date.getFullYear()}-${release_date.getMonth()}-${release_date.getDate()}`;
        const data = {
            managerName,
            employeeId,
            function: employeeFunction,
            probability,
            employeeName,
            employeeTitle,
            releaseDate: release_date,
            releasePercentage,
            releaseReason,
            leaving,
        };
        console.log(data);
        dispatch(postReleaseRequest(data));
    };

    const handleReleaseDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setReleaseDate(date);
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/release' />;
        }
    };
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography variant='h6'>Add Release Request</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={managerName}
                                label='Manager'
                                onChange={e => setManagerName(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={employeeName}
                                label='Employee Name'
                                onChange={e => setEmployeeName(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={employeeId}
                                label='Employee ID'
                                onChange={e => setEmployeeId(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={employeeTitle}
                                label='Employee Title'
                                onChange={e => setEmployeeTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={employeeFunction}
                                label='Function'
                                onChange={e =>
                                    SetemployeeFunction(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <KeyboardDatePicker
                                variant='inline'
                                format='dd/MM/yyyy'
                                margin='normal'
                                label='Release Date'
                                value={new Date(releaseDate)}
                                onChange={handleReleaseDateChange}
                                KeyboardButtonProps={{
                                    name: 'release_date',
                                    'aria-label': 'choose date',
                                }}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                type='number'
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={probability}
                                label='Probability'
                                onChange={e => setProbability(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                type='number'
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={releasePercentage}
                                label='Percentage'
                                onChange={e =>
                                    setReleasePercentage(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={releaseReason}
                                label='Release Reason'
                                onChange={e => setReleaseReason(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        className={classes.formField}
                        control={
                            <Checkbox
                                checked={leaving}
                                onChange={e => setLeaving(e.target.checked)}
                                name='leaving'
                            />
                        }
                        label='Leaving?'
                    />
                    <Button
                        className={classes.formField}
                        color='primary'
                        variant='outlined'
                        type='submit'
                        size='small'
                    >
                        Submit
                    </Button>
                </form>
            </MuiPickersUtilsProvider>
            {renderRedirect()}
        </div>
    );
}

export default AddReleaseRequest;
