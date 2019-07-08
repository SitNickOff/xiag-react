import { combineReducers } from 'redux';

import {default as questionsReducer} from './questions';
import {default as fetchingReducer} from './fetching';
import {default as userReducer} from './user';
import {default as wsReducer} from './ws';


const reducer = combineReducers({
    questions: questionsReducer,
    user: userReducer,
    ws: wsReducer,
    fetching: fetchingReducer
});

export default reducer;