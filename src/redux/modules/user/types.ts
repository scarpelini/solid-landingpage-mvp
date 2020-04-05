import * as ActionTypes from './actionTypes';

export interface UserError {
  code: number;
  message: string;
}

export interface UserInput {
  email: string;
  password: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserState {
  readonly data?: User;
  readonly error?: UserError;
  readonly isLoading: boolean;
}

export interface UserLoginAction {
  type: typeof ActionTypes.USER_LOGIN;
  input: UserInput;
}

export interface UserLoginSuccess {
  type: typeof ActionTypes.USER_LOGIN_SUCCESS;
  data: User;
}

export interface UserLoginFailure {
  type: typeof ActionTypes.USER_LOGIN_FAILURE;
  error: UserError;
}

export type UserActionTypes =
  | UserLoginAction
  | UserLoginSuccess
  | UserLoginFailure;
