import React, {Component} from "react";
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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
class PostItem extends Component {
  render(){
    dayjs.extend(relativeTime) 
    const {classes, post : {body, createdAt, userPosted}} = this.props;
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
        title = {userPosted}
        titleTypographyProps={{align:"left"}}
        subheaderTypographyProps={{align:"left"}}
        subheader= {dayjs(createdAt).fromNow()}/>
        <CardMedia className ={classes.media} image = {imagePost}/>
        <CardContent>
        <Typography align = "justify"> {body}
        </Typography>
        </CardContent>
        <CardContent><Typography color="secondary" align="left">1,5k upvotes</Typography></CardContent>
        <CardActions > 
        <Fab size="small" className ={classes.fab} ><ThumbUpAltRoundedIcon/></Fab>
        <Fab size="small" className ={classes.fab} ><ThumbDownRoundedIcon/></Fab>
        </CardActions>
        <Grid>
        <CommentItem></CommentItem>
        </Grid>
        </Card>
        </Grid>
    );
}
}
export default withStyles (postItemStyles)(PostItem);
