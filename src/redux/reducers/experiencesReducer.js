import { FETCH_EXPERIENCES_OK, FETCH_EXPERIENCES_ERR } from "../actions";

const initialState = {
  experiences: [],
  loading: true,
  error: null,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_OK:
      return {
        ...state,
        experiences: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EXPERIENCES_ERR:
      return {
        ...state,

        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default experiencesReducer;
