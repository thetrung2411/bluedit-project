import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PostLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {deletePost} from '../../redux/actions/postActions';
import {deleteComment} from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    handleDeletePost = () => {
        if(this.props.commentId === undefined){
        this.props.deletePost(this.props.postId);
        }
        else
        {
        this.props.deleteComment(this.props.postId, this.props.commentId)
        }
        this.handleClose();
    }
    render(){
      const {classes} = this.props;
      return (
            <div>
              <MenuItem selected classes={{ selected: classes.menuItemDelete }} onClick={this.handleOpen} >
              <ListItemIcon ><Delete/></ListItemIcon> <ListItemText primary="Delete" />
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
                        <Button variant = "contained" color = "secondary" onClick={this.handleDeletePost}>
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