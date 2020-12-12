import * as AlertTypes from './alert.types';

export const openAlert = (payload) => ({
  type: AlertTypes.OPEN_ALERT,
  payload: payload,
});
export const closeAlert = () => ({
  type: AlertTypes.CLOSE_ALERT,
});

