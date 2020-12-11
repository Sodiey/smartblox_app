import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import departmentReducer from './department/department.reducer';
import alertReducer from './alert/alert.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['checkout', 'filter'],
// };

const rootReducer = combineReducers({
  department: departmentReducer,
  alert: alertReducer,
});
export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);
