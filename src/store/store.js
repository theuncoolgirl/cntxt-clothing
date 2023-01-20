import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import categoriesReducer from './categories/categories.reducer';
import userReducer from './user/user.reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    user: userReducer,
  },
  middleware: [logger],
});
