import { useState, useEffect } from "react";
import {Container, Navbar, Nav} from "react-bootstrap";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false");

    useEffect(() => {
        if(window.scrollY > 50){
            setScrolled(true);
        } else {
            setScrolled(false)
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

      return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={""} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  } onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  } onClick={() => onUpdateActiveLink("home")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "project" ? "active navbar-link" : "navbar-link"
                  } onClick={() => onUpdateActiveLink("home")}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#h">
                    <img src={""} alt="" />
                  </a>
                  <a href="#h">
                    <img src={""} alt="" />
                  </a>
                  <a href="#h">
                    <img src={""} alt="" />
                  </a>
                </div>
                <button className="vvd" onClick={() => console.log("connect")}>
                  <span>Let's connect</span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default NavBar;