import React from 'react';
import s from './Dialogs.module.css';
// Import redux
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer';
// Import components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              placeholder="Enter your message"
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
