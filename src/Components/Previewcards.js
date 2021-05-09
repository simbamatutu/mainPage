import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import projects from '../Projects';
import Project from './Project';

const Previewcards = () => {
  return (
    <Container>
      <Row>
        {projects.map((project, i) => (
          <Col sm={12} md={12} lg={12} className='p-0' key={i}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Previewcards;
