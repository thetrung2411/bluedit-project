import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { appBarStyles } from "./appBarStyles";
import withStyles from "@material-ui/core/styles/withStyles";

///redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

class SignedInAppBar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const {
      classes,
      user: { userDetails }
    } = this.props;

    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Link to="/">
              <IconButton classname={classes.button}>
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h5">Bluedit</Typography>
            <div />
            <div className={classes.grow}></div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow}></div>
            <div>
              <Link to="/home" className={classes.noDecor}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </Link>

              <Link to="/Report" className={classes.noDecor}>
                <Button variant="contained" className={classes.button}>
                  Report
                </Button>
              </Link>
            </div>

            <div>
              <Avatar>R</Avatar>
            </div>
            <div>
              <Typography align="right">{userDetails.userName}</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapActionToProps = {
  logoutUser
};

const mapStateToProps = state => ({
  user: state.user
});

SignedInAppBar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(appBarStyles)(SignedInAppBar));
