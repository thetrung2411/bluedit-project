import React from "react";
import axiosConfig from "../../axiosConfig";

import Tooltip from "@material-ui/core/Tooltip";
import CardMedia from "@material-ui/core/CardMedia";

export default class AdImage extends React.Component {
  state = {
    ad: {
      adId: this.props.ad.adId,
      name: this.props.ad.name,
      imageUrl: this.props.ad.imageUrl,
      link: this.props.ad.link,
      uploadAt: this.props.ad.uploadAt
    }
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
        this.setState(
          {
            ad: {
              ...this.state.ad,
              imageUrl: res.data
            }
          },
          () => {
            //change the state in AdsPage
            this.props.handleChangeStateOnUpload(this.state.ad.imageUrl);
            console.log(this.state);
            console.log("changeState has been called");
          }
        );
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

  render() {
    const adImage = this.state.ad.imageUrl;
    console.log(this.state.ad);

    return (
      <div>
        <Tooltip title="Click to change image">
          <CardMedia
            image={adImage}
            style={{ height: 200 }}
            onClick={this.handleChangeImage}
          />
        </Tooltip>
        <input
          type="file"
          id="adImageUpload"
          onChange={event => this.handleImageUpload(event, this.state.ad.adId)}
          hidden
        />
      </div>
    );
  }
}
