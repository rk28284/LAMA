
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {fileReducer } from "./FileReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({fileReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))