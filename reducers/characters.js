import * as types from "../actions/types";

const initialState = {
  character: null,
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
    default: {
      return state;
    }
  }
};
