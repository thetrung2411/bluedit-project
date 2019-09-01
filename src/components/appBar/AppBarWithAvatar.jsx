import React from "react";
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
import {appBarStyles} from "./appBarStyles";
import withStyles from "@material-ui/core/styles/withStyles";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }    
}


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
                        <Link to="/Report" className= {classes.noDecor}>
                            <Button variant="contained" className = {classes.button}>Report</Button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/userpage" className= {classes.noDecor}>
                            <Button variant="contained" className = {classes.button}>Userpage</Button>
                        </Link>
                    </div>

                    <div>
                    <Link to="/userpage" className= {classes.noDecor}>
                    <Avatar>R</Avatar>
                    </Link>
                    {/* <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">
                        <div><Avatar>R</Avatar></div>
                        <div><Typography align="right">Username</Typography></div>
                        
                    </button>
                    <div className={classes.button} id="myDropdown" class="dropdown-content">
                        <a href="#Userpage">Userpage</a>
                        <a href="#Bookmark">Bookmark</a>
                        <a href="#Report">Report</a>
                        <a href="#Logout">Logout</a>
                    </div> */}
                    </div>

                    <div>
                    <Link to="/userpage" className= {classes.noDecor}>
                    <Typography align="right">Username</Typography>
                    </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withStyles (appBarStyles)(SignedInAppBar);
