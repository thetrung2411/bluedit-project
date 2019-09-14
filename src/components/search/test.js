// components/App.js
   import React, { Component } from "react";
   import Posts from './posts';
   import Search from './search';

  class Searchh extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        posts: [],
        array: ''
      };
      
      this.onInput = this.onInput.bind(this);
    }
    
    onInput(array) {
      this.setState({
        array
      });
      
      this.searchPost(array);
    }
    
    searchPost(array) {
      
      const url = `https://us-central1-renfi-69a94.cloudfunctions.net/api/post?array=${array}`;
      // https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
      
      fetch (url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            posts: data.results
          })
        });
    }
       
    render() {
      const { posts, array } = this.state;
      const isSearched = array => item => !array || item.title.toLowerCase().includes(array.toLowerCase());
      
      return (
        <div className="Search">
          <Search array={array} onInput={this.onInput} placeholder="Search for Post …" />
          <Posts posts={posts.filter(isSearched(array))} />
        </div>
      );
    }
  }
  
  export default Searchh;