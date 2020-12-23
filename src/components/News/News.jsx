import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from '../Nav';

const News = () => {
  return (
    <NewsStyled>
      <Nav />
      <div>News</div>
    </NewsStyled>
  );
};

const NewsStyled = styled.div`
  grid-area: main;
`;

export default News;
