import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Search from './Search';

const Header = props =>
  <header>
    <Nav />
    {/* hide search field when not in /search page */}
    {(!props.location.pathname.includes('/search'))
    || 
    <Search
      onInput={props.onInput}
      onSearch={(e) => props.onSearch(e, props.location, props.history)}
    />}
  </header>

this.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Header;
