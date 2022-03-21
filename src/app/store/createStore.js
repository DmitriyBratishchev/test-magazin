import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
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
  cart: cartReducer,
  comment: commentReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
};
