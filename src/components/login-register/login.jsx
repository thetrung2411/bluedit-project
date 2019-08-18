import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

//MUI import
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    textAlign: "center"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10
  },
  link: {
    color:'white'
  }
};

class login extends Component {
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

  handleSubmit = e => {};

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

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
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Link to ="/post">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
            </Link>
            <br />
            <Typography variant="subtitle2">
              Don't have an account? Sign up <Link to="/register" className={classes.link}>here</Link>
            </Typography>
            <br />
            <Typography variant="subtitle2">
              Or go back to <Link to="/" className={classes.link}>Bluedit</Link>
            </Typography>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
