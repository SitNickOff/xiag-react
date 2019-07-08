import { WS_CREATE_CONNECTION, WS_SEND_MESSAGE } from "../actions";

function reducer(state=null, action) {
    switch (action.type) {
        case WS_CREATE_CONNECTION:
            return action.ws;

        case WS_SEND_MESSAGE:
            state.send(JSON.stringify(action.message));

            return state;
    
        default:
            return state;
    }
}

export default reducer;