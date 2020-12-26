let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 6 },
        { id: 2, message: 'Good. This is my first post!', likesCount: 23 },
      ],
      newPostText: 'it-kamasutra',
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State is changed');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
