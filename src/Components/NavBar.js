import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState('false');

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener('scroll', onscroll);

    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'project' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href='#stack'
              className={
                activeLink === 'project' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Stack
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
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
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
