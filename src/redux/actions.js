import {
  GET_RANDOM_PLANET_PENDING,
  GET_RANDOM_PLANET_DONE,
  GET_RANDOM_PLANET_ERROR,
} from './action-types';

export const getRandomPlanet = () => ({
  type: GET_RANDOM_PLANET_PENDING
});
export const getRandomPlanetDone = (randomPlanet) => ({
  type: GET_RANDOM_PLANET_DONE,
  payload: randomPlanet
});
export const getRandomPlanetError = (error) => ({
  type: GET_RANDOM_PLANET_ERROR,
  payload: error
});
