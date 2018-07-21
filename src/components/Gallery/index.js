import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from './../../config';
import PhotosContainer from './PhotosContainer';
import Header from './../Header';

const Gallery = props =>
  <div className="container">
    <Header 
      onInput={props.onInput}
      onSearch={(e) => props.onSearch(e, props.location, props.history)}
      path={props.match.path}
      url={props.match.url}
    />
    {(props.match.path === '/search' && !props.match.params.tag) ?
      null :
      <PhotosContainer
        tag={props.match.params.tag}
        apiKey={apiKey}
        getData={props.getData}
        photos={props.photos} 
        loading={props.loading} />
    }
  </div>

Gallery.propTypes = {
  getData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Gallery;