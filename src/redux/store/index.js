import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
