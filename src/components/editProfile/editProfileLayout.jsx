import React, { Component } from "react";
import AppBar from "../appBar/appBar";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import PostItems from "../post/PostItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";
import Sidebar from "../sidebar/sidebar";
import EditProfile from "./editProfile";

export class editProfileLayout extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <AppBarWithAvatar />
        <h1 className = "">User Page</h1>
        <h2 className = "">Edit Profile</h2>
        <EditProfile />
      </div>
    );
  }
}
export default editProfileLayout;