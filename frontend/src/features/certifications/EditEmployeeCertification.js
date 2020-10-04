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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentEmployeeSkill } from '../skills/skillsSlice';
import {
    fetchCurrentEmployeeCertification,
    patchCurrentEmployeeCertification,
    postEmployeeCertification,
    updateCurrentEmployeeCertification,
} from './certificationsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function EditEmployeeCertification(props) {
    const classes = useStyles();

    const { certificationId } = props;

    const currentCertification = useSelector(
        state => state.certifications.currentEmployeeCertification
    );

    useEffect(() => {
        if (!currentCertification)
            dispatch(fetchCurrentEmployeeCertification(certificationId));
    });

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = {
            certificationProviderId:
                currentCertification.Certification.certificationProviderId,
            expirationDate: currentCertification.expirationDate,
        };
        dispatch(patchCurrentEmployeeCertification({ data, certificationId }));
    };

    const handleChange = e => {
        dispatch(
            updateCurrentEmployeeCertification({
                [e.target.name]: e.target.value,
            })
        );
    };

    const handleDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        dispatch(updateCurrentEmployeeCertification({ expirationDate: date }));
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {currentCertification && (
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        size='small'
                        className={classes.formField}
                        fullwidth
                        label='Certification Name'
                        name='Certification.certificationName'
                        value={
                            currentCertification.Certification.certificationName
                        }
                        disabled
                    />
                    <TextField
                        size='small'
                        className={classes.formField}
                        fullwidth
                        label='Povider ID'
                        name='certificationProviderId'
                        value={
                            currentCertification.Certification
                                .certificationProviderId
                        }
                        disabled
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
                        value={new Date(currentCertification.expirationDate)}
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
                        Save
                    </Button>
                </form>
            )}
        </MuiPickersUtilsProvider>
    );
}

export default EditEmployeeCertification;
