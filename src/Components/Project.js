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
        <Card.Body className='pl-0 mb-0 pb-0'>{project.description}</Card.Body>
      </Card>
    </div>
  );
};

export default Project;
