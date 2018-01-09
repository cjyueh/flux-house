import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as helpers from './utils/helpers.js';

const config = {
  url: 'http://localhost:3000',
  flux_url: 'https://flux.io',
  flux_client_id: '4a9763c3-eab9-4236-a8a7-930f589a12a4'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    helpers.init(config).then(loggedIn => {
      this.setState({loggedIn: loggedIn});
      if (loggedIn) {
        console.log('logged in');
      } else {
        console.log('not logged in');
      }
    });
  }

  onLogin() {
    helpers.login();
  }

  onLogout() {
    helpers.logout();
    // reset state to default (logged out)
    // this.setState({loggedIn: false}); // this is undefined?
  }

  showLoginView() {
    if (this.state.loggedIn) {
      return (
        <div>
          <h1>logged in</h1>
          <button onClick={this.onLogout}>Logout</button>
        </div>
        );
    } else {
      return (
        <button onClick={this.onLogin}>Login</button>
        );
    }
  }

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
        {this.showLoginView()}
      </div>
    );
  }
}

export default App;
