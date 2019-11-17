import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import canvas from "./canvas";
// import axios from "axios";
// import thunk from "redux-thunk";

let middlewares = [
  // thunkMiddleWare()
];

if (process.browser) {
  // only use redux logger in the browser (for testing purposes)
  middlewares = [...middlewares, createLogger({ collapsed: true })];
}

const reducer = combineReducers({ canvas });

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
