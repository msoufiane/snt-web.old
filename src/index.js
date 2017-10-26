// Set up your application entry point here...
/* eslint-disable import/default */

import $ from 'jquery';
import './styles/styles.scss';

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

import App from './App';

window.jQuery = window.$ = $;
require("babel-polyfill");
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');
// require('./favicon.ico');

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('wrapper')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NewApp/>
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('wrapper')
    );
    registerServiceWorker();
  });
}

