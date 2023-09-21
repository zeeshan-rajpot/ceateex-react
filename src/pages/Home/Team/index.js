import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './TeamCard/teamCard.js';
import './team.css';
import person1 from '../../../SVG/PNG/team1.jpg';
import person2 from '../../../SVG/PNG/Team2.jpg';
import person3 from '../../../SVG/PNG/Team3.jpg';
import person4 from '../../../SVG/PNG/Team4.jpg';

export const index = () => {
  return (
    <>
      <div
        className='teambackground'
     
      >
        <Container
          style={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Row>
            <h5
              style={{
                color: '#72B63C',
              }}
            >
              Team Members
            </h5>
          </Row>
          <Row>
            <h4
              style={{
                color: '#444444',
                fontSize: '1.5vw',
              }}
            >
              Meet Our Experienced
            </h4>
          </Row>
          <Row
            style={{
              marginBottom: '20%',
            }}
          >
            <Col className='mt-5'> 
              <TeamCard
                title='Web Developer'
                subtitle='React Js'
                image={person1} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Director/Co-founder'
                image={person2} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Senior UI/UX Designer'
                image={person3} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
            <Col className='mt-5'>
              <TeamCard
                title='Graphic Designer'
                subtitle='Graphic Designer'
                image={person4} // Replace with the actual image path
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default index;
