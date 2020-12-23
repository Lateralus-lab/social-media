import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';
import Feed from './Feed';

const Main = () => {
  return (
    <MainStyled>
      <div className="container">
        <Nav />
        <Feed />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  grid-area: main;
  background-color: blue;
`;

export default Main;
