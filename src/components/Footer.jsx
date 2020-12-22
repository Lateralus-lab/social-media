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
  background-color: green;
`;

export default Footer;
