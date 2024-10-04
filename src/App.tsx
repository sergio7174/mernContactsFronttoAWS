import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
