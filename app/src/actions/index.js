import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getJoke = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (joke) => {
  return { type: FETCH_SUCCESS, payload: joke };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
