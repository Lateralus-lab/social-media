import React from 'react';
import s from './MyPosts.module.css';
// Import components
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" />
        <Post message="Good. Thank you!" />
      </div>
    </div>
  );
};

export default MyPosts;
