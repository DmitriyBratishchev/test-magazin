import { createSlice } from '@reduxjs/toolkit';
import catalogService from '../services/catalog.service';
import { getPrice } from '../utils/getPrice';
import { getRandomNumber } from '../utils/getRandomNumber';

const initialState = {
  entities: {},
  isLoading: true,
  error: null
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardRequested: (state) => {
      state.isLoading = true;
    },
    cardReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    cardRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: cardReducer } = cardSlice;
const { cardRequested, cardReceved, cardRequestedFiled } = actions;

export const loadCard = (id) => async (dispatch) => {
  dispatch(cardRequested());
  try {
    const cardById = await catalogService.getCardById(id);
    const fakeCard = {
      rate: getRandomNumber(100, 500) / 100,
      price: getPrice(cardById.body.length, cardById.title.length),
      // category: category[getRandomNumber(0, 4)],
      image: '/img/no-img.png',
      ...cardById
    };
    dispatch(cardReceved(fakeCard));
  } catch (error) {
    dispatch(cardRequestedFiled(error.message));
  }
};

export const getCard = () => (state) => state.card.entities;
export const getLoadingCard = () => (state) => state.card.isLoading;

export default cardReducer;
