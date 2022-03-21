import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from '../components/page/aboutUs/aboutUs';
import Cart from '../components/page/cart/cart';
import Catalog from '../components/page/catalog/catalog';

const Main = () => {
  return (
    <>
      <Switch>
        <Route path='/catalog/:categoryName?/:underCategory?' component={ Catalog } />
        <Route path='/product/:id' component={ Cart } />
        <Route path='/' component={ AboutUs } />
        <Redirect to='/' />
      </Switch>
    </>
  );
};

export default Main;
