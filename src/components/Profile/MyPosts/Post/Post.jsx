import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://via.placeholder.com/300.png/09f/" />
      {props.message}
      <div className={s.likes}>{props.likesCount}</div>
    </div>
  );
};

export default Post;
