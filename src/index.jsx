import 'admin-lte/dist/css/skins/skin-green-light.css';
import 'ionicons/dist/css/ionicons-core.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/AdminLTE.css';
import $ from 'jquery';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

import Routes from './routes/index';
import './index.css';

// region jquery im~ports
// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = $;
require('babel-polyfill');
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');
// endregion

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('wrapper'),
);


registerServiceWorker();
