import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from './../../config';
import PhotosContainer from './PhotosContainer';
import Header from './../Header';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onInput = e => {
    this.setState({ value: e.target.value });
  }

  onSearch = e => {
    e.preventDefault();
    this.props.location.pathname = '/';
    let path = `search/${this.state.value}/`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="container">
        <Header 
          onInput={this.onInput}
          onSearch={this.onSearch}
          path={this.props.match.path}
          url={this.props.match.url}
        />
        {(this.props.match.path === '/search') ?
          null :
          <PhotosContainer
            tag={this.props.match.params.tag}
            apiKey={apiKey} />
        }
      </div>
    );
  }
}
  

Gallery.propTypes = {

}

export default Gallery;