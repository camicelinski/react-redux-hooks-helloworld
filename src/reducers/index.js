import { combineReducers } from "redux";

import counterReducer from './counter';
import ipReducer from './ip';

const reducers = combineReducers({
  counter: counterReducer,
  ip: ipReducer
})

export default reducers
