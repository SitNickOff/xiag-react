import { USER_ADD } from "../actions/user";

const initialState = {
    name: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_ADD:
            return {
                ...state,
                name: action.userName
            };
    
        default:
            return state;
    }
}

export default reducer;