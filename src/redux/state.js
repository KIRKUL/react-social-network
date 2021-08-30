let rerenderEntireTree = ()=>{
  console.log('State was changed');
}
let state = {
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

}
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
rerenderEntireTree=observer;
}

export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText='';
  rerenderEntireTree(state);

}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);

}

export default state;