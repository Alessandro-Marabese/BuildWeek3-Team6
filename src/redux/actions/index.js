export const FETCH_PROFILE_OK = "FETCH_PROFILE_OK";
export const FETCH_PROFILE_ERR = "FETCH_PROFILE_ERR";

export const getUserProfile = () => {
  let myUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  const API_TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTVlYmU3MDMzNzAwMTUzMTZkYjYiLCJpYXQiOjE3NDAzOTYwMTEsImV4cCI6MTc0MTYwNTYxMX0.2CX2LA1vG2uZs-kBFld_nSXWKtHJ96OIIrejUMdhU2g";

  return async (dispatch, getState) => {
    console.log("getState()", getState());
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
      dispatch({ type: FETCH_PROFILE_OK, payload: error });
    }
  };
};
