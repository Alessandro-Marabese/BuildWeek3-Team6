import { FETCH_PROFILE_OK, FETCH_SUGGESTED_PEOPLE_OK } from "../actions";

const initialState = {
  content: [],
  suggestedPeople: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_OK:
      return {
        ...state,
        content: action.payload,
      };

    case FETCH_SUGGESTED_PEOPLE_OK:
      return {
        ...state,
        suggestedPeople: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
