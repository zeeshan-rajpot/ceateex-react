import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolio.css';
import MainTab from './Tabbar/MainTabBar.js';
export const Portfolio = () => {
  return (
    <>
      <div className='image'>
        <Container
          style={{
            marginTop: '20%',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Col>
            <Row>
              <h5
                style={{
                  marginTop: '10%',
                  color: '#72B63C',
                }}
              >
                Portfolio
              </h5>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4>Explore Latest Projects</h4>
            </Row>
          </Col>
          <Col>
            <Row>
              <p
                style={{
                  width: '50%',
                  textAlign: 'center',
                  marginLeft: '300px',
                  fontSize: '0.8vw',
                  color: '#444444',
                }}
              >
                Software development outsourcing is just a tool to achieve
                business goals. But there is no way to get worthwhile results
                without cooperation and trust between a client company.
              </p>
            </Row>
          </Col>
          <MainTab
            style={{
              marginBottom: '30px !important',
            }}
          />
        </Container>
      </div>
    </>
  );
};
export default Portfolio;
