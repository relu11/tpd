import React, { useEffect, useState } from 'react';
import {
    ButtonGroup,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Close';
import { fetchEmployeeTrainings } from './trainingsSlice';
import InfoButton from '../../app/components/InfoButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    actionButton: {
        marginRight: theme.spacing(2),
    },
    dialog: {
        minWidth: 200,
        // textAlign: 'center',
    },
}));

function YourTrainings() {
    const classes = useStyles();

    const [currentTrainingId, setcurrentTrainingId] = useState(null);

    const fetchStatus = useSelector(state => state.trainings.fetchStatus);
    const trainings = useSelector(state => state.trainings.yourTrainings);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchEmployeeTrainings());
        }
    });

    return (
        <div>
            <Typography variant='h6'>Your Trainings</Typography>
            <TableContainer component={Paper}>
                <div className={classes.actions}>
                    <InfoButton
                        size='small'
                        variant='outlined'
                        className={classes.actionButton}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </InfoButton>
                </div>
                <Table aria-label='your trainings table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Training activity name</TableCell>
                            <TableCell>Training Event Name</TableCell>
                            <TableCell>Event From Date</TableCell>
                            <TableCell>Event To Date</TableCell>
                            <TableCell>Total Training Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trainings.map(trainings => (
                            <TableRow key={trainings.employeeId}>
                                <TableCell>
                                    {trainings.trainingActivityName}
                                </TableCell>
                                <TableCell>
                                    {trainings.trainingEventName}
                                </TableCell>
                                <TableCell>{trainings.eventFromDate}</TableCell>
                                <TableCell>{trainings.eventToDate}</TableCell>
                                <TableCell>
                                    {trainings.totalTrainingHours}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default YourTrainings;
