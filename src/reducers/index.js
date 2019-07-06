import { combineReducers } from 'redux';

import {default as questionsReducer} from './questions';

const reducer = combineReducers({
    questions: questionsReducer,
});

export default reducer;