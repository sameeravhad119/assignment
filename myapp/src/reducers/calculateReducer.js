import { ADD, SUBTRACT, MULTIPLY, DIVIDE, SET_NUMBER1, SET_NUMBER2 } from '../actions';
import produce from 'immer';


let calculateReducer = produce((state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_NUMBER1:
            state.number1 = payload;
            return;
        case SET_NUMBER2:
            state.number2 = payload;
            return;
        case ADD:
            if (state.number1 && state.number2 && !isNaN(state.number1) && !isNaN(state.number2))
                state.result = Number(state.number1) + Number(state.number2);
            return;
        case SUBTRACT:
            if (state.number1 && state.number2 && !isNaN(state.number1) && !isNaN(state.number2))
                state.result = Number(state.number1) - Number(state.number2);
            return;
        case MULTIPLY:
            if (state.number1 && state.number2 && !isNaN(state.number1) && !isNaN(state.number2))
                state.result = Number(state.number1) * Number(state.number2);
            return;
        case DIVIDE:
            if (state.number1 && state.number2 && !isNaN(state.number1) && !isNaN(state.number2)) {
                if (Number(state.number2)) {
                    state.result = Number(state.number1) / Number(state.number2);
                } else {
                    // state.result = 'Error: Divide by 0 or null '
                }
            }
            return;
        default:
            return state;
    }
})
export default calculateReducer;
