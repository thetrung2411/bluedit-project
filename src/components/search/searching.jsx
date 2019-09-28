import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../appBar/appBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PostItem from "../post/PostItems";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";

class searching extends Component {
    state = {
      post: null
    };
    componentDidMount() {
      axiosConfig
        .get("/getAllPosts")
        .then(res => {
          console.log(res.data);
          this.setState({
            post: res.data
          });
        })
        .catch(err => console.log(err));
    }
    
    render() {
      let postMarkUp = this.state.post ? (
        this.state.post.map(post => <PostItem post={post} />)
      ) : (
        <CircularProgress color="inherit" />
      );
      return (
        <div>
          <AppBar />
          <Grid container spacing={3}>
            
            <Grid>
              {postMarkUp}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
export default searching;