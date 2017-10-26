// Set up your application entry point here...
/* eslint-disable import/default */

import $ from 'jquery';
import './styles/styles.scss';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {AuthenticatedRoute} from './Routes';
import Login from './screens/login';
import HomePage from './screens/HomePage';
//import App from './App';

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
      <Switch>
        <Route path="/login" component={Login}/>
        <AuthenticatedRoute exact path="/" component={HomePage}/>
      </Switch>
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

