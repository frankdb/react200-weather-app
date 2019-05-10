import { combineReducers } from 'redux';

import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  data: searchReducer
});

export default rootReducer;
