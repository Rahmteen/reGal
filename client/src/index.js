import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import history from "./History";
import './index.css'
import "../assets/styles/Custom.scss";
import Web3 from 'web3';
import truffleConfig from "../truffle-config";

var web3Location = `http://${truffleConfig.networks.rpc.host}:${truffleConfig.networks.rpc.port}`;


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
    <BrowserRouter history={history}>
      <App web3={web3Provided}/>
    </BrowserRouter>,
    document.getElementById('root')     
  )          

});