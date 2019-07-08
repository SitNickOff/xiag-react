import { questionsGet } from "./questions";

export const WS_CREATE_CONNECTION = 'WS_CREATE_CONNECTION';

export function createWsConnection() {
    return dispatch=> {
        const ws = new WebSocket('ws://localhost:5001');

        ws.onopen = () => dispatch(wsOnopen()) ;
        ws.onclose = () => dispatch(wsOnclose()) ;
        ws.onmessage = message => dispatch(wsOnmessage(message)) ;

        dispatch({
            type: WS_CREATE_CONNECTION,
            ws
        })
    }  
}

export const WS_ONOPEN = 'WS_ONOPEN';

export function wsOnopen() {
    return dispatch => {
        dispatch({
            type: WS_ONOPEN
        })
    }
}

export const WS_ONCLOSE = 'WS_ONCLOSE';

export function wsOnclose() {
    return dispatch => {
        dispatch({
            type: WS_ONCLOSE
        })
    }
}

export const WS_ONMESSAGE = 'WS_ONMESSAGE';

export function wsOnmessage(message) {
    console.log({message})
    return dispatch => {
        dispatch({
            type: WS_ONMESSAGE,
            message
        });
        dispatch(questionsGet());
    }
}

export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';

export function wsSendMessage(message) {
    return dispatch => {
        dispatch({
            type: WS_SEND_MESSAGE,
            message
        });
    }
}

