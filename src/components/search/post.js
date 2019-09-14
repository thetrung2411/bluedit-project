// components/Movie.js

import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
    <div className="post">
      <figure>
        {/* <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} /> */}
        <figcaption>
          <h2 className="body">{props.body}</h2>
        </figcaption>
      </figure>
    </div>
  );
  
  Post.propTypes = {
    postID         : PropTypes.string.isRequired,
    body      : PropTypes.string.isRequired,
    //poster_path: PropTypes.string
  };  
   export default Post;
  
  
  

  
  
  
 
  
  
  
  