import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileCss from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={ProfileCss.content}>
      <div>
        <img src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg"></img>
      </div>
      <div className={ProfileCss.avatar}>
        <img
          className={ProfileCss.avatar__img}
          src="https://i.pinimg.com/736x/21/ed/6a/21ed6af9fbf3f8a33d8048e2d8e60fea.jpg"></img>
        <span className={ProfileCss.avatar__name}>Lesha</span>
      </div>
      <MyPost />
    </div>
  );
};

export default Profile;
