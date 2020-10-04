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
    fetchCurrentEmployeeSkill,
    patchCurrentEmployeeSkill,
    updateCurrentEmployeeSkill,
} from './skillsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function EditEmployeeSkill(props) {
    const classes = useStyles();

    const { skillId } = props;

    const currentSkill = useSelector(
        state => state.skills.currentEmployeeSkill
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentSkill) dispatch(fetchCurrentEmployeeSkill(skillId));
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        const skillData = {
            skillId,
            experienceLevel: currentSkill.experienceLevel,
            lastUsedDate: currentSkill.lastUsedDate,
        };
        dispatch(patchCurrentEmployeeSkill(skillData));
    };

    const handleDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        dispatch(updateCurrentEmployeeSkill({ lastUsedDate: date }));
    };

    const handleChange = e => {
        dispatch(
            updateCurrentEmployeeSkill({ [e.target.name]: e.target.value })
        );
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
                        name='Skill.skillName'
                        value={currentSkill.Skill.skillName}
                        disabled
                    />
                    <FormControl size='small' className={classes.formField}>
                        <InputLabel id='experience-select-label'>
                            Experience Level
                        </InputLabel>
                        <Select
                            className={classes.formField}
                            size='small'
                            name='experienceLevel'
                            value={currentSkill.experienceLevel}
                            labelId='experience-select-label'
                            onChange={handleChange}
                        >
                            <MenuItem value=''></MenuItem>
                            <MenuItem value='Beginner'>Beginner</MenuItem>
                            <MenuItem value='Intermediate'>
                                Intermediate
                            </MenuItem>
                            <MenuItem value='Expert'>Expert</MenuItem>
                        </Select>
                    </FormControl>
                    <KeyboardDatePicker
                        className={classes.formField}
                        variant='inline'
                        format='dd/MM/yyyy'
                        margin='normal'
                        label='Release Date'
                        value={new Date(currentSkill.lastUsedDate)}
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
                        Edit
                    </Button>
                </form>
            )}
        </MuiPickersUtilsProvider>
    );
}

export default EditEmployeeSkill;
