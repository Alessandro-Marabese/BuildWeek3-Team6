export const FETCH_PROFILE_OK = "FETCH_PROFILE_OK";
export const FETCH_PROFILE_ERR = "FETCH_PROFILE_ERR";
export const FETCH_SUGGESTED_PEOPLE_OK = "FETCH_SUGGESTED_PEOPLE_OK";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTVlYmU3MDMzNzAwMTUzMTZkYjYiLCJpYXQiOjE3NDAzOTYwMTEsImV4cCI6MTc0MTYwNTYxMX0.2CX2LA1vG2uZs-kBFld_nSXWKtHJ96OIIrejUMdhU2g";

export const getUserProfile = () => {
  let myUrl = "https://striveschool-api.herokuapp.com/api/profile/me";

  return async (dispatch, getState) => {
    console.log("Fetching user profile...");

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
    console.log("Fetching suggested people...");

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
        console.log("Suggested People:", suggestedPeople); // DEBUG
        dispatch({ type: FETCH_SUGGESTED_PEOPLE_OK, payload: suggestedPeople });
      } else {
        throw new Error("Errore durante la fetch dei suggerimenti");
      }
    } catch (error) {
      console.error("Errore nel recupero dei suggerimenti:", error);
    }
  };
};
