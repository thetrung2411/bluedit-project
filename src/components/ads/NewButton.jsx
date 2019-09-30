import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";

//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default class NewButton extends React.Component {
  state = {
    open: false,
    ad: {
      name: "",
      link: ""
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    const newAd = { ...this.state.ad };
    newAd[e.target.name] = e.target.value;
    this.setState({
      ad: newAd
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosConfig
      .post("/uploadAd", this.state.ad)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    //TODO: add upload image
    return (
      <Fragment>
        <Button onClick={this.handleOpen}>New</Button>
        <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="md">
          <DialogTitle>{"New Advertisement"}</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              name="name"
              value={this.state.ad.name}
              onChange={this.handleChange}
              margin="normal"
            />
            <br />
            <TextField
              label="Link"
              name="link"
              value={this.state.ad.link}
              onChange={this.handleChange}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancle</Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
