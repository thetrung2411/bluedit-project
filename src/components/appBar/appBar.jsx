import React, { useState } from "react";
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
import axiosConfig from "../../axiosConfig";
import { connect } from 'react-redux';
import { SearchPost } from "../../redux/actions/postActions";



export class HomeAppBar extends React.Component {
    state = {
        value: "",
        name: "",
    };

    inputchange1 = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    inputchange2 = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    searchHand = () => {
        const { value, name } = this.state;
        this.props.SearchPost('' + value, '' + name);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.root} >
                    <Toolbar>
                        <Link to="/">
                            <IconButton classname={classes.button}>
                                <HomeIcon />
                            </IconButton>
                        </Link>
                        <Typography
                            variant="h5"
                        >
                            Bluedit
                    </Typography>
                        <div />
                        <div className={classes.grow}></div>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="name Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                onChange={(e) => this.inputchange1(e)}
                            />
                            <InputBase
                                placeholder="body Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                onChange={(e) => this.inputchange2(e)}
                            />
                            <Button variant="contained" onClick={() => this.searchHand()}>
                                Search
                        </Button>
                        </div>
                        <div className={classes.grow}></div>
                        <div>
                            <Link to="/Login" className={classes.noDecor}>
                                <Button variant="contained" className={classes.button}>
                                    Login
                        </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


const mapStateToProps = state => ({

});

const mapActionsToProps = {
    SearchPost
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(appBarStyles)(HomeAppBar));

