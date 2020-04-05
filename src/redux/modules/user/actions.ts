import * as ActionTypes from './actionTypes';
import { UserActionTypes, UserInput, User, UserError } from './types';

export const userLogin = (input: UserInput): UserActionTypes => ({
  type: ActionTypes.USER_LOGIN,
  input,
});

export const userLoginSuccess = (data: User): UserActionTypes => ({
  type: ActionTypes.USER_LOGIN_SUCCESS,
  data,
});

export const userLoginFailure = (error: UserError): UserActionTypes => ({
  type: ActionTypes.USER_LOGIN_FAILURE,
  error,
});
