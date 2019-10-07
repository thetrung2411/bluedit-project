import React, { Fragment } from "react";
import axiosConfig from "../../axiosConfig";
import dayjs from "dayjs";

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

//MUI Icon
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { FormControl } from "@material-ui/core";
//import AlertDialog from "./AlertDialog";

//TODO: Add upload image when creating new Ad

export default class AdDialog extends React.Component {
  state = {
    open: false,
    ad: {
      adId: this.props.ad.adId,
      name: this.props.ad.name,
      imageUrl: this.props.ad.imageUrl,
      link: this.props.ad.link,
      uploadAt: this.props.ad.uploadAt
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

  handleSubmit = (e, adId) => {
    e.preventDefault();
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
  };

  handleImageUpload = (event, adId) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    console.log(formData);
    axiosConfig
      .post(`/adImage/${adId}`, formData)
      .then(res => {
        console.log(res);
        this.setState({
          ad: {
            ...this.state.ad,
            imageUrl: res.data
          }
        });
        window.confirm("Image uploaded successfully");
        console.log(this.state.ad);
      })
      .catch(err => {
        window.confirm("Oops! Something went wrong. Upload failed.");
        console.log(err);
      });
  };

  handleChangeImage = () => {
    const fileInput = document.getElementById("adImageUpload");
    fileInput.click();
  };
  //<CardMedia image={adImage} style={{ height: 200 }} title="Ad Image" />
  render() {
    const adImage = this.state.ad.imageUrl;
    //Show single advertisement in detailed
    let ad = this.state.ad ? (
      <FormControl>
        <Card style={{ width: 345 }}>
          <Tooltip title="Click to change image">
            <CardMedia
              image={adImage}
              style={{ height: 200 }}
              onClick={this.handleChangeImage}
            />
          </Tooltip>
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
                label="Link"
                name="link"
                value={this.state.ad.link}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
              />
            </Typography>
            <Typography>
              <input
                type="file"
                id="adImageUpload"
                onChange={event =>
                  this.handleImageUpload(event, this.state.ad.adId)
                }
                hidden
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.handleClose}>Back</Button>
            <Button
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
          <Button onClick={this.handleOpen}>
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
