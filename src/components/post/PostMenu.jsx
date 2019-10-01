import Menu from "@material-ui/core/Menu";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import EditButton from "./EditButton";
import AddBookmark from "../bookmark/Addbookmark";

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
        const {postId , userName, commentId, userPosted, body, hidden, commentHide } = this.props;
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
       {hideButton}
       {editButton}
       {deleteButton}
            
      </Menu>
            </div>
        )
    }
}

export default PostMenu
