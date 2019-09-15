import React, { Component } from "react";
import { Typography, Grid, CardMedia } from "@material-ui/core";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import QuestionAnswerRounded from '@material-ui/icons/QuestionAnswerRounded'
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import { PostItemStyles } from "./PostItemsStyles";
import MoreIcon from "@material-ui/icons/MoreVert";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import imagePost from "../../assets/hehe.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostItemDetail from "./PostItemDetail";
export class PostItems extends Component {
  render() {
    dayjs.extend(relativeTime)
    const { classes, post: { body, createdAt, userPosted, commentCount, upvoteCount, postId } } = this.props;

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
              <IconButton aria-label="settings">
                <MoreIcon />
              </IconButton>
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

            <PostItemDetail postId={postId} userPosted={userPosted} />
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
export default withStyles(PostItemStyles)(PostItems);
