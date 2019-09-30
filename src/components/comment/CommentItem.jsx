import React, {Component} from "react";
import {Typography, Grid, Avatar} from "@material-ui/core";
import {Card, CardHeader, CardContent} from "@material-ui/core";
import {CommentItemStyles} from "./CommentItemStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import PostMenu from '../post/PostMenu';
export class CommentItem extends Component{
    render(){
        const {comments, classes, postId, post, userName} = this.props;
    return (
        <Grid className = {classes.grid}>
            {comments.map((comment) => {
                const {body, createdAt, userPosted, commentId, hidden} = comment;
                if(hidden === true && userPosted !== userName)
                {return null}
                return (
                      <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar className ={classes.avatar}>
                {String(userPosted).charAt(0)}
                </Avatar>
              }
        action={
            <PostMenu commentHide={hidden} body={body} commentId ={commentId} userName ={userName} userPosted={userPosted} postId = {postId} post={post}/>
        }
        titleTypographyProps={{align:"left"}}
        title = {userPosted}
        subheaderTypographyProps={{align:"left"}}
        subheader={dayjs(createdAt).fromNow()}/>
        <CardContent>
        <Typography align = "justify"> {body}
        </Typography>
        </CardContent>
        </Card>
        )})}
        </Grid>
    );
}    
}

CommentItem.propTypes = {
    comments: PropTypes.array.isRequired
};

export default withStyles (CommentItemStyles)(CommentItem);