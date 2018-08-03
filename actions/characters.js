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

export const fetchingCharacters = () => ({
  type: types.FETCHING_CHARACTERS
});

export const fetchingCharactersError = error => ({
  type: types.FETCHING_CHARACTERS_ERROR,
  error
});

export const fetchingCharactersSuccess = characters => ({
  type: types.FETCHING_CHARACTERS_SUCCESS,
  characters
});

export const fetchAndHandleCharacters = () => dispatch => {
  dispatch(fetchingCharacters());
  API.getCharacters()
    .then(res => {
      dispatch(fetchingCharactersSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingCharactersError(err));
    });
};

export const setCharacters = swornMembers => ({
  type: types.SET_CHARACTERS,
  swornMembers
});
