import { takeLatest, all, call, put, delay } from 'redux-saga/effects';

import * as alertAction from './alert.actions';
import * as AlertTypes from './alert.types';

// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* closeAlertStartAsync() {
  try {
    yield delay(3000);
    yield put(alertAction.closeAlert());
  } catch (err) {
    console.log(err);
  }
}

export function* watchCloseAlertStart() {
  yield takeLatest(AlertTypes.OPEN_ALERT, closeAlertStartAsync);
}

export function* alertSagas() {
  yield all([call(watchCloseAlertStart)]);
}
