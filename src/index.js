import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:'Hi, how are you?', likesCount:12},
  {id:2, message:"It's my first post", likesCount:11},
  {id:3, message:'Nice', likesCount:1},
  {id:4, message:'Good job', likesCount:2},
  {id:5, message:'Normal things', likesCount:0 }
]

let dialogs = [
  {id:1, name:'Dmitry'},
  {id:2, name:'Andrew'},
  {id:3, name:'Svetlana'},
  {id:4, name:'Alexandra'},
  {id:5, name:'Valery'}
]

let messages = [
  {id:1, message:'Hi'},
  {id:2, message:'How is your car?'},
  {id:3, message:'YO'},
  {id:4, message:'Very Well'},
  {id:5, message:'Cool'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
