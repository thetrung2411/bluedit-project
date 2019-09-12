import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import SignedInAppBar from "../appBar/AppBarWithAvatar";
import PostItems from "./PostItems";
import RecommendationItem from "../post/Recommendation";
import PostButton from "../post/PostButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { PostLayoutStyles } from "./PostLayoutStyle";
import { getAllPosts } from "../../redux/actions/postActions";
import { Redirect } from "react-router-dom";

export class PostLayout extends Component {
  
  componentDidMount() {
   this.props.getAllPosts();
  }
  
  render() {
    const {posts, loading} = this.props.post;
    const {
      UI,
      user: { authenticated }
    } = this.props;

    if (!authenticated) return <Redirect to="/home"/>
    let postMarkUp = !loading ? (
      posts.map(post => <PostItems post={post} />)
    ) : (
      <CircularProgress color="inherit" />
    );
    return (
      <div>
        <SignedInAppBar />
        <PostButton />
        <Grid container spacing={3}>
          <Grid container xs={8}>
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
PostLayout.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  UI: state.UI, 
  post: state.post,
  user: state.user
})
const mapActionToProps ={ 
  getAllPosts
}

export default connect (mapStateToProps, mapActionToProps)(withStyles(PostLayoutStyles)(PostLayout));
