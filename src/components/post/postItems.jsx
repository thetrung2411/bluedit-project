import React from "react";
import {Typography, Grid, CardMedia} from "@material-ui/core";
import {Card, CardHeader, CardContent, CardActions} from "@material-ui/core";

import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';

import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import {postItemStyles} from "./postItemsStyles";
import MoreIcon from "@material-ui/icons/MoreVert";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import imagePost from "../../assets/hehe.png";
import CommentItem from "../comment/CommentItem";
function PostItem (props){
    const { classes } = props;
    function UpVote(){
        console.log("working");
    }
    return (
        <Grid className = {classes.grid}>
        <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                  R
                </Avatar>
              }
        action={
          <IconButton aria-label="settings">
            <MoreIcon/>
          </IconButton>
        }
        titleTypographyProps={{align:"left"}}
        title = "Username"
        subheaderTypographyProps={{align:"left"}}
        subheader="August 14, 2019"/>
        <CardMedia className ={classes.media} image = {imagePost}/>
        <CardContent>
        <Typography align = "justify"> ELI5: Why is there so much unpredictability around bank transfers? Why can't they all be instant?
        Salries, bank transfers, cheque deposits, etc all have a huge window of time for when these transactions will be compete. In an age of automation, how is this possible? Why can't everything be instant?
        </Typography>
        </CardContent>
        <CardContent><Typography color="secondary" align="left">1,5k upvotes</Typography></CardContent>
        <CardActions > 
        <Fab size="small" className ={classes.fab} onClick = {UpVote}><ThumbUpAltRoundedIcon/></Fab>
        <Fab size="small" className ={classes.fab} onClick = {UpVote}><ThumbDownRoundedIcon/></Fab>
        </CardActions>
        <Grid>
        <CommentItem></CommentItem>
        </Grid>
        </Card>
        </Grid>
    );
}
export default withStyles (postItemStyles)(PostItem);
