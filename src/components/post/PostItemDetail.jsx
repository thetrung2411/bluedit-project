import React, {Component, Fragment} from 'react';
import CommentField from "../comment/CommentField";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import CommentItem from '../comment/CommentItem';
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from 'react-redux';
import {getPost,clearErrors} from '../../redux/actions/postActions';
import { PostItemStyles } from './PostItemsStyles';
import Fab from '@material-ui/core/Fab';
import QuestionAnswerRounded from '@material-ui/icons/QuestionAnswerRounded'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {Card, CardHeader, CardContent, CardActions} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PostMenu from "./PostMenu";
import {Typography} from "@material-ui/core";
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
        
       const dialogMarkUp = loading ? (<CircularProgress/>) : (<Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar >
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
        <CardActions > 
        <Typography>{upvoteCount}</Typography>
        <Fab size="small" className ={classes.fab} ><ThumbUpAltRoundedIcon/></Fab>
        <Fab size="small" className ={classes.fab} ><ThumbDownRoundedIcon/></Fab>
        </CardActions>
        <CommentField postId = {postId} post={post}> </CommentField>
        <CommentItem userName={userName} postId = {postId} comments={comments} key={postId}></CommentItem>
        </Card>); 
    return (
        <Fragment>
        <Fab size="small" className ={classes.fab} onClick = {this.handleOpen}><QuestionAnswerRounded/></Fab>
        <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
        className = {classes.paper}
        maxWidth = "sm"
        fullWidth
      >
        <DialogContent>{dialogMarkUp}</DialogContent>
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