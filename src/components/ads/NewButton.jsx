import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";

//MUI
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

export default class NewButton extends React.Component {
  state = {
    open: false,
    ad: {
      name: "",
      link: ""
    },
    error: false
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
      ad: newAd,
      error: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //check if inputs are empty. If not, send post request
    if (this.state.ad.name !== "" && this.state.ad.link !== "") {
      axiosConfig
        .post("/uploadAd", this.state.ad)
        .then(res => {
          console.log(res);
          if (window.confirm("New advertisement created successfully.")) {
            this.handleClose();
            this.props.handleChangeStateOnCreate(res.data);
          }
        })
        .catch(err => console.log(err));
    } else {
      //if name of link is empty, show error
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Button id="newAdBtn" onClick={this.handleOpen}>
          <EditOutlinedIcon />
          New...
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="md">
          <DialogTitle>{"New Advertisement"}</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Name"
              name="name"
              value={this.state.ad.name}
              onChange={this.handleChange}
              margin="normal"
            />
            <br />
            <TextField
              id="link"
              label="Link"
              name="link"
              value={this.state.ad.link}
              onChange={this.handleChange}
              margin="normal"
            />
            {this.state.error ? (
              <FormHelperText error id="errorMsg">
                Name and link must not be empty
              </FormHelperText>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancle</Button>
            <Button
              id="submitBtn"
              onClick={this.handleSubmit}
              color="secondary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
