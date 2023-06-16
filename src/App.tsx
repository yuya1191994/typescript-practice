import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type TypeA = {
    str: string
    num: number
  }

  type TypeB = {
    str: string
    bool: boolean
  }

  type TypeC = TypeA & TypeB

  const obj: TypeC = {
    str: "A",
    num: 10,
    bool: false
  }

  console.log(obj)
  
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
