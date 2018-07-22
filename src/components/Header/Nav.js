import React from 'react';
import { NavLink } from 'react-router-dom';

const Tags = props =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to={`/tag/yacht`}>Yacht</NavLink></li>
      <li><NavLink to={`/tag/train`}>Train</NavLink></li>
      <li><NavLink to={`/tag/plane`}>Plane</NavLink></li>
      <li><NavLink to={`/search`}>Search</NavLink></li>
    </ul>
  </nav>

export default Tags;