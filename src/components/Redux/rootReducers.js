import pizzReducer from "./reducers/pizzaReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
});

export default rootReducer;
