import React from 'react';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// Import components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let AddNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <AddMessageFormRedux onSubmit={AddNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  <form onSubmit={props.handleSubmit}>
    <Field
      component="textarea"
      name="newMessageBody"
      placeholder="Enter your message"
    />
    <div>
      <button>Send</button>
    </div>
  </form>;
};

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
