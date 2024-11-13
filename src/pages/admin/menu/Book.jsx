import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const createData = (roomNumber, checkInDate, checkOutDate, status) => ({
    roomNumber,
    checkInDate,
    checkOutDate,
    status: <Chip label={status} color={status === 'Booked' ? 'success' : status === 'Available' ? 'info' : 'error'} />,
    action: <Button variant="contained"><EditIcon /></Button>
});

const columns = [
    { width: 100, label: 'Room No', dataKey: 'roomNumber' },
    { width: 150, label: 'Check-in Date', dataKey: 'checkInDate' },
    { width: 150, label: 'Check-out Date', dataKey: 'checkOutDate' },
    { width: 100, label: 'Status', dataKey: 'status' },
    { width: 100, label: 'Action', dataKey: 'action' },
];

const rows = [
    createData('101', '2023-10-01', '2023-10-05', 'Booked'),
    createData('102', '2023-10-02', '2023-10-06', 'Available'),
    createData('103', '2023-10-03', '2023-10-07', 'Booked'),
    createData('104', '2023-10-04', '2023-10-08', 'Available'),
    createData('105', '2023-10-05', '2023-10-09', 'Booked'),
    createData('106', '2023-10-06', '2023-10-10', 'Repair'),
];

const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align="left"
                    style={{ width: column.width, fontWeight: 'bold' }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index, row) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align="left"
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function ReactVirtualizedTable() {
    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}