import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PostItems from "./../post/PostItems";
import SubscribedUserTable from "./SubscribedUserTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getAllPosts, postSubscribe } from "../../redux/actions/postActions";
import { getSubscribe } from "./../../redux/actions/subscribeAction";
import { Redirect } from "react-router-dom";


export class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isother: false,
      name: ''
    };
  }

  componentDidMount() {
    var name = this.GetQueryString('name')
    if (name) {
        this.setState({
            isother: true,
            name: name,
        });
    }
    this.props.getAllPosts();
    this.props.getSubscribe();
  }

  GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

  render() {
    const { posts, loading } = this.props.post;
    const { isother, name } = this.state;
    const {
      user: { authenticated }
    } = this.props;


    const myPost = posts.filter(item => item.userPosted === this.props.user.userDetails.userName)
    const mySubscribeUser = this.props.post.subscribes.filter(item => item.subscriber === this.props.user.userDetails.userName)
    const mySubscribedPost = []
    mySubscribeUser.forEach(item => {
      posts.forEach(postItem => {
        if (postItem.userPosted === item.userName) {
          mySubscribedPost.push(postItem)
        }
      })
    })

    const otherUserpost = posts.filter(item => item.userPosted === name)

    const allPost = !name ? myPost.concat(mySubscribedPost) : otherUserpost;

    if (!authenticated) return <Redirect to="/home" />
    let post = !loading ? (
      allPost.length ?
      allPost.map(post => <PostItems key={post.postId} subscribes={this.props.subscribes}
          postSubscribe={this.props.postSubscribe} post={post} />) :
        <div style={{ width: '70%', textAlign: 'left', position: "absolute", top: "200px", left: "300px",}}>
          No Posts
        </div>
    ) : (
        <CircularProgress color="inherit" />
      );

    return (
      <div>
        <Grid container spacing={3}>
          <Grid container xs={8}>
            <div style={{ width: '70%', textAlign: 'left', margin: '0 auto' }}>
              {post}
            </div>
          </Grid>
          <Grid item xs={4}>
            <SubscribedUserTable />
          </Grid>
        </Grid>
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
