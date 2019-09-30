import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "../sidebar/sidebar";
import UserPost from "./userPost";
import PostLayout from "./../post/PostLayout";
import { Route, BrowserRouter, Switch, Redirect, Link } from 'react-router-dom';



export class userpostLauout extends Component {


  render() {

    return (
      <div>
        <Sidebar />
        <AppBarWithAvatar />
        {/* <Link to="/userpage" style={{position:'absolute','left':'10px',top:'70px'}}> userpage</Link> */}
        <UserPost />

      </div>
    );
  }
}


export default userpostLauout