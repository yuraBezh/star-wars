import { put, takeEvery } from 'redux-saga/effects';

import apiClient from '../services/axios-service';
import { getRandomPlanetId, mapPlanet } from '../utils/helpers';
import { GET_RANDOM_PLANET_PENDING } from './action-types';
import {
  getRandomPlanetDone,
  getRandomPlanetError,
} from './actions';

function* handleGetRandomPlanet() {
  try {
    const id = getRandomPlanetId();
    const { data } = yield apiClient.get(`/planets/${id}/`);

    yield put(getRandomPlanetDone(mapPlanet(data)));
  } catch (error) {
    yield put(getRandomPlanetError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_RANDOM_PLANET_PENDING, handleGetRandomPlanet);
}
