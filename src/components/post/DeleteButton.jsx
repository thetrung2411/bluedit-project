import React, {Component} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, MenuItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {PostLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from 'react-redux';
import {deletePost} from '../../redux/actions/postActions';
import {deleteComment} from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
class DeleteButton extends Component{
    state = {
        openDialog: false,
        body: '',
        errors: {} 
      };
    handleOpen = () => {
      this.setState({openDialog: true});
    }
    handleClose = () => {
      this.setState({openDialog: false})
    }
    handleDelete = () => {
        if(this.props.commentId === undefined)
        this.props.deletePost(this.props.postId); 
        else
        this.props.deleteComment(this.props.postId, this.props.commentId)
        
        this.handleClose();
    }
    render(){
      return (
            <div>
              <MenuItem onMouseEnter={(e) => e.target.style.backgroundColor = '#f22f0c'}  
              onMouseLeave={(e) => e.target.style.backgroundColor = "inherit"}
              onClick={this.handleOpen} >
              <ListItemIcon id='deleteButton'><Delete/></ListItemIcon> <ListItemText primary="Delete" />
          </MenuItem>
          <Dialog
            open={this.state.openDialog}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" align = "center">Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this item?
              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button id='submitDelete' variant = "contained" color = "secondary" onClick={this.handleDelete}>
                           Yes
                        </Button>
                        <Button type="submit" variant="contained" color = "primary" onClick={this.handleClose}>
                            Hang On
                        </Button>
            </DialogActions>
          </Dialog>
         </div>
        )
    }    
}

DeleteButton.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    post: state.post.post,
})
  const mapActionToProps ={ 
   deletePost, deleteComment
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(DeleteButton));