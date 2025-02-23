import logo from './logo.svg';
import './App.css';
import React from 'react'
const happy = <h2>Iam not happy!</h2>

function getDate(date){
    return date
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
      <h1>My First React App</h1>
      <h2>I'm Happy</h2>
      {happy}
      {4+4}
      <h2>Today is {}</h2>
    </div>
  );
}

export default App;
