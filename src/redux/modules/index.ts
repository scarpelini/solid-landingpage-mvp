import { combineReducers } from 'redux';
import { persistReducer, WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/reducers';
import { settingsReducer } from './settings/reducers';

const persistUserReducer = (storage: WebStorage) => {
  return persistReducer(
    {
      storage,
      key: 'user',
      keyPrefix: '',
      blacklist: ['error', 'isLoading'],
    },
    userReducer
  );
};

const persistSettingsReducer = (storage: WebStorage) => {
  return persistReducer(
    {
      storage,
      key: 'settings',
      keyPrefix: '',
    },
    settingsReducer
  );
};

export const rootReducer = combineReducers({
  user: persistUserReducer(storage),
  settings: persistSettingsReducer(storage),
});

export type ApplicationState = ReturnType<typeof rootReducer>;
