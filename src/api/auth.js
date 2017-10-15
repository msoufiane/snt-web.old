/**
 * Created by soufiaane on 7/22/17.
 */

import axios from 'axios';

export const authenticate = (username, password) => {
	return axios.post('http://localhost:8000/api/auth/login/', {username, password}).then((response) => {
		return response.data;
	}).catch((error) => {
		throw error;
	});
};

export const logout = () => {
	let request = axios.create({baseURL: 'http://localhost:8000/api/auth/logout/'});
	try {
		const serializedState = sessionStorage.getItem('state');
		if (serializedState !== null) {
			request.defaults.headers.common['Authorization'] = `Token ${serializedState.authUser.token}`;
			return request.post('http://localhost:8000/api/auth/logout/')
				.then(response => response.data)
				.catch((error) => {
					throw error;
				});
		}
	} catch (error) {
		throw error;
	}
};