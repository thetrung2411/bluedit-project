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
import Button from "@material-ui/core/Button";
import PostMenu from "./PostMenu";
import PropTypes from 'prop-types'
export class PostItems extends Component {
  
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

    handleSubscribe = () => {
      const { post: { postId, subscribe } } = this.props;
      //this.props.postSubscribe({ subscribe, postId })
    }

  render() {
    dayjs.extend(relativeTime)
    const { classes, post: {hidden, body, createdAt, userPosted, commentCount, upvoteCount, postId }, post} = this.props;
    const {userName} = this.props;
    if(hidden === true && userName !== userPosted){
      return (<br></br>)
    }
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
              <PostMenu hidden={hidden} body={body} userName ={userName} userPosted={userPosted} postId = {postId} post={post}/>
            }
            title={
              <div>
              {userPosted} 
              {this.renderSubscribe()}
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
