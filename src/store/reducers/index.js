import { combineReducers } from 'redux';

import { authData } from './authData';
import { userData } from './userData';

export const rootReducer = combineReducers({
  authData,
  userData
});
