import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <ul className="list">
        <li className="list_item">
          <NavLink className="nav_link" to="/Profile">
            Profile
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink className="nav_link" to="/Messages">
            Messages
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink className="nav_link" to="/News">
            News
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink className="nav_link" to="/Music">
            Music
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink className="nav_link" to="/Settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  background-color: burlywood;

  .list {
    text-align: center;

    & > .list_item {
      display: inline-block;
      margin-right: 10px;
    }
  }

  .nav_link {
    color: black;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: white;
    }
  }
`;

export default Nav;
