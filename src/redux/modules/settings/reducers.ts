import produce, { Draft } from 'immer';
import { SettingsState, SettingsActionTypes } from './types';
import * as ActionTypes from './actionTypes';

const initialState: SettingsState = {
  theme: 'light',
  language: 'pt-BR',
};

const changeTheme = produce((draft: Draft<SettingsState>, theme: string) => {
  draft.theme = theme;
});

const changeLanguage = produce(
  (draft: Draft<SettingsState>, language: string) => {
    draft.language = language;
  }
);

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
): SettingsState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return changeTheme(state, action.theme);
    case ActionTypes.CHANGE_LANGUAGE:
      return changeLanguage(state, action.language);
    default:
      return state;
  }
};
