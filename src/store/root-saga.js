import { all, call } from 'redux-saga/effects';
import { departmentSagas } from './department/department.sagas';
import { alertSagas } from './alert/alert.sagas';

export default function* rootSaga() {
  yield all([call(departmentSagas), call(alertSagas)]);
}
