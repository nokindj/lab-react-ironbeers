import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink exact to="/">
        <img src="/images/Home-nav.png " alt="home" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
