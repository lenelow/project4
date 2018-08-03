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
        houses: action.character,
        loading: false
      };
    default: {
      return state;
    }
  }
};
