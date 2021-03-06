import {
    ButtonGroup,
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@material-ui/core';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from './Filters';
import {
    clearAllCurrents,
    deleteReleaseRequest,
    fetchReleaseRequests,
    formatRequest,
    selectReleaseRequestsState,
} from './releaseRequestsSlice';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import InfoButton from '../../app/components/InfoButton';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
    actionButton: {
        marginRight: theme.spacing(2),
    },
}));

function ReleaseRequests() {
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const requests = useSelector(state => state.release.requests);
    const dispatch = useDispatch();
    const fetchState = useSelector(selectReleaseRequestsState);
    const filters = useSelector(state => state.release.filters);

    useEffect(() => {
        if (fetchState === 'idle') dispatch(fetchReleaseRequests());
        dispatch(clearAllCurrents());
    }, [fetchState, dispatch]);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const filterRows = rows =>
        rows.filter(r => {
            let valid = true;
            for (let key in filters) {
                if (
                    filters[key].length > 0 &&
                    !r[key].toLowerCase().includes(filters[key].toLowerCase())
                )
                    valid = false;
            }
            return valid;
        });

    return (
        <div>
            <Typography variant='h6'>Release Requests</Typography>
            <TableContainer component={Paper}>
                <Filters />
                <div className={classes.actions}>
                    <InfoButton
                        size='small'
                        component={Link}
                        to='/requests/release/add'
                        variant='outlined'
                        className={classes.actionButton}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </InfoButton>
                    <InfoButton
                        component='a'
                        href='http://localhost:3000/api/requests/release/export'
                        size='small'
                        variant='outlined'
                        className={classes.actionButton}
                        startIcon={<SendIcon />}
                    >
                        Export
                    </InfoButton>
                </div>
                <Table aria-label='release requests table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ref No.</TableCell>
                            <TableCell>Manager</TableCell>
                            <TableCell>Resource Name</TableCell>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Employee Title</TableCell>
                            <TableCell>Function</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>Release Reason</TableCell>
                            <TableCell>Leaving</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action Taken</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests &&
                            filterRows(requests)
                                .sort(
                                    (a, b) =>
                                        new Date(b.createdAt) -
                                        new Date(a.createdAt)
                                )
                                .map(row => (
                                    <TableRow key={row.reference_number}>
                                        <TableCell component='th' scope='row'>
                                            {row.referenceNumber}
                                        </TableCell>
                                        <TableCell>{row.managerName}</TableCell>
                                        <TableCell>
                                            {row.employeeName}
                                        </TableCell>
                                        <TableCell>{row.employeeId}</TableCell>
                                        <TableCell>
                                            {row.employeeTitle}
                                        </TableCell>
                                        <TableCell>{row.function}</TableCell>
                                        <TableCell>
                                            {new Date(
                                                row.releaseDate
                                            ).toDateString()}
                                        </TableCell>
                                        <TableCell>
                                            {row.releaseReason}
                                        </TableCell>
                                        <TableCell>{row.leaving}</TableCell>
                                        <TableCell>
                                            {row.requestStatus}
                                        </TableCell>
                                        <TableCell>
                                            {row.actionTaken || '-'}
                                        </TableCell>
                                        <TableCell>
                                            <ButtonGroup
                                                size='small'
                                                aria-label='actions button group'
                                            >
                                                <Link
                                                    aria-label='edit'
                                                    component={IconButton}
                                                    to={`/requests/release/${row.referenceNumber}/edit`}
                                                >
                                                    <EditIcon color='primary' />
                                                </Link>
                                                <Link
                                                    aria-label='history'
                                                    component={IconButton}
                                                    to={`/requests/release/${row.referenceNumber}/history`}
                                                >
                                                    <HistoryIcon color='primary' />
                                                </Link>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow></TableRow>
                    </TableFooter>
                </Table>
                <TablePagination
                    colSpan={3}
                    rowsPerPageOptions={[
                        10,
                        20,
                        30,
                        40,
                        50,
                        { value: -1, label: 'All' },
                    ]}
                    component='div'
                    count={requests.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: {
                            'aria-label': 'rows per page',
                        },
                    }}
                    onChange={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </TableContainer>
        </div>
    );
}

export default ReleaseRequests;
