import { ADD_POST, FETCH_POST_OK, IS_LOADING_OFF, IS_LOADING_ON, UPDATE_POST_IMAGE } from "../actions";

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
    default:
      return state;
  }
};
export default postsReducer;
