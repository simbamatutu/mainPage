import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Previewcards from './Components/Previewcards';

class App extends Component {
  render() {
    return (
      <React.Fragment className='App'>
        <Header />
        <Previewcards />
      </React.Fragment>
    );
  }
}

export default App;
