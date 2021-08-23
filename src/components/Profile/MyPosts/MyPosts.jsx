import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  let postsData = [
    {id:1, message:'Hi, how are you?', likesCount:12},
    {id:2, message:"It's my first post", likesCount:11},
    {id:3, message:'Nice', likesCount:1},
    {id:4, message:'Good job', likesCount:2},
    {id:5, message:'Normal things', likesCount:0 }
]
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
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  )
}
export default MyPosts;