import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "../sidebar/sidebar";
import UserPost from "./../userpost/userPost";
import { withRouter } from 'react-router-dom';


export class subscribedUserpageLayout extends Component {

  render() {
    return (
      <div>
        <Sidebar />
        <AppBarWithAvatar />
        <div>
          <UserPost isother={true} />
        </div>
      </div>
    );
  }
}
export default withRouter(subscribedUserpageLayout)
