const axios = require("axios");
import './App.css';

function App() {

  const newContract = {
    method: 'POST',
    url: 'https://thentic.tech/api/nfts/contract',
    headers: {'Content-Type': 'application/json'},
    data: {
      "key":"rOpgr7s5wA1mQtjGVUsQIRWHY9SDfLcl",
      "chain_id":97,
      "name":"Kilimanjaro",
      "short_name":"KIL"}
  }

  function deploy() {
    axios.request(newContract).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Thentic API Demo</h1>
        <button onClick = {() => deploy()}>
          Deploy Contract
        </button>
      </header>
    </div>
  );
}

export default App;
