import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const config = {
  url: 'http://localhost:8080',
  flux_url: 'https://flux.io',
  flux_client_id: '4a9763c3-eab9-4236-a8a7-930f589a12a4'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
