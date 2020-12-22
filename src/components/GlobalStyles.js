import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
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
  
  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1320px;
  }
`;

export default GlobalStyles;
