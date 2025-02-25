export const FETCH_PROFILE_OK = "FETCH_PROFILE_OK";
export const FETCH_PROFILE_ERR = "FETCH_PROFILE_ERR";
export const FETCH_SUGGESTED_PEOPLE_OK = "FETCH_SUGGESTED_PEOPLE_OK";
export const FETCH_EXPERIENCES_OK = "FETCH_EXPERIENCES_OK";
export const FETCH_EXPERIENCES_ERR = "FETCH_EXPERIENCES_ERR";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const RECLUTER_VISIBLE = "RECLUTER_VISIBLE";
export const UPDATE_PROFILE_ERR = "UPDATE_PROFILE_ERR";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTU4YWU3MDMzNzAwMTUzMTZkYjMiLCJpYXQiOjE3NDA0OTI3NzMsImV4cCI6MTc0MTcwMjM3M30.ghEymY3a9sDb5HV-twEe3aU29Z6oNBtkTfwahoV1JtY";

export const getUserProfile = () => {
  let myUrl = "https://striveschool-api.herokuapp.com/api/profile/me";

  return async (dispatch) => {
    try {
      let resp = await fetch(myUrl, {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let myProfile = await resp.json();
        dispatch({ type: FETCH_PROFILE_OK, payload: myProfile });
      } else {
        throw new Error("Errore durante la fetch del profilo");
      }
    } catch (error) {
      dispatch({ type: FETCH_PROFILE_ERR, payload: error });
      console.error("Errore nel recupero del profilo:", error);
    }
  };
};

export const getSuggestedPeople = () => {
  let myUrl = "https://striveschool-api.herokuapp.com/api/profile/";

  return async (dispatch) => {
    try {
      let resp = await fetch(myUrl, {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let suggestedPeople = await resp.json();

        dispatch({ type: FETCH_SUGGESTED_PEOPLE_OK, payload: suggestedPeople });
      } else {
        throw new Error("Errore durante la fetch dei suggerimenti");
      }
    } catch (error) {
      console.error("Errore nel recupero dei suggerimenti:", error);
    }
  };
};

export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        dispatch({ type: FETCH_EXPERIENCES_OK, payload: data });
      } else {
        throw new Error("Errore durante il fetch delle esperienze");
      }
    } catch (error) {
      dispatch({ type: FETCH_EXPERIENCES_ERR, payload: error.message });
      console.error("Errore nel fetch delle esperienze:", error);
    }
  };
};

export const editImageProfile = (imgProfile, idProfile) => {
  let myUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/picture`;

  return async (dispatch) => {
    try {
      let formData = new FormData();
      formData.append("profile", imgProfile);

      let resp = await fetch(myUrl, {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
        },
        body: formData,
      });

      if (!resp.ok) {
        throw new Error(`Errore POST immagine! ${resp.status}`);
      }

      let updatedProfile = await resp.json();
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updatedProfile });
    } catch (error) {
      console.error("Errore durante l'aggiornamento del profilo:", error);
      dispatch({ type: UPDATE_PROFILE_ERR, payload: error.message });
    }
  };
};
