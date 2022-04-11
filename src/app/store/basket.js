import { createSlice } from '@reduxjs/toolkit';
import { basketService } from '../services/basket.service';
import catalogService from '../services/catalog.service';
import { getPrice } from '../utils/getPrice';
import { getRandomNumber } from '../utils/getRandomNumber';

const initialState = {
  entities: {
    list: [],
    cards: []
  },
  isLoading: true,
  timeStamp: 0,
  error: null
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basketRequested: (state) => {
      state.isLoading = true;
    },
    basketListReceved: (state, action) => {
      state.entities.list = action.payload;
      state.isLoading = false;
    },
    basketCardsReceved: (state, action) => {
      state.entities.cards = action.payload;
      state.isLoading = false;
    },
    basketRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: basketReducer } = basketSlice;
const { basketRequested, basketListReceved, basketCardsReceved, basketRequestedFiled } = actions;

export const loadListBasket = () => (dispatch) => {
  dispatch(basketRequested());
  const localBasket = basketService.getBasket();
  dispatch(basketListReceved(localBasket));
};

export const loadCardsBasket = () => async (dispatch, getState) => {
  const stateBasket = getState().basket.entities.cards;
  console.log('stateBasket', stateBasket);
  const localBasket = basketService.getBasket();
  const arrayIdProductInBasketLockal = localBasket.map(p => p.id);
  const arrayIdProductInBasketState = stateBasket.map(p => p.id);
  console.log('id array', arrayIdProductInBasketLockal);
  const isSameArray = JSON.stringify(arrayIdProductInBasketLockal) === JSON.stringify(arrayIdProductInBasketState);
  // if (!isSameArray) {
  dispatch(basketRequested());
  try {
    const basketData = !isSameArray
      ? await Promise.all(arrayIdProductInBasketLockal.map(id => catalogService.getCardById(id))).then(res => res)
      : stateBasket;
    console.log('basketData', basketData);
    const fakebasket = basketData.map((p, index) => ({
      rate: getRandomNumber(100, 500) / 100,
      price: getPrice(p.body.length, p.title.length),
      image: '/img/no-img.png',
      ...p,
      count: localBasket[index].count

    }));
    console.log('fakebasket', fakebasket);
    dispatch(basketCardsReceved(fakebasket));
  } catch (error) {
    console.log('error basket', error);
    dispatch(basketRequestedFiled(error.message));
  }
  // }
};

export const addProduct = (product) => (dispatch) => {
  console.log('start add basket');
  let basket = basketService.getBasket();
  const arrIdProduct = basket.map(el => el.id);
  if (arrIdProduct.includes(product.id)) {
    basket = basket.map(el => el.id === product.id ? { ...el, count: product.count } : el).filter(el => el.count !== 0);
  } else {
    basket.push(product);
  }
  basketService.setBasket(basket);
  dispatch(basketListReceved(basket));
};

export const getBasket = () => (state) => state.basket.entities.cards;
export const getBasketLength = () => (state) => state.basket.entities.list.reduce((acc, el) => acc + el.count, 0);
export const getLoadingBasket = () => (state) => state.basket.isLoading;
export const getProductCountBasket = (id) => (state) => state.basket.entities.list.find(product => product.id === +id)?.count || 0;
export const getCountProduct = () => (state) => state.basket.entities.cards.length;
export const getAllPrice = () => (state) => state.basket.entities.cards.reduce((acc, el) => acc + el.count * el.price, 0).toFixed(2);

export default basketReducer;
