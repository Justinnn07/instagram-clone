import React from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ExploreOutlined from "@material-ui/icons/ExploreOutlined";
import { Avatar } from "@material-ui/core";
import { auth } from "../justin";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  const signout = () => {
    if (user) {
      auth.signOut();
    }
  };
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

      {!user ? (
        <div className="btns">
          <Link to="/login">
            <button className="blue">LOGIN</button>
          </Link>
          <Link to="/signup">
            <button className="transparent">Sign Up</button>
          </Link>
        </div>
      ) : (
        <div className="btns2">
          <HomeIcon />
          <ChatOutlinedIcon />
          <ExploreOutlined />
          <FavoriteBorderOutlinedIcon />
          <Avatar
            src="/images/1.jpg"
            className="avatar"
            alt="J"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              signout();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
