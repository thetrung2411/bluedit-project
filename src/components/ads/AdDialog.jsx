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

//MUI Icon
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControl } from "@material-ui/core";
//import AlertDialog from "./AlertDialog";

//TODO: Reformat ad dialog as a card with image on the left and the rest of info on the right
//TODO: Add upload image when creating new Ad
//TODO: Add image loading when waiting for res
//TODO: Load image seperately

export default class AdDialog extends React.Component {
  state = {
    open: false,
    ad: this.props.ad
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

  handleSubmit = (e, adId) => {
    e.preventDefault();
    axiosConfig
      .post(`/editAd/${adId}`, this.state.ad)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  handleImageUpload = (event, adId) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    console.log(formData);
    axiosConfig
      .post(`/adImage/${adId}`, formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const adImage = this.props.ad.imageUrl;
    //Show single advertisement in detailed
    let ad = this.props.ad ? (
      <FormControl>
        <DialogTitle>{"Manage Advertisement"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>ID: {this.props.ad.adId}</span>
            <br />
            <span>Uploaded At: {this.props.ad.uploadAt}</span>
          </DialogContentText>
          <TextField
            label="Name"
            name="name"
            value={this.state.ad.name}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            label="Link"
            name="link"
            value={this.state.ad.link}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
          <img src={adImage} height="200" align="center" />
          <br />
          <input
            type="file"
            id="adImageUpload"
            onChange={event =>
              this.handleImageUpload(event, this.state.ad.adId)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Back</Button>
          <Button
            onClick={e => this.handleSubmit(e, this.state.ad.adId)}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </FormControl>
    ) : (
      <DialogContentText>AD NOT FOUND</DialogContentText>
    );

    return (
      <Fragment>
        <Button onClick={this.handleOpen}>
          <EditOutlinedIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="md">
          {ad}
        </Dialog>
      </Fragment>
    );
  }
}
