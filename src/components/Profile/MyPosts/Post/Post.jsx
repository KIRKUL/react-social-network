import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2.jpg'></img>
      {props.message}

      <div>
        <span>like</span> {props.likesCount}

      </div>
    </div>
  )
}
export default Post;