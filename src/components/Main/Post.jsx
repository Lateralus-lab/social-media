import React from 'react';
import styled from 'styled-components';

const Post = () => {
  return (
    <PostStyled>
      <img
        className="avatar"
        src="https://crop-circle.imageonline.co/crop-circle.png"
      />
      <h3>Post</h3>
    </PostStyled>
  );
};

const PostStyled = styled.div`
  background-color: rebeccapurple;

  .avatar {
    width: 80px;
    height: 80px;
  }
`;

export default Post;
