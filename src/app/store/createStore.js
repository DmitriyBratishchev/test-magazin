import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketReducer from './basket';
import cardReducer from './card';
import catalogReducer from './catalog';
import commentReducer from './comment';
import filterReducer from './filter';
import sortByReducer from './sortBy';
import userReducer from './user';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  sortBy: sortByReducer,
  filter: filterReducer,
  user: userReducer,
  card: cardReducer,
  comment: commentReducer,
  basket: basketReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
};
