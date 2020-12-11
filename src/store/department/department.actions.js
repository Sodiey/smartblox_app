import * as ActionType from './department.types';

export const ActionStart = (data) => ({
  type: ActionType.ACTION_START,
  payload: data,
});

export const ActionSuccess = (resolve) => ({
  type: ActionType.ACTION_SUCCESS,
  payload: resolve,
});

export const ActionFailure = (reject) => ({
  type: ActionType.ACTION_FAILURE,
  payload: reject,
});

export const clearAction = () => ({
  type: ActionType.CLEAR_ACTION,
});
