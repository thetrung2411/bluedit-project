import React, { Component } from "react";
import PropTypes from "prop-types";
import SignedInAppBar from "../appBar/AppBarWithAvatar";
import ChangePassword from "./ChangePassword"
<<<<<<< HEAD
import DisableAccount from "./DisableAccount"
=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: "center"
  },
  pageTitle: {
    margin: "10px auto 30px auto"
  }
};

class accountManagement extends Component {
  render() {
    const { classes } = this.props;

    //if (!authenticated) return <Redirect to="/login"/>

    return (
      <div>
        <SignedInAppBar />
        <Grid container>
          <Grid item sm />
          <Grid item sm>
            <Typography variant="h3" className={classes.pageTitle}>
              Account Management
            </Typography>
            <ChangePassword/>
<<<<<<< HEAD
            <br/>
            <DisableAccount history={this.props.history}/>
=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(accountManagement);
