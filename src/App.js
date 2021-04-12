import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Previewcards from './Components/Previewcards';

class App extends Component {
  render() {
    return (
      <Container className='App' style={{ padding: '1ch' }}>
        <Header />
        <Previewcards />
      </Container>
    );
  }
}

export default App;
