import { combineReducers } from "redux";

import tableReducer from "./table-reducer";
import playStateReducer from "./play-state-reducer";
import counterReducer from "./counter-reducer";

export default combineReducers({
  table: tableReducer,
  playState: playStateReducer,
  counter: counterReducer
});
