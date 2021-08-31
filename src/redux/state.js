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
      newMessageText: 'Hard work'
    }

  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log('State was changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';

    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  addMessage () {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._rerenderEntireTree(this._state);  
  },

  updateNewMessageText (newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._rerenderEntireTree(this._state);
  
  }
}







export default store;
window.state = store;