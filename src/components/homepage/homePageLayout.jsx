import React, { Component } from "react";
import AppBar from "../appBar/appBar";
import PostItems from "../post/PostItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";

class HomePageLayout extends Component {
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
      this.state.post.map(post => <PostItems post={post} />)
    ) : (
      <CircularProgress color="inherit" />
    );
    return (
      <div>
        <AppBar />
        <Grid container spacing={3}>
          <Grid item xs={8}>
            {postMarkUp}
          </Grid>
          <Grid item xs={4}>
            <RecommendationItem />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default HomePageLayout;
