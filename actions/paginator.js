import * as types from "./types";
import { fetchAndHandleHouses } from "./houses";
import { fetchAndHandleCharacters } from "./characters";

export const handlePagination = (pageNumber = 1, pageSize = 14) => dispatch => {
  dispatch(fetchAndHandleHouses(pageNumber, pageSize));
  dispatch(fetchAndHandleCharacters(pageNumber, pageSize));
  dispatch(setPagination(pageNumber, pageSize));
};

const setPagination = (pageNumber, pageSize) => ({
  type: types.SET_PAGINATION,
  pageNumber,
  pageSize
});
