export const ActionTypes = {
    INCREMENT: "INCREMENT",
    INIT: "INIT"
}

export const init = () => {
    return dispatch => {
        dispatch({type: ActionTypes.INIT});
    }
}

export const increment = () => {
    return dispatch => {
        dispatch({type: ActionTypes.INCREMENT});
    }
}