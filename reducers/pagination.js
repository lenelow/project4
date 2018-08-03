import * as types from "../actions/types";

const initialState = {
  pageNumber: 1,
  pageSize: 18
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PAGINATION:
      return {
        pageNumber: action.pageNumber,
        pageSize: action.pageSize
      };
    default: {
      return state;
    }
  }
};
