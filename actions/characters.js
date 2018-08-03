import * as types from "./types";
import API from "../utils/api";

export const fetchingCharacters = () => ({
  type: types.FETCHING_CHARACTERS
});

export const fetchingCharactersError = error => ({
  type: types.FETCHING_CHARACTERS_ERROR,
  error
});

export const fetchingHousesSuccess = characters => ({
  type: types.FETCHING_CHARACTERS_SUCCESS,
  characters
});

export const fetchAndHandleCharacters = (
  pageNumber = 1,
  pageSize = 18
) => dispatch => {
  dispatch(fetchingCharacters());
  API.getCharacters(pageNumber, pageSize)
    .then(res => {
      dispatch(fetchingCharactersSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingCharactersError(err));
    });
};

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

export const fetchAndHandleCharacter = url => dispatch => {
  dispatch(fetchingCharacter());
  API.getCharacterDetails(url)
    .then(res => {
      dispatch(fetchingCharacterSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingCharacterError(err));
    });
};

export const setCharacter = url => ({
  type: types.SET_CHARACTER,
  url
});
