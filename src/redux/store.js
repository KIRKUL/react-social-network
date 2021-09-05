import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Nice', likesCount: 1 },
        { id: 4, message: 'Good job', likesCount: 2 },
        { id: 5, message: 'Normal things', likesCount: 0 }
      ],
      newPostText: 'it-social-network.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Alexandra' },
        { id: 5, name: 'Valery' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your car?' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Very Well' },
        { id: 5, message: 'Cool' }
      ],
      newMessageText: " "
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;