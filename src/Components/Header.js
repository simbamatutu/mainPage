import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: '#2a2d2e',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
      className='header cards'
    >
      <Col xs={6} md={4}>
        <Row>
          <Image
            src='bigdata.png'
            roundedCircle
            style={{
              margin: 'auto',
              height: '15vmin',
              width: '15vmin',
              paddingTop: '3ch',
              display: 'block',
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
              padding: '10px',
            }}
          >
            Simba Matutu
          </h4>
        </Row>
        <Row>
          <p
            style={{
              borderTop: 'solid 1px #dcdcdc',
              borderBottom: 'solid 1px #fff',
              textAlign: 'center',
              padding: '1ch',
              fontSize: '3vmin',
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
              fontSize: 'calc(10px + 1vmin)',
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
            padding: '1ch',
          }}
        >
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span className='iconBg' style={{ color: 'red' }}>
              <i className='fas fa-camera' />
            </span>
            <span className='iconBg' style={{ color: 'red' }}>
              <i className='fas fa-camera' />
            </span>
            <span className='iconBg' style={{ color: 'red' }}>
              <i className='fas fa-camera' />
            </span>
            <span className='iconBg'></span>
            <span className='iconBg'>dd</span>
          </Row>
        </Row>
      </Col>
    </div>
  );
};

export default Header;
