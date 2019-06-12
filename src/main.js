import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import createSagaMiddleware from 'redux-saga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Router from './router';

useStrict(true);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#app')
);