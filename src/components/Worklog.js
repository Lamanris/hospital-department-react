import React from 'react';
import {useParams} from 'react-router-dom'
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
        '&': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    tableContainer: {
        boxShadow: "none",
        maxWidth: 700,
        maxHeight: 500,
        margin: "auto",
        outline: "hidden"
    }
});

export default function Worklog () {
    const classes = useStyles();
    const params = useParams()

    const employees = useSelector(state => state.employees)
    const worklog = useSelector(state => state.worklog)


    const doctor = [...employees].filter(el => el.id === +params.employeeId)[0]


    const sortedWorklog = [...worklog].sort((a, b) => a.from > b.from ? 1 : -1)
    const permissionFilter = ind => (sortedWorklog.slice(0, ind).filter(el => el.to > sortedWorklog[ind].from)).length
        for (let i = 3; i < sortedWorklog.length; i++) {
            if (permissionFilter(i) > 2) {
                sortedWorklog[i] = {...sortedWorklog[i], violation: true}
            }
    }
    const doctorWorklog = [...sortedWorklog].filter(el => el.employee_id === +params.employeeId)


    return (
        <>
            {
                doctor ? ( <h2 className="doctor-name">{`${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`}</h2>
                    ) : (
                        <h2 className="doctor-name">Loading name...</h2>
                    )
            }

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>From</StyledTableCell>
                            <StyledTableCell>To</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctorWorklog.map((log) => (
                            <StyledTableRow key={log.id} style={log.violation && {backgroundColor: "#ff3d3d"}}>
                                <StyledTableCell>{log.from}</StyledTableCell>
                                <StyledTableCell>{log.to}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                {!doctorWorklog.length && <h2 className="loading">Loading...</h2>}
            </TableContainer>
        </>

    )
}