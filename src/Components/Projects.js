import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import {ProjectCard} from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";


const Projects = () => {

     const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              
              <h2>Projects</h2>
              <p>KillTrack! Project</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                  defaultActiveKey="/home"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web3 Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Web Dev Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Blockhain Dev projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second"></Tab.Pane>
                  <Tab.Pane eventKey="third"></Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
          <img className="background-image-right" src={colorSharp2} />
        </Container>
      </section>
    );
}


export default Projects;