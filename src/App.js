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
            "contract":"<0x...>",
            "nft_id":1,
            "nft_data":"<Data>",
            "to":"<0x...>"
          }
  }

  function mint() {
    axios.request(mintNFT).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
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
