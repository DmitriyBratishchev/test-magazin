import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllPrice, getBasket, getBasketLength, getCountProduct, loadCardsBasket } from '../../../store/basket';
import CardBasket from './cardBasket';
import SummaryBasket from './summaryBasket';

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket());
  const count = useSelector(getBasketLength());
  const countProduct = useSelector(getCountProduct());
  const allPrice = useSelector(getAllPrice());

  useEffect(() => {
    dispatch(loadCardsBasket());
  }, [count]);

  const editProductCount = (id, count) => {
    if (count > 0) {
      dispatch(addProduct({ id, count }));
    }
  };
  const deleteProduct = (id) => {
    dispatch(addProduct({ id, count: 0 }));
  };

  if (basket.length === 0) <h2>Корзина пуста</h2>;
  return (
    <div className='d-flex'>
      <div className="col-9">
        { basket.map(el => {
          return (
            < CardBasket
              key={ el.id }
              cardBasket={ el }
              editProductCount={ editProductCount }
              deleteProduct={ deleteProduct }
            />
          );
        }
        ) }

      </div>
      < div className="col-3">
        <span className="position-fixed ms-4 me-4 col-3">
          <SummaryBasket
            countProductName={ countProduct }
            countProduct={ count }
            allPrice={ allPrice }
          />

        </span>
      </div>
    </div >
  );
};

export default Basket;
