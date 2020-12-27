import React from 'react';
import s from './MyPosts.module.css';
// Import redux
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
// Import components
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
