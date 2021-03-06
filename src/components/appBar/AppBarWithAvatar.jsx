import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  AppBar,
  Avatar
} from "@material-ui/core";
import List from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { appBarStyles } from "./appBarStyles";
import withStyles from "@material-ui/core/styles/withStyles";

///redux
import { connect } from "react-redux";
import { logoutUser, clearMessages } from "../../redux/actions/userActions";

class SignedInAppBar extends Component {
  state = {
    anchorEl: null,
    open: false
  };
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleLogout = () => {
    this.props.logoutUser();
  };

  handleClear = () => {
    this.props.clearMessages();
  };

  render() {
    const {
      classes,
      user: { userDetails }
    } = this.props;
    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Link to="/post" className={classes.noDecor}>
            <MenuItem>Your page</MenuItem>
          </Link>
          <Link to="/bookmark" className={classes.noDecor}>
            <MenuItem>Bookmark</MenuItem>
          </Link>
          <Link to="/userpage" className={classes.noDecor}>
            <MenuItem>Userpage</MenuItem>
          </Link>
          <Link to="/subscriptions" className={classes.noDecor}>
            <MenuItem>Subscriptions</MenuItem>
          </Link>
          <Link to="/accountManagement" className={classes.noDecor}>
            <MenuItem id="menu-accountMan" onClick={this.handleClear}>
              Account
            </MenuItem>
          </Link>
          {userDetails.isAdmin ? (
            <Link to="/Report" className={classes.noDecor}>
              <MenuItem>Manage Report</MenuItem>
            </Link>
          ) : null}
          {userDetails.isAdmin ? (
            <Link to="/Ads" className={classes.noDecor}>
              <MenuItem id="adsBtn">Manage Ads</MenuItem>
            </Link>
          ) : null}
          <Link to="/home" className={classes.noDecor}>
            <MenuItem id="logout" onClick={this.handleLogout}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
        <div>
          <AppBar position="static" className={classes.root}>
            <Toolbar>
              <Link to="/home">
                <IconButton>
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
                <IconButton
                  id="mainMenu"
                  aria-label="settings"
                  onClick={this.handleClick}
                >
                  <List />
                </IconButton>
              </div>

              <div>
                <Avatar className={classes.avatar}>
                  {String(userDetails.userName).charAt(0)}
                </Avatar>
              </div>
              <div>
                <Typography align="right" className={classes.leftSpacing}>
                  {userDetails.userName}
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  logoutUser,
  clearMessages
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
