import { fork, select, all, takeLatest } from 'redux-saga/effects';

import i18n from 'i18n/i18n';
import { ChangeLanguageAction } from './types';
import * as ActionTypes from './actionTypes';
import { getLanguage } from './selectors';

function* handleChangeLanguage(action: ChangeLanguageAction): Generator {
  yield i18n.changeLanguage(action.language);
}

function* watchChangeLanguage(): Generator {
  yield takeLatest(ActionTypes.CHANGE_LANGUAGE, handleChangeLanguage);
}

function* configureApp(): Generator {
  const language = yield select(getLanguage);
  yield i18n.changeLanguage(language as string);
}

export default function* settingsSagas() {
  yield all([fork(configureApp), fork(watchChangeLanguage)]);
}
