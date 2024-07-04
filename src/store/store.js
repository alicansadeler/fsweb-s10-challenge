import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducers/reducers";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, logger);

export const myStore = legacy_createStore(reducer, middleware);
