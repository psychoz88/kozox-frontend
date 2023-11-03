import {combineReducers} from 'redux';

import appSlice from './app/reducer';

const rootReducer = combineReducers({
  app: appSlice,
});

export default rootReducer;
