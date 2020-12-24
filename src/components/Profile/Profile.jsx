import React from 'react';
import s from './Profile.module.css';
// Import components
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div className={s.hero_img}>Hero</div>
      <div>Ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
