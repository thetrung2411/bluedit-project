import Menu from "@material-ui/core/Menu";
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import EditButton from "./EditButton";
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
        const {postId , userName, commentId, userPosted, body, hidden } = this.props;
        const deleteButton = userPosted === userName ? (
       <DeleteButton commentId={commentId} postId={postId} />
     ) : null;
     const editButton = userPosted === userName ? (
      <EditButton body={body} postId={postId}  commentId={commentId}></EditButton>
    ) : null;
        return(
            <div>
        <IconButton aria-label="settings" onClick={this.handleClick}>
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
        {deleteButton}
        <HideButton hidden={hidden} postId = {postId}/>
        {editButton}
      </Menu>
            </div>
        )
    }
}

export default PostMenu