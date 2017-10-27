// Set up your application entry point here...

/* eslint-disable import/default */

import 'admin-lte/dist/css/skins/skin-purple.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'ionicons/dist/css/ionicons-core.min.css';

import $ from 'jquery';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import {render} from 'react-dom';
import configureStore, {history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {AuthenticatedRoute} from './Routes';
import Login from './screens/login';
import HomePage from './screens/HomePage';

window.jQuery = window.$ = $;
require("babel-polyfill");
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');

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
