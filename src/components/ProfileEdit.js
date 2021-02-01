import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useDataLayerValue } from "../DataLayer";
import { auth, storage } from "../justin";
import "./ProfileEdit.css";
import ProfileEditOptions from "./ProfileEditOptions";

const ProfileEdit = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const updateProfile = () => {
    return auth.updateCurrentUser({
      photoURL: image,
    });
  };

  console.log(auth.currentUser);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setProgress(0);
            setImage(url);
            console.log(url);
          });
      }
    );
  };
  const [{ user }] = useDataLayerValue();
  return (
    <div className="profileEdit">
      <ProfileEditOptions />
      <div className="name1">
        {/* {!user.photoURL ? (
      
        ) : (
          <div className="profileChange">
            <Avatar src={user.photoURL} alt={user.displayName} />
            <input type="file" onChange={handleChange}></input>
            <span
              onClick={(e) => {
                handleUpload();
                e.preventDefault();
                updateProfileEdit();
              }}
            >
              Change your Profile Pic
            </span>

            <progress value={progress}></progress>
          </div>
        )} */}

        <div className="profileChange">
          <Avatar src={user.photoURL} />
          <input type="file" onChange={handleChange}></input>
          <span
            onClick={(e) => {
              handleUpload();
              e.preventDefault();
              updateProfile();
            }}
          >
            Change your Profile Pic
          </span>

          <progress value={progress}></progress>
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
