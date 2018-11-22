import React, { Component } from 'react';
import './App.css';
import Home from './Components/home.js'
class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello, World</h1>
        <Home />
      </div>
    );
  }
}

export default App;