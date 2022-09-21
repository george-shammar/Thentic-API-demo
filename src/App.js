import { init, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import Onboard from '@web3-onboard/core';
import coinbaseWalletModule from '@web3-onboard/coinbase';
import walletConnectModule from '@web3-onboard/walletconnect';
import { ethers } from 'ethers';
import './App.css';
const axios = require("axios");

function App() {

  const mintNFT = {
    method: 'POST',
    url: 'https://thentic.tech/api/nfts/mint',
    headers: {'Content-Type': 'application/json'},
    data: {
            "key":"rOpgr7s5wA1mQtjGVUsQIRWHY9SDfLcl",
            "chain_id":97,
            "contract":"0x9f48809439876e53a5ca038eedfde9d526daf819",
            "nft_id":1,
            "nft_data":"data",
            "to":"0x909045516Ee992b9A8FF98b2613CE71e2b2B91ad"
          }
  }

  function mint() {
    axios.request(mintNFT).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    console.log("minted");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Thentic API Demo</h1>
        <button onClick = {() => mint()}>
          Mint NFT
        </button>
      </header>
    </div>
  );
}

export default App;
