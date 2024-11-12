import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';

const columns = [
    { id: 'roomNumber', label: 'Room Number', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 },
];

const createData = (roomNumber, date, status) => ({
    roomNumber,
    date,
    status: <Chip label={status} color={status === 'Booked' ? 'success' : 'info'} />,
    action: <EditIcon />
});

const rows = [
    createData('101', '2023-10-01', 'Booked'),
    createData('102', '2023-10-02', 'Available'),
    createData('103', '2023-10-03', 'Booked'),
    createData('104', '2023-10-04', 'Available'),
    createData('105', '2023-10-05', 'Booked'),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.roomNumber}>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.id === 'action' ? (
                                            <Button variant="contained">{row[column.id]}</Button>
                                        ) : (
                                            row[column.id]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}