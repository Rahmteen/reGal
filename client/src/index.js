import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import "../assets/styles/Custom.scss";
//import our Landing, that is linked to the root and 
ReactDOM.render(
    <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);