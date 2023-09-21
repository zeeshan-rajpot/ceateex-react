import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './style.css';
export const index = () => {
  return (
    <>
      <div className='aboutbg'>
        <Container>
          <Col
            lg={6}
            className='d-flex align-items-center justify-content-center flex-column '
            style={{ height: '90vh' }}
          >
            <div className='Contactus pt-4  pb-4 mb-4'>
              <h1
                style={{
                  color: '#72B63C',
                  fontSize: '25px',
                }}
              >
                Contact Us
              </h1>
              <p
                className='text-white me-4 ms-4 mb-4 mt-4'
                style={{
                  fontSize: '9px',
                }}
              >
                Our friendly custom service team always respond to enquiries
                witchin 24 hours
              </p>
              <input placeholder='Name' className='input ' />
              <input placeholder='Email' className='input  mt-4' />
              <textarea
                id='w3review'
                name='w3review'
                rows='4'
                cols='50'
                placeholder='Message'
                className='Messageinput  mt-4'
              ></textarea>
              {/* <Row className='justify-content-center Align-items-center'> */}
              <button className='send-btn'>Send</button>
            </div>
            {/* </Row> */}
          </Col>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};
export default index;
