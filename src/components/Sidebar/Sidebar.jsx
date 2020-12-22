import React from 'react';
import styled from 'styled-components';
// Import components
import About from './About';
import Photos from './Photos';
import Friends from './Friends';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <h3>Sidebar</h3>
      <About />
      <Photos />
      <Friends />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  grid-area: sidebar;
  background-color: red;
`;

export default Sidebar;
