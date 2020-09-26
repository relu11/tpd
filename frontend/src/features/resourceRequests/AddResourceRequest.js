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
import { postResourceRequest } from '../resourceRequests/resourceRequestsSlice';
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

function AddResourceRequest() {
    const [managerName, setManagerName] = useState('');
    const [employeeID, setEmployeeID] = useState('');
    const [employeeFunction, SetemployeeFunction] = useState('');
    const [probability, setProbability] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeTitle, setEmployeeTitle] = useState('');
    const [resourceDate, setResourceDate] = useState(new Date().toDateString());
    const [resourcePercentage, setResourcePercentage] = useState('');
    const [resourceReason, setResourceReason] = useState('');
    const [leaving, setLeaving] = useState(false);

    const submitted = useSelector(state => state.resource.submitted);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        let resource_date = new Date(resourceDate);
        resource_date = `${resource_date.getFullYear()}-${resource_date.getMonth()}-${resource_date.getDate()}`;
        const data = {
            manager_name: managerName,
            employee_id: employeeID,
            function: employeeFunction,
            probability,
            employee_name: employeeName,
            employee_title: employeeTitle,
            resource_date,
            resource_percentage: resourcePercentage,
            resource_reason: resourceReason,
            request_status: 'open',
            leaving,
        };
        console.log(data);
        dispatch(postResourceRequest(data));
    };

    const handleResourceDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setResourceDate(date);
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/resource' />;
        }
    };
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography variant='h6'>Add Resource Request</Typography>
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
                                value={employeeID}
                                label='Employee ID'
                                onChange={e => setEmployeeID(e.target.value)}
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
                                label='Resource Date'
                                value={new Date(resourceDate)}
                                onChange={handleResourceDateChange}
                                KeyboardButtonProps={{
                                    name: 'resource_date',
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
                                value={resourcePercentage}
                                label='Percentage'
                                onChange={e =>
                                    setResourcePercentage(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                className={classes.formField}
                                size='small'
                                variant='outlined'
                                value={resourceReason}
                                label='Resource Reason'
                                onChange={e =>
                                    setResourceReason(e.target.value)
                                }
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

export default AddResourceRequest;
