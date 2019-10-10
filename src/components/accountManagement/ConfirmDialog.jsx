import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";


import { disableAccount } from "../../redux/actions/userActions";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  button: {
    marginTop: 20,
    position: "relative"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  disableButton: {
    position: "center"
  },
  progress: {
    position: "absolute"
  }
};

class ConfirmDialog extends Component {
  state = {
    statement: "",
    disabled: true,
    open: false,
    userName: ""
  };

  handleDisable = () => {
    this.props.disableAccount(this.props.history);
    this.handleClose();
  }

  handleOpen = () => {
    this.setState({ open: true, userName: this.props.userName });
  };

  handleClose = () => {
    this.setState({ 
        statement: "",
        disabled: true,
        open: false,
        userName: ""
    });
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        if (this.state.statement.toLowerCase() === this.state.userName.toLowerCase()) {
          this.setState({ disabled: false });
        } else this.setState({ disabled: true });
      }
    );
  };

  render() {
    const { classes, user: {userDetails}, UI: {loading} } = this.props;

    return (
      <Fragment>
        <Button
          id="open-confirm-dialog"
          variant="contained"
          className={classes.button}
          color="secondary"
          onClick={this.handleOpen}
          disabled={loading}
        >
          I understand and wish to continue
          {loading && (
            <CircularProgress size={30} className={classes.progress} />
          )}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Disabling your account</DialogTitle>
          <DialogContent>
            Reminder: Disabling account will not delete all of your existing posts. If you wish to delete all of your posts, please do it manually or contact site admin.
            <br/>In order to make sure that you want to disable your account, please
            type your username &quot;{userDetails.userName}&quot; below:
            <form>
              <TextField
                id="confirm-statement"
                name="statement"
                type="text"
                label={userDetails.userName}
                placeholder="Please type your username here"
                className={classes.textField}
                value={this.state.statement}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              id="disable-account"
              variant="contained"
              className={classes.disableButton}
              color="secondary"
              disabled={this.state.disabled}
              onClick={this.handleDisable}
            >
              Disable Account
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

ConfirmDialog.propTypes = {
    user: PropTypes.object.isRequired,
    disableAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

const mapActionToProps = {
    disableAccount
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(ConfirmDialog));
