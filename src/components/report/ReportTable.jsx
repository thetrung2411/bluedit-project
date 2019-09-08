import React from 'react';
import ReportTableHead from '../report/ReportTableHead';
//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';



const ReportTable = (props) => {

    const allReports = props.reports.length ? (
        props.reports.map((report, index) => {
            return (
                <TableBody>
                    <TableRow>
                        <TableCell align="left">{report.id}</TableCell>
                        <TableCell align="left">{report.date}</TableCell>
                        <TableCell align="left">{report.type}</TableCell>
                        <TableCell align="left">{report.objectId}</TableCell>
                        <TableCell align="left">{report.description}</TableCell>
                        <TableCell align="left">{report.status}</TableCell>
                        <TableCell align="left"><Button onClick={() => props.handleDelete(index)}><DeleteForeverOutlinedIcon /></Button></TableCell>
                    </TableRow>
                </TableBody>
            )
        })
    ) : (
            <p className='canter'>No report found at the moment</p>
        )
    return (
        <Table>
            <ReportTableHead reports={props.reports} handleSort={props.handleSort} />
            {allReports}
        </Table>
    )
}

export default ReportTable;