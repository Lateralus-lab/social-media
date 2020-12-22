import React from 'react';
import styled from 'styled-components';
// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <WrapApp>
      <Header />
      <Hero />
      <Main />
      <Sidebar />
      <Footer />
    </WrapApp>
  );
};

const WrapApp = styled.div`
  display: grid;
  grid-template-columns: 33.1% 33.1 33.1%;
  grid-template-rows: auto 1fr 1fr auto;
  grid-template-areas: 'header header header' 'hero hero hero' 'sidebar main main' 'footer footer footer';
  // grid-gap: 10px;
  min-height: 100%;
`;

export default App;
