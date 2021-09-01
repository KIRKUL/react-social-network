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
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
  
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  addMessage () {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);  
  },

  updateNewMessageText (newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  
  }
}
export default store;
window.state = store;