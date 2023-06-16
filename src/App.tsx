import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type CustomType<T> = {
    val: T
  }

  const strObj: CustomType<string> = {
    val: "A"
  }

  const numObj: CustomType<number> = {
    val: 10
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
