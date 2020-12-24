import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = 'dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Julia' },
    { id: 4, name: 'Helen' },
    { id: 5, name: 'Hayley' },
    { id: 6, name: 'Jessica' },
  ];

  let dialogElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesData = [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'Good. Thank you!' },
    { id: 3, message: 'Awesome, dude!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo!' },
    { id: 6, message: 'Yo!' },
  ];

  let messageElements = messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
