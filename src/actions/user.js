export const USER_ADD = 'USER_ADD';

export function userAdd(userName) {
    return dispatch => {
        dispatch({
            type: USER_ADD,
            userName
        });
    }
}
