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
import { fetchEmployeeSkills, postRemoveEmployeeSkill } from './skillsSlice';
import InfoButton from '../../app/components/InfoButton';
import { Link } from 'react-router-dom';
import AddEmployeeSkill from './AddEmployeeSkill';
import EditEmployeeSkill from './EditEmployeeSkill';

const useStyles = makeStyles(theme => ({
    actionButton: {
        marginRight: theme.spacing(2),
    },
    dialog: {
        minWidth: 200,
        // textAlign: 'center',
    },
}));

function YourSkills() {
    const classes = useStyles();

    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [currentSkillId, setcurrentSkillId] = useState(null);

    const fetchStatus = useSelector(state => state.skills.fetchEmployeeStatus);
    const skills = useSelector(state => state.skills.yourSkills);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchEmployeeSkills());
            setAddDialogOpen(false);
            setEditDialogOpen(false);
        }
    });

    const handleDeleteClick = skillId => {
        dispatch(postRemoveEmployeeSkill(skillId));
    };

    const renderAddDialog = () => (
        <Dialog
            open={addDialogOpen}
            onClose={() => setAddDialogOpen(false)}
            aria-labelledby='Add Skill Dialog'
        >
            <DialogTitle>Add Skill</DialogTitle>
            <DialogContent className={classes.dialog}>
                <AddEmployeeSkill />
            </DialogContent>
        </Dialog>
    );

    const renderEditDialog = () => (
        <Dialog
            open={editDialogOpen}
            onClose={() => setEditDialogOpen(false)}
            aria-labelledby='Edit Skill Dialog'
        >
            <DialogTitle>Edit Skill</DialogTitle>
            <DialogContent className={classes.dialog}>
                <EditEmployeeSkill skillId={currentSkillId} />
            </DialogContent>
        </Dialog>
    );

    const handleEditClick = skillId => {
        setcurrentSkillId(skillId);
        setEditDialogOpen(true);
    };

    return (
        <div>
            {renderAddDialog()}
            {renderEditDialog()}
            <Typography variant='h6'>Your skills</Typography>
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
                <Table aria-label='your skills table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Skill Name</TableCell>
                            <TableCell>Experience Level</TableCell>
                            <TableCell>Last Used</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skills.map(skill => (
                            <TableRow key={skill.skillId}>
                                <TableCell>{skill.Skill.skillName}</TableCell>
                                <TableCell>{skill.experienceLevel}</TableCell>
                                <TableCell>{skill.lastUsedDate}</TableCell>
                                <TableCell>
                                    <ButtonGroup
                                        size='small'
                                        aria-label='actions button group'
                                    >
                                        <IconButton
                                            aria-label='edit'
                                            onClick={() =>
                                                handleEditClick(skill.skillId)
                                            }
                                        >
                                            <EditIcon color='primary' />
                                        </IconButton>
                                        <IconButton
                                            aria-label='delete'
                                            onClick={() =>
                                                handleDeleteClick(skill.skillId)
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

export default YourSkills;
