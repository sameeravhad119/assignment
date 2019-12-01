import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { CalculatorButton } from './components/common-components/CalculatorButton';
import CalculatorContainer from './components/containers/CalculatorContainer';

// import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      {/* <CalculatorApp/> */}
      <CalculatorContainer />
    </Provider>
  );
}

export default App;
