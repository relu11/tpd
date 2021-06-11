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
import { fetchAllSkills, postRemoveSkill } from './skillsSlice';
import InfoButton from '../../app/components/InfoButton';
import AddEmployeeSkill from './AddEmployeeSkill';
import EditEmployeeSkill from './EditEmployeeSkill';
import EditSkill from './EditSkill';

const useStyles = makeStyles(theme => ({
    actionButton: {
        marginRight: theme.spacing(2),
    },
    dialog: {
        minWidth: 200,
    },
}));

function SkillList() {
    const classes = useStyles();

    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [currentSkillId, setcurrentSkillId] = useState(null);

    const fetchStatus = useSelector(state => state.skills.fetchAllStatus);
    const skills = useSelector(state => state.skills.allSkills);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchAllSkills());
            setAddDialogOpen(false);
            setEditDialogOpen(false);
        }
    });

    const handleDeleteClick = skillId => {
        dispatch(postRemoveSkill(skillId));
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
                <EditSkill skillId={currentSkillId} />
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
            <Typography variant='h6'>Skill List</Typography>
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
                <Table aria-label='skills table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Skill Name</TableCell>

                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skills &&
                            skills.map(skill => (
                                <TableRow key={skill.skillId}>
                                    <TableCell>{skill.skillName}</TableCell>

                                    <TableCell>
                                        <ButtonGroup
                                            size='small'
                                            aria-label='actions button group'
                                        >
                                            <IconButton
                                                aria-label='edit'
                                                onClick={() =>
                                                    handleEditClick(
                                                        skill.skillId
                                                    )
                                                }
                                            >
                                                <EditIcon color='primary' />
                                            </IconButton>
                                            <IconButton
                                                aria-label='delete'
                                                onClick={() =>
                                                    handleDeleteClick(
                                                        skill.skillId
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

export default SkillList;
