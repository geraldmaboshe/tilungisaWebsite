import React, { Component } from 'react';
import Container from './components/Container';
import AppNavBar from './components/AppNavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar />
      <Container />
      </div>
    );
  }
}

export default App;
