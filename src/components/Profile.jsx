import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg"></img>
      </div>
      <div className="avatar">
        <img
          className="avatar__img"
          src="https://i.pinimg.com/736x/21/ed/6a/21ed6af9fbf3f8a33d8048e2d8e60fea.jpg"></img>
        <span>Name</span>
      </div>
      <div>
        My post
        <div>New post</div>
        <div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
