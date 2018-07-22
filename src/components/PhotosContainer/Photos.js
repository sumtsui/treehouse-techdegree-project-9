import React from 'react';
import PropTypes from 'prop-types';

const Photos = props =>
  <ul>
    {props.photos.map(photo =>
      <li key={photo.id}>
        <img src={photo.url_c} alt={photo.title} />
      </li>
    )}
  </ul>

Photos.propTypes = {
 photos: PropTypes.array.isRequired
}

export default Photos;