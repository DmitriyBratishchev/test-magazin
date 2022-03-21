import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import { getCart, getLoadingCart, loadCart } from '../../../store/cart';
import { getCommentsById, getIsLoadingComments, loadComments } from '../../../store/comment';
import RatingScale from '../../ui/ratingScale';
import s from './cart.module.css';

const Cart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoadingCart = useSelector(getLoadingCart());
  const isLoadingComments = useSelector(getIsLoadingComments());
  const cart = useSelector(getCart());
  const comments = useSelector(getCommentsById(id));
  console.log('params comments', comments);
  useEffect(() => {
    dispatch(loadCart(id));
    dispatch(loadComments(id));
    console.log('id cart', id);
  }, []);
  if (isLoadingCart) return <h2>Loading . . .</h2>;
  console.log('cart', cart);
  return (
    <>
      <h1>Cart №{ id }</h1>
      <div className="row">
        <div className="col-4">
          <CardImg
            alt='Foto'
            top
            width='100%'
            src={ cart.image }
          />
        </div>
        <div className="col-4 d-flex flex-column">
          <CardText className={ s.discription }>
            { cart.title }
          </CardText>
          <CardTitle className={ s.price + ' d-flex justify-content-between' } >
            ${ cart.price }
          </CardTitle>
          <CardText className={ s.options }>
            { cart.body }
          </CardText>
          <RatingScale className='mt-auto' rating={ cart.rate } />
        </div>
        <div className="col-4">
          <Button className='w-100'>В корзину</Button>
        </div>
      </div>
      <div className="">
        <h2 className='mt-5'>Комментарии</h2>
        { isLoadingComments
          ? <h1>Loading ...</h1>
          : comments.length === 0
            ? <h2>Комментариев пока нет</h2>
            : comments.map(comment => {
              return (
                <div key={ comment.id } className="mb-3">
                  <CardTitle className={ s.price + ' d-flex justify-content-between' } >
                    { comment.email }
                  </CardTitle>
                  <CardText >
                    { comment.name }
                  </CardText>
                  <CardText className={ s.options }>
                    { comment.body }
                  </CardText>
                  <hr></hr>
                </div>
              );
            })

        }
      </div>
    </>
  );
};

export default Cart;
