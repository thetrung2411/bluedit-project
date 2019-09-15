// components/App.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import SignedInAppBar from "../appBar/AppBarWithAvatar";
import PostItems from "../post/postItems";
import RecommendationItem from "../post/Recommendation";
import PostButton from "../post/PostButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { PostLayoutStyles } from "../../components/post/PostLayoutStyle";
import { SearchPost } from "../../redux/actions/postActions";
import { Redirect } from "react-router-dom";
import Search from './search';
import { Link } from "react-router-dom";

import Posts from './posts';

  class Searchh extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        posts: [],
        query: '',
        post: null
      };    
        this.onInput = this.onInput.bind(this);

    }
      onInput(query) {
       this.setState({
         query
       });
      }
    componentDidMount(query) {
      this.props.SearchPost(query);
    }
    
     
      
    //   this.searchPost();
    
    
    // searchPost(query) {
    //   const url = 
    //   //const url =`https://us-central1-renfi-69a94.cloudfunctions.net/api/post?query=${query}&api_key=AIzaSyAPFSzPzfOfr0JvAEmbDWUE5tStlJ_6HkA`;
    //   // `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    //   fetch (url)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         posts: data.results
    //       })
    //     });
    // }
       
    render() {
      //const { posts, query } = this.state;
      const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
      const {posts, query} = this.props.post;
      let postMarkUp = this.state.post ? (
        this.state.post.map(post => <PostItems post={post} />)
      ) : (
        <CircularProgress color="inherit" />
      );
      return (
        <div>
          <Search query={query} onInput={this.onInput} placeholder="Search for Post …" />
         <Posts posts={posts.filter(isSearched(query))} />  
          <Grid>
            {postMarkUp}
          </Grid>
        </div>

        
      );
    }
  }
  Searchh.propTypes = {
    SearchPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    post: state.post,
  })
  const mapActionToProps ={ 
    SearchPost
  }
  
  export default connect (mapStateToProps, mapActionToProps)(withStyles(PostLayoutStyles)(Searchh));
   //export default Searchh;