import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://drasler.ru/wp-content/uploads/2019/05/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE-%D1%81%D1%82%D0%BE%D0%BB%D0%B0-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BF%D0%BB%D1%8F%D0%B6-%D0%B8-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D1%8B020.jpg'></img>
    </div>
    <div>
      ava
    </div>
    <div>
      my post
      <div>
        new post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post1
        </div>
        <div className="item">
          post 2
        </div>
      </div>
    </div>
  </div>
}
export default Profile;