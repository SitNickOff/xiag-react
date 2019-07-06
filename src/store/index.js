import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers';

import localStorage, {loadState} from '../middleware/local-storage';

let initialState = {};

let store_var;

initialState = loadState();
store_var = createStore(reducer, initialState, applyMiddleware(promise, thunk, localStorage(), logger));

const store = store_var;

export default store;