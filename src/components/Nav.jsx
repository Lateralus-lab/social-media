import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  grid-area: n;
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  background-color: burlywood;
`;

export default Nav;
