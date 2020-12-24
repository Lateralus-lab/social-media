import React from 'react';
import s from './Profile.module.css';
// Import components
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
