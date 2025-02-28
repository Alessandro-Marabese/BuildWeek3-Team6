import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";
import commentsReducer from "../reducers/commentsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
