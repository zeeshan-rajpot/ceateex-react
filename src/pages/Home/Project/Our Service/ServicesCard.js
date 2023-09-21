import React from 'react';
import { Card } from 'react-bootstrap';
import '../Our Service/card.css';

export const CardComponent = ({ logoSrc, heading, paragraph }) => {
  return (
    <div className='d-flex flex-column align-items-center OurService'>
      <img className='cardLogo' src={logoSrc} alt='GraphicDesigning' />
      <Card className='service'>
        <h3
          style={{
            fontSize: '1.3vw',
          }}
        >
          {heading}
        </h3>
        <p
          className='mb-4'
          style={{
            textAlign: 'center',
            color: '#B6BCC9',
            fontSize: '0.7vw',
          }}
        >
          {paragraph}
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
