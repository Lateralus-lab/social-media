import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavStyled>
      <ul className="list">
        <li className="list_link">
          <a href="/Profile">Profile</a>
        </li>
        <li className="list_link">
          <a href="/Messages">Messages</a>
        </li>
        <li className="list_link">
          <a href="/News">News</a>
        </li>
        <li className="list_link">
          <a href="/Music">Music</a>
        </li>
        <li className="list_link">
          <a href="/Settings">Settings</a>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  margin: 0 auto;
  background-color: burlywood;

  .list {
    text-align: center;

    & > .list_link {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

export default Nav;
