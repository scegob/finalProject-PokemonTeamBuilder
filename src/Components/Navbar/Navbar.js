import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className="logo">
        <h1>
          <Link to="/">Arceus</Link>
        </h1>
      </div>
      <nav className="navbar" id="navbar">
        <div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default navbar;
