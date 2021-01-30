import React from "react";
import "./Posts.css";

const Posts = ({ image }) => {
  return (
    <div className="posts">
      <img src={image} alt="" />
    </div>
  );
};

export default Posts;
