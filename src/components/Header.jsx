import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">Logo</div>
      <div className="header-user">
        <ul>
          <li>Eli</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="header-options">
        <ul>
          <li>Group</li>
          <li>Message</li>
          <li>Bell</li>
        </ul>
      </div>
      <div className="header-lock">Lock</div>
      <div className="header-search">
        <ul>
          <li>search-icon</li>
          <li>
            <input type="text" />
          </li>
          <li>x</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 20% 20% 30%;
  grid-area: h;
  padding: 0 50px;
  background-color: #385998;
  color: #ffffff;

  div {
    ul > li {
      display: inline-block;
      margin-right: 15px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #ffffff;
  }

  .header-user {
    display: flex;
    align-items: center;
  }

  .header-options {
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .header-lock {
    display: flex;
    align-items: center;
  }

  .header-search {
    display: flex;
    align-items: center;
    justify-self: end;
  }
`;

export default Header;
