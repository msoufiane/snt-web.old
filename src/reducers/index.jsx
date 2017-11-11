/**
 * Created by soufiaane on 7/8/17.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import authUserReducer from './authUser';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  authUser: authUserReducer,
});

export default rootReducer;
