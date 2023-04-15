import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Stack</h2>
            <div className="stack">
              <span>
                <h3>HTML</h3>
              </span>
              <span>
                <h3>CSS</h3>
              </span>
              <span>
                <h3>BOOTSTRAP</h3>
              </span>
              <span>
                <h3>JAVASCRIPT</h3>
              </span>
              <span>
                <h3>REACT</h3>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stack;
