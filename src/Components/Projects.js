import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>KillTrack! Project</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
