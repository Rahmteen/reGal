// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract RegalToken is StandardToken {
  string public name = 'Regal';
  string public symbol = 'RGL';
  uint8 public decimals = 2;

  uint public INITIAL_SUPPLY = 420000;

  function RegalToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}