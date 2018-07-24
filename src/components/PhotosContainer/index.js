import React, { Component } from 'react';
import apiKey from './../../config';
import PropTypes from 'prop-types';
import NoMatch from './NoMatch';
import Photos from './Photos';

class PhotosContainer extends Component {

  // trigger data fetching when component mounted
  componentDidMount() {
    this.props.getData(apiKey, this.props.match.params.tag);
  }

  // trigger data fetching when new props passed in component
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.tag !== this.props.match.params.tag) {
      this.props.getData(apiKey, nextProps.match.params.tag);
    }
  }

  // don't display photos in /search page
  render() {
    return (
      (this.props.match.path === '/search')
      ||
      <div className="photo-container">
        <h2>{this.props.match.params.tag.toUpperCase()}</h2>
        {!this.props.loading || <div className="loader"></div>}
        <Photos photos={this.props.photos} />
        {this.props.photos.length === 0 && !this.props.loading ? <NoMatch /> : null} 
      </div>
    )
  }
}

PhotosContainer.propTypes = {
  getData: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default PhotosContainer;