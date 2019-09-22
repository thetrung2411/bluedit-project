import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteButton from "./DeleteButton";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
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
        const {postId , userName, commentId, userPosted, body } = this.props;
        const deleteButton = userPosted === userName ? (
       <DeleteButton commentId={commentId} postId={postId} />
     ) : null;
     const editButton = userPosted === userName ? (
      <EditButton body={body} postId={postId} ></EditButton>
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
        <MenuItem  onClick={this.handleClose}><ListItemIcon ><RemoveRedEye/></ListItemIcon><ListItemText primary="Hide" /></MenuItem>
        {editButton}
      </Menu>
            </div>
        )
    }
}

export default PostMenu