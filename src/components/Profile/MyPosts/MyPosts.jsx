import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLenghtCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls.jsx';
import s from './MyPosts.module.css';
// Import components
import Post from './Post/Post';

const MyPosts = (props) => {
  const maxLenght10 = maxLenghtCreator(10);

  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name="newPostText"
            component={Textarea}
            placeholder={'Post message'}
            validate={[required, maxLenght10]}
          />
        </div>
        <div>
          <button>Post</button>
        </div>
      </form>
    );
  };

  const AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddNewPostForm',
  })(AddNewPostForm);

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
