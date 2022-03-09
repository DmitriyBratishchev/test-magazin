import React from 'react';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import RatingScale from '../ratingScale';
import s from './cardVertical.module.css';

const CardVertical = () => {
  return (
    <div className={ s.cardVertical + ' p-3 m-2' }>
      <CardImg
        alt='Foto'
        top
        width='100%'
        src='/img/IMG_7349.jpg'
      />
      <CardText className={ s.discription }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloremque!
      </CardText>
      <CardTitle className={ s.price } >
        $25.43
      </CardTitle>
      <CardText className={ s.options }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloremque!
      </CardText>
      <div className='d-flex justify-content-between align-items-center'>
        <RatingScale rating={ 4.3 } />
        <Button
          // className={ s.price }
          outline
          color='primary'
        >
          <i className='bi bi-suit-heart me-2' />
          Watch
        </Button>
      </div>
    </div>
  );
};

export default CardVertical;
