import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.hero_img}>Hero</div>
      <div className={s.descBlock}>
        <div>Ava + desc</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
