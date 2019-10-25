import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
<Router>
    <App />
</Router>
  </Provider>,
  document.getElementById('root')
);