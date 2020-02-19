import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';

const midleware = [thunk]
// const initialState = {}

const store = createStore(reducer, compose(applyMiddleware(...midleware)));

export default store;
