import * as types from "../actions/types";

const initialState = {
  characters: [],
  character: null,
  url: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_CHARACTER:
      return {
        ...state,
        loading: true
      };
    case types.FETCHING_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.character,
        loading: false
      };
    case types.FETCHING_CHARACTERS:
      return {
        ...state,
        loading: true
      };
    case types.FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false
      };
    case types.SET_CHARACTER:
      return {
        ...state,
        url: action.url
      };
    default: {
      return state;
    }
  }
};
