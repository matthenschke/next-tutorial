import { createStore, combineReducers } from "redux";
import fetchReducer from "./reducers/fetchReducer";

const rootReducer = combineReducers({ bpi: fetchReducer });

const store = createStore(rootReducer);

export default store;
