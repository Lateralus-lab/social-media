import React from 'react';
import styled from 'styled-components';
// Import components
import About from './About';
import Photos from './Photos';
import Friends from './Friends';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <About />
      <Photos />
      <Friends />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  grid-area: sidebar;
  width: 100%;
  max-width: 970px;
  background-color: red;
`;

export default Sidebar;
