import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";

//MUI
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import AdImage from "./AdImage";

export default class NewButton extends React.Component {
  state = {
    open: false,
    isSaved: false,
    ad: {
      name: "",
      link: ""
    },
    savedAd: null,
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

  handleChangeStateOnUpload = imageUrl => {
    this.setState({
      savedAd: {
        ...this.state.savedAd,
        imageUrl: imageUrl
      }
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
          this.setState({ savedAd: res.data });
          if (window.confirm("New advertisement created successfully.")) {
            this.setState({ isSaved: true });
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
    let image = this.state.isSaved ? (
      <AdImage
        ad={this.state.savedAd}
        handleChangeStateOnUpload={this.handleChangeStateOnUpload}
      />
    ) : null;
    return (
      <Fragment>
        <Button id="newAdBtn" onClick={this.handleOpen}>
          <EditOutlinedIcon />
          New...
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>{"New Advertisement"}</DialogTitle>
          <Card style={{ width: 300 }}>
            <CardContent>
              <TextField
                id="name"
                label="Name"
                name="name"
                value={this.state.ad.name}
                onChange={this.handleChange}
                disabled={this.state.isSaved}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                id="link"
                label="Link"
                name="link"
                value={this.state.ad.link}
                onChange={this.handleChange}
                disabled={this.state.isSaved}
                margin="normal"
                fullWidth
              />
              {this.state.error ? (
                <FormHelperText error id="errorMsg">
                  Name and link must not be empty
                </FormHelperText>
              ) : null}
            </CardContent>
            {image}
            <CardActions style={{ marginTop: 30 }}>
              <Button onClick={this.handleClose}>Cancle</Button>
              <Button
                id="submitBtn"
                onClick={this.handleSubmit}
                color="secondary"
                disabled={this.state.isSaved}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Dialog>
      </Fragment>
    );
  }
}
