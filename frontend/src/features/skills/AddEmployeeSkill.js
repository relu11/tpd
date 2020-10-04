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
import { postEmployeeSkill } from './skillsSlice';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
}));

function AddEmployeeSkill() {
    const classes = useStyles();

    const [skillName, setSkillName] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [lastUsedDate, setLastUsedDate] = useState(new Date().toDateString());

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        const skillData = {
            skillName,
            experienceLevel,
            lastUsedDate,
            isNew: true,
        };
        dispatch(postEmployeeSkill(skillData));
    };

    const handleDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setLastUsedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    size='small'
                    className={classes.formField}
                    fullwidth
                    label='Skill Name'
                    value={skillName}
                    onChange={e => setSkillName(e.target.value)}
                />
                <FormControl size='small' className={classes.formField}>
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
                </FormControl>
                <KeyboardDatePicker
                    className={classes.formField}
                    variant='inline'
                    format='dd/MM/yyyy'
                    margin='normal'
                    label='Release Date'
                    value={new Date(lastUsedDate)}
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

export default AddEmployeeSkill;
