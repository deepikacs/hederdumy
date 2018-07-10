import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/commons/Header';
import SimpleRadialChart from './components/simpleradialchart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SimpleRadialChart/>
        
      </div>
    );
  }
}

export default App;