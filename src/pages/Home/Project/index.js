import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from './Our Service/ServicesCard.js';
import '../Project/style.css';
import Graphic from '../../../SVG/Graphic.svg';
import uiUx from '../../../SVG/UIUX.svg';
import aPI from '../../../SVG/ApiInteg.svg';
import Web from '../../../SVG/Webdevelopment.svg';
import Counter from '../Project/Couter.js';
import Portfolio from './Portfolio.js';
export const Index = () => {
  return (
    <>
      <div className='bgImage'>
        <Row
          style={{
            marginBottom: '140px',
          }}
        >
          <h6
            className='text-center'
            style={{
              color: '#72B63C',
              marginTop: '80px',
            }}
          >
            Our Service
          </h6>
          <h4
            className='text-light text-center'
            style={{
              fontSize: '1.5vw !important',
            }}
          >
            We Offer a Wide Variety of IT Services
          </h4>
        </Row>
        <Container
          style={{ marginTop: '80px !important', paddingBottom: '100px' }}
        >
          <Row>
            <Col md={3}>
              <ServicesCard
                logoSrc={Graphic}
                heading='Graphic Design'
                paragraph='Agency provides a full service range including technical skills, design.'
              />
            </Col>
            <Col md={3}>
              <ServicesCard
                logoSrc={uiUx}
                heading='Ui / UX'
                paragraph='Design and propose product improvements through periodical and accurate testing.'
              />
            </Col>
            <Col md={3}>
              <ServicesCard
                logoSrc={aPI}
                heading='API integration'
                paragraph='Cloud Integrate for product improvements through periodical and accurate testing.'
              />
            </Col>
            <Col md={3}>
              <ServicesCard
                logoSrc={Web}
                heading='Web devlopement'
                paragraph='Full service range including technical skills, design, business.'
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Counter />
      <Portfolio />
    </>
  );
};

export default Index;
