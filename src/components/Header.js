import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/courses">Courses</NavLink>
        </ul>
  </header>
);

export default Header;