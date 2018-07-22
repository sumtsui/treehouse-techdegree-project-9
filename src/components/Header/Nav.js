import React from 'react';
import { NavLink } from 'react-router-dom';

const Tags = props =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to={`/tag/cakes`}>Cakes</NavLink></li>
      <li><NavLink to={`/tag/donuts`}>Donuts</NavLink></li>
      <li><NavLink to={`/tag/coffee`}>Coffee</NavLink></li>
      <li><NavLink to={`/search`}>Search</NavLink></li>
    </ul>
  </nav>

export default Tags;