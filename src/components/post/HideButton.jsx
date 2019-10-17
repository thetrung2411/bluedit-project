import React, {Component} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, MenuItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {PostLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from 'react-redux';
import {hidePost, unhidePost} from '../../redux/actions/postActions';
import {hideComment, unhideComment} from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff';
class HideButton extends Component{
    state = {
        openDialog: false,
      };
    handleOpen = () => {
      this.setState({openDialog: true});
    }
    handleClose = () => {
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
      let hideItem = <MenuItem id="hideButton" onClick={this.handleOpen}><ListItemIcon ><Visibility/></ListItemIcon><ListItemText primary="Hide" /></MenuItem>;
      let unhideItem = <MenuItem id="hideButton" onClick={this.handleOpen}><ListItemIcon ><VisibilityOff/></ListItemIcon><ListItemText primary="Unhide" /></MenuItem>;
      if(this.props.commentId === undefined)
         visibilityButton = (!hidden) ? hideItem : unhideItem
      else
        visibilityButton = (!commentHide) ? hideItem : unhideItem
        return (
            <div>
             {visibilityButton}
          <Dialog
            open={this.state.openDialog}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" align = "center">Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you want to hide this item?
              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button id="submitHide" variant = "contained" color = "secondary" onClick={this.handleHide}>
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

HideButton.propTypes = {
    hideComment: PropTypes.func.isRequired,
    unhideComment: PropTypes.func.isRequired,
    hidePost: PropTypes.func.isRequired,
    unhidePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    post: state.post.post,
})
  const mapActionToProps ={ 
   hidePost, hideComment, unhideComment, unhidePost
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(HideButton));
