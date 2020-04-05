import { ApplicationState } from '../';
import { User } from './types';

export const getUser = (state: ApplicationState): User | undefined =>
  state.user.data;
