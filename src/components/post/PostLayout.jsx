import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { postLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import Grid from "@material-ui/core/Grid";
import EditRounded from '@material-ui/icons/EditRounded';
import SignedInAppBar from '../appBar/AppBarWithAvatar';
import PostItem from "../post/postItems";
import RecommendationItem from "../post/Recommendation";
import PostButton from "../post/PostButton";
import axiosConfig from "../../axiosConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
class PostLayout extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    axiosConfig
      .get("/getAllPosts")
      .then(res => {
        console.log(res.data);
        this.setState({
          post: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let postMarkUp = this.state.post ? (
      this.state.post.map(post => <PostItem post={post} />)
    ) : (
      <CircularProgress color="inherit" />
    );
    return (
        <div>
          <SignedInAppBar/>
          <PostButton/>
      <Grid container spacing = {3} >
            <Grid container xs={8}>
            {postMarkUp}
            </Grid>
            <Grid item xs={4}><RecommendationItem/></Grid>
            </Grid>
     </div>
    );
}
}
export default withStyles (postLayoutStyles)(PostLayout);