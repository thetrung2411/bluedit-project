import React, {Component} from "react";
import {Typography, Grid} from "@material-ui/core";
import {Card, CardHeader, CardContent} from "@material-ui/core";
import UpIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import Fab from "@material-ui/core/Fab";
import {CommentItemStyles} from "./CommentItemStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
export class CommentItem extends Component{
    render(){
        const {comments, classes} = this.props;
    return (
        <Grid className = {classes.grid}>
            {comments.map((comment) => {
                const {body, createdAt, userPosted} = comment;
                return (
                      <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 T
                </Avatar>
              }
        action={
          <Fab size="small" className ={classes.fab} ><UpIcon/></Fab>
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
