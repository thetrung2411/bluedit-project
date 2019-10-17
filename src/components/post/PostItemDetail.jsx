import React, {Component, Fragment} from 'react';
import CommentField from "../comment/CommentField";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import CommentItem from '../comment/CommentItem';
import {connect} from 'react-redux';
import {getPost} from '../../redux/actions/postActions';
import { PostItemStyles } from './PostItemsStyles';
import QuestionAnswerRounded from '@material-ui/icons/QuestionAnswerRounded'
import {Card, CardHeader, CardContent, CardActions, CircularProgress, Fab, Dialog, DialogContent, Typography, Avatar} from "@material-ui/core";
import PostMenu from "./PostMenu";
export class PostItemDetail extends Component {
    state = {
        open: false
    }
    componentDidMount() {
       if(this.props.openDialog){
           this.handleOpen();
       }
    }
    handleOpen = () => {
        this.props.getPost(this.props.postId);
        this.setState ({open: true});
    }
    handleClose = () => {
        this.setState ({open: false});
    }   
    render(){ 
        const {classes, post: {postId, body, createdAt, userPosted, upvoteCount, comments}, UI: {loading}, userName, post, hidden} = this.props;
        
       const dialogMarkUp = loading ? (<CircularProgress/>) : (<Card className = {classes.noMargin}>
            <CardHeader 
        avatar={
                <Avatar className = {classes.avatar} >
                 {String(userPosted).charAt(0)}
                </Avatar>
              }
        action={
            <PostMenu hidden={hidden} body={body} userName ={userName} userPosted={userPosted} postId = {postId} post={post}/> 
        }
        title = {userPosted}
        titleTypographyProps={{align:"left"}}
        subheaderTypographyProps={{align:"left"}}
        subheader= {dayjs(createdAt).fromNow()}/>
       
        <CardContent>
        <Typography align = "justify"> {body}
        </Typography>
        </CardContent>
        <CardActions className ={classes.bottomSpacing} > 
        <Typography>{upvoteCount}</Typography>
        <Fab size="small" className ={classes.fab} ><ThumbUpAltRoundedIcon/></Fab>
        <Fab size="small" className ={classes.fab} ><ThumbDownRoundedIcon/></Fab>
        </CardActions>
        <CommentField postId = {postId} post={post}> </CommentField>
        <CommentItem userName={userName} postId = {postId} comments={comments} key={postId}></CommentItem>
        </Card>); 
    return (
        <Fragment>
        <Fab id="showDetail" size="small" className ={classes.fab} onClick = {this.handleOpen}><QuestionAnswerRounded/></Fab>
        <Dialog id ="dialog"
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
       
        maxWidth = "sm"
        fullWidth
      >
        <DialogContent className={classes.noMarginPadding}>{dialogMarkUp}</DialogContent>
        </Dialog>
        </Fragment>
    )
    }
    
}

PostItemDetail.propTypes = {
    post: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    post: state.post.post,
    UI: state.UI
})

const mapActionsToProps = {
    getPost
};
export default connect (mapStateToProps, mapActionsToProps)(withStyles(PostItemStyles)(PostItemDetail));        