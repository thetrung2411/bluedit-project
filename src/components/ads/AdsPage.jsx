import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";

import { withRouter, Route, Switch } from "react-router-dom";

export class AdsPage extends Component {
  render() {
    return (
      <div>
        <AppBarWithAvatar />
        <h1>Advertisements</h1>
      </div>
    );
  }
}

export default withRouter(AdsPage);
