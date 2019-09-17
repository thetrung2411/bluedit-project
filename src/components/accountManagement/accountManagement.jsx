import React, { Component } from "react";
import SignedInAppBar from "../appBar/AppBarWithAvatar";
import ChangePassword from "./ChangePassword"

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
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(accountManagement);
