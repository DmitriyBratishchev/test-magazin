import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import RatingScale from '../../ui/ratingScale';
import s from './cardBasket.module.css';

const CardBasket = ({ cardBasket, editProductCount, deleteProduct }) => {
  return (
    <>
      <h1>Card №{ cardBasket.id }</h1>
      <div className="row">
        <div className="col-4">
          <CardImg
            alt='Foto'
            top
            width='100%'
            src={ cardBasket.image }
          />
        </div>
        <div className="col-4 d-flex flex-column">
          <CardText className={ s.discription }>
            { cardBasket.title }
          </CardText>
          <CardTitle className={ s.price + ' d-flex justify-content-between' } >
            ${ cardBasket.price }
          </CardTitle>
          <CardText className={ s.options }>
            { cardBasket.body }
          </CardText>
          <RatingScale className='mt-auto' rating={ cardBasket.rate } />
        </div>
        <div className="col-4 mt-auto">
          { cardBasket.count > 0 &&
            <div className="d-flex justify-content-between">
              <h2 className=''>В корзине</h2>
              <div className="btn-group mb-3" role="group" aria-label="Basic outlined example">
                <button
                  type="button"
                  className="btn btn-outline-primary fs-3 p-1 px-2 lh-1"
                  onClick={ () => editProductCount(cardBasket.id, cardBasket.count - 1) }

                >
                  -
                </button>
                <CardTitle className={ s.price + ' outline-primary m-auto px-3' }> { cardBasket.count } шт</CardTitle>
                <button
                  type="button"
                  className="btn btn-outline-primary fs-3 p-1 px-2 lh-1"
                  onClick={ () => editProductCount(cardBasket.id, cardBasket.count + 1) }
                >
                  +
                </button>
              </div>
            </div>

          }
          { cardBasket.count === 0
            ? <Button className='w-100' onClick={ () => editProductCount(cardBasket.id, 1) }>Добавить товар в корзину</Button>
            : <Button className='w-100' onClick={ () => deleteProduct(cardBasket.id) }>Удалить товар из корзины</Button>
          }
        </div>
      </div>
    </>
  );
};

CardBasket.propTypes = {
  cardBasket: PropTypes.object,
  editProductCount: PropTypes.func,
  deleteProduct: PropTypes.func
};

export default CardBasket;
