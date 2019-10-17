import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "../sidebar/sidebar";
import Userpage from "./userpage";

export class userpageLauout extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <AppBarWithAvatar />
        <h1 className = "">User Page</h1>
        <h2 className = "">Edit Profile</h2>
        <Userpage />
      </div>
    );
  }
}
export default userpageLauout;