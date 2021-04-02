import React from 'react';
import { Image, Row, Col, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faStackOverflow,
  faInstagram,
  faSlack,
  faDiscord,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

var language = 'ss';
const Header = () => {
  const setLanguage = () => {
    const Languages = [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'C',
      'Python',
      'C#',
    ];
    var i = 0;

    var intv = setInterval(function () {
      if (i >= Languages.length) {
        clearInterval(intv);
      } else {
        console.log(Languages[i]);
        language = Languages[i];

        ++i;
      }
      if (i === Languages.length) {
        i = 0;
      }
    }, 3000);
  };
  setLanguage();
  return (
    <Container
      style={{
        color: 'white',
        backgroundColor: '#2a2d2e',
        display: 'flex',
        padding: '1ch',
        justifyContent: 'center',
      }}
    >
      <Col>
        <Row>
          <Image
            src='resources/self.jpg'
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
              borderTop: 'inset 0.8px #101427',
              borderBottom: 'inset 0.8px #101427',
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
            I code with <Form.Control type='text' value={language} readOnly />
          </p>
        </Row>
        <Row
          style={{
            padding: '2ch',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faGithub}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faStackOverflow}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faLinkedin}
            />
          </span>

          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faSlack}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faDiscord}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faWhatsapp}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faInstagram}
            />
          </span>
          <span className='iconBg'>
            <FontAwesomeIcon
              style={{
                fontSize: '3ch',
              }}
              icon={faTwitter}
            />
          </span>
        </Row>
      </Col>
    </Container>
  );
};

export default Header;
