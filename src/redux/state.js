const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


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
    if (action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
  
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.body;
      this._callSubscriber(this.state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = ' ';
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this.state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })


export default store;
window.state = store;