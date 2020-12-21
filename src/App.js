import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <WrapApp>
      <Header>
        <div>Logo</div>
      </Header>
      <Nav>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </Nav>
      <Content>
        <img src="https://via.placeholder.com/1800x300/0000FF/808080"></img>
        <div>ava + description</div>
        <div>Posts</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </Content>
    </WrapApp>
  );
};

const WrapApp = styled.div`
  display: grid;
  grid-template-areas: 'h h' 'n c';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  // grid-gap: 10px;
`;

const Header = styled.div`
  grid-area: h;
  background-color: green;
  color: #ffffff;
`;

const Nav = styled.div`
  grid-area: n;
  background-color: burlywood;
`;

const Content = styled.div`
  grid-area: c;
  background-color: cornflowerblue;
`;

export default App;
