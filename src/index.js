import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import noteReducer from './reducers/noteReducer'
import {createStore} from 'redux'

import {Provider} from 'react-redux' // for sharing store to components..

const store = createStore(noteReducer)

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
