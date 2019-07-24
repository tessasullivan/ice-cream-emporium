import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {

  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="storeName" to="/">
      Tessa's Ice Cream Emporium
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/">
          Patrons
        </NavLink>
        <NavLink className="nav-item nav-link" to="/employees">
          Employees
        </NavLink>
      </div>
    </div>
  </nav>
   );
}
 
export default NavBar;