import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Search from './Search';

const Header = props =>
  <header>
    <Nav 
      url={props.url}
    />
    {(props.path === '/search' || props.path === "/search/:tag") ? <Search
      onInput={props.onInput}
      onSearch={props.onSearch}
    /> : null}
  </header>

this.propTypes = {
}

export default Header;
