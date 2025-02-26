import { FETCH_POST_ERR, FETCH_POST_OK, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

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
    case FETCH_POST_ERR:
      return {
        ...state,
        isLoading: action.payload,
        isError: true,
      };
    default:
      return state;
  }
};
export default postsReducer;
