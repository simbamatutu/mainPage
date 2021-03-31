import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Previewcards from './Components/Previewcards';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Previewcards />
        <Button variant='primary'>Primary</Button>{' '}
        <Button variant='secondary'>Secondary</Button>{' '}
        <Button variant='success'>Success</Button>{' '}
        <Button variant='warning'>Warning</Button>{' '}
        <Button variant='danger'>Danger</Button>{' '}
        <Button variant='info'>Info</Button>{' '}
        <Button variant='light'>Light</Button>{' '}
        <Button variant='dark'>Dark</Button>{' '}
        <Button variant='link'>Link</Button>
      </div>
    );
  }
}

export default App;
