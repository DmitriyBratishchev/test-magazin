import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog';
import filterReducer from './filter';
import sortByReducer from './sortBy';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  sortBy: sortByReducer,
  filter: filterReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
};
