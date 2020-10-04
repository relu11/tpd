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
    fetchCurrentSkill,
    patchCurrentSkill,
    updateCurrentSkill,
} from './skillsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function EditSkill(props) {
    const classes = useStyles();

    const { skillId } = props;

    const currentSkill = useSelector(state => state.skills.currentSkill);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentSkill) dispatch(fetchCurrentSkill(skillId));
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        const skillData = {
            skillId,
            skillName: currentSkill.skillName,
        };
        dispatch(patchCurrentSkill(skillData));
    };

    const handleChange = e => {
        dispatch(updateCurrentSkill({ [e.target.name]: e.target.value }));
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {currentSkill && (
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        size='small'
                        className={classes.formField}
                        fullwidth
                        label='Skill Name'
                        name='skillName'
                        value={currentSkill.skillName}
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

export default EditSkill;
