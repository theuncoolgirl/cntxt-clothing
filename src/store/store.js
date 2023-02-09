import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import cartReducer from './cart/cart.reducer';
import categoriesReducer from './categories/categories.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production' && window,
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
