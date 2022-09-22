import { useState } from "react";
import './App.css';
const axios = require("axios");


function App() {
  const [status, setStatus] = useState("");

  const mintNFT = {
    method: 'POST',
    url: 'https://thentic.tech/api/nfts/mint',
    headers: {'Content-Type': 'application/json'},
    data: {
            "key":"rOpgr7s5wA1mQtjGVUsQIRWHY9SDfLcl",
            "chain_id":97,
            "contract":"0x19d9f60e4cf3256a056b6f818425ce1bacd62f3d",
            "nft_id":2,
            "nft_data":"data",
            "to":"0x909045516Ee992b9A8FF98b2613CE71e2b2B91ad"
          }
  }

  function mint() {
    axios.request(mintNFT).then(function (response) {
      console.log(response.data.transaction_url);
      const url = response.data.transaction_url
      setStatus("minting NFT through thentic...")
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
        <div>status</div>
      </header>
      
    </div>
  );
}

export default App;
