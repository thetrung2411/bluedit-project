import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


export class ReportPage extends Component {
    state = {
        report: [
            { id: "R100001", date: "11/08/2019", type: "post", objectId: "P1001", description: "spam", status: "pending" },
            { id: "R100002", date: "12/08/2019", type: "user", objectId: "U1001", description: "abusive", status: "pending" },
            { id: "R100003", date: "13/08/2019", type: "post", objectId: "P1002", description: "sucks", status: "processed" },
            { id: "R100004", date: "14/08/2019", type: "user", objectId: "U1002", description: "illegal", status: "pending" },
            { id: "R100005", date: "15/08/2019", type: "comment", objectId: "C1001", description: "no reason", status: "processed" },
        ],
        searchValue: '',
        isSorted: false,
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    }

    handleDelete = (index) => {
        let tempArr = this.state.report.slice();
        tempArr.splice(index, 1);
        this.setState({
            report: tempArr
        })
    }

    handleSort = (sortKey) => {
        let report = this.state.report.slice();
        report.sort((a, b) => this.state.isSorted ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey]));
        this.setState({
            report,
            isSorted: !this.state.isSorted
        });
    }

    render() {
        let reports = (<div>no reports</div>);
        if (this.state.searchValue === '') {
            reports = this.state.report.map((report, index) => {
                return (
                    <TableRow>
                        <TableCell align="left">{report.id}</TableCell>
                        <TableCell align="left">{report.date}</TableCell>
                        <TableCell align="left">{report.type}</TableCell>
                        <TableCell align="left">{report.objectId}</TableCell>
                        <TableCell align="left">{report.description}</TableCell>
                        <TableCell align="left">{report.status}</TableCell>
                        <TableCell align="left"><Button onClick={() => this.handleDelete(index)}><DeleteForeverOutlinedIcon /></Button></TableCell>
                    </TableRow>
                )
            })
        } else if (this.state.searchValue !== '') {
            reports = this.state.report.map((report, index) => {
                if (report.description.includes(this.state.searchValue) ||
                    report.date.includes(this.state.searchValue) ||
                    report.id.includes(this.state.searchValue) ||
                    report.status.includes(this.state.searchValue) ||
                    report.objectId.includes(this.state.searchValue) ||
                    report.type.includes(this.state.searchValue)) {
                    return (
                        <TableRow>
                            <TableCell align="left">{report.id}</TableCell>
                            <TableCell align="left">{report.date}</TableCell>
                            <TableCell align="left">{report.type}</TableCell>
                            <TableCell align="left">{report.objectId}</TableCell>
                            <TableCell align="left">{report.description}</TableCell>
                            <TableCell align="left">{report.status}</TableCell>
                            <TableCell align="left"><Button onClick={() => this.handleDelete(index)}><DeleteForeverOutlinedIcon /></Button></TableCell>
                        </TableRow>
                    )
                }
            })
        }


        return (
            <div>
                <AppBarWithAvatar />
                <div>
                    <Container mazWidth="sm">
                        <Paper>
                            <h1>Manage Reports</h1>
                            <TextField
                                placeholder="Search…"
                                value={this.state.searchValue}
                                onChange={this.handleChange}
                            />
                            <SearchIcon />
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell onClick={() => this.handleSort("id")}>Report ID</TableCell>
                                        <TableCell onClick={() => this.handleSort("date")}>Date</TableCell>
                                        <TableCell onClick={() => this.handleSort("type")}>Type</TableCell>
                                        <TableCell onClick={() => this.handleSort("objectId")}>Object ID</TableCell>
                                        <TableCell onClick={() => this.handleSort("description")}>Description</TableCell>
                                        <TableCell onClick={() => this.handleSort("status")}>Status</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {reports}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Container>
                </div>
            </div>
        );
    }
}

export default ReportPage;