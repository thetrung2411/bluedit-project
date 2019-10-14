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
<<<<<<< HEAD
import {hidePost, unhidePost} from '../../redux/actions/postActions';
import {hideComment, unhideComment} from '../../redux/actions/commentActions';
=======
import {deletePost} from '../../redux/actions/postActions';
import {deleteComment} from '../../redux/actions/commentActions';
>>>>>>> master
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
<<<<<<< HEAD
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff';
class HideButton extends Component{
    state = {
        openDialog: false,
      };
=======
import Delete from '@material-ui/icons/Delete';
class DeleteButton extends Component{
    state = {
        openDialog: false,
        body: '',
        errors: {} 
      };

>>>>>>> master
    handleOpen = () => {
      this.setState({openDialog: true});
    }
    handleClose = () => {
<<<<<<< HEAD
      this.setState({openDialog: false})
    }
  handleHide = () => {
      if(this.props.commentId === undefined)
        !this.props.hidden ? this.props.hidePost(this.props.postId) : this.props.unhidePost(this.props.postId)
      else
        !this.props.commentHide ? this.props.hideComment(this.props.postId, this.props.commentId) : this.props.unhideComment(this.props.postId, this.props.commentId) 
      
      this.handleClose();
  }
    render(){
      const {hidden, commentHide} = this.props;
      let visibilityButton;
      let hideItem = <MenuItem  onClick={this.handleOpen}><ListItemIcon ><Visibility/></ListItemIcon><ListItemText primary="Hide" /></MenuItem>;
      let unhideItem = <MenuItem  onClick={this.handleOpen}><ListItemIcon ><VisibilityOff/></ListItemIcon><ListItemText primary="Unhide" /></MenuItem>;
      if(this.props.commentId === undefined)
         visibilityButton = (!hidden) ? hideItem : unhideItem
      else
        visibilityButton = (!commentHide) ? hideItem : unhideItem
      
        return (
            <div>
             {visibilityButton}
=======
        
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
              <ListItemIcon ><Delete/></ListItemIcon> <ListItemText primary="Delete Post" />
          </MenuItem>
>>>>>>> master
          <Dialog
            open={this.state.openDialog}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" align = "center">Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
<<<<<<< HEAD
                Do you want to hide this item?
              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button variant = "contained" color = "secondary" onClick={this.handleHide}>
=======
                Are you sure you want to delete this item?
              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button variant = "contained" color = "secondary" onClick={this.handleDeletePost}>
>>>>>>> master
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

<<<<<<< HEAD
HideButton.propTypes = {
    hideComment: PropTypes.func.isRequired,
    unhideComment: PropTypes.func.isRequired,
    hidePost: PropTypes.func.isRequired,
    unhidePost: PropTypes.func.isRequired,
=======
DeleteButton.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
>>>>>>> master
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    post: state.post.post,
})
  const mapActionToProps ={ 
<<<<<<< HEAD
   hidePost, hideComment, unhideComment, unhidePost
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(HideButton));
=======
   deletePost, deleteComment
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(DeleteButton));
>>>>>>> master
