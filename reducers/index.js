import charactersReducer from "./characters";
import housesReducer from "./houses";
import { combineReducers } from "../../../../Library/Caches/typescript/2.9/node_modules/redux";

const rootReducer = combineReducers({
  characters: charactersReducer,
  houses: housesReducer
});

export default rootReducer;
