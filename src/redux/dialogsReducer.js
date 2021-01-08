const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Julia' },
    { id: 4, name: 'Helen' },
    { id: 5, name: 'Hayley' },
  ],
  messages: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'Good. Thank you!' },
    { id: 3, message: 'Awesome, dude!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo!' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
