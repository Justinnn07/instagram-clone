import React from "react";
import "./Profile.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { useDataLayerValue } from "../DataLayer";

const Profile = () => {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="profile">
      <div className="profile-image">
        <img
          src="https://avatars.githubusercontent.com/u/69856008?s=460&u=c6efdedd0bb24ae3fc6b7edf81a86e2881fba995&v=4"
          alt=""
          className="image"
        />
      </div>
      <div className="profile-flex">
        <div className="profile-set">
          <h2>{user.displayName}</h2>
          <button>Edit Profile</button>
          <SettingsOutlinedIcon className="setting" fontSize="default" />
        </div>
        <div className="profile-stats">
          <strong>0</strong>
          <h2>Posts</h2>
          <strong>32</strong>
          <h2>Followers</h2>
          <strong>40</strong>
          <h2>Following</h2>
        </div>
        <div className="profile-name">
          <strong>{user.displayName}</strong>
          <div className="bio">
            <span>15 .</span>
            <span>Know More About Me Here! 👇</span>
            <a href="https://justinn.me">justinn.me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
