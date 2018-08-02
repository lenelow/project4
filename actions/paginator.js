import * as types from "./types";
import { fetchAndHandleHouses } from "./houses";

export const handlePagination = (pageNumber = 1, pageSize = 18) => dispatch => {
  dispatch(fetchAndHandleHouses(pageNumber, pageSize));
  dispatch(setPagination(pageNumber, pageSize));
};

const setPagination = (pageNumber, pageSize) => ({
  type: types.SET_PAGINATION,
  pageNumber,
  pageSize
});
