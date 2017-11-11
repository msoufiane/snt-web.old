/**
 * Created by soufiaane on 7/22/17.
 */

import { AUTH_SUCCESS, LOGOUT_SUCCESS } from '../constants/session';
import authUserModel from '../models/authUserModel';

export default (state = authUserModel, action) => {
  if (!action) return state;
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, ...action.user, token: action.token };
    case LOGOUT_SUCCESS:
      return { ...authUserModel };
    default:
      return state;
  }
};
