import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PostLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import EditRounded from '@material-ui/icons/EditRounded';
import {connect} from 'react-redux';
import {post, getAllPosts} from '../../redux/actions/postActions';
import PropTypes from 'prop-types';

export class PostButton extends Component{
  state = {
      open: false,
      body: '',
      errors: {} 
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
    console.log('clicked')

  }
  handleClose = () => {
    // this.props.clearErrors();
    this.setState({open: false})
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.post({body: this.state.body});

  }

  render(){
    const {errors} = this.state;
    const {classes, UI: {loading}} = this.props;
    return (
        <div>
          <Fab color="primary" onClick={this.handleOpen}>
        <EditRounded/>
      </Fab>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
        className = {classes.paper}
      >
        <DialogTitle id="responsive-dialog-title" align = "center">Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit your post please enter the text field below
          </DialogContentText>
                        <form onSubmit ={this.handleSubmit}>
                         <TextField
                         id="outlined-multiline-flexible"
                          label="Post here"
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
                        />
                        </form>
                    </DialogContent>
                    <DialogActions>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={this.handleClose}
                        color = "secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color = "primary"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>
                    
        
        </DialogActions>
      </Dialog>
      
     </div>
    )
}
}
PostButton.propTypes = {
  post: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});
const mapActionToProps = {
  post, getAllPosts
};
export default connect (mapStateToProps, mapActionToProps)(withStyles(PostLayoutStyles)(PostButton));