import {compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'

const createAppStore = compose(
  applyMiddleware(thunkMiddleware),
)(createStore);

export default function configureStore(initialState){
  const store = createAppStore(reducer, initialState);
  return store;
};

