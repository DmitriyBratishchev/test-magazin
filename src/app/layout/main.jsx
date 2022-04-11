import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from '../components/page/aboutUs/aboutUs';
import Basket from '../components/page/basket/basket';
import Card from '../components/page/card/card';
import Catalog from '../components/page/catalog/catalog';
import { basketService } from '../services/basket.service';

const Main = () => {
  console.log('basket', basketService.getBasket());
  return (
    <>
      <Switch>
        <Route path='/catalog/:categoryName?/:underCategory?' component={ Catalog } />
        <Route path='/product/:id' component={ Card } />
        <Route path='/basket' component={ Basket } />
        <Route path='/' component={ AboutUs } />
        <Redirect to='/' />
      </Switch>
    </>
  );
};

export default Main;
