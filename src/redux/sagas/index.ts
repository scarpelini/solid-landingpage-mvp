import { all, take, fork } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';
import userSagas from '../modules/user/sagas';
import settingsSagas from '../modules/settings/sagas';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
  yield all([fork(userSagas), fork(settingsSagas)]);
}
