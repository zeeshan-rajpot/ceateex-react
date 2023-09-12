import React from 'react';
import '../Css/Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../SVG/logo.svg';
import facebook from '../SVG/New folder/scg/facebook.svg';
import Twitter from '../SVG/New folder/scg/twitter.svg';
import Instgram from '../SVG/New folder/scg/instagram.svg';
export const Footer = () => {
  return (
    <>
      <div className='Footerbackground'>
        <div className='d-flex justify-content-center align-item-center FooterDiv'>
          <Col lg={2} className='FirstCol'>
            <img src={logo} alt='Createex' style={{ marginTop: '50px' }} />

            <p style={{ marginTop: '20px', fontSize: '1vw', color: '#747E93' }}>
              Reach out to us anytime and lets create a better future for all
              technology users together , forever . We are open to all types of
              collab offers and tons more.
            </p>
          </Col>
          <Col className='MenuCOl' lg={3}>
            <h5
              style={{
                color: '#72B63C',
                fontFamily: 'Poppins',
                fontWeight: '300',
              }}
            >
              Menu
            </h5>
            <div className='afterMenu'>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Project</h6>
              <h6> Contact</h6>
            </div>
          </Col>

          <Col lg={2} style={{ marginTop: '100px', paddingLeft: '88px' }}>
            <h5
              style={{
                color: '#72B63C',
                fontFamily: 'Poppins',
                fontWeight: '300',
              }}
            >
              Service
            </h5>
            <div className='afterMenu'>
              <h6>graphic design</h6>
              <h6>Development</h6>
              <h6>ui ux</h6>
              <h6> See More</h6>
            </div>
          </Col>
          <Col
            lg={7}
            className='d-flex'
            style={{
              marginTop: '100px',
            }}
          >
            <div className='SocialiconBackground facebook'>
              <img src={facebook} alt='FaceBook' />
            </div>
            <div
              className='SocialiconBackground'
              style={{
                marginLeft: '10px',
              }}
            >
              <img src={Twitter} alt='FaceBook' />
            </div>
            <div
              className='SocialiconBackground insta'
              style={{
                marginLeft: '10px',
              }}
            >
              <img src={Instgram} alt='FaceBook' />
            </div>
          </Col>
        </div>
        <hr className='FooterLine' />
        <div className='d-flex justify-content-between align-items-center my-0'>
          <div style={{ marginRight: '50px' }}>
            <p className='end'>
              Copyright © 2022 CREATEEX. All Rights Reserved.
            </p>
          </div>
          <div
            className='justify-content-end d-flex'
            style={{
              color: '#747E93',
            }}
          >
            <p style={{ marginRight: '20px' }}>Terms of Use</p>
            <p className='privacyend'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
