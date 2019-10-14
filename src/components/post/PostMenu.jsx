import Menu from "@material-ui/core/Menu";
<<<<<<< HEAD
import DeleteButton from "./DeleteButton";
import HideButton from "./HideButton";
=======
import MenuItem from "@material-ui/core/MenuItem";
import DeleteButton from "./DeleteButton";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        const {postId , userName, commentId, userPosted, body } = this.props;
        const deleteButton = userPosted === userName ? (
       <DeleteButton commentId={commentId} postId={postId} />
     ) : null;
     const editButton = userPosted === userName ? (
      <EditButton body={body} postId={postId}  commentId={commentId}></EditButton>
    ) : null;
>>>>>>> master
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
<<<<<<< HEAD
       {hideButton}
=======
        <MenuItem  onClick={this.handleClose}><ListItemIcon ><RemoveRedEye/></ListItemIcon><ListItemText primary="Hide" /></MenuItem>
>>>>>>> master
        {editButton}
      </Menu>
            </div>
        )
    }
}

export default PostMenu