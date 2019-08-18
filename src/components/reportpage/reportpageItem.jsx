import React, { Component } from "react";
import AppBar from "../appBar/appBar";
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



export class Report extends Component {
    state = {
        report: [
            {id: "R100001", type: "post", description: "spam"},
            {id: "R100002", type: "user", description: "abusive"},
            {id: "R100003", type: "post", description: "sucks"},
            {id: "R100004", type: "user", description: "illegal"},
            {id: "R100005", type: "comment", description: "no reason"},
        ],
        searchValue: '',
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

    render() {
        let reports = (<div>no reports</div>);
        if (this.state.searchValue === '') {
            reports = this.state.report.map((report, index) => {
                return (
                    <div>
                        <Container maxWidth="sm">
                            <Paper>
                                <Table>
                                    <TableRow>
                                        <TableCell align="left">{report.id}</TableCell>
                                        <TableCell align="left">{report.type}</TableCell>
                                        <TableCell align="left">{report.description}</TableCell>
                                        <TableCell align="left"><Button onClick={() => this.handleDelete(index)}>Remove</Button></TableCell>
                                    </TableRow>
                                </Table> 
                            </Paper>
                        </Container>
                        
                        
                        
                    </div>
                )
            })
        } else if (this.state.searchValue !== '') {
            reports = this.state.report.map((report, index) => {
                if (report.description.includes(this.state.searchValue)) {
                    return (
                        <Container maxWidth="sm">
                            <Paper>
                                <Table>
                                    <TableRow>
                                        <TableCell align="left">{report.id}</TableCell>
                                        <TableCell align="left">{report.type}</TableCell>
                                        <TableCell align="left">{report.description}</TableCell>
                                        <TableCell align="left"><Button onClick={() => this.handleDelete(index)}>Remove</Button></TableCell>
                                    </TableRow>
                                </Table> 
                            </Paper>
                        </Container>
                    )
                }
            })
        }
            

        return(
            <div>
                <AppBar />
                <div>
                    <h1>Manage Reports</h1>
                    <TextField
                        placeholder="Search by description…"
                        value={this.state.searchValue}
                        onChange={this.handleChange}
                    />
                    <SearchIcon />
                </div>
                {reports}
            </div>
        );
    }
}

export default Report;