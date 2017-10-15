/**
 * Created by soufiaane on 7/9/17.
 */

import * as sessionTypes from '../constants/session';

export function authRequest(payload) {
  return {type: sessionTypes.AUTH_REQUEST, ...payload};
}

export function authSuccess(response) {
  return {type: sessionTypes.AUTH_SUCCESS, ...response};
}

export function logoutRequest() {
  return {type: sessionTypes.LOGOUT_REQUEST};
}

export function logoutSuccess() {
  return {type: sessionTypes.LOGOUT_SUCCESS};
}

export function logoutError(error) {
  return {type: sessionTypes.LOGOUT_ERROR, ...error};
}
