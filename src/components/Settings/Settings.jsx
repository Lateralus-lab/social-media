import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';

const Music = () => {
  return (
    <MusicStyled>
      <Nav />
      <div>Music</div>
    </MusicStyled>
  );
};

const MusicStyled = styled.div`
  grid-area: main;
`;

export default Music;
