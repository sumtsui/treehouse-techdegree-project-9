import React from 'react';
import PropTypes from 'prop-types';

const loader = props =>
  <div class="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </div>

loader.propTypes = {

}

export default loader;