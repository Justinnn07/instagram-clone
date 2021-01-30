import React from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";
import "./Header.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ExploreOutlined from "@material-ui/icons/ExploreOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Avatar } from "@material-ui/core";
import { auth } from "../justin";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  // const signout = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };
  return (
    <div className="header">
      <div className="insta-logo">
        <Link to="/">
          <img
            src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </Link>
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
          <HomeOutlinedIcon />
          <i class="fab fa-facebook-messenger message"></i>
          <ExploreOutlined />
          <FavoriteBorderOutlinedIcon
            onClick={(e) => {
              e.preventDefault(auth.signOut());
            }}
          />
          <Link to="/profile">
            <Avatar
              src="https://avatars.githubusercontent.com/u/69856008?s=460&u=c6efdedd0bb24ae3fc6b7edf81a86e2881fba995&v=4"
              className="avatar"
              alt={user.displayName}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
