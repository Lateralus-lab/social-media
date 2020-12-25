import React from 'react';
import s from './MyPosts.module.css';
// Import components
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
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