import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';
import cartReducer from './cart/cart.reducer';
import categoriesReducer from './categories/categories.reducer';
import userReducer from './user/user.reducer';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production' && window,
  reducer: persistedReducer,
  middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
