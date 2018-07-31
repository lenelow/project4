import * as types from "../actions/types";

const initialState = {
  houses: [],
  house: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_HOUSES:
      return {
        ...state,
        loading: true
      };
    case types.FETCHING_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.houses,
        loading: false
      };
    case types.FETCHING_HOUSE:
      return {
        ...state,
        loading: true
      };
    case types.FETCHING_HOUSE_SUCCESS:
      return {
        ...state,
        house: action.house,
        loading: false
      };
    default: {
      return state;
    }
  }
};
