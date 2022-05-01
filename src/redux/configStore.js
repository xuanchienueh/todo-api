import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from "redux-saga";
import reduxThunk from "redux-thunk";
import TodoReducer from "./Reducer/TodoReducer";
import { rootSaga } from "./saga/rootSaga";

const middlewareSaga = createMiddlewareSaga();
const rootReducer = combineReducers({
  todos: TodoReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, middlewareSaga)
);
middlewareSaga.run(rootSaga);

export default store;
