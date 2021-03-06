import React, {Component} from 'react';
import {PostLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from 'react-redux';
import {editPost} from '../../redux/actions/postActions';
import {editComment} from '../../redux/actions/commentActions';
import PropTypes from 'prop-types';
import Create from '@material-ui/icons/Create';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, MenuItem, ListItemIcon, ListItemText, TextField} from '@material-ui/core';
class EditButton extends Component{
    state = {
        open: false,
        body: this.props.body,
        errors: {},
        disabled: false
      };
    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
          this.setState({
            errors: nextProps.UI.errors
          });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading){
          this.setState({body: ''});
          this.handleClose();
        }
      }
    handleOpen = () => {
      this.setState({open: true});
    }
    handleClose = () => {
      this.setState({open: false})
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, function(){
          if(this.state.body.trim() === '' ){
            this.setState({disabled: true})
          }
          else
          {
          this.setState({disabled: false})
        }
        })
    }
      handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.commentId === undefined){
        this.props.editPost(this.props.postId, {body: this.state.body});
       }
        else {
         this.props.editComment(this.props.postId, this.props.commentId, {body: this.state.body})
        }
        
    }
    render(){
      const {errors} = this.state;
      const {classes} = this.props;
      return (
            <div>
              <MenuItem  classes={{ selected: classes.menuItemDelete }} onClick={this.handleOpen} >
              <ListItemIcon id='editButton'><Create/></ListItemIcon> <ListItemText primary="Edit" />
          </MenuItem>
          <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
        className = {classes.paper}
      >
        <DialogTitle id="responsive-dialog-title" align = "center">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit your post/comment please change the text field below 
          </DialogContentText>
                        <form onSubmit ={this.handleSubmit}>
                         <TextField
                          id="editTextField"
                          label="Edit post here"
                          multiline
                          rows = "7"
                          rowsMax="1000"
                          margin="none"
                          variant="outlined"
                          className = {classes.text}
                          helperText ={errors.body}
                          error = {errors.body ? true : false}
                          name = "body"
                          onChange = {this.handleChange}
                          value = {this.state.body}
                        />
                        </form>
                    </DialogContent>
                    <DialogActions>
                    <Button
                        id="cancelEdit"
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={this.handleClose}
                        color = "secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        id="submitEdit"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color = "primary"
                        onClick={this.handleSubmit}
                        disabled = {this.state.disabled}
                    >
                        Submit
                    </Button>
        </DialogActions>
      </Dialog>
      
         </div>
        )
    }    
}

EditButton.propTypes = {
    editComment: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    post: state.post.post,
})
  const mapActionToProps ={ 
   editPost, editComment
  }
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(PostLayoutStyles)(EditButton));