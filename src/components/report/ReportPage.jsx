import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import axiosConfig from "../../axiosConfig";
import { withRouter, Route, Switch } from "react-router-dom";
import ReportTable from "./ReportTable";
import SearchReport from "../report/SearchReport";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export class ReportPage extends Component {
  state = {
    reports: null,
    searchValue: "",
    isSorted: false
  };

  componentDidMount() {
    axiosConfig
      .get("/getAllReports")
      .then(response => {
        console.log(response.data);
        this.setState({
          reports: response.data
        });
      })
      .catch(err => console.log(err));
  }

  handleDelete = reportId => {
    axiosConfig
      .delete(`/deleteReport/${reportId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    window.location.reload();
  };

  handleSort = sortKey => {
    let reports = this.state.reports.slice();
    reports.sort((a, b) =>
      this.state.isSorted
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey])
    );
    this.setState({
      reports,
      isSorted: !this.state.isSorted
    });
  };

  handleSearch = search => {
    this.setState({
      searchValue: search
    });
  };

  clearSearch = () => {
    this.setState({
      searchValue: ""
    });
  };

  render() {
    let reports = this.state.searchValue
      ? this.state.reports.filter(report => {
          return (
            report.description.includes(this.state.searchValue) ||
            report.reportedAt.includes(this.state.searchValue) ||
            report.reportId.includes(this.state.searchValue) ||
            report.status.includes(this.state.searchValue) ||
            report.objectId.includes(this.state.searchValue) ||
            report.type.includes(this.state.searchValue)
          );
        })
      : this.state.reports;

    let showReports = this.state.reports ? (
      <ReportTable
        reports={reports}
        handleSort={this.handleSort}
        handleDelete={this.handleDelete}
      />
    ) : (
      <CircularProgress />
    );

    return (
      <div>
        <AppBarWithAvatar />
        <div>
          <Container>
            <Paper>
              <h1>Manage Reports</h1>
              <SearchReport
                reports={this.state.reports}
                handleSearch={this.handleSearch}
              />
              {this.state.searchValue ? (
                <Button onClick={this.clearSearch}>Clear</Button>
              ) : null}
              {showReports}
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(ReportPage);
