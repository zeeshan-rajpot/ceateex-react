import React from 'react';
import PortfolioCard from '../pages/portfolioCard.js';
import { Container, Row, Col } from 'react-bootstrap';
export const Development = () => {
  return (
    <div>
      <Row>
        <Col>
          <PortfolioCard
            title='Reset Rental App'
            imageSrc='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            detail='Development . 22 June 2022'
            style={{
              marginTop: '40px',
            }}
          />
        </Col>
        <Col>
          <PortfolioCard
            title='Technician App'
            imageSrc='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            detail='UI UX . 2 june 2021'
            style={{
              marginTop: '40px',
            }}
          />
        </Col>
        <Col>
          <PortfolioCard
            title='Crime App'
            imageSrc='https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=901&q=80'
            detail='Development . 22June 2022'
            style={{
              marginTop: '40px',
            }}
          />
        </Col>

        <Col>
          <PortfolioCard
            title='Reset Rental App'
            imageSrc='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            detail='Development . 22 June 2022'
            style={{
              marginTop: '40px',
            }}
          />
        </Col>
      </Row>
     
    </div>
  );
};
export default Development;
