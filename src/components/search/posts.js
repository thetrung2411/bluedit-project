// components/Movies.js
  
   import React from 'react';
   import PropTypes from 'prop-types';
  
   import Post from './post';
  
  const Posts = props => (
    <ul className="posts">
      {props.posts.map(post => (
        <li key={post.postId}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
  
  Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  };
  
   export default Posts;