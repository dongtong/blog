import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tips from './tips/error_handling';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tips/>
      </div>
    );
  }
}

export default App;
