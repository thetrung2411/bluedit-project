// components/App.js
   import React, { Component } from "react";
   import Posts from './posts';
   import Search from './search';

  class Searchh extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        posts: [],
        query: ''
      };
      
      this.onInput = this.onInput.bind(this);
    }
    
    onInput(query) {
      this.setState({
        query
      });
      
      this.searchPost(query);
    }
    
    searchPost(query) {
      const url = `https://renfi-69a94.firebaseio.com`;
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
      
      return (
        <div className="Search">
          <Search query={query} onInput={this.onInput} placeholder="Search for Post …" />
          <Posts posts={posts.filter(isSearched(query))} />
        </div>
      );
    }
  }
  
  export default Searchh;