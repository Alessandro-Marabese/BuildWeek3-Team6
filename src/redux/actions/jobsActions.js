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
      const url = searchQuery.trim()
        ? `${baseUrl}?search=${encodeURIComponent(searchQuery)}`
        : baseUrl;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Errore API: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      const jobsArray = data.data || [];

      if (!Array.isArray(jobsArray)) {
        dispatch(errorJobs("Formato dei dati ricevuto non valido"));
        return;
      }

      dispatch(receiveJobs(jobsArray));
    } catch (error) {
      dispatch(errorJobs(error.message));
    }
  };
};
