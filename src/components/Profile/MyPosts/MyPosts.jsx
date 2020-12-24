import React from 'react';
import s from './MyPosts.module.css';
// Import components
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 6 },
    { id: 2, message: 'Good. This is my first post!', likesCount: 23 },
  ];

  let postsElements = postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
