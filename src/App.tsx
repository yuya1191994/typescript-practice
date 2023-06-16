import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type ApiResponse = {
    statusCode: number;
    errorMsg: string|null;
    body: object
  }

  const strObj: ApiResponse = {
    statusCode: 404,
    errorMsg: "page not found.",
    body: {}
  }

  const numObj: ApiResponse = {
    statusCode: 200,
    errorMsg: null,
    body: {}
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
