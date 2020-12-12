import * as AlertTypes from './alert.types';

const INITIAL_STATE = {
  openAlert: false,
  type: null,
  severity: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case AlertTypes.OPEN_ALERT:
      return {
        openAlert: true,
        ...payload,
      };
    case AlertTypes.CLOSE_ALERT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default alertReducer;
