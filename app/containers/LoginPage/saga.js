import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as apis from 'utils/apis';

import { LOGIN_ACTION } from './constants';
import { createCookie } from '../App/auth';

export function* requestLogin(action) {
  try {
    const resp = yield call(apis.login, action.userData);
    createCookie(resp.token);
    yield put(push(`/`));
  } catch (error) {
    // yield displayError(error, requestPeerSavingsFailed(error));
  }
}

export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_ACTION, requestLogin);
}
