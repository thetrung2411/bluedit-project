import React, { Component } from "react";
import AppBar from "../appBar/appBar";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import PostItems from "../post/PostItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";
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
        {/* <Grid container spacing={3}>
          <Grid item xs={8}>
            {postMarkUp}
          </Grid>
          <Grid item xs={4}>
            <RecommendationItem />
          </Grid>
        </Grid> */}
      </div>
    );
  }
}
export default userpageLauout;