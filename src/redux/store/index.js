import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";
import experiencesReducer from "../reducers/experiencesReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
