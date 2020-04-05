import produce, { Draft } from 'immer';
import { UserState, UserActionTypes, UserError, User } from './types';
import * as ActionTypes from './actionTypes';

const initialState: UserState = {
  isLoading: false,
};

const userLogin = produce((draft: Draft<UserState>) => {
  draft.isLoading = true;
  draft.error = undefined;
});

const userLoginSuccess = produce((draft: Draft<UserState>, data: User) => {
  draft.data = data;
  draft.isLoading = false;
  draft.error = undefined;
});

const userLoginFailure = produce(
  (draft: Draft<UserState>, error: UserError) => {
    draft.isLoading = false;
    draft.error = error;
  }
);

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return userLogin(state);
    case ActionTypes.USER_LOGIN_SUCCESS:
      return userLoginSuccess(state, action.data);
    case ActionTypes.USER_LOGIN_FAILURE:
      return userLoginFailure(state, action.error);
    default:
      return state;
  }
};
