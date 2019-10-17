import { combineReducers } from 'redux';
import { placeholderReducer } from './placeholderReducer';

// Here, we're combining all reducers we'll make into a single reducer that is being exported to index.js
// For each component that we're managing state with,
// we can break out each reducer into it's own separate file and place between the curlies below.

export const rootReducer = combineReducers({ placeholderReducer });
