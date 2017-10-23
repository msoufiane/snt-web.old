// Set up your application entry point here...
/* eslint-disable import/default */

import $ from 'jquery';
import './styles/styles.scss';

import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Root from './components/Root';
// import registerServiceWorker from './registerServiceWorker';

window.jQuery = window.$ = $;
require("babel-polyfill");
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');
require('./favicon.ico');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('wrapper')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('wrapper')
    );
  });
}

// registerServiceWorker();
