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
import {hidePost} from '../../redux/actions/postActions';
import {deleteComment} from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff';
class HideButton extends Component{
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
    handleHidePost = () => {
        // if(this.props.commentId === undefined){
        this.props.hidePost(this.props.postId)
        // }
        // else
        // {
        // this.props.deleteComment(this.props.postId, this.props.commentId)
        // }
        this.handleClose();
    }
    render(){
      const {classes, hidden} = this.props;
      
        let hideItem = !hidden ? <MenuItem  onClick={this.handleOpen}><ListItemIcon ><Visibility/></ListItemIcon><ListItemText primary="Hide" /></MenuItem> : 
        <MenuItem  onClick={this.handleOpen}><ListItemIcon ><VisibilityOff/></ListItemIcon><ListItemText primary="Unhide" /></MenuItem>
      
        return (
            <div>
             {hideItem}
          <Dialog
            open={this.state.openDialog}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" align = "center">Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you want to hide this item?{this.props.postId}
              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button variant = "contained" color = "secondary" onClick={this.handleHidePost}>
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
    deleteComment: PropTypes.func.isRequired,
    hidePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    post: state.post.post,
})
  const mapActionToProps ={ 
   hidePost, deleteComment
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(HideButton));