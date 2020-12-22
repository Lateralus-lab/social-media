import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutStyled>
      <h3>About</h3>
      <div>
        <p>Web Developer</p>
      </div>
      <div>
        <p>Loves JavaScript and React. Looking forward to learn Node.js</p>
      </div>
      <div>
        <p>From United Kingdom</p>
      </div>
    </AboutStyled>
  );
};

const AboutStyled = styled.div`
  padding: 20px 15px;
  margin: 0 auto 10px;
  width: 100%;
  max-width: 580px;
  background-color: white;
`;

export default About;
