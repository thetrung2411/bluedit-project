import React, { Component } from "react";
import { Typography, Grid, CardMedia } from "@material-ui/core";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import Fab from "@material-ui/core/Fab";
import { PostItemStyles } from "./PostItemsStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostItemDetail from "./PostItemDetail";
import PostMenu from "./PostMenu";
import PropTypes from 'prop-types'
export class PostItems extends Component {

  render() {
    dayjs.extend(relativeTime)
    const { classes, post: { body, createdAt, userPosted, commentCount, upvoteCount, postId }, post} = this.props;
    const {userName} = this.props;
    return (
      <Grid className={classes.grid}>
       
        <Card className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar >
                T
                </Avatar>
            }
            action={
              <PostMenu body={body} userName ={userName} userPosted={userPosted} postId = {postId} post={post}/>
            }
            title={userPosted}
            titleTypographyProps={{ align: "left" }}
            subheaderTypographyProps={{ align: "left" }}
            subheader={dayjs(createdAt).fromNow()} />
          <CardContent>
            <Typography align="justify"> {body}
            </Typography>
          </CardContent>
          <CardActions >
            <Typography>{upvoteCount}</Typography>
            <Fab size="small" className={classes.fab} ><ThumbUpAltRoundedIcon /></Fab>
            <Fab size="small" className={classes.fab} ><ThumbDownRoundedIcon /></Fab>
            <Typography>{commentCount} comments</Typography>
            <PostItemDetail userName ={userName} post={post} postId={postId} userPosted={userPosted} openDialog={this.props.openDialog}/>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
PostItemDetail.propTypes = {
  postId: PropTypes.string.isRequired,
  userPosted: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
}
export default withStyles(PostItemStyles)(PostItems);
