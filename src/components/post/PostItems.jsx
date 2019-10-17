import React, { Component } from "react";
import { Card, CardHeader, CardContent, CardActions, Typography, Grid, Fab, Avatar, Button } from "@material-ui/core";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import { PostItemStyles } from "./PostItemsStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostItemDetail from "./PostItemDetail";
import PostMenu from "./PostMenu";
import { connect } from "react-redux";
import { setOnSubscribe, getSubscribe, getUnsubscribe } from "./../../redux/actions/subscribeAction";
import SubscribeButton from "./SubscrbeButton";
export class PostItems extends Component {

  render() {
    dayjs.extend(relativeTime)
    const { classes, post: { hidden, body, createdAt, userPosted, commentCount, upvoteCount, postId }, post, user, subscribes} = this.props;
    const { userName } = this.props;
    if (hidden === true && userName !== userPosted) {
      return (null)
    }
    return (
      <Grid className={classes.grid}>
        <Card className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar }>
                {String(userPosted).charAt(0)}
              </Avatar>
            }
            action={
              <PostMenu hidden={hidden} body={body} userName={userName} userPosted={userPosted} postId={postId} post={post}/>
            }
            title={
              <div>
                {userPosted}
                {!post.isMyPost && <SubscribeButton post={post} userDetails={user.userDetails} subscribes={subscribes}/>}
              </div>
            }
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
            <PostItemDetail hidden={hidden} userName={userName} post={post} postId={postId} userPosted={userPosted} openDialog={this.props.openDialog} />
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const posts = state.post.posts
  const subscribes = state.post.subscribes
  const userDetails = state.user.userDetails;

  subscribes.forEach(item => {
    posts.forEach(postItem => {
      if (postItem.userPosted === item.userName) {
        postItem.isSub = true;
      }
    })
  })

  posts.forEach(postItem => {
    if (postItem.userPosted === userDetails.userName) {
      postItem.isMyPost = true;
    }
  })

  return {
    user: state.user
  }
}

const mapActionsToProps = {
  setOnSubscribe,
  getSubscribe,
  getUnsubscribe,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(PostItemStyles)(PostItems));
