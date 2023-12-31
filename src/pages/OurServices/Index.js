import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './style.css';
export const index = ({
  Logo,
  Whyus,
  mainHeading,
  para,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  h1,
  h3,
  h2,
  h4,
  h5,
  h6,
  h7,
}) => {
  return (
    <>
      <div
        className='webmainDiv'
        style={{
          marginTop: '60px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <Container
          className='d-flex justify-content-between align-items-center'
          style={{
            paddingTop: '100px',
            paddingBottom: '100px',
          }}
        >
          <Col
            style={{
              paddingLeft: '100px',
            }}
          >
            <Row>
              <h3
                style={{
                  color: '#fff',
                  fontSize: '1.9vw',
                }}
              >
                {Whyus}
              </h3>
              <h4
                style={{
                  marginTop: '20px',
                  color: ' #72B63C',
                  fontSize: '1.9vw',
                }}
              >
                {mainHeading}
              </h4>
            </Row>
            <Row>
              <p
                style={{ marginTop: '15px', color: ' #fff', fontSize: '0.8vw' }}
              >
                {para}
              </p>
            </Row>
            <Row>
              <p
                style={{
                  color: ' #fff',
                  marginTop: '2px',
                  fontSize: '0.8vw',
                }}
              >
                {para}
              </p>
            </Row>
            <button
              style={{
                width: '200px',
                height: '35px',
                marginTop: '30px',
                border: 'transparent',
                borderRadius: '22px',
                color: '#fff',
                backgroundColor: '#72B63C',
              }}
            >
              Get a Quote
            </button>
          </Col>
          <Col>
            <img
              src={Logo}
              style={{
                marginLeft: '120px',
                height: '80%',
                width: '80%',
              }}
            />
          </Col>
        </Container>
      </div>
      <div className='AfterGetbtn'>
        <Container>
          <Col
            style={{
              padding: '100px',
              opacity: '1',
            }}
          >
            <Row>
              <h2 className='belowMainheading'>{h3}</h2>
            </Row>
            <Row>
              <h3 className='belowservicesheading mt-4'>{h1}</h3>
              <p className='belowservicesimg '>{detail1}</p>
            </Row>
            <Row>
              <h3 className='belowservicesheading mt-3'>{h2}</h3>
              <p className='belowservicesimg'>{detail2}</p>
            </Row>
            <Row>
              <h3 className='belowservicesheading  mt-3'>{h4}</h3>
              <p className='belowservicesimg'>{detail3}</p>
            </Row>
            <Row>
              <h3 className='belowservicesheading  mt-3'>{h5}</h3>
              <p className='belowservicesimg'>{detail4}</p>
            </Row>
            <Row>
              <h3 className='belowservicesheading  mt-3'>{h6}</h3>
              <p className='belowservicesimg'>{detail5}</p>
            </Row>
            <Row>
              <h3 className='belowservicesheading  mt-3'>{h7}</h3>
              <p className='belowservicesimg'>{detail6}</p>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
};
export default index;
