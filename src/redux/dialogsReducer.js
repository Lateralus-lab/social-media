const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'Good. Thank you!' },
    { id: 3, message: 'Awesome, dude!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo!' },
  ],
  dialogs: [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Julia' },
    { id: 4, name: 'Helen' },
    { id: 5, name: 'Hayley' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
