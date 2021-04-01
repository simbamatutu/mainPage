import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const Previewcards = () => {
  return (
    <Container
      style={{
        color: 'white',

        padding: '1ch',
        marginTop: '1ch',
      }}
      className='p-3 cards'
    >
      <Row>
        <Col style={{ width: '70%' }}>
          <Row>
            <h5>Project_title</h5>
          </Row>
          <Row>
            <p>Project_brief_description</p>
          </Row>
        </Col>
        <Col className='text-right' style={{ color: 'grey' }}>
          Language % 6
        </Col>
      </Row>
    </Container>
  );
};

export default Previewcards;
