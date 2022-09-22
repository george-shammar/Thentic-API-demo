import { useState } from "react";
import './App.css';
const axios = require("axios");


function App() {
  const [status, setStatus] = useState("");
  const [link, setLink] = useState("");
  const [formInput, updateFormInput] = useState({address:""});

  function mint() {
    const {address} = formInput;

    const mintNFT = {
      method: 'POST',
      url: 'https://thentic.tech/api/nfts/mint',
      headers: {'Content-Type': 'application/json'},
      data: {
              "key":"rOpgr7s5wA1mQtjGVUsQIRWHY9SDfLcl",
              "chain_id":97,
              "contract":"0x19d9f60e4cf3256a056b6f818425ce1bacd62f3d",
              "nft_id": 12,
              "nft_data":"data", 
              "to": address
            }
    }

    axios.request(mintNFT).then(function (response) {
      console.log(response.data.transaction_url);
      const url = response.data.transaction_url
      setLink(url);
      setStatus("Minting NFT through Thentic...")
    }).catch(function (error) {
      console.error(error);
    });
  }

  const confirmedStatus =  "Minting NFT through Thentic...";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Thentic API Demo</h1>

        <input 
          type="text" 
          placeholder="Ethereum Address" 
          required
          onChange={e => updateFormInput({...formInput, address: e.target.value})}
          >

          </input>
        
        <button onClick = {() => mint()}>
          Get Started
        </button>
        <div>{status}</div>
        <div>
        {status ===  confirmedStatus ? (
            <a href={link} target="_blank" >Mint NFT</a>
          ) : (
            <p></p>
        )}
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
