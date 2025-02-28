import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";
import jobsReducer from "../reducers/jobsReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
  posts: postsReducer,
  jobs: jobsReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
