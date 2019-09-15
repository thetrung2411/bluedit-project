import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import uiReducers from "./reducers/uiReducers";
import userReducers from "./reducers/userReducers";
import postReducers from "./reducers/postReducers";
const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  UI: uiReducers,
  user: userReducers,
  post: postReducers
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);
export default store;
