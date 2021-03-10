import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import StateProvider from './Providers/StateProvider.jsx';
import { BrowserRouter } from 'react-router-dom'
 
//import our Landing, that is linked to the root and 
ReactDOM.render(
  <BrowserRouter>
  <StateProvider>
      <App />
  </StateProvider>
  </BrowserRouter> ,
  document.getElementById('root')
);