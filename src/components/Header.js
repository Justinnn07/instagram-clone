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
          <Link to="/" style={{ color: "black" }}>
            <HomeOutlinedIcon fontSize="large" />
          </Link>
          <i
            class="fab fa-facebook-messenger message"
            style={{ fontSize: "25px" }}
          ></i>
          <ExploreOutlined fontSize="small" />
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            onClick={(e) => {
              e.preventDefault(auth.signOut());
            }}
          />
          {!user.photoURL ? (
            <Link to="/profile">
              <Avatar
                src="/images/1.pjg"
                className="avatar"
                alt={user.displayName}
                style={{ cursor: "pointer" }}
              />
            </Link>
          ) : (
            <Link to="/profile">
              <Avatar
                src={user.photoURL}
                className="avatar"
                alt={user.displayName}
                style={{ cursor: "pointer" }}
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
