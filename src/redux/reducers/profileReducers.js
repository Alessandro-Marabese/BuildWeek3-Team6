import { FETCH_PROFILE_OK, FETCH_SUGGESTED_PEOPLE_OK, RECLUTER_VISIBLE } from "../actions";

const initialState = {
  content: [],
  suggestedPeople: [],
  recluterVisible: true,
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
    case RECLUTER_VISIBLE:
      return {
        ...state,
        recluterVisible: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
