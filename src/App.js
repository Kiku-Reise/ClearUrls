import React, { Component } from 'react';
import logo from '../img/clearurls.svg';
import './App.css';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to ClearURLs</h2>
        </div>
        
        <Button>Click Here</Button>
      </div>
    );
  }
}

export default App;
