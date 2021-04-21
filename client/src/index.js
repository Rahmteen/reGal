import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import history from "./History";
import "../assets/styles/Custom.scss";
import { ParallaxProvider } from 'react-scroll-parallax';
//import our Landing, that is linked to the root and 
ReactDOM.render(
  <ParallaxProvider>
    <BrowserRouter history={history}>
      <App />
  </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('root')
);