import { combineReducers } from "redux";
import * as Window from "./window";
import * as Subject from "./subject";
// ______________________________________________________
//

export const initialState = () => ({
  window: Window.initialState(),
  subject: Subject.initialState()
});

// ______________________________________________________
//

export const reducer = combineReducers({
  window: Window.reducer,
  subject: Subject.reducer
});
