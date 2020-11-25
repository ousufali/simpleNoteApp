import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux' // for sharing store to components..
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';


import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer,composeWithDevTools())

// console.log(store.getState())   //log

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store.subscribe(() => console.log("New State",store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote("sdfghjkl"))