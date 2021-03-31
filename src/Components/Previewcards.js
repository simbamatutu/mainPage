import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const Previewcards = () => {
  return (
    <Container
      style={{
        color: 'white',
        backgroundColor: '#2a2d2e',
        padding: '1ch',
        marginTop: '1ch',
      }}
      className='p-3'
    >
      <Row>
        <Col
          style={{ display: 'inline-flex', textAlign: 'left', width: '70%' }}
        >
          <h5>{`Closed Error page`}</h5>
          <Row>
            <p>Description</p>
          </Row>
        </Col>
        <Col style={{ display: 'inline-flex', justifyContent: 'right' }}>
          2 of 3
        </Col>
      </Row>
    </Container>
  );
};

export default Previewcards;
