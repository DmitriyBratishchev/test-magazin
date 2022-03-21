import { createSlice } from '@reduxjs/toolkit';
// import { setCatalogAfterSort } from './catalog';

const initialState = {
  entities: [
    { _id: '0', name: 'Без сортировки' },
    { _id: '1', name: 'По возрастанию цены' },
    { _id: '2', name: 'По убыванию цены' },
    { _id: '3', name: 'По возрастанию рейтинга' },
    { _id: '4', name: 'По убыванию рейтинга' }
  ],
  sort: '0',
  isLoading: true,
  error: null
};

const sortBySlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    filterAndSortRequested: (state) => {
      state.isLoading = true;
    },
    sortBy: (state, action) => {
      state.sort = action?.payload;
    }
  }
});

const { actions, reducer: sortByReducer } = sortBySlice;
const { sortBy } = actions;

export const setSortBy = (id = 0) => (dispatch, getState) => {
  dispatch(sortBy(id));
};

export const getCatalogAfterSort = () => (state) => {
  const id = state.sortBy.sort;
  const entities = state.catalog.entities;
  return switchSort(id, entities);
};

const switchSort = (id, entities) => {
  switch (id) {
    case '1':
      return [...entities].sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      });
    case '2':
      return [...entities].sort((a, b) => {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      });
    case '3':
      return [...entities].sort((a, b) => {
        if (a.rate > b.rate) return 1;
        if (a.rate < b.rate) return -1;
        return 0;
      });
    case '4':
      return [...entities].sort((a, b) => {
        if (a.rate < b.rate) return 1;
        if (a.rate > b.rate) return -1;
        return 0;
      });

    default:
      return entities;
  }
};

export default sortByReducer;
