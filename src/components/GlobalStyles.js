import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

 *,
 *:before,
 *:after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
 }


  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

`;

export default GlobalStyles;
