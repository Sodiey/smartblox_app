import * as DepartmentType from './department.types';

const INITIAL_STATE = {
  isFetching: false,
  list: [],
  errors: null,
};

const departmentReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DepartmentType.ACTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case DepartmentType.ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: payload,
      };
    case DepartmentType.ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: payload,
      };

    case DepartmentType.CLEAR_ACTION:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default departmentReducer;
