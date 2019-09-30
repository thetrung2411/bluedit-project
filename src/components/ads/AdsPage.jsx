import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import axiosConfig from "../../axiosConfig";
import { withRouter, Route, Switch } from "react-router-dom";

//Components
import AdsTable from "./AdsTable";
import NewButton from "./NewButton";

//MUI
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

export class AdsPage extends Component {
  state = {
    ads: null
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
      .catch(err => console.log(err));
  }

  handleDelete = adId => {
    axiosConfig
      .delete(`/deleteAd/${adId}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    let showAds = this.state.ads ? (
      <AdsTable ads={this.state.ads} handleDelete={this.handleDelete} />
    ) : (
      <CircularProgress />
    );

    return (
      <div>
        <AppBarWithAvatar />
        <h1>Advertisements</h1>
        <NewButton />
        {showAds}
      </div>
    );
  }
}

export default withRouter(AdsPage);
