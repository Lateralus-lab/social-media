import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <h3>Footer</h3>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  grid-area: footer;
  padding: 25px 50px;
  background-color: green;
`;

export default Footer;
