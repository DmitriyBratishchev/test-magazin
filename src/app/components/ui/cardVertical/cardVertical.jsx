import React from 'react';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import RatingScale from '../ratingScale';
import s from './cardVertical.module.css';

const CardVertical = ({ data }) => {
  const { image, title, price, body, rate } = data;
  return (
    <div className={ s.cardVertical + ' p-3 m-2' }>
      <CardImg
        alt='Foto'
        top
        width='100%'
        src={ image }
      />
      <CardText className={ s.discription }>
        { title }
      </CardText>
      <CardTitle className={ s.price } >
        ${ price }
      </CardTitle>
      <CardText className={ s.options }>
        { body }
      </CardText>
      <div className='d-flex justify-content-between align-items-center'>
        <RatingScale rating={ rate } />
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

CardVertical.propTypes = {
  // image: PropTypes.string,
  // title: PropTypes.string,
  // body: PropTypes.string,
  // price: PropTypes.number,
  // rate: PropTypes.number,
  data: PropTypes.object
};

export default CardVertical;
