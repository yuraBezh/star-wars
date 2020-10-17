import { createReducer } from '@reduxjs/toolkit';

import {
  GET_RANDOM_PLANET_PENDING,
  GET_RANDOM_PLANET_DONE,
  GET_RANDOM_PLANET_ERROR,
} from './action-types';

const initialState = {
  randomPlanet: null,
  randomPlanetError: null,
  isRandomPlanetLoading: false,
};

export default createReducer(initialState, {
  [GET_RANDOM_PLANET_PENDING]: (state) => ({
    ...state,
    isRandomPlanetLoading: true,
    randomPlanetError: null
  }),
  [GET_RANDOM_PLANET_DONE]: (state, { payload }) => ({
    ...state,
    randomPlanet: payload,
    isRandomPlanetLoading: false,
    randomPlanetError: null
  }),
  [GET_RANDOM_PLANET_ERROR]: (state, { payload }) => ({
    ...state,
    randomPlanet: null,
    isRandomPlanetLoading: false,
    randomPlanetError: payload
  }),
});
