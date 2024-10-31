import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Project = ({ project }) => {
  return (
    <div>
      <Card
        className='my-3 p-3 rounded cards'
        style={{
          color: 'white',
          backgroundColor: '#2a2d2e',
          display: 'flex',
          padding: '1ch',
          justifyContent: 'center',
        }}
      >
        <a
          href={project.link}
          target='_blank'
          rel='noreferrer'
          className='anchor'
        >
          <Card.Title as='div'>
            <Card.Text as='span' className='float-left'>
              {project.name}
            </Card.Text>
            <Card.Text
              as='span'
              className='float-right'
              style={{
                color: '#5d6475',
              }}
            >
              {project.language}
              <FontAwesomeIcon
                style={{
                  marginLeft: '1ch',
                  marginRight: '0.2ch',
                }}
                icon={faStar}
              />
              {project.stars}
            </Card.Text>
          </Card.Title>
          <Card.Body
            className='pl-0 mb-0 pb-0'
            style={{
              fontSize: 'small',
            }}
          >
            {project.description}
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default Project;
