/**
 * Created by soufiaane on 7/14/17.
 */

import { all, fork } from 'redux-saga/effects';
import { authSaga, logoutSaga } from './auth';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(logoutSaga),
  ]);
}
