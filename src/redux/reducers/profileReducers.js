import { FETCH_PROFILE_OK } from "../actions";

const initialState = {
  content: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_OK:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
