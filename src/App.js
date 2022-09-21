const axios = require("axios");
import './App.css';

function App() {

  function deploy() {
    
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
