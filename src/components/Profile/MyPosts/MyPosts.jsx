import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  let posts = [
    {id:1, message:'Hi, how are you?', likesCount:12},
    {id:2, message:"It's my first post", likesCount:11},
    {id:3, message:'Nice', likesCount:1},
    {id:4, message:'Good job', likesCount:2},
    {id:5, message:'Normal things', likesCount:0 }
] 
let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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