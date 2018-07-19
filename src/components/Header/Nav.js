import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tags = props =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to={`/tag/hulk`}>Hulk</NavLink></li>
      <li><NavLink to={`/tag/ronaldo`}>Ronaldo</NavLink></li>
      <li><NavLink to={`/tag/dolphins`}>Dolphins</NavLink></li>
      <li><NavLink to={`/search`}>Search</NavLink></li>
    </ul>
  </nav>

Tags.propTypes = {
}

export default Tags;