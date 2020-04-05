import { ApplicationState } from '../';

export const getTheme = (state: ApplicationState): string =>
  state.settings.theme;
export const getLanguage = (state: ApplicationState): string =>
  state.settings.language;
