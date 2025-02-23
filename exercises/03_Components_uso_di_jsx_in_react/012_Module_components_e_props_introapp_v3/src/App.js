import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Clock from "./Clock.js";

function App() {
  return (
    <div className="App">
      {
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
      }
      <h1>My First React App</h1>
      <h2>I'm Happy</h2>
      <Clock show country="ITALY" timezone="0"/>
      <Clock show country="SAO PAULO" timezone="-3"/>
      <Clock show country="BARBADOS" timezone="-4"/>
    </div>
  );
}

export default App;
