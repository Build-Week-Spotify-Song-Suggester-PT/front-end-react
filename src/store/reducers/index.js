import { combineReducers } from 'redux';
import { auth } from './auth';
import { login } from './login';

// Here, we're combining all reducers we'll make into a single reducer that is being exported to index.js
// For each component that we're managing state with,
// we can break out each reducer into it's own separate file and place between the curlies below.

export const rootReducer = combineReducers({
  auth,
  login
});
