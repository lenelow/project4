import charactersReducer from "./characters";
import housesReducer from "./houses";
import paginationReducer from "./pagination";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  characters: charactersReducer,
  houses: housesReducer,
  pagination: paginationReducer
});

export default rootReducer;
