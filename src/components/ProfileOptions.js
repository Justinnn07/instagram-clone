import React from "react";
import "./ProfileOptions.css";
import GridOnOutlinedIcon from "@material-ui/icons/GridOnOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonPinOutlinedIcon from "@material-ui/icons/PersonPinOutlined";

const ProfileOptions = () => {
  return (
    <div className="profileOptions">
      <div className="profileOption --active">
        <GridOnOutlinedIcon fontSize="small" />
        <span>POSTS</span>
      </div>
      <div className="profileOption">
        <TvOutlinedIcon fontSize="small" />
        <span>IGTV</span>
      </div>
      <div className="profileOption">
        <BookmarkBorderOutlinedIcon fontSize="small" />
        <span>SAVED</span>
      </div>
      <div className="profileOption">
        <PersonPinOutlinedIcon fontSize="small" />
        <span>TAGGED</span>
      </div>
    </div>
  );
};

export default ProfileOptions;
