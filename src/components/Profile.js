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
          src="https://i1.wp.com/www.antinews.in/wp-content/uploads/2020/12/12118-world-trusts-indian-economy-tatas-role-important-pm-narendra-modi.jpg?fit=850%2C567&ssl=1"
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
