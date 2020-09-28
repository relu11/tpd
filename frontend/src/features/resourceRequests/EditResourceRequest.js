import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
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
import {
    getResourceRequest,
    patchResourceRequest,
    postResourceRequest,
    selectCurrentResourceRequest,
    updateCurrentResourceRequest,
} from '../resourceRequests/resourceRequestsSlice';
import { Link, Redirect, useParams } from 'react-router-dom';
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
    selectField: {
        marginTop: theme.spacing(2),
        display: 'block',
        width: 200,
    },
}));

function EditResourceRequest() {
    const [currentTab, setCurrentTab] = useState('details');
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [currentSkillMandatory, setCurrentSkillMandatory] = useState(false);
    const [categories, setCategories] = useState([]);

    const currentRequest = useSelector(selectCurrentResourceRequest);
    const submitted = useSelector(state => state.resource.submitted);
    const dispatch = useDispatch();

    const { requestId } = useParams();

    useEffect(() => {
        if (!currentRequest) dispatch(getResourceRequest(requestId));
    }, [currentRequest, dispatch, requestId]);

    const classes = useStyles();

    const handleChange = e => {
        if (e.target.name === 'action_taken' && !currentRequest.actionChanged)
            dispatch(updateCurrentResourceRequest({ actionChanged: true }));
        dispatch(
            updateCurrentResourceRequest({ [e.target.name]: e.target.value })
        );
    };

    const handleCheckChange = e => {
        dispatch(
            updateCurrentResourceRequest({ [e.target.name]: e.target.checked })
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(patchResourceRequest(currentRequest));
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
        dispatch(updateCurrentResourceRequest({ start_date: date }));
    };

    const handleEndDateChange = date => {
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        dispatch(updateCurrentResourceRequest({ end_date: date }));
    };

    const renderRedirect = () => {
        if (submitted) {
            return <Redirect to='/requests/resource' />;
        }
    };

    return (
        <div>
            {currentRequest ? (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {renderRedirect()}
                    <Typography variant='h6'>Edit Resource Request</Typography>
                    <Tabs
                        value={currentTab}
                        onChange={(_, newValue) => setCurrentTab(newValue)}
                    >
                        <Tab label='Request Details' value='details' />
                        <Tab label='Assignment' value='assignment' />
                        <Tab
                            label='Technical Skills'
                            value='technical-skills'
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
                                        name='manager_name'
                                        value={currentRequest.manager_name}
                                        label='Manager Name'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='function'
                                        value={currentRequest.function}
                                        label='Function'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='title'
                                        value={currentRequest.title}
                                        label='Job Title'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        type='number'
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='requests_count'
                                        value={currentRequest.requests_count}
                                        label='Number of Requests'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <FormControlLabel
                                        className={classes.formField}
                                        control={
                                            <Checkbox
                                                name='replacement'
                                                checked={
                                                    currentRequest.replacement
                                                }
                                                onChange={handleCheckChange}
                                            />
                                        }
                                        label='Replacement'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        disabled={!currentRequest.replacement}
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='replacement_for'
                                        value={
                                            currentRequest.replacement_for || ''
                                        }
                                        label='Replacement For'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        className={classes.formField}
                                        control={
                                            <Checkbox
                                                name='core_team_member'
                                                checked={
                                                    currentRequest.core_team_member
                                                }
                                                onChange={handleCheckChange}
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
                                        name='probability'
                                        value={currentRequest.probability}
                                        label='Probability'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        type='number'
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='percentage'
                                        value={currentRequest.percentage}
                                        label='Percentage'
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <TextField
                                        className={classes.formField}
                                        size='small'
                                        variant='outlined'
                                        name='related_opportunity'
                                        value={
                                            currentRequest.related_opportunity
                                        }
                                        label='Related Opportunity'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <KeyboardDatePicker
                                        variant='inline'
                                        format='dd/MM/yyyy'
                                        margin='normal'
                                        label='Start Date'
                                        name='start_date'
                                        value={
                                            new Date(currentRequest.start_date)
                                        }
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
                                        name='end_date'
                                        value={
                                            new Date(currentRequest.end_date)
                                        }
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
                                        name='comments'
                                        value={currentRequest.comments}
                                        label='Comments'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <FormControl
                                        size='small'
                                        className={classes.formField}
                                    >
                                        <InputLabel id='status-select-label'>
                                            Status
                                        </InputLabel>
                                        <Select
                                            className={classes.selectField}
                                            size='small'
                                            variant='outlined'
                                            name='status'
                                            value={currentRequest.status}
                                            labelId='status-select-label'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value='open'>
                                                Open
                                            </MenuItem>
                                            <MenuItem value='cancelled'>
                                                Cancelled
                                            </MenuItem>
                                            <MenuItem value='on-hold'>
                                                On hold
                                            </MenuItem>
                                            <MenuItem value='moved'>
                                                Moved
                                            </MenuItem>
                                            <MenuItem value='pending-hiring'>
                                                Pending Hiring Request
                                            </MenuItem>
                                            <MenuItem value='hired'>
                                                Hired
                                            </MenuItem>
                                            <MenuItem value='pending-outsourcing'>
                                                Pending Outsourcing Request
                                            </MenuItem>
                                            <MenuItem value='outsourced'>
                                                Outsourced
                                            </MenuItem>
                                            <MenuItem value='over-allocated'>
                                                Over Allocated
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6}>
                                    <FormControl
                                        size='small'
                                        className={classes.formField}
                                    >
                                        <InputLabel id='action-select-label'>
                                            Action Taken
                                        </InputLabel>
                                        <Select
                                            className={classes.selectField}
                                            size='small'
                                            variant='outlined'
                                            name='action_taken'
                                            value={currentRequest.action_taken}
                                            labelId='action-select-label'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value='assigned-from-release'>
                                                Assigned from release list
                                            </MenuItem>
                                            <MenuItem value='added-to-taleo'>
                                                Added to Taleo
                                            </MenuItem>
                                            <MenuItem value='added-to-outsourcing'>
                                                Added to Outsourcing list
                                            </MenuItem>
                                            <MenuItem value='over-allocation'>
                                                Assigned as over allocation
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6}>
                                    <KeyboardDatePicker
                                        variant='inline'
                                        format='dd/MM/yyyy'
                                        margin='normal'
                                        label='Actual Start Date'
                                        name='actual_start_date'
                                        value={
                                            currentRequest.actual_start_date
                                                ? new Date(
                                                      currentRequest.actual_start_date
                                                  )
                                                : new Date(
                                                      currentRequest.start_date
                                                  )
                                        }
                                        onChange={handleStartDateChange}
                                        KeyboardButtonProps={{
                                            name: 'resource_date',
                                            'aria-label': 'choose start date',
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <KeyboardDatePicker
                                        variant='inline'
                                        format='dd/MM/yyyy'
                                        margin='normal'
                                        label='End Date'
                                        name='actual_end_date'
                                        value={
                                            currentRequest.actual_end_date
                                                ? new Date(
                                                      currentRequest.actual_end_date
                                                  )
                                                : new Date(
                                                      currentRequest.end_date
                                                  )
                                        }
                                        onChange={handleEndDateChange}
                                        KeyboardButtonProps={{
                                            name: 'resource_date',
                                            'aria-label': 'choose end date',
                                        }}
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
                                onChange={e =>
                                    setCurrentCategory(e.target.value)
                                }
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
                                                    {row.mandatory
                                                        ? 'yes'
                                                        : 'no'}
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
            ) : (
                'Loading.....'
            )}
            {renderRedirect()}
        </div>
    );
}

export default EditResourceRequest;
