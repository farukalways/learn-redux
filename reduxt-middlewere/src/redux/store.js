import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log("Prev State:", store.getState());
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

// 👇 DevTools enable করার জন্য
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(myLogger)),
);

export default store;
