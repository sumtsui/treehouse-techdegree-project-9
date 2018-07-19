import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props =>
  <div className="container">
    <h3>Page Not Found :/</h3>
    <p>Sorry, the page you required does not exist. Go back <b><a href="/">Home</a></b></p>
  </div>

NotFound.propTypes = {

}

export default NotFound;