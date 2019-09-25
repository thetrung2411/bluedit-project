import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import List from "@material-ui/icons/List";
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
import { logoutUser, clearMessages } from "../../redux/actions/userActions";

class SignedInAppBar extends Component {
  state = {
    anchorEl: null,
    open: false
  }
  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget})
  }
  handleClose = () =>{
    this.setState({open: false})
  }
  handleLogout = () => {
    this.props.logoutUser();
  };

  handleClear = () =>{
    this.props.clearMessages();
  }

  render() {
    const {
      classes,
      user: { userDetails }
    } = this.props;
      return(
          <div>
      {/* <IconButton aria-label="settings" onClick={this.handleClick}>
          <List/>
      </IconButton>
      <Menu
      id="simple-menu"
      anchorEl={this.state.anchorEl}
      open={this.state.open}
      onClose={this.handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
    </Menu> */}
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Link to="/">
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
              {userDetails.isAdmin ? (
                <Link to="/Report" className={classes.noDecor}>
                  <Button variant="contained" className={classes.button}>
                    Report
                  </Button>
                </Link>
              ) : null}

              <Link to="/bookmark" className={classes.noDecor}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleLogout}
                >
                  Bookmark
                </Button>
              </Link>
              
              <Link to="/userpage" className={classes.noDecor}>
                <Button variant="contained" className={classes.button}>
                  Userpage
                </Button>
              </Link>

              <Link to="/subscriptions" className={classes.noDecor}>
                <Button variant="contained" className={classes.button}>
                  Subscriptions
                </Button>
              </Link>
              
              <Link to="/accountManagement" className={classes.noDecor}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleClear}
                >
                  Account
                </Button>
              </Link>
              <Link to="/home" className={classes.noDecor}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.handleLogout}
                >
                  Logout
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
