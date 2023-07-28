import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Col sm={6}>
            <img src={logo} alt='logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/favour-kpokpe-8380a21a8/'
                target='blank'
                alt='profile'
              >
                <BsLinkedin style={{ color: 'white', fontSize: '24px' }} />
              </a>
              <a href='https://twitter.com/Niklauzi' target='blank'>
                <BsTwitter style={{ color: 'white', fontSize: '24px' }} />
              </a>
              <a href='https://github.com/Niklauzi' target='blank'>
                <BsGithub style={{ color: 'white', fontSize: '24px' }} />
              </a>
            </div>
            <p> CopyRight 2023, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
