import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "../appBar/appBar";
import PostItems from "../post/PostItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
import CircularProgress from "@material-ui/core/CircularProgress";
import axiosConfig from "../../axiosConfig";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class HomePageLayout extends Component {
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
    const {
      user: { authenticated }
    } = this.props;
<<<<<<< HEAD

    if (authenticated) return <Redirect to="/post"/>

    let postMarkUp = this.state.post ? (
      this.state.post.map(post => <PostItems post={post} key={post.postId}/>)
=======

    if (authenticated) return <Redirect to="/post"/>

    let postMarkUp = this.state.post ? (
      this.state.post.map(post => <PostItems post={post} />)
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
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

HomePageLayout.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomePageLayout);
