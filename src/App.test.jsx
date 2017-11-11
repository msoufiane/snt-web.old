import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';

import Routes from './routes/index';

it('renders without crashing', () => {
  const wrapper = document.createElement('wrapper');
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
    , wrapper,
  );
});
