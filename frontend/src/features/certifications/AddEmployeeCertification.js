import DateFnsUtils from '@date-io/date-fns';
import {
    Button,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postEmployeeCertification } from './certificationsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function AddEmployeeCertification() {
    const classes = useStyles();

    const [certificationName, setCertificationName] = useState('');
    const [certificationProviderId, setCertificationProviderId] = useState('');
    const [expirationDate, setExpirationDate] = useState(
        new Date().toDateString()
    );

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        const certificationData = {
            certificationName,
            certificationProviderId,
            expirationDate,
            isNew: true,
        };
        dispatch(postEmployeeCertification(certificationData));
    };

    const handleDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setExpirationDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    size='small'
                    className={classes.formField}
                    fullwidth
                    label='Certification Name'
                    value={certificationName}
                    onChange={e => setCertificationName(e.target.value)}
                />
                <TextField
                    size='small'
                    className={classes.formField}
                    fullwidth
                    label='Povider ID'
                    value={certificationProviderId}
                    onChange={e => setCertificationProviderId(e.target.value)}
                />
                {/* <FormControl size='small' className={classes.formField}>
                    <InputLabel id='experience-select-label'>
                        Experience Level
                    </InputLabel>
                    <Select
                        className={classes.formField}
                        size='small'
                        value={experienceLevel}
                        labelId='experience-select-label'
                        onChange={e => setExperienceLevel(e.target.value)}
                    >
                        <MenuItem value=''></MenuItem>
                        <MenuItem value='Beginner'>Beginner</MenuItem>
                        <MenuItem value='Intermediate'>Intermediate</MenuItem>
                        <MenuItem value='Expert'>Expert</MenuItem>
                    </Select>
                </FormControl> */}
                <KeyboardDatePicker
                    className={classes.formField}
                    variant='inline'
                    format='dd/MM/yyyy'
                    margin='normal'
                    label='Expiration Date'
                    value={new Date(expirationDate)}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'choose date',
                    }}
                />
                <Button
                    variant='outlined'
                    color='primary'
                    type='submit'
                    className={classes.formField}
                >
                    Add
                </Button>
            </form>
        </MuiPickersUtilsProvider>
    );
}

export default AddEmployeeCertification;
