import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Clock App with React!</h1>
      <Clock show country="ITALY" timezone="0" />
      <Clock show country="SAO PAOLO" timezone="-4" />
      <Clock show country="LOS ANGELES" timezone="-9" />
    </div>
  );
}

export default App;
