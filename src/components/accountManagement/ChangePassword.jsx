import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { changePassword } from "../../redux/actions/userActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: "center"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10
  },
  customMessage: {
    color: "green",
    fontSize: "0.8rem",
    marginTop: 10
  },
  progress: {
    position: "absolute"
  },
  textField: {
    margin: "10px auto 10px auto"
  }
};

class ChangePassword extends Component {
  state = {
    newPassword: "",
    confirmPassword: "",
    errors: {},
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    } else this.setState({ errors: {} });
    if (nextProps.UI.message) {
      this.setState({ message: nextProps.UI.message });
    } else this.setState({ message: "" });
  }

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword
    };
    //console.log(userData)
    this.props.changePassword(userData, this.props.history);
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;

    const { errors, message } = this.state;

    return (
      <div>
        <Typography variant="h6" className={classes.pageTitle}>
          Change Password
        </Typography>
        <small>Enter your new password</small>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="newPassword"
            name="newPassword"
            type="password"
            label="New Password"
            className={classes.textField}
            helperText={errors.newPassword}
            error={errors.newPassword ? true : false}
            value={this.state.newPassword}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Re-enter your password"
            className={classes.textField}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            fullWidth
          />
          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}
          {message && (
            <Typography variant="body2" className={classes.customMessage}>
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="changeButton"
            className={classes.button}
            disabled={loading}
          >
            Submit
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  changePassword
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ChangePassword));
