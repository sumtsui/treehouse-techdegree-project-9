import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoMatch from './NoMatch';
import Photos from './Photos';

class PhotosContainer extends Component {

  componentDidMount() {
    this.props.getData(this.props.apiKey, this.props.tag);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tag !== this.props.tag) {
      this.props.getData(this.props.apiKey, nextProps.tag);
    }
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.tag.toUpperCase()}</h2>
        {!this.props.loading || <h3>Loading...</h3>}
        <Photos photos={this.props.photos} />
        {this.props.photos.length === 0 && !this.props.loading ? <NoMatch /> : null} 
      </div>
    )
  }
}

PhotosContainer.propTypes = {
  getData: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default PhotosContainer;