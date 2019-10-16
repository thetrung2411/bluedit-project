import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";
import dayjs from "dayjs";
import AdImage from "./AdImage";

//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Tooltip from "@material-ui/core/Tooltip";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import FormHelperText from "@material-ui/core/FormHelperText";

//MUI Icon
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControl } from "@material-ui/core";

export default class AdDialog extends React.Component {
  state = {
    open: false,
    ad: {
      adId: this.props.ad.adId,
      name: this.props.ad.name,
      imageUrl: this.props.ad.imageUrl,
      link: this.props.ad.link,
      uploadAt: this.props.ad.uploadAt
    },
    error: false
  };

  handleOpen = () => {
    this.setState({ open: true, error: false });
  };
  handleClose = () => {
    this.setState({ open: false, error: false });
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
      ad: {
        ...this.state.ad,
        imageUrl: imageUrl
      }
    });
  };

  handleSubmit = (e, adId) => {
    e.preventDefault();
    //Check if name or link is empty, if not, send post request
    if (this.state.ad.name !== "" && this.state.ad.link !== "") {
      axiosConfig
        .post(`/editAd/${adId}`, this.state.ad)
        .then(res => {
          console.log(res.data);
          this.setState(
            {
              ad: {
                ...this.state.ad,
                name: res.data.name,
                link: res.data.link
              }
            },
            () => {
              //change the state in AdsPage
              this.props.handleChangeStateOnEdit(this.state.ad);
            }
          );
          if (window.confirm("Edited successfully")) {
            this.handleClose();
          }
        })
        .catch(err => {
          window.confirm("Oops! Something went wrong. Edit failed.");
          console.log(err);
        });
    } else {
      //if name or link is empty, show error
      this.setState({
        error: true
      });
    }
  };

  render() {
    //Show single advertisement in detailed
    let ad = this.state.ad ? (
      <FormControl>
        <Card style={{ width: 345 }}>
          <AdImage
            ad={this.state.ad}
            handleChangeStateOnUpload={this.handleChangeStateOnUpload}
          />
          <CardContent>
            <Typography component="div">
              <TextField
                label="ID"
                value={this.state.ad.adId}
                margin="normal"
                fullWidth
                disabled
              />
            </Typography>
            <Typography component="div">
              <TextField
                label="Uploaded Date"
                value={dayjs(this.state.ad.uploadAt).format("DD-MM-YYYY")}
                margin="normal"
                fullWidth
                disabled
              />
            </Typography>
            <Typography component="div">
              <TextField
                id="name"
                label="Name"
                name="name"
                value={this.state.ad.name}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
              />
            </Typography>
            <Typography component="div">
              <TextField
                id="link"
                label="Link"
                name="link"
                value={this.state.ad.link}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
              />
            </Typography>
            {this.state.error ? (
              <FormHelperText error id="errorMsg">
                Name and link must not be empty
              </FormHelperText>
            ) : null}
          </CardContent>
          <CardActions>
            <Button onClick={this.handleClose}>Back</Button>
            <Button
              id="submitBtn"
              onClick={e => this.handleSubmit(e, this.state.ad.adId)}
              color="secondary"
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </FormControl>
    ) : (
      <DialogContentText>AD NOT FOUND</DialogContentText>
    );

    return (
      <Fragment>
        <Tooltip title="Edit" placement="top">
          <Button id={`${this.state.ad.name}EditBtn`} onClick={this.handleOpen}>
            <EditOutlinedIcon />
          </Button>
        </Tooltip>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          {ad}
        </Dialog>
      </Fragment>
    );
  }
}
