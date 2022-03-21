import { createSlice } from '@reduxjs/toolkit';
import catalogService from '../services/catalog.service';
import { getRandomNumber } from '../utils/getRandomNumber';

const initialState = {
  entities: {},
  isLoading: true,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartRequested: (state) => {
      state.isLoading = true;
    },
    cartReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    cartRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: cartReducer } = cartSlice;
const { cartRequested, cartReceved, cartRequestedFiled } = actions;

export const loadCart = (id) => async (dispatch) => {
  dispatch(cartRequested());
  try {
    const cartById = await catalogService.getCartById(id);
    const fakeCart = {
      rate: getRandomNumber(100, 500) / 100,
      price: getRandomNumber(100, 30000) / 100,
      // category: category[getRandomNumber(0, 4)],
      image: '/img/no-img.png',
      ...cartById
    };
    dispatch(cartReceved(fakeCart));
  } catch (error) {
    dispatch(cartRequestedFiled(error.message));
  }
};

export const getCart = () => (state) => state.cart.entities;
export const getLoadingCart = () => (state) => state.cart.isLoading;

export default cartReducer;
