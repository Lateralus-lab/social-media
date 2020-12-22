import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const Feed = () => {
  return (
    <FeedStyled>
      <h3>Feed</h3>
      <textarea></textarea>
      <button>Add post</button>
      <Post />
    </FeedStyled>
  );
};

const FeedStyled = styled.div`
  height: auto;
  background-color: lavender;
`;

export default Feed;
