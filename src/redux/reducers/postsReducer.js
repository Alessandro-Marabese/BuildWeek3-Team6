import { ADD_POST, FETCH_POST_OK, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

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
    default:
      return state;
  }
};
export default postsReducer;
