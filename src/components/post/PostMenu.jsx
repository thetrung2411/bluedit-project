import Menu from "@material-ui/core/Menu";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import EditButton from "./EditButton";
import AddBookmark from "../bookmark/Addbookmark";
import MenuItem from "@material-ui/core/MenuItem";
import { setOnSubscribe, getSubscribe, getUnsubscribe } from "./../../redux/actions/subscribeAction";
import SubscribeButton from "./SubscrbeButton";
import { PostItemStyles } from "./PostItemsStyles";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
class PostMenu extends Component {
    state = {
        anchorEl: null,
        open: false
      }
      handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget})
      }
      handleClose = () =>{
        this.setState({open: false})
      }
    render(){
        const {postId , userName, commentId, userPosted, body, hidden, commentHide, post, user, subscribes} = this.props;
        const deleteButton = userPosted === userName ? (
       <DeleteButton commentId={commentId} postId={postId} />
     ) : null;
       const editButton = userPosted === userName ? (
      <EditButton body={body} postId={postId}  commentId={commentId}></EditButton>
    ) : null;
       const hideButton = userPosted === userName ? (
      <HideButton commentHide={commentHide} hidden={hidden} postId = {postId} commentId={commentId}/>
    ) : null;
        return(
            <div>
        <IconButton id='postMenu' aria-label="settings" onClick={this.handleClick}>
            <MoreIcon />
        </IconButton>
        <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
                         <AddBookmark
                  postId={postId}
                  userPosted={userPosted}
                ></AddBookmark>
       {!post.isMyPost && <SubscribeButton post={post} userDetails={user.userDetails} subscribes={subscribes} />}
       {hideButton}
       {editButton}
       {deleteButton}
            
      </Menu>
            </div>
        )
    }
}

const mapStateToProps = state => {
  const posts = state.post.posts
  const subscribes = state.post.subscribes
  const userDetails = state.user.userDetails;

  subscribes.forEach(item => {
    posts.forEach(postItem => {
      if (postItem.userPosted === item.userName) {
        postItem.isSub = true;
      }
    })
  })

  posts.forEach(postItem => {
    if (postItem.userPosted === userDetails.userName) {
      postItem.isMyPost = true;
    }
  })

  return {
    user: state.user
  }
}

const mapActionsToProps = {
  setOnSubscribe,
  getSubscribe,
  getUnsubscribe,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(PostItemStyles)(PostMenu));
