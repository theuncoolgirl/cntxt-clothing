import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
