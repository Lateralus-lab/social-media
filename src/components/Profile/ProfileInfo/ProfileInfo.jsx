import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.hero_img}>Hero</div>
      <div className={s.descBlock}>
        <img src={props.profile.photos.large} alt="photo" />
        <div>Ava + desc</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
