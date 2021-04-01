import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container
      style={{
        color: 'white',

        display: 'flex',
        padding: '1ch',
        justifyContent: 'center',
      }}
      className='header cards'
    >
      <Col>
        <Row>
          <Image
            src='bigdata.png'
            style={{
              height: '5rem',
              marginTop: '2ch',
              width: '5rem',
              margin: 'auto',
              borderRadius: '50%',
            }}
          />
        </Row>
        <Row>
          <h4
            className='name'
            style={{
              fontSize: '1em',
              fontWeight: '100',
              textAlign: 'center',
              margin: 'auto',
              padding: '10px',
            }}
          >
            Simba Matutu
          </h4>
        </Row>
        <Row>
          <p
            style={{
              borderTop: 'solid 0.3px #dcdcdc',
              borderBottom: 'solid 0.3px #dcdcdc',
              textAlign: 'center',
              padding: '1ch',
              fontSize: '2vmin',
              margin: 'auto',
            }}
          >
            United forever in friendship and labour
          </p>
        </Row>
        <Row>
          <p
            style={{
              textAlign: 'center',
              padding: '2ch',

              fontSize: '3vmin',
              margin: 'auto',
            }}
          >
            I code with{' '}
            <span
              style={{
                backgroundColor: ' #101427',
                color: '#fff',
                padding: '1ch',
              }}
            >
              React
            </span>
          </p>
        </Row>
        <Row
          style={{
            padding: '2ch',
            margin: 'auto',
          }}
        >
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
          <span className='iconBg'>
            <i className='fas fa-camera' />
          </span>
        </Row>
      </Col>
    </Container>
  );
};

export default Header;
