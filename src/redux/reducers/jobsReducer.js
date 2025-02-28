const initialJobsState = {
  jobsList: [],
  isLoading: false,
  hasError: null,
};

const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case "REQUEST_JOBS":
      return {
        ...state,
        isLoading: true,
        hasError: null,
      };

    case "RECEIVE_JOBS":
      return {
        ...state,
        jobsList: action.payload || [],
        isLoading: false,
      };

    case "ERROR_JOBS":
      return {
        ...state,
        hasError: action.payload,
        isLoading: false,
      };
    case "RESET_JOBS":
      return {
        ...state,
        jobsList: [],
      };

    default:
      return state;
  }
};

export default jobsReducer;
