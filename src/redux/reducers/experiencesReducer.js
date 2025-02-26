import {
  FETCH_EXPERIENCES_OK,
  FETCH_EXPERIENCES_ERR,
  ADD_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  UPDATE_EXPERIENCE_IMAGE,
} from "../actions";

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
    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
        loading: false,
        error: null,
      };

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
        loading: false,
        error: null,
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter((exp) => exp._id !== action.payload),
        loading: false,
        error: null,
      };
    case UPDATE_EXPERIENCE_IMAGE:
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload._id ? { ...exp, image: action.payload.image } : exp
        ),
      };
    default:
      return state;
  }
};

export default experiencesReducer;
