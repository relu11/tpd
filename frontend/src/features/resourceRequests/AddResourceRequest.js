import React, { useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { postResourceRequest } from '../resourceRequests/resourceRequestsSlice';
import { Link, Redirect } from 'react-router-dom';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    formField: {
        marginTop: theme.spacing(4),
        display: 'block',
    },
    skillsFormField: {
        marginRight: theme.spacing(2),
    },
}));

function AddResourceRequest() {
    const [manager_name, setManagerName] = useState('');
    const [employeeFunction, setEmployeeFunction] = useState('');
    const [title, setTitle] = useState('');
    const [core_team_member, setCore_team_member] = useState(false);
    const [replacement, setReplacement] = useState(false);
    const [replacement_for, setReplacement_for] = useState('');
    const [requests_count, setRequests_count] = useState(1);
    const [probability, setProbability] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [related_opportunity, setRelated_opportunity] = useState('');
    const [start_date, setStart_date] = useState(new Date().toDateString());
    const [end_date, setEnd_date] = useState(new Date().toDateString());
    const [comments, setComments] = useState('');
    const [currentTab, setCurrentTab] = useState('details');
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [currentSkillMandatory, setCurrentSkillMandatory] = useState(false);
    const [categories, setCategories] = useState([]);

    const submitted = useSelector(state => state.resource.submitted);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            manager_name,
            function: employeeFunction,
            title,
            core_team_member,
            replacement,
            replacement_for,
            requests_count,
            probability,
            percentage,
            related_opportunity,
            start_date,
            end_date,
            comments,
        };
        dispatch(postResourceRequest(data));
    };

    const handleSkillSubmit = e => {
        e.preventDefault();
        setCategories([
            ...categories,
            {
                category: currentCategory,
                subCategory: currentSubCategory,
                mandatory: currentSkillMandatory,
            },
        ]);
        setCurrentSkillMandatory(false);
        setCurrentCategory('');
        setCurrentSubCategory('');
    };

    const handleStartDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setStart_date(date);
    };

    const handleEndDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setEnd_date(date);
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/resource' />;
        }
    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {renderRedirect()}
                <Typography variant='h6'>Add Resource Request</Typography>
                <Tabs
                    value={currentTab}
                    onChange={(_, newValue) => setCurrentTab(newValue)}
                >
                    <Tab
                        label='Request Details'
                        value='details'
                        disabled={currentTab != 'details'}
                    />
                    <Tab
                        label='Assignment'
                        value='assignment'
                        disabled={currentTab != 'assignment'}
                    />
                    <Tab
                        label='Technical Skills'
                        value='technical-skills'
                        disabled={currentTab != 'technical-skills'}
                    />
                </Tabs>
                <form onSubmit={handleSubmit}>
                    <div
                        role='tabpanel'
                        hidden={currentTab !== 'details'}
                        id={`simple-tabpanel-${'details'}`}
                        aria-labelledby={`simple-tab-${'details'}`}
                    >
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <TextField
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={manager_name}
                                    label='Manager Name'
                                    onChange={e =>
                                        setManagerName(e.target.value)
                                    }
                                    required
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
                                        setEmployeeFunction(e.target.value)
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={title}
                                    label='Job Title'
                                    onChange={e => setTitle(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    type='number'
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={requests_count}
                                    label='Number of Requests'
                                    onChange={e =>
                                        setRequests_count(e.target.value)
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <FormControlLabel
                                    className={classes.formField}
                                    control={
                                        <Checkbox
                                            checked={replacement}
                                            onChange={e =>
                                                setReplacement(e.target.checked)
                                            }
                                            name='Replacement'
                                        />
                                    }
                                    label='Replacement'
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    disabled={!replacement}
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={replacement_for}
                                    label='Replacement For'
                                    onChange={e =>
                                        setReplacement_for(e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    className={classes.formField}
                                    control={
                                        <Checkbox
                                            checked={core_team_member}
                                            onChange={e =>
                                                setCore_team_member(
                                                    e.target.checked
                                                )
                                            }
                                            name='core-team-member'
                                        />
                                    }
                                    label='Core team member'
                                />
                            </Grid>
                        </Grid>
                        <ButtonGroup>
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
                            <Button
                                className={classes.formField}
                                color='primary'
                                variant='outlined'
                                type='button'
                                onClick={() => setCurrentTab('assignment')}
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div
                        role='tabpanel'
                        hidden={currentTab !== 'assignment'}
                        id={`simple-tabpanel-${'assignment'}`}
                        aria-labelledby={`simple-tab-${'assignment'}`}
                    >
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <TextField
                                    type='number'
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={probability}
                                    label='Probability'
                                    onChange={e =>
                                        setProbability(e.target.value)
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    type='number'
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={percentage}
                                    label='Percentage'
                                    onChange={e =>
                                        setPercentage(e.target.value)
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    className={classes.formField}
                                    size='small'
                                    variant='outlined'
                                    value={related_opportunity}
                                    label='Related Opportunity'
                                    onChange={e =>
                                        setRelated_opportunity(e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <KeyboardDatePicker
                                    variant='inline'
                                    format='dd/MM/yyyy'
                                    margin='normal'
                                    label='Start Date'
                                    value={new Date(start_date)}
                                    onChange={handleStartDateChange}
                                    KeyboardButtonProps={{
                                        name: 'resource_date',
                                        'aria-label': 'choose start date',
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <KeyboardDatePicker
                                    variant='inline'
                                    format='dd/MM/yyyy'
                                    margin='normal'
                                    label='End Date'
                                    value={new Date(end_date)}
                                    onChange={handleEndDateChange}
                                    KeyboardButtonProps={{
                                        name: 'resource_date',
                                        'aria-label': 'choose end date',
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.textArea}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    variant='outlined'
                                    name='comments'
                                    value={comments}
                                    label='Comments'
                                    onChange={e => setComments(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <ButtonGroup>
                            <Button
                                className={classes.formField}
                                color='primary'
                                variant='outlined'
                                type='button'
                                onClick={() => setCurrentTab('details')}
                            >
                                Previous
                            </Button>
                            <Button
                                className={classes.formField}
                                color='primary'
                                variant='outlined'
                                type='button'
                                onClick={() =>
                                    setCurrentTab('technical-skills')
                                }
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div
                        role='tabpanel'
                        hidden={currentTab !== 'technical-skills'}
                        id={`simple-tabpanel-${'technical-skills'}`}
                        aria-labelledby={`simple-tab-${'technical-skills'}`}
                    >
                        <TextField
                            className={classes.skillsFormField}
                            label='Category'
                            value={currentCategory}
                            onChange={e => setCurrentCategory(e.target.value)}
                        />
                        <TextField
                            className={classes.skillsFormField}
                            label='Sub-Category'
                            value={currentSubCategory}
                            onChange={e =>
                                setCurrentSubCategory(e.target.value)
                            }
                        />
                        <FormControlLabel
                            className={classes.skillsFormField}
                            control={
                                <Checkbox
                                    checked={currentSkillMandatory}
                                    onChange={e =>
                                        setCurrentSkillMandatory(
                                            e.target.checked
                                        )
                                    }
                                    name='current-skill-mandatory'
                                />
                            }
                            label='Mandatory'
                        />
                        <Button
                            type='color'
                            size='small'
                            variant='outlined'
                            color='primary'
                            onClick={handleSkillSubmit}
                        >
                            Add
                        </Button>
                        <TableContainer component={Paper}>
                            <Table aria-label='required skills'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Sub Category</TableCell>
                                        <TableCell>Mandatory</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {categories.map(row => (
                                        <TableRow key={row.category}>
                                            <TableCell>
                                                {row.category}
                                            </TableCell>
                                            <TableCell>
                                                {row.subCategory}
                                            </TableCell>
                                            <TableCell>
                                                {row.mandatory ? 'yes' : 'no'}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <ButtonGroup>
                            <Button
                                className={classes.formField}
                                color='primary'
                                variant='outlined'
                                type='button'
                                onClick={() => setCurrentTab('assignment')}
                            >
                                Previous
                            </Button>
                            <Button
                                className={classes.formField}
                                color='primary'
                                variant='outlined'
                                type='submit'
                            >
                                Submit
                            </Button>
                        </ButtonGroup>
                    </div>
                </form>
            </MuiPickersUtilsProvider>
            {renderRedirect()}
        </div>
    );
}

export default AddResourceRequest;
