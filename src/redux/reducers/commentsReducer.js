import { FETCH_COMMENTS_OK, FETCH_COMMENTS_ERR, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "../actions";

const initialState = {
  comments: [],
  loading: true,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_OK:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_COMMENTS_ERR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => (comment._id === action.payload._id ? action.payload : comment)),
        loading: false,
        error: null,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment._id !== action.payload),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default commentsReducer;
