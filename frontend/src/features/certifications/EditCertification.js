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
import {
    fetchCurrentCertification,
    patchCurrentCertification,
    updateCurrentCertification,
} from './certificationsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function EditCertification(props) {
    const classes = useStyles();

    const { certificationId } = props;

    const currentCertification = useSelector(
        state => state.certifications.currentCertification
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentCertification)
            dispatch(fetchCurrentCertification(certificationId));
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        const certificationData = {
            certificationId,
            certificationName: currentCertification.certificationName,
        };
        dispatch(patchCurrentCertification(certificationData));
    };

    const handleChange = e => {
        dispatch(
            updateCurrentCertification({ [e.target.name]: e.target.value })
        );
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
                        name='certificationName'
                        value={currentCertification.certificationName}
                        onChange={handleChange}
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

export default EditCertification;
