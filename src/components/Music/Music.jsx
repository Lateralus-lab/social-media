import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';

const Settings = () => {
  return (
    <SettingsStyled>
      <Nav />
      <div>SettingsStyled</div>
    </SettingsStyled>
  );
};

const SettingsStyled = styled.div`
  grid-area: main;
`;

export default Settings;
