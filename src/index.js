// Set up your application entry point here...
/* eslint-disable import/default */

import $ from 'jquery';
import './styles/styles.scss';

import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';


// import {Provider} from 'react-redux';

// import store from './redux/store';

const store = configureStore();
// import routes from './routes';

window.jQuery = window.$ = $;
require('bootstrap');
require('fastclick');
require('slimscroll');
require('admin-lte');
require('./favicon.ico');


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

registerServiceWorker();
/*
let rootElement = document.getElementById('wrapper');
render((
  <Provider store={store}>
    {routes}
  </Provider>
), rootElement);
*/
