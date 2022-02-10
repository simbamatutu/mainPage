import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
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

class Header extends React.Component {
  componentDidMount() {
    var slideIndex = 0;
    carousel();

    function carousel() {
      // var items = [];

      var rawListItems = document
        .getElementsByClassName('bio')[0]
        .getElementsByClassName('grid-item');
      for (var i = 0; i < rawListItems.length; i++) {
        rawListItems[i].style = 'display: none;';
      }
      slideIndex++;
      if (slideIndex > rawListItems.length || slideIndex === 1) {
        slideIndex = 2;
      }
      rawListItems[slideIndex - 1].style.display = 'block';
      setTimeout(carousel, 2000);
    }
  }
  render() {
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

          <Row
            className='bio p-2'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <span>
              <p
                style={{
                  fontSize: '1.3em',
                }}
              >
                I code with
              </p>
            </span>
            <span className='grid-item'>
              <p className='m-0'>NodeJs</p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                React
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                C
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                C#
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                Python
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                MongoDB
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                HTML5
              </p>
            </span>
            <span className='grid-item'>
              <p
                style={{
                  marginBottom: '0rem',
                  padding: '0 0.5em 0 0.3em',
                }}
              >
                CSS
              </p>
            </span>
          </Row>

          <Row
            style={{
              padding: '2ch',

              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a
              href='https://github.com/simbamatutu'
              target='_blank'
              rel='noreferrer'
            >
              <span className='iconBg'>
                <FontAwesomeIcon
                  style={{
                    fontSize: '3ch',
                  }}
                  icon={faGithub}
                />
              </span>
            </a>

            <a
              href='https://stackoverflow.com/users/11139373/simba'
              target='_blank'
              rel='noreferrer'
            >
              <span className='iconBg'>
                <FontAwesomeIcon
                  style={{
                    fontSize: '3ch',
                  }}
                  icon={faStackOverflow}
                />
              </span>
            </a>

            <a
              href='https://www.linkedin.com/in/simbamatutu/'
              target='_blank'
              rel='noreferrer'
            >
              <span className='iconBg'>
                <FontAwesomeIcon
                  style={{
                    fontSize: '3ch',
                  }}
                  icon={faLinkedin}
                />
              </span>
            </a>
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

            <a
              href='https://www.instagram.com/simbamatutu'
              target='_blank'
              rel='noreferrer'
            >
              <span className='iconBg'>
                <FontAwesomeIcon
                  style={{
                    fontSize: '3ch',
                  }}
                  icon={faInstagram}
                />
              </span>
            </a>
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
  }
}

export default Header;
