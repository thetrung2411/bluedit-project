import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";
//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Switch from "@material-ui/core/Switch";

export default class ReportDialog extends React.Component {
  state = {
    open: false,
    report: null
  };

  componentDidMount() {
    let reportId = this.props.report.reportId;
    console.log(`id: ${reportId}`);
    axiosConfig
      .get(`/getReport/${reportId}`)
      .then(res => {
        console.log(res.data);
        this.setState({ report: res.data });
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
    let report = this.state.report ? (
      <div>
        <DialogTitle>{"Manage Report"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <tr>Report ID: {this.state.report.reportId}</tr>
            <tr>Reported Date: {this.state.report.reportedDate}</tr>
            <tr>Type: {this.state.report.type}</tr>
            <tr>Object ID: {this.state.report.reportObject}</tr>
            <tr>Status: {this.state.report.status}</tr>
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

/*export default function ReportDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <VisibilityOutlinedIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Manage Report"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            test.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}*/
