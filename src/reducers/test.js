import {ActionTypes} from "actions/test"
const initial = {
    counter: 10
}

function test(state = initial, action) {
    switch(action.type) {
        case ActionTypes.INCREMENT: {
            return Object.assign({}, {counter: state.counter + 1}, ...state);
        }
        case ActionTypes.INIT: {
            return Object.assign({}, {counter: 53}, ...state);
        }
        default: return state;
    }
}

export default test;