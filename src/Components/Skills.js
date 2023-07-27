import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg';

import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={meter1} alt='images' />
                  <h5>Software Developer</h5>
                </div>

                <div className='item'>
                  <img src={meter1} alt='images' />

                  <h5>Content writing</h5>
                </div>

                <div className='item'>
                  <img src={meter1} alt='images' />
                  <h5>DeFi Research Specialist</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='left' />
    </section>
  );
};

export default Skills;
