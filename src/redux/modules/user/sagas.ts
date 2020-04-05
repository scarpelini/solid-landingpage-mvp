import { fork, call, put, all, takeLatest, delay } from 'redux-saga/effects';
import { login } from 'services/userService';
import * as ActionTypes from './actionTypes';
import { UserLoginAction, User } from './types';
import { userLoginSuccess, userLoginFailure } from './actions';

function* handleUserLogin(action: UserLoginAction): Generator {
  yield delay(3000);

  try {
    const { email, password } = action.input;
    const user = yield call(login, email, password);
    yield put(userLoginSuccess(user as User));
  } catch (error) {
    yield put(userLoginFailure(error));
  }
}

function* watchUserLogin(): Generator {
  yield takeLatest(ActionTypes.USER_LOGIN, handleUserLogin);
}

export default function* userSagas() {
  yield all([fork(watchUserLogin)]);
}
