import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { appBarStyles } from "./appBarStyles";
import withStyles from "@material-ui/core/styles/withStyles";
function HomeAppBar(props) {
  const { classes } = props;
  return (
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
            <Link to = "/searching">
            <Button 
              placeholder="Search…"
            />
            </Link>
          </div>
          <div className={classes.grow}></div>
          <div>
            <Link to="/Login" className={classes.noDecor}>
              <Button id="login" variant="contained" className={classes.button}>
                Login
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(appBarStyles)(HomeAppBar);
