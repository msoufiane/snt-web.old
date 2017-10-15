import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import {routerMiddleware} from 'react-router-redux';

export const history = createHistory();

import {loadState, saveState} from './localStorage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


function configureStoreProd() {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const enhancers = applyMiddleware(sagaMiddleware, reactRouterMiddleware);

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    compose(enhancers)
  );

  store.subscribe(() => {
    const state = store.getState();
    saveState({
      authUser: state.authUser,
    });
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev() {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const enhancers = applyMiddleware(sagaMiddleware, reactRouterMiddleware, reduxImmutableStateInvariant());

  const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    composeSetup(enhancers)
  );

  store.subscribe(() => {
    const state = store.getState();
    saveState({
      authUser: state.authUser,
    });
  });

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
