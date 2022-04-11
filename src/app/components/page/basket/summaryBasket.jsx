import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'reactstrap';
import s from './cardBasket.module.css';

const SummaryBasket = ({ countProductName, countProduct, allPrice }) => {
  return (
    <>
      <CardTitle className={ `d-flex justify-content-between ${s.price}` }>
        <div className="">Всего наименований </div>
        <div className="">{ countProductName }</div>
      </CardTitle>
      <CardTitle className={ `d-flex justify-content-between ${s.price}` }>
        <div className="">Всего товаров </div>
        <div className="">{ countProduct }</div>
      </CardTitle>
      <CardTitle className={ `d-flex justify-content-between ${s.price}` }>
        <div className="">Всего на сумму </div>
        <div className="">${ allPrice }</div>
      </CardTitle>
    </>
  );
};

SummaryBasket.propTypes = {
  countProductName: PropTypes.number,
  allPrice: PropTypes.string,
  countProduct: PropTypes.number
};

export default SummaryBasket;
