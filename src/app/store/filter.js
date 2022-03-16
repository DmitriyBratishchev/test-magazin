import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  isLoading: true,
  error: null
};

const filterAndSortSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.entities = { ...state.entities, ...action.payload };
    }
  }
});

const { actions, reducer: filterReducer } = filterAndSortSlice;
const { filter } = actions;

export const setFilter = (quality) => (dispatch, getState) => {
  dispatch(filter(quality));
};

export const getFilterPrice = () => (state) => {
  const filtered = [];
  const catalog = state.catalog.entities;
  if (state.filter.entities?.price) {
    state.filter.entities?.price.forEach(id => {
      switch (id) {
        case '1111':
          filtered.push(...catalog.filter(el => el.price <= 50));
          break;
        case '2222':
          filtered.push(...catalog.filter(el => el.price > 50 && el.price <= 100));
          break;
        case '3333':
          filtered.push(...catalog.filter(el => el.price > 100 && el.price <= 150));
          break;
        case '4444':
          filtered.push(...catalog.filter(el => el.price > 150 && el.price <= 200));
          break;
        case '5555':
          filtered.push(...catalog.filter(el => el.price > 200 && el.price <= 250));
          break;
        case '6666':
          filtered.push(...catalog.filter(el => el.price > 250));
          break;

        default:
          break;
      }
    });
    return filtered;
  } else {
    return catalog;
  }
};

export default filterReducer;
