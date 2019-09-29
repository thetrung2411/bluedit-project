import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Switch from "@material-ui/core/Switch";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";
//MUI Icon
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
//import AlertDialog from "./AlertDialog";

export default class ReportDialog extends React.Component {
  state = {
    open: false,
    content: null
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  //TODO: modify to setDisplay
  setProcessed = () => {
    axiosConfig
      .post(`/changeStatus/${this.props.ad.adId}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    window.location.reload();
  };

  render() {
    dayjs.extend(relativeTime);

    //Show single advertisement in detailed
    let ad = this.props.ad ? (
      <div>
        <DialogTitle>{"Manage Advertisement"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <tr>Advertisement ID: {this.props.ad.adId}</tr>
            <tr>Name: {this.props.ad.name}</tr>
            <tr>Uploaded At: {this.props.ad.uploadAt}</tr>
            <tr>Image: {this.props.ad.imageUrl}</tr>
            <tr>Link: {this.props.ad.link}</tr>
            <tr>Displaying: {this.props.ad.isShowing.toString()}</tr>
          </DialogContentText>
          <FormControlLabel
            //TODO: change to setDisplay
            control={
              this.props.ad.isShowing === "processed" ? (
                <Switch checked={true} disabled={true} />
              ) : (
                <Switch onChange={this.setProcessed} />
              )
            }
            label="Set as processed"
            labelPlacement="end"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Back
          </Button>
        </DialogActions>
      </div>
    ) : (
      <p>AD NOT FOUND</p>
    );

    return (
      <Fragment>
        <Button onClick={this.handleOpen}>
          <VisibilityOutlinedIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="md">
          <DialogContent>{ad}</DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
