/**
 * Created by soufiaane on 7/21/17.
 */

import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AUTH_REQUEST, LOGOUT_REQUEST } from '../constants/session';
import { authSuccess, logoutSuccess, logoutError } from '../actions/login';
import { authenticate, logout } from '../api/auth';


function* watchAuthRequest({
  username,
  password,
  resolve,
  reject,
  dispatch,
}) {
  try {
    const result = yield call(authenticate, username, password, dispatch);
    yield call(resolve);
    yield put(authSuccess(result));
    yield put(push('/'));
  } catch (error) {
    // TODO treat error separatly
    yield call(reject, { serverError: error.response ? error.response.data.message : 'Something bad happend !' });
  }
}

function* watchLogoutRequest({ dispatch }) {
  try {
    const result = yield call(logout, dispatch);
    yield put(logoutSuccess(result));
    yield put(push('/login'));
  } catch (error) {
    // TODO treat error separatly
    yield put(logoutError(error));
  }
}

export const authSaga = function* authSaga() {
  yield takeEvery(AUTH_REQUEST, watchAuthRequest);
};

export const logoutSaga = function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUEST, watchLogoutRequest);
};
