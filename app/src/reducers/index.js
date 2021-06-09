import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SELECT_CATEGORY,
} from "../actions";

const initialState = {
  joke: "",
  isFetching: false,
  error: "",
  categories: [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ],
  category: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        joke: action.payload.value,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        isFetching: false,
        category: action.payload,
      };
    default:
      return state;
  }
};
