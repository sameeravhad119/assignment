import { createStore } from 'redux';
import calculateReducer from '../reducers/calculateReducer';

const store = createStore(
    calculateReducer,
    {
        number1: '',
        number2: '',
        result: '',
    },
    window.devToolsExtension && window.devToolsExtension()
);
console.log(store.getState());

export default store;