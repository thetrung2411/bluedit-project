import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axiosConfig from '../../axiosConfig';
import { withRouter, Route, Switch } from 'react-router-dom';
import ReportTable from './ReportTable';
import SearchReport from '../report/SearchReport';
import Button from '@material-ui/core/Button';


export class ReportPage extends Component {
    state = {
        reports: [
            { id: "R100001", date: "11/08/2019", type: "post", objectId: "P1001", description: "spam", status: "pending" },
            { id: "R100002", date: "12/08/2019", type: "user", objectId: "U1001", description: "abusive", status: "pending" },
            { id: "R100003", date: "13/08/2019", type: "post", objectId: "P1002", description: "sucks", status: "processed" },
            { id: "R100004", date: "14/08/2019", type: "user", objectId: "U1002", description: "illegal", status: "pending" },
            { id: "R100005", date: "15/08/2019", type: "comment", objectId: "C1001", description: "no reason", status: "processed" },
        ],
        showReports: [],
        searchValue: '',
        isSorted: false
    };

    componentDidMount() {
        axiosConfig
            .get("/getAllReports")
            .then(response => {
                console.log(response);
                this.setState({
                    reports: response.data,
                });
            })
            .catch(err => console.log(err));
    }

    handleDelete = (index) => {
        let tempArr = this.state.reports.slice();
        tempArr.splice(index, 1);
        this.setState({
            reports: tempArr
        })
    }

    handleSort = (sortKey) => {
        let reports = this.state.reports.slice();
        reports.sort((a, b) => this.state.isSorted ? a[sortKey].localeCompare(b[sortKey]) : b[sortKey].localeCompare(a[sortKey]));
        this.setState({
            reports,
            isSorted: !this.state.isSorted
        });
    }

    handleSearch = (search) => {
        this.setState({
            searchValue: search,
        })
    }

    clearSearch = () => {
        this.setState({
            searchValue: ''
        })
    }

    continueHandler = () => {
        this.props.history.push('/report/reportss');
    }

    render() {

        let reports = ((this.state.searchValue) ? (
            this.state.reports.filter(report => {
                return (
                    report.description.includes(this.state.searchValue) ||
                    report.date.includes(this.state.searchValue) ||
                    report.id.includes(this.state.searchValue) ||
                    report.status.includes(this.state.searchValue) ||
                    report.objectId.includes(this.state.searchValue) ||
                    report.type.includes(this.state.searchValue)
                );
            })
        ) : (
                this.state.reports
            ))

        return (
            <div>
                <AppBarWithAvatar />
                <div>
                    <Container>
                        <Paper>
                            <h1>Manage Reports</h1>
                            <SearchReport reports={this.state.reports} handleSearch={this.handleSearch} />
                            {this.state.searchValue ? (<Button onClick={this.clearSearch}>Clear</Button>) : (null)}
                            <ReportTable reports={reports} handleSort={this.handleSort} handleDelete={this.handleDelete} />
                        </Paper>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withRouter(ReportPage);