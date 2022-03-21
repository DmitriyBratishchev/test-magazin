import React from 'react';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import RatingScale from '../ratingScale';
import s from './cardVertical.module.css';
import { Link } from 'react-router-dom';

const CardVertical = ({ data }) => {
  const { image, title, price, body, rate, category, id } = data;
  return (
    <div className={ s.cardVertical + ' p-3 m-2' }>
      <Link className='d-inline' to={ `/product/${id}` }>

        <CardImg
          alt='Foto'
          top
          width='100%'
          src={ image }
        />
        <div className={ s.category }>{ category }</div>
        <CardText className={ s.discription }>
          { title }
        </CardText>
        <CardTitle className={ s.price + ' d-flex justify-content-between' } >
          ${ price }
        </CardTitle>
        <CardText className={ s.options + ' ' + s.hideText }>
          { body }
        </CardText>
        <div className='d-flex justify-content-between align-items-center mt-auto'>
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
      </Link>
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
