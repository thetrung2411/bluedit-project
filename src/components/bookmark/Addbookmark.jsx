import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axiosConfig from "../../axiosConfig";

export class Addbookmark extends Component {
  state = {
    open: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.handleClose();
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    // this.props.clearErrors();
    this.setState({ open: false });
  };

  handleSubmit = event => {
    console.log(new Date().toISOString());
    console.log(this.props.postId);
    console.log(this.props.userPosted);
    axiosConfig
      .post("/bookmark")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    this.setState({ open: false });
    alert("A new Bookmark was created");
  };

  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
      user: { userDetails }
    } = this.props;
    return (
      <div>
        <Fab color="primary" onClick={this.handleOpen}>
          <BookmarkBorderIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" align="center">
            Bookmark this
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to add this post in your bookmark?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={this.handleClose}
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
Addbookmark.propTypes = {
  bookmark: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
  user: state.user
});

export default connect(mapStateToProps)(Addbookmark);
