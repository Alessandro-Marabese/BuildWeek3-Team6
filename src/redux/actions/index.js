export const FETCH_PROFILE_OK = "FETCH_PROFILE_OK";
export const FETCH_PROFILE_ERR = "FETCH_PROFILE_ERR";
export const FETCH_SUGGESTED_PEOPLE_OK = "FETCH_SUGGESTED_PEOPLE_OK";
export const FETCH_EXPERIENCES_OK = "FETCH_EXPERIENCES_OK";
export const FETCH_EXPERIENCES_ERR = "FETCH_EXPERIENCES_ERR";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const RECLUTER_VISIBLE = "RECLUTER_VISIBLE";
export const UPDATE_PROFILE_ERR = "UPDATE_PROFILE_ERR";
export const FETCH_POST_OK = "FETCH_POST_OK";
export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const ADD_POST = "ADD_POST";
export const UPDATE_EXPERIENCE_IMAGE = "UPDATE_EXPERIENCE_IMAGE";

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

        let filteredPeople = suggestedPeople.filter((person) => person.image && person.title);

        dispatch({ type: FETCH_SUGGESTED_PEOPLE_OK, payload: filteredPeople });
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
        if (data && Array.isArray(data)) {
          dispatch({ type: FETCH_EXPERIENCES_OK, payload: data });
        } else {
          throw new Error("La risposta non contiene un array di esperienze valido.");
        }
      } else {
        throw new Error("Errore durante il fetch delle esperienze: " + response.statusText);
      }
    } catch (error) {
      dispatch({ type: FETCH_EXPERIENCES_ERR, payload: error.message });
      console.error("Errore nel fetch delle esperienze:", error);
    }
  };
};
export const addExperience = (userId, experience) => async (dispatch) => {
  console.log(userId, experience);
  try {
    const newExperience = {
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      area: experience.area,
    };

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExperience),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData.error || "Errore durante l'aggiunta dell'esperienza");
    }

    const data = await response.json();
    dispatch({ type: ADD_EXPERIENCE, payload: data });
    return data;
  } catch (error) {
    console.error("Errore durante l'aggiunta dell'esperienza:", error);
  }
};

export const uploadExperienceImage = (userId, expId, imageFile) => async (dispatch) => {
  try {
    let formData = new FormData();
    formData.append("experience", imageFile);

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
      {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Errore durante l'aggiornamento dell'immagine dell'esperienza");
    } else {
      const data = await response.json();
      dispatch({ type: UPDATE_EXPERIENCE_IMAGE, payload: data });

      return data;
    }
  } catch (error) {
    console.error("Errore durante il caricamento dell'immagine dell'esperienza:", error);
  }
};

export const updateExperience = (userId, expId, experience) => async (dispatch) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/`, {
      method: "PUT",
      headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Errore durante l'aggiornamento dell'esperienza");
    } else {
      const data = await response.json();
      dispatch({ type: UPDATE_EXPERIENCE, payload: data });
    }
  } catch (error) {
    console.error("Errore durante l'aggiornamento dell'esperienza:", error);
  }
};

export const deleteExperience = (userId, expId) => async (dispatch) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: API_TOKEN,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Errore durante l'eliminazione dell'esperienza");
    }

    dispatch({ type: DELETE_EXPERIENCE, payload: expId });
  } catch (error) {
    console.error("Errore durante l'eliminazione dell'esperienza:", error);
  }
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

export const getPosts = () => {
  let url = "https://striveschool-api.herokuapp.com/api/posts/";

  return async (dispatch) => {
    dispatch({ type: IS_LOADING_ON, payload: true });
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let posts = await response.json();
        dispatch({ type: FETCH_POST_OK, payload: posts });
      } else {
        throw new Error("Errore durante il caricamento dei post");
      }
    } catch (error) {
      console.log("Errore nella fetch dei post:", error);
    } finally {
      dispatch({ type: IS_LOADING_OFF });
    }
  };
};

export const addPosts = (post) => {
  return async (dispatch) => {
    console.log(post);
    try {
      const newPost = {
        text: post.description,
      };
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: ADD_POST, payload: data });
      } else {
        throw new Error("Errore durante la creazione del post");
      }
    } catch (error) {
      console.log("Errore nella la creazione del post", error);
    }
  };
};
