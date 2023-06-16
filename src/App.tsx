import React, { useState } from 'react';
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

  const [str, setStr] = useState<string>("a")  

  const onClickAction = () => {
    setStr("b")
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
      <button onClick={onClickAction}>ボタン</button>
      <div style={{backgroundColor:"white"}}>{str}</div>
    </div>
  );
}

export default App;
