// components/Movie.js

import React from 'react';
import PropTypes from 'prop-types';

const Post = props => (
    <div className="post">
      <figure>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
        <figcaption>
          <h2 className="post__title">{props.title}</h2>
        </figcaption>
      </figure>
    </div>
  );
  
  Movie.propTypes = {
    id         : PropTypes.number.isRequired,
    title      : PropTypes.string.isRequired,
    poster_path: PropTypes.string
  };  
   export default Post;
  
  
  

  
  
  
 
  
  
  
  