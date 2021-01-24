import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="insta-logo">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="btns">
        <Link to="/login">
          <button className="blue">LOGIN</button>
        </Link>
        <Link to="/signup">
          <button className="transparent">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
