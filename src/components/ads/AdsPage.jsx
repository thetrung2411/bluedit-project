import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import axiosConfig from "../../axiosConfig";
import { withRouter, Route, Switch } from "react-router-dom";

//Components
import AdsTable from "./AdsTable";
import NewButton from "./NewButton";

//MUI
import CircularProgress from "@material-ui/core/CircularProgress";

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

  handleChangeStateOnEdit = ad => {
    const newAds = [...this.state.ads];
    const oldAd = newAds.filter(newAd => newAd.adId === ad.adId);
    const index = newAds.indexOf(oldAd[0]);
    newAds[index] = ad;
    this.setState({ ads: newAds });
  };

  handleChangeStateOnCreate = ad => {
    const newAds = [...this.state.ads];
    newAds.push(ad);
    console.log(newAds);
    this.setState({ ads: newAds });
  };

  handleDelete = ad => {
    axiosConfig
      .delete(`/deleteAd/${ad.adId}`)
      .then(res => {
        console.log(res.data);
        const newAds = [...this.state.ads];
        const index = newAds.indexOf(ad);
        newAds.splice(index, 1);
        this.setState({
          ads: newAds
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    let showAds = this.state.ads ? (
      <AdsTable
        ads={this.state.ads}
        handleDelete={this.handleDelete}
        handleChangeStateOnEdit={this.handleChangeStateOnEdit}
      />
    ) : (
      <CircularProgress />
    );

    return (
      <div>
        <AppBarWithAvatar />
        <h1>Advertisements</h1>
        <NewButton handleChangeStateOnCreate={this.handleChangeStateOnCreate} />
        {showAds}
      </div>
    );
  }
}

export default withRouter(AdsPage);
