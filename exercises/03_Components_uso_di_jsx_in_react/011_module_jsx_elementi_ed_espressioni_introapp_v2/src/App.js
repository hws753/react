import logo from './logo.svg';
import './App.css';
const happy = <h2>I am Happy!</h2>

function getDate(date){
  return new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
}

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
      <h1>My First React App!</h1>
      {happy}
      {4+4}
      <h2>Today is {getDate(new Date())}</h2>
      <h2>Today is {getDate(new Date())}</h2>
      <h2>Today is {getDate(new Date())}</h2>
    </div>
  );
}

export default App;
