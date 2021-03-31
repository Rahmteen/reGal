import "./Landing.css";
import React, { useState, useContext } from "react";
import { StateContext } from "../../Providers/StateProvider.jsx";
import { Link } from "react-router-dom";

const Landing = () => {
  const { userAddress, userAddressHandler } = useContext(StateContext);
  const [web3Auth, setWeb3Auth] = useState(false);
  let accounts;

  // functionality to connect wallet on the user window when "logging into" the site.
  // const connectWallet = async () => {
  //   accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //   userAddressHandler(accounts[0]);
  //   return setWeb3Auth(!web3Auth);
  // };

  return (
    <div>
      <div>Landing</div>
      {/* <button onClick={connectWallet}>Connect Wallet</button> */}
    </div>
  );
};

export default Landing;
