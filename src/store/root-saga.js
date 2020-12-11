import { all, call } from 'redux-saga/effects';
import { departmentSagas } from './department/department.sagas';

export default function* rootSaga() {
  yield all([call(departmentSagas)]);
}
