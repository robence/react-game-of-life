import { combineReducers } from "redux";

import tableReducer from "./table-reducer";
import playStateReducer from "./play-state-reducer";
import counterReducer from "./counter-reducer";

const rootReducer = combineReducers({
  table: tableReducer,
  playState: playStateReducer,
  counter: counterReducer
});

export default rootReducer;
