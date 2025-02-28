import {
  FETCH_OTHER_PROFILE_OK,
  FETCH_PROFILE_OK,
  FETCH_SUGGESTED_PEOPLE_OK,
  RECLUTER_VISIBLE,
  UPDATE_PROFILE_SUCCESS,
} from "../actions";

const initialState = {
  content: [],
  suggestedPeople: [],
  recluterVisible: true,
  imageUpdate: false,
  otherProfile: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_OK:
      return {
        ...state,
        content: action.payload,
      };
    case FETCH_OTHER_PROFILE_OK:
      return {
        ...state,
        otherProfile: action.payload,
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
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        imageUpdate: true,
      };
    default:
      return state;
  }
};

export default profileReducer;
