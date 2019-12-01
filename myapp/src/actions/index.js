export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";

export const add = () => ({
    type: ADD
})

export const subtract = () => ({
    type: SUBTRACT
})

export const multiply = () => ({
    type: MULTIPLY
})

export const divide = () => ({
    type: DIVIDE
})


export const SET_NUMBER1 = 'SET_NUMBER1';
export const SET_NUMBER2 = 'SET_NUMBER2';

export const setNumber1 = (number) => ({
    type: SET_NUMBER1,
    payload: number
})

export const setNumber2 = (number) => ({
    type: SET_NUMBER2,
    payload: number
})


