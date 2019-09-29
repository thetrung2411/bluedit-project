import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import axiosConfig from "../../axiosConfig";
import { withRouter, Route, Switch } from "react-router-dom";

//Components
import AdsTable from "./AdsTable";

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

  render() {
    let showAds = this.state.ads ? (
      <AdsTable ads={this.state.ads} />
    ) : (
      <CircularProgress />
    );

    return (
      <div>
        <AppBarWithAvatar />
        <h1>Advertisements</h1>
        <p>{showAds}</p>
      </div>
    );
  }
}

export default withRouter(AdsPage);
