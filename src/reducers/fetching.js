import { QUESTIONS_REQUEST, QUESTION_GET, QUESTIONS_GET } from "../actions";

function reducer(state = false, action) {
    switch (action.type) {
        case QUESTIONS_REQUEST:
            return true;

        case QUESTION_GET:
            return false;

        case QUESTIONS_GET:
            return false;            
    
        default:
            return state;
    }
}

export default reducer;