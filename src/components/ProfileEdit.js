import { Avatar } from "@material-ui/core";
import React from "react";
import "./ProfileEdit.css";
import ProfileEditOptions from "./ProfileEditOptions";

const ProfileEdit = () => {
  return (
    <div className="profileEdit">
      <ProfileEditOptions />
      <div className="name1">
        <div className="profileChange">
          <Avatar />
          <span>Change Profile Photo</span>
        </div>

        <div className="name">
          <span>Name</span>
          <input type="text" placeholder="Name" />
        </div>
        <div className="name">
          <span>Username</span>
          <input type="text" placeholder="Username" />
        </div>
        <div className="name">
          <span>Website</span>
          <input type="text" placeholder="Website" />
        </div>
        <div className="name">
          <span>Bio</span>
          <input type="text" placeholder="Bio" />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
