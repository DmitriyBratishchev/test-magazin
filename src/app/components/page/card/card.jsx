import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, CardImg, CardText, CardTitle } from 'reactstrap';
import { addProduct, getProductCountBasket } from '../../../store/basket';
import { getCard, getLoadingCard, loadCard } from '../../../store/card';
import { getCommentsById, getIsLoadingComments, loadComments } from '../../../store/comment';
import RatingScale from '../../ui/ratingScale';
import s from './card.module.css';

const Card = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoadingCard = useSelector(getLoadingCard());
  const isLoadingComments = useSelector(getIsLoadingComments());
  const card = useSelector(getCard());
  const comments = useSelector(getCommentsById(id));
  const count = useSelector(getProductCountBasket(id));
  // const [count, setCount] = useState(0);

  console.log('params comments', comments);
  useEffect(() => {
    dispatch(loadCard(id));
    dispatch(loadComments(id));
    console.log('id card', id);
  }, []);
  // useEffect(() => {
  //   setCount(countProductCountBasket);
  // }, [countProductCountBasket]);
  if (isLoadingCard) return <h2>Loading . . .</h2>;
  console.log('card', card);
  return (
    <>
      <h1>Card №{ id }</h1>
      <div className="row">
        <div className="col-4">
          <CardImg
            alt='Foto'
            top
            width='100%'
            src={ card.image }
          />
        </div>
        <div className="col-4 d-flex flex-column">
          <CardText className={ s.discription }>
            { card.title }
          </CardText>
          <CardTitle className={ s.price + ' d-flex justify-content-between' } >
            ${ card.price }
          </CardTitle>
          <CardText className={ s.options }>
            { card.body }
          </CardText>
          <RatingScale className='mt-auto' rating={ card.rate } />
        </div>
        <div className="col-4 mt-auto">
          { count > 0 &&
            <div className="d-flex justify-content-between">
              <h2 className=''>В корзине</h2>
              <div className="btn-group mb-3" role="group" aria-label="Basic outlined example">
                <button
                  type="button"
                  className="btn btn-outline-primary fs-3 p-1 px-2 lh-1"
                  onClick={ () => dispatch(addProduct({ id: card.id, count: count - 1 })) }

                >
                  -
                </button>
                <CardTitle className={ s.price + ' outline-primary m-auto px-3' }> { count } шт</CardTitle>
                <button
                  type="button"
                  className="btn btn-outline-primary fs-3 p-1 px-2 lh-1"
                  onClick={ () => dispatch(addProduct({ id: card.id, count: count + 1 })) }
                >
                  +
                </button>
              </div>
            </div>

          }
          { count === 0
            ? <Button className='w-100' onClick={ () => dispatch(addProduct({ id: card.id, count: count || 1 })) }>Добавить товар в корзину</Button>
            : <Button className='w-100' onClick={ () => dispatch(addProduct({ id: card.id, count: 0 })) }>Удалить товар из корзины</Button>
          }
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

export default Card;
