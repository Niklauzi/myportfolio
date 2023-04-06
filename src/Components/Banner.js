import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";



const Banner = () => {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi! I'm Favour"} <span className="wrap">Blockchain Researcher</span>
              </h1>
              <p>I'm the Founder of the biggest Blockchain startup in Africa</p>
              <button onClick={() => console.log("Connect")}>Let's connect <ArrowRightCircle size={25} /></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Banner;