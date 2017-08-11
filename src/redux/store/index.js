/**
 * Created by soufiaane on 7/5/17.
 */

import {createStore, compose, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga';


import {loadState, saveState} from './localStorage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(browserHistory);
const enhancers = applyMiddleware(sagaMiddleware, routeMiddleware);
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
export default store;
