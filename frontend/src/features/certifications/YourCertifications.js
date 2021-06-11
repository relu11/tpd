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
import {
    fetchEmployeeCertifications,
    postRemoveEmployeeCertification,
} from './certificationsSlice';
import InfoButton from '../../app/components/InfoButton';
import { Link } from 'react-router-dom';
import AddEmployeeCertification from './AddEmployeeCertification';
import EditEmployeeCertification from './EditEmployeeCertification';

const useStyles = makeStyles(theme => ({
    actionButton: {
        marginRight: theme.spacing(2),
    },
    dialog: {
        minWidth: 200,
    },
}));

function YourCertifications() {
    const classes = useStyles();

    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [currentCertificationId, setcurrentCertificationId] = useState(null);

    const fetchStatus = useSelector(state => state.certifications.fetchStatus);
    const certifications = useSelector(
        state => state.certifications.yourCertifications
    );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(fetchStatus);
        if (fetchStatus === 'idle') {
            dispatch(fetchEmployeeCertifications());
            setAddDialogOpen(false);
            setEditDialogOpen(false);
        }
    });

    const handleDeleteClick = certificationId => {
        dispatch(postRemoveEmployeeCertification(certificationId));
    };

    const renderAddDialog = () => (
        <Dialog
            open={addDialogOpen}
            onClose={() => setAddDialogOpen(false)}
            aria-labelledby='Add Certification Dialog'
        >
            <DialogTitle>Add Certification</DialogTitle>
            <DialogContent className={classes.dialog}>
                <AddEmployeeCertification />
            </DialogContent>
        </Dialog>
    );

    const renderEditDialog = () => (
        <Dialog
            open={editDialogOpen}
            onClose={() => setEditDialogOpen(false)}
            aria-labelledby='Edit Certification Dialog'
        >
            <DialogTitle>Edit Certification</DialogTitle>
            <DialogContent className={classes.dialog}>
                <EditEmployeeCertification
                    certificationId={currentCertificationId}
                />
            </DialogContent>
        </Dialog>
    );

    const handleEditClick = certificationId => {
        setcurrentCertificationId(certificationId);
        setEditDialogOpen(true);
    };

    return (
        <div>
            {renderAddDialog()}
            {renderEditDialog()}
            <Typography variant='h6'>Your certifications</Typography>
            <TableContainer component={Paper}>
                <div className={classes.actions}>
                    <InfoButton
                        size='small'
                        variant='outlined'
                        onClick={() => setAddDialogOpen(true)}
                        className={classes.actionButton}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </InfoButton>
                </div>
                <Table aria-label='your certifications table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Certification Name</TableCell>
                            <TableCell>Expiration Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {certifications &&
                            certifications.map(certification => (
                                <TableRow key={certification.certificationId}>
                                    <TableCell>
                                        {
                                            certification.Certification
                                                .certificationName
                                        }
                                    </TableCell>
                                    <TableCell>
                                        {certification.expirationDate}
                                    </TableCell>
                                    <TableCell>
                                        <ButtonGroup
                                            size='small'
                                            aria-label='actions button group'
                                        >
                                            <IconButton
                                                aria-label='edit'
                                                onClick={() =>
                                                    handleEditClick(
                                                        certification.certificationId
                                                    )
                                                }
                                            >
                                                <EditIcon color='primary' />
                                            </IconButton>
                                            <IconButton
                                                aria-label='delete'
                                                onClick={() =>
                                                    handleDeleteClick(
                                                        certification.certificationId
                                                    )
                                                }
                                            >
                                                <RemoveIcon color='secondary' />
                                            </IconButton>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default YourCertifications;
