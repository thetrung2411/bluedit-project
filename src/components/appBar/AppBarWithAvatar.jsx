import React from "react";
import AppBar from "@material-ui/core/AppBar";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {appBarStyles} from "./appBarStyles";
import withStyles from "@material-ui/core/styles/withStyles";

function SignedInAppBar(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Link to = "/">
                    <IconButton classname = {classes.button}>
                        <HomeIcon/>
                    </IconButton>
                    </Link> 
                    <Typography
                        variant="h5"
                    >
                        Bluedit
                    </Typography>
                    <div/>
                    <div className={classes.grow}></div>
                    <div className={classes.search}>
                        <div className = {classes.searchIcon}>
                            <SearchIcon/>
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
                    <Avatar>R</Avatar>
                    </div>
                    <div>
                    <Typography align="right">Username</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withStyles (appBarStyles)(SignedInAppBar);