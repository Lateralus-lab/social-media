import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';

const Messages = () => {
  return (
    <MessagesStyled>
      <Nav />
      <div>Messages</div>
    </MessagesStyled>
  );
};

const MessagesStyled = styled.div`
  grid-area: main;
`;

export default Messages;
