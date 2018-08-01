import charactersReducer from "./characters";
import housesReducer from "./houses";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  characters: charactersReducer,
  houses: housesReducer
});

export default rootReducer;
