import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";

const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
