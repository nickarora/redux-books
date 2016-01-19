import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';


// applyMiddleware is the suggested way to extend Redux with custom functionality
// applyMiddleware returns a function that applies a given middleware.  That function
// should be called with createStore as an argument. Ultimately, you get a store with
// middleware applied!
const createStoreWithMiddleware = applyMiddleware()(createStore);


// createStore creates a redux store that holes the complete state tree of the app
// createStore(reducer, [initial state]);
// here we are calling create store on ./reducers -- which causes it to look for ./reducers/index.js

// <Provider store>
// makes the Redux store available to the connect() calls in smart components!
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
