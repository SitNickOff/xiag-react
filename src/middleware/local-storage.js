export function loadState(key = 'state') {
    try {
        let json = localStorage.getItem(key);

        if (json===null) {
            return undefined;
        } else {
            return JSON.parse(json);
        }
    } catch (error) {
        return undefined;    
    }
}

export default key => store => next => action => {
    let result = next(action);
    const state = store.getState();
    try {
        let json = JSON.stringify(key?state[key]:state);
        localStorage.setItem(key || 'state', json);
    } catch (error) {
        console.error(error);
    }

    // console.log({state});
    // console.log({saveState: JSON.parse(localStorage.getItem('state'))});

    return result;
}