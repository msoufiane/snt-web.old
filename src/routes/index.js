/**
 * Created by soufiaane on 7/3/17.
 */

// React imports
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from '../redux/store';

// screens imports
import App from '../app';

import Login from '../screens/login';
import Dashboard from '../screens/dashboard';

const requireAuth = (nextState, replace) => {
	const state = JSON.parse(localStorage.getItem('state'));
	if (state && state.authUser && state.authUser.token === '') {
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
};

const redirectIfLoggedIn = (nextState, replace) => {
	const state = JSON.parse(localStorage.getItem('state'));
	if (state && state.authUser && state.authUser.token !== '') {
		nextState.location.nextPathname
			? replace({pathname: nextState.location.nextPathname})
			: replace({pathname: '/'})
	}
};

export default (
	<Router history={syncHistoryWithStore(browserHistory, store)}>
		<Route component={App} onEnter={redirectIfLoggedIn}>
			<Route path="/login" component={Login}/>
		</Route>
		
		<Route path="/" component={App} onEnter={requireAuth}>
			<IndexRoute component={Dashboard} />
			<Route path='/dashboard' component={Dashboard} />
		</Route>
	</Router>
);
