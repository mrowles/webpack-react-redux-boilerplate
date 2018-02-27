import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './App';

const store = configureStore();
const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);
