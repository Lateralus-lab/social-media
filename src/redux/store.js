import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
      ],
      dialogs: [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Julia' },
        { id: 4, name: 'Helen' },
        { id: 5, name: 'Hayley' },
      ],
      newMessageBody: '',
    },
    sidebar: {
      name: '',
    },
  },

  _callSubscriber() {
    console.log('State is changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
