// components/Movies.js
  
   import React from 'react';
   import PropTypes from 'prop-types';
  
   import Post from './movie';
  
  const Posts = props => (
    <ul className="posts">
      {props.posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
  
  Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };
  
   export default Posts;