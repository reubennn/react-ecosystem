import {createStore, combineReducers} from "redux";

const reducers = {};

// Put Reducers into a form which we can pass to the createStore function
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
