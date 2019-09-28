import React, { Component } from "react";
import AppBar from "./search";
import PostItems from "../post/PostItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/actions/postActions';

export class Searching extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {

    const { post, posts } = this.props;
    let postMarkUp = post.length ? (
      post.map(item => <PostItems post={item} />)
    ) : posts.length ? (
      posts.map(item => <PostItems post={item} />)
    ) : <CircularProgress color="inherit" />;
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

const mapStateToProps = state => {
  console.log('state', state)
  return {
    post: state.post.post,
    posts: state.post.posts,
  };
};

const mapActionsToProps = {
  getAllPosts
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePageLayout);