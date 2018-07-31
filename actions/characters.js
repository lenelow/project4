import * as types from "./types";
import API from "../utils/api";

export const fetchingCharacter = () => ({
  type: types.FETCHING_CHARACTER
});

export const fetchingCharacterError = error => ({
  type: types.FETCHING_CHARACTER_ERROR,
  error
});

export const fetchingCharacterSuccess = character => ({
  type: types.FETCHING_CHARACTER_SUCCESS,
  character
});

export const fetchAndHandleCharacter = () => dispatch => {
  dispatch(fetchingCharacter());
  API.getCharacter()
    .then(res => {
      dispatch(fetchingCharacterSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingCharacterError(err));
    });
};
