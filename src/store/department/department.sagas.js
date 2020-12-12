import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import * as deptAction from './department.actions';
import * as DepartmentType from './department.types';

const getDepartmentState = (state) => state.department;

export function* actionStartAsync({ payload }) {
  const tetantState = yield select(getDepartmentState);
  try {
    // yield axios.get(url, {
    //   headers: {
    //     'Content-Type': ''
    //   },
    // });
    yield put(deptAction.ActionSuccess(tetantState.list));
  } catch (err) {
    yield put(deptAction.ActionFailure(err.errors));
  }
}

export function* watchActionStart() {
  yield takeLatest(DepartmentType.ACTION_START, actionStartAsync);
}

export function* departmentSagas() {
  yield all([call(watchActionStart)]);
}
