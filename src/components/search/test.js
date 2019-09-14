// components/App.js
   import React, { Component } from "react";
   import Posts from './posts';
   import Search from './search';
   import PostItems from "../post/postItems";
   import Grid from "@material-ui/core/Grid";
   import CircularProgress from "@material-ui/core/CircularProgress";
   import axiosConfig from "../../axiosConfig";
  class Searchh extends Component {
    // constructor(props) {
    //   super(props);
    // }
      state = {
        post: null,
        query: ''
      };
      
      onInput = this.onInput.bind(this);
    
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
    
    onInput(query) {
      this.setState({
        query
      });
      
      this.searchPost(query);
    }
    
    searchPost(query) {
      const url = 
      //const url =`https://us-central1-renfi-69a94.cloudfunctions.net/api/post?query=${query}&api_key=AIzaSyAPFSzPzfOfr0JvAEmbDWUE5tStlJ_6HkA`;
      // `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
      fetch (url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            posts: data.results
          })
        });
    }
       
    render() {
      const { posts, query } = this.state;
      const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
      let postMarkUp = this.state.post ? (
        this.state.post.map(post => <PostItems post={post} />)
      ) : (
        <CircularProgress color="inherit" />
      );
      return (
        <div className="Search">
          <Search array={query} onInput={this.onInput} placeholder="Search for Post …" />
          <Posts posts={posts.filter(isSearched(query))} />
          <Grid>
            {postMarkUp}
          </Grid>
        </div>

        
      );
    }
  }
  
  export default Searchh;