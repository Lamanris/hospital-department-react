import React from 'react';
import {Link} from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#4eb0d4",
        color: theme.palette.common.white,
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    tableContainer: {
        boxShadow: "none",
        maxWidth: 700,
        maxHeight: 600,
        margin: "auto",
        outline: "hidden"
}
});

export default function Dashboard() {
    const classes = useStyles();
    const employees = useSelector(state => state.employees)

    const filteredList = [...employees].sort((a,b) => a.lastName > b.lastName ? 1 : -1)
    const dateChanger = date => date.split('-').reverse().join('-')
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>ФИО</StyledTableCell>
                        <StyledTableCell>Дата рождения</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredList.map((doctor) => (
                        <StyledTableRow key={doctor.id}>
                            <StyledTableCell>{doctor.id}</StyledTableCell>
                            <StyledTableCell><Link to={`/worklog/${doctor.id}`}>{`${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`}</Link></StyledTableCell>
                            <StyledTableCell>{dateChanger(doctor.birthDate)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {!filteredList.length && <h2 className="loading">Loading...</h2>}
        </TableContainer>
    )
}