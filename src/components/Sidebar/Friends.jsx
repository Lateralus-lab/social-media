import React from 'react';
import styled from 'styled-components';
import photos from '../../images/photos.jpeg';

const Friends = () => {
  return (
    <FriendsStyled>
      <h3>Friends</h3>
      <div>
        <img src={photos} />
      </div>
      <div>
        <img src={photos} />
      </div>
      <div>
        <img src={photos} />
      </div>
    </FriendsStyled>
  );
};

const FriendsStyled = styled.div`
  padding: 20px 15px;
  margin: 0 auto 10px;
  width: 100%;
  max-width: 580px;
  background-color: white;
`;

export default Friends;
