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
    
    // getPopularPost() {
    //   const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
      
    //   fetch (url)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         posts: data.results
    //       })
    //     });
    // }
    
    searchPost(query) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
      
      fetch (url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            posts: data.results
          })
        });
    }
    
    // componentDidMount() {
    //   this.getPopularPosts();
    //
    
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
  
  //ReactDOM.render(<Searchh/>, document.getElementById('root'));
  export default Searchh;