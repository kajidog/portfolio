import { combineReducers } from "redux";
import * as Window from "./window";
// ______________________________________________________
//

export const initialState = () => ({
  window: Window.initialState(),
});

// ______________________________________________________
//

export const reducer = combineReducers({
  window: Window.reducer,
});
