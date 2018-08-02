import * as types from "./types";
import API from "../utils/api";

export const fetchingHouses = () => ({
  type: types.FETCHING_HOUSES
});

export const fetchingHousesError = error => ({
  type: types.FETCHING_HOUSES_ERROR,
  error
});

export const fetchingHousesSuccess = houses => ({
  type: types.FETCHING_HOUSES_SUCCESS,
  houses
});

export const fetchAndHandleHouses = (
  pageNumber = 1,
  pageSize = 14
) => dispatch => {
  dispatch(fetchingHouses());
  API.getHouses(pageNumber, pageSize)
    .then(res => {
      dispatch(fetchingHousesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingHousesError(err));
    });
};

export const fetchingHouse = () => ({
  type: types.FETCHING_HOUSE
});

export const fetchingHouseError = error => ({
  type: types.FETCHING_HOUSE_ERROR,
  error
});

export const fetchingHouseSuccess = house => ({
  type: types.FETCHING_HOUSE_SUCCESS,
  house
});

export const fetchAndHandleHouse = url => dispatch => {
  dispatch(fetchingHouse());
  API.getHouseDetails(url)
    .then(res => {
      dispatch(fetchingHouseSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingHouseError(err));
    });
};

export const setHouse = url => ({
  type: types.SET_HOUSE,
  url
});
