import React from 'react';
import PropTypes from 'prop-types';

const Photos = props =>
  <ul>
    {props.images.map(image =>
      <li key={image.id}>
        <img src={image.url_c} alt={image.title} />
      </li>
    )}
  </ul>

Photos.propTypes = {

}

export default Photos;