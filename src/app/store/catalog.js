import { createSlice } from '@reduxjs/toolkit';
import catalogService from '../services/catalog.service';
import { getPrice } from '../utils/getPrice';
import { getRandomNumber } from '../utils/getRandomNumber';

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    catalogRequested: (state) => {
      state.isLoading = true;
    },
    catalogReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    catalogRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    catalogAfterSort: (state, action) => {
      state.entities = action.payload;
    }
  }
});

const { actions, reducer: catalogReducer } = catalogSlice;
const { catalogRequested, catalogReceved, catalogRequestedFiled, catalogAfterSort } = actions;

// fake category
// const category = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];

// 'диспатчеры'
export const loadCatalogList = () => async (dispatch, getState) => {
  dispatch(catalogRequested());
  try {
    const content = await catalogService.get();
    const fakeCatalog = content.map(el => ({
      rate: getRandomNumber(100, 500) / 100,
      price: getPrice(el.body.length, el.title.length),
      // category: category[getRandomNumber(0, 4)],
      image: '/img/no-img.png',
      ...el
    }));
    dispatch(catalogReceved(fakeCatalog));
  } catch (error) {
    console.log('error', error);
    dispatch(catalogRequestedFiled(error));
  }
};

export const loadCatalogListFilteredUser = (filterArr) => async (dispatch) => {
  const query = filterArr.map(a => `userId=${a}`).join('&');
  if (query) {
    try {
      const content = await catalogService.getFiler(query);
      const fakeCatalog = content.map(el => ({
        rate: getRandomNumber(100, 500) / 100,
        price: getRandomNumber(100, 30000) / 100,
        // category: category[getRandomNumber(0, 4)],
        image: '/img/no-img.png',
        ...el
      }));
      console.log('content', content);
      dispatch(catalogReceved(fakeCatalog));
    } catch (error) {
      console.log('error', error);
      dispatch(catalogRequestedFiled(error));
    }
  } else {
    dispatch(catalogReceved([]));
  }
};

export const setCatalogAfterSort = (sortArr) => (dispatch) => {
  dispatch(catalogAfterSort(sortArr));
};

// селекторы
export const getCatalogList = () => (state) => state.catalog.entities;
export const getCard = (id) => (state) => {
  console.log('id sel', id);
  console.log('entit sel', state.catalog.entities);
  return state.catalog.entities.filter(c => c.id.toString() === id);
};

export default catalogReducer;
