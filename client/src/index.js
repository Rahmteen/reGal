import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Web3 from 'web3';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App.jsx';
import history from "./History";
import truffleConfig from "../truffle-config";
//CSS
import "../assets/styles/Custom.scss";

var web3Location = `http://${truffleConfig.networks.rpc.host}:${truffleConfig.networks.rpc.port}`;


//import our Landing, that is linked to the root and 
window.addEventListener('load', function() {                    
  var web3Provided;
  // Supports Metamask and Mist, and other wallets that provide 'web3'.      
  if (typeof web3 !== 'undefined') {                            
    // Use the Mist/wallet provider.     
    // eslint-disable-next-line                       
    web3Provided = new Web3(web3.currentProvider);               
  } else {                                                      
    web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location))
  }   
  ReactDOM.render(
    <ParallaxProvider>
      <BrowserRouter history={history}>
        <App web3={web3Provided}/>
    </BrowserRouter>
    </ParallaxProvider>,
    document.getElementById('root')
  );
});
