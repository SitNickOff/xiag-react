import { combineReducers } from 'redux';

import {default as questionsReducer} from './questions';
import {default as userReducer} from './user';

const reducer = combineReducers({
    questions: questionsReducer,
    user: userReducer
});

export default reducer;