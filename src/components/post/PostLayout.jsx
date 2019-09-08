import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import SignedInAppBar from '../appBar/AppBarWithAvatar';
import PostItem from "../post/postItems";
import RecommendationItem from "../post/Recommendation";
import PostButton from "../post/PostButton";
import axiosConfig from "../../axiosConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from "react-redux";
import {postLayoutStyles} from "./PostLayoutStyle";
import {getAllPosts} from "../../redux/actions/postActions";
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
    const {UI} = this.props;
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
PostLayout.propTypes = { 
  getAllPosts: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  UI: state.UI
})
const mapActionToProps ={ 
  getAllPosts
}


export default connect (mapStateToProps, mapActionToProps)(withStyles(postLayoutStyles)(PostLayout));