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

export const fetchAndHandleHouses = () => dispatch => {
  dispatch(fetchingHouses());
  API.getHouses()
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

export const fetchAndHandleHouse = () => dispatch => {
  dispatch(fetchingHouse());
  API.getHouse()
    .then(res => {
      dispatch(fetchingHouseSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchingHouseError(err));
    });
};
