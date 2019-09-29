import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// import PostItems from "./PostItems";
import PostItems from "./../post/PostItems";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getAllPosts, postSubscribe } from "../../redux/actions/postActions";
import { getSubscribe } from "./../../redux/actions/subscribeAction";
import { Redirect } from "react-router-dom";
import dayjs from "dayjs";

export class UserPost extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getSubscribe();
  }

  render() {
    const { posts, loading } = this.props.post;
    const {
      user: { authenticated }
    } = this.props;


    const mypost = posts.filter(item => item.userPosted == this.props.user.userDetails.userName)
    const mysubuser = this.props.post.subscribes.filter(item => item.subscriber == this.props.user.userDetails.userName)
    const mysubs = []
    mysubuser.forEach(item => {
      posts.forEach(pitem => {
        if (pitem.userPosted == item.userName) {
          mysubs.push(pitem)
        }
      })
    })

    const allpost = mypost.concat(mysubs)



    if (!authenticated) return <Redirect to="/home" />
    let postMarkUp = !loading ? (
      allpost.map(post => <PostItems key={post.postId} subscribes={this.props.subscribes}
        postSubscribe={this.props.postSubscribe} post={post} />)
    ) : (
        <CircularProgress color="inherit" />
      );
    return (
      <div>
        <div style={{ width: '70%', textAlign: 'left', margin: '0 auto' }}>
          <Grid container spacing={3}>
            <Grid container xs={8}>
              {postMarkUp}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
UserPost.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  postSubscribe: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    UI: state.UI,
    post: state.post,
    subscribes: state.post.subscribes,
    user: state.user
  }
}
const mapActionToProps = {
  getAllPosts,
  postSubscribe,
  getSubscribe
}

export default connect(mapStateToProps, mapActionToProps)(withStyles()(UserPost));
