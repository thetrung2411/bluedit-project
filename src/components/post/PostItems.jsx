import React, { Component } from "react";
<<<<<<< HEAD
import { Typography, Grid} from "@material-ui/core";
=======
import { Typography, Grid, CardMedia } from "@material-ui/core";
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import Fab from "@material-ui/core/Fab";
import { PostItemStyles } from "./PostItemsStyles";
<<<<<<< HEAD
=======
import MoreIcon from "@material-ui/icons/MoreVert";
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostItemDetail from "./PostItemDetail";
import Button from "@material-ui/core/Button";
import PostMenu from "./PostMenu";
export class PostItems extends Component {
<<<<<<< HEAD
    renderSubscribe = () => {
      const { classes, post: { subscribe } } = this.props;
      if (subscribe) {
        return (
          <Button className={classes.unSubscribe} onClick={() => this.handleSubscribe()}>Unsubscribe</Button>
        )
      }
      
      return (
        <Button className={classes.subscribe} onClick={() => this.handleSubscribe()}>Subscribe</Button>
      )
    }
=======
  render() {
    dayjs.extend(relativeTime)
    const { classes, post: { body, createdAt, userPosted, commentCount, upvoteCount, postId } } = this.props;
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586

    handleSubscribe = () => {
      const { post: { postId, subscribe } } = this.props;
      //this.props.postSubscribe({ subscribe, postId })
    }
    
  render() {
    dayjs.extend(relativeTime)
    const { classes, post: {hidden, body, createdAt, userPosted, commentCount, upvoteCount, postId }, post} = this.props;
    const {userName} = this.props;
    if(hidden === true && userName !== userPosted){
      return (null)
    }
    return (
      <Grid className={classes.grid}>
        <Card className={classes.paper}>
          <CardHeader
            avatar={
              <Avatar >
<<<<<<< HEAD
                {String(userPosted).charAt(0)}
                </Avatar>
            }
            action={
              <PostMenu hidden={hidden} body={body} userName ={userName} userPosted={userPosted} postId = {postId} post={post}/>
            }
            title={
              <div>
              {userPosted} 
              {this.renderSubscribe()}
              </div>
            }
=======
                T
                </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreIcon />
              </IconButton>
            }
            title={userPosted}
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
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
<<<<<<< HEAD
            <PostItemDetail hidden={hidden} userName ={userName} post={post} postId={postId} userPosted={userPosted} openDialog={this.props.openDialog}/>
=======
            <PostItemDetail postId={postId} userPosted={userPosted} openDialog={this.props.openDialog}/>
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
<<<<<<< HEAD

=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
export default withStyles(PostItemStyles)(PostItems);
