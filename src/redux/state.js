let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 6 },
      { id: 2, message: 'Good. This is my first post!', likesCount: 23 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'Good. Thank you!' },
      { id: 3, message: 'Awesome, dude!' },
      { id: 4, message: 'Yo!' },
      { id: 5, message: 'Yo!' },
      { id: 6, message: 'Yo!' },
    ],
    dialogs: [
      { id: 1, name: 'Peter' },
      { id: 2, name: 'Anna' },
      { id: 3, name: 'Julia' },
      { id: 4, name: 'Helen' },
      { id: 5, name: 'Hayley' },
      { id: 6, name: 'Jessica' },
    ],
  },
};

export default state;
