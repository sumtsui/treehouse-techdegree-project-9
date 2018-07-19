import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoMatch from './NoMatch';
import Photos from './Photos';

class PhotosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getData(this.props.tag);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tag !== this.props.tag) {
      this.getData(nextProps.tag);
      this.setState({
        loading: true,
        images: []
      });
    }
  }

  getData = (tag) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1&extras=url_m%2c+url_c`)
    .then()
    .then(res => res.json())
    .then(data => this.setState({ 
      images: data.photos.photo,
      loading: false
    }))
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.tag.toUpperCase()}</h2>
        {!this.state.loading || <h3>Loading...</h3>}
        <Photos images={this.state.images} />
        {this.state.images.length === 0 && !this.state.loading ? <NoMatch /> : null} 
      </div>
    )
  }
  
}

PhotosContainer.propTypes = {
}

export default PhotosContainer;