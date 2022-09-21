import { init, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import Onboard from '@web3-onboard/core';
import coinbaseWalletModule from '@web3-onboard/coinbase';
import walletConnectModule from '@web3-onboard/walletconnect';
import { ethers } from 'ethers'
import './App.css';
const axios = require("axios");



const injected = injectedModule();
const rpcApiKey = 'ALCHEMY_KEY'
// const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcApiKey}` || `https://mainnet.infura.io/v3/${rpcApiKey}`
const rpcUrl = `https://polygon-mumbai.g.alchemy.com/v2/${rpcApiKey}`

// initialize Onboard
init({
  wallets: [injected],
  chains:[
    {
      id: '80001',
      token: 'MATIC',
      label: 'Polygon mumbai',
      rpcUrl
    }
  ]
})

const coinbaseWalletSdk = coinbaseWalletModule();
const walletConnect = walletConnectModule();

const onboard = Onboard({
  wallets: [
    injected,
    coinbaseWalletSdk,
    walletConnect
  ],
  chains:[
    {
      id: '80001',
      token: 'MATIC',
      label: 'Polygon mumbai',
      rpcUrl
    }
  ]
})


function App() {

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }

  async function connectWallet() {
    const connectedWallets = await onboard.connectWallet();
    console.log(connectedWallets);
  }


  const mintNFT = {
    method: 'POST',
    url: 'https://thentic.tech/api/nfts/mint',
    headers: {'Content-Type': 'application/json'},
    data: {
            "key":"THENTIC_KEY",
            "chain_id":80001,
            "contract":"0x1c1deb32085a4bd52a4974f841803daaa595deb2",
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
          <button
                // disabled={connecting} onClick={() => (wallet ? disconnect() : connect())}
                disabled={connecting} onClick = {() => connectWallet()}
              >
                {connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect wallet'}
              </button>
        <h1>Thentic API Demo</h1>
        <button onClick = {() => mint()}>
          Mint NFT
        </button>
      </header>
    </div>
  );
}

export default App;
