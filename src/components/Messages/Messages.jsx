import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';

const MessagesItem = (props) => {
  let path = '/messages/' + props.id;

  return (
    <div className="user">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const ChatItem = (props) => {
  return <div className="chat_item">{props.message}</div>;
};

const Messages = () => {
  return (
    <MessagesStyled>
      <div className="container">
        <Nav />
        <div className="messages_wrapper">
          <div className="messages_user">
            <MessagesItem name="Peter" id="1" />
            <MessagesItem name="John" id="1" />
            <MessagesItem name="Julia" id="3" />
            <MessagesItem name="Anna" id="4" />
            <MessagesItem name="Jessica" id="5" />
            <MessagesItem name="Lisa" id="6" />
          </div>
          <div className="chat_room">
            <ChatItem message={'Hi, how are you?'} />
            <ChatItem message={"I'm very good. Thank you!"} />
          </div>
        </div>
      </div>
    </MessagesStyled>
  );
};

const MessagesStyled = styled.div`
  grid-area: main;
  background-color: lightblue;

  .messages_wrapper {
    display: grid;
    grid-template-columns: 2fr 10fr;
  }

  .messages_user {
    padding: 10px;
  }

  .chat_room {
    padding: 10px;
  }
`;

export default Messages;
