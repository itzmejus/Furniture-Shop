import React from "react";
import "../Styles/Navbar.css";
// import logo from "../media/logo.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* logo sectiion */}
      <div className="logo">
        <figure>
          {/* <Link to='/'><img src={logo}alt='img'/></Link> */}
          </figure>
      </div>
      {/* logo sectiion end */}
      < div className="searchbar">
        <input type="search" placeholder="type here" />
        <button>Search</button>
      </div>
      {/* pages section */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart </Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
      </div>
      {/* pages section */}
    </div>
  );
}

export default Navbar;
