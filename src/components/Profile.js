import React from "react";
import "./Profile.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import GridOnIcon from "@material-ui/icons/GridOn";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img
          src="https://instagram.fpnq1-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fpnq1-2.fna.fbcdn.net&_nc_ohc=zSwWVl1-uFkAX9P6trT&oh=4528d4e596752b11ba4b314b667f477a&oe=6040428F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
          alt=""
          className="image"
        />
      </div>
      <div className="profile-flex">
        <div className="profile-set">
          <h2>justinnn_.07</h2>
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
          <strong>Justin</strong>
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
