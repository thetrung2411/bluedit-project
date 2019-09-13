import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";
import dayjs from "dayjs";

//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Switch from "@material-ui/core/Switch";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import { Typography, Grid, CardMedia } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";

//MUI Icon
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

export default class ReportDialog extends React.Component {
  state = {
    open: false,
    content: null
  };

  componentDidMount() {
    let postId = this.props.report.objectId;

    axiosConfig
      .get(`/post/${postId}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          content: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let content = this.state.content ? (
      <Card>
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          action={
            <Button>
              <DeleteForeverOutlinedIcon />
            </Button>
          }
          title={this.state.content.userPosted}
          titleTypographyProps={{ align: "left" }}
          subheaderTypographyProps={{ align: "left" }}
          subheader={dayjs(this.state.content.createdAt).fromNow()}
        />
        <CardContent>
          <Typography align="justify"> {this.state.content.body}</Typography>
        </CardContent>
      </Card>
    ) : (
      <p>Content not found</p>
    );

    let report = this.props.report ? (
      <div>
        <DialogTitle>{"Manage Report"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <tr>Report ID: {this.props.report.reportId}</tr>
            <tr>Reported Date: {this.props.report.reportedDate}</tr>
            <tr>Type: {this.props.report.type}</tr>
            <tr>Object ID: {this.props.report.reportObject}</tr>
            <tr>Content: {content}</tr>
            <tr>Status: {this.props.report.status}</tr>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <Switch></Switch>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </div>
    ) : (
      <p>404 NOT FOUND</p>
    );
    return (
      <Fragment>
        <Button onClick={this.handleOpen}>
          <VisibilityOutlinedIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth="true"
        >
          <DialogContent>{report}</DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
