import React from 'react';
import styled from 'styled-components';
import profile from '../images/profile.png';

const Profile = () => {
  return (
    <ProfileStyled>
      <div className="user">
        <div className="user-img">
          <img src={profile} alt="profile" />
        </div>
        <div className="user-name">Eli Krizevski</div>
      </div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
  grid-area: c;
  margin: 0 auto;
  padding: 200px 15px 90px 15px;
  height: 500px;
  width: 100%;
  background-color: lightskyblue;
  // background: url(../images/bg.jpg);
  // background-repeat: repeat;
  // background-size: cover;

  .user {
    width: 100%;
  }
`;

export default Profile;
