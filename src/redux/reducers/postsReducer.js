import { ADD_POST, DELETE_POST, FETCH_POST_OK, IS_LOADING_OFF, IS_LOADING_ON, UPDATE_POST, UPDATE_POST_IMAGE } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  isError: null,
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_OK:
      return {
        ...state,
        content: action.payload,
        isLoading: false,
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_POST:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case UPDATE_POST_IMAGE:
      return {
        ...state,
        content: state.content.map((post) => (post._id === action.payload._id ? { ...post, image: action.payload.image } : post)),
      };
    case DELETE_POST:
      return {
        ...state,
        content: state.content.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        content: state.content.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };
    default:
      return state;
  }
};
export default postsReducer;
