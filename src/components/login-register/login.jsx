import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

//Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

//MUI import
import Grid from "@material-ui/core/Grid";
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
  image: {
    margin: "20px auto 20px auto"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
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
  progress: {
    position: "absolute"
  },
  link: {
    color: "white"
  }
};

export class login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const {
      user: { authenticated },
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;

    if (authenticated) return <Redirect to="/post"/>

    return (
    
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h3" className={classes.pageTitle}>
            Bluedit
          </Typography>
          <br />
          <small>Enter your account credentials</small>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              id ="login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <br />
            <Typography variant="subtitle2">
              Don't have an account? Sign up{" "}
              <Link to="/register" className={classes.link}>
                here
              </Link>
            </Typography>
            <br />
            <Typography variant="subtitle2">
              Or go back to{" "}
              <Link to="/" className={classes.link}>
                Bluedit
              </Link>
            </Typography>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
 
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
