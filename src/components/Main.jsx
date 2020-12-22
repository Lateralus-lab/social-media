import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainStyled>
      <h3>Main</h3>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  grid-area: main;
  background-color: blue;
`;

export default Main;
