import { createStore, combineReducers, applyMiddleware } from "redux";
import sneakersReducer from "./sneakers_reducer";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./cart_reducer";
import mainReducer from "./main_reducer";
import appReducer from "./app_reducer";

let reducers = combineReducers({
  sneakers: sneakersReducer,
  cart: cartReducer,
  main: mainReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
