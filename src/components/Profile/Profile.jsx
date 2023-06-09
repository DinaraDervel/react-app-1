import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.container}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </main>
  );
};

export default Profile;
