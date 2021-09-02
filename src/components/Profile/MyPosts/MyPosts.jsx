import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator} from '../../../redux/state';
import {addPostActionCreator} from '../../../redux/state';


const MyPosts = (props) => {
  //   let posts = [
  //     {id:1, message:'Hi, how are you?', likesCount:12},
  //     {id:2, message:"It's my first post", likesCount:11},
  //     {id:3, message:'Nice', likesCount:1},
  //     {id:4, message:'Good job', likesCount:2},
  //     {id:5, message:'Normal things', likesCount:0 }
  // ]  

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  )
}
export default MyPosts;