import React from 'react';
import styled from 'styled-components';

const Photos = () => {
  return (
    <PhotosStyled>
      <h3>Photos</h3>
    </PhotosStyled>
  );
};

const PhotosStyled = styled.div`
  padding: 20px 15px;
  margin: 0 auto 10px;
  width: 100%;
  max-width: 580px;
  background-color: white;
`;

export default Photos;
