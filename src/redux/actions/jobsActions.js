export const requestJobs = () => ({
  type: "REQUEST_JOBS",
});

export const receiveJobs = (jobs) => ({
  type: "RECEIVE_JOBS",
  payload: jobs,
});

export const errorJobs = (error) => ({
  type: "ERROR_JOBS",
  payload: error,
});

export const fetchJobs = (searchQuery = "") => {
  return async (dispatch) => {
    dispatch(requestJobs());

    try {
      const baseUrl = "https://strive-benchmark.herokuapp.com/api/jobs";
      const url = searchQuery ? `${baseUrl}?search=${searchQuery}` : baseUrl;

      const response = await fetch(url);
      const data = await response.json();

      const jobsArray = data.data || [];

      if (!Array.isArray(jobsArray)) {
        throw new Error("L'API non ha restituito un array di lavori valido");
      }

      dispatch(receiveJobs(jobsArray));
    } catch (error) {
      dispatch(errorJobs(error.message));
    }
  };
};
