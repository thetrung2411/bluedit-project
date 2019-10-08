import React from "react";
import axiosConfig from "../../axiosConfig";

import CircularProgress from "@material-ui/core/CircularProgress";
import CachedIcon from "@material-ui/icons/Cached";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default class AdUi extends React.Component {
  state = {
    open: true,
    ads: null,
    randomAd: null
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    axiosConfig
      .get("/getAllAds")
      .then(response => {
        console.log(response.data);
        this.setState({
          ads: response.data
        });
      })
      .then(() => {
        this.pickAnAd();
      })
      .catch(err => console.log(err));
  }

  pickAnAd = () => {
    const ads = [...this.state.ads];
    console.log(ads);
    const adsLength = ads.length;
    console.log(adsLength);
    const randomAdIndex = Math.floor(Math.random() * adsLength);
    const randomAd = ads[randomAdIndex];
    console.log(randomAd);
    this.setState({
      ...this.state.ads,
      randomAd: randomAd
    });
  };

  render() {
    return (
      <>
        {this.state.randomAd ? (
          this.state.open ? (
            <div
              style={{
                height: 200,
                width: 300,
                backgroundImage: `url(${this.state.randomAd.imageUrl})`,
                backgroundSize: "cover",
                position: "fixed",
                bottom: 0,
                right: 0,
                zIndex: 1000
              }}
            >
              <div
                style={{
                  height: 30,
                  width: 100,
                  position: "fixed",
                  right: 0,
                  zIndex: 1001
                }}
              >
                <Tooltip title="Show another ad" placement="top">
                  <IconButton>
                    <CachedIcon
                      onClick={this.pickAnAd}
                      fontSize="small"
                      color="primary"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Close" placement="top">
                  <IconButton>
                    <CloseIcon
                      fontSize="small"
                      color="primary"
                      onClick={this.handleClose}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a href={this.state.randomAd.link} target="_blank">
                <div
                  style={{
                    height: 170,
                    width: 300,
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    zIndex: 1001
                  }}
                />
              </a>
            </div>
          ) : null
        ) : (
          <div
            style={{
              height: 200,
              width: 300,
              position: "fixed",
              bottom: 0,
              right: 0,
              zIndex: 1000
            }}
          >
            Loading advertisement...
            <br />
            <CircularProgress />
          </div>
        )}
      </>
    );
  }
}
