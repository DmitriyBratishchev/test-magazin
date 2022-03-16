import { createSlice } from '@reduxjs/toolkit';
import catalogService from '../services/catalog.service';
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

// 'диспатчеры'
export const loadCatalogList = () => async (dispatch, getState) => {
  dispatch(catalogRequested());
  try {
    const content = await catalogService.get();
    const fakeCatalog = content.map(el => ({
      rate: getRandomNumber(100, 500) / 100,
      price: getRandomNumber(5, 300),
      image: '/img/no-img.png',
      ...el
    }));
    dispatch(catalogReceved(fakeCatalog));
  } catch (error) {
    console.log('error', error);
    dispatch(catalogRequestedFiled(error));
  }
};

export const setCatalogAfterSort = (sortArr) => (dispatch) => {
  dispatch(catalogAfterSort(sortArr));
};

// селекторы
export const getCatalogList = () => (state) => state.catalog.entities;

export default catalogReducer;
