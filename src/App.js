import React from 'react';
import styled from 'styled-components';
// Import components
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

const App = () => {
  return (
    <WrapApp>
      <Header />
      {/* <Nav /> */}
      <Profile />
    </WrapApp>
  );
};

const WrapApp = styled.div`
  display: grid;
  grid-template-areas: 'h h' 'c c';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  // grid-gap: 10px;
`;

export default App;
