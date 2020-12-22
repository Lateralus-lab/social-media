import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <h3>Sidebar</h3>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  grid-area: sidebar;
  background-color: red;
`;

export default Sidebar;
