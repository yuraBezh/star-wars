import { createSelector } from '@reduxjs/toolkit';

export const selectRandomPlanet = createSelector(
  (state) => state,
  (state) => state.randomPlanet,
);

export const selectRandomPlanetError = createSelector(
  (state) => state,
  (state) => state.randomPlanetError,
);

export const selectIsRandomPlanetLoading = createSelector(
  (state) => state,
  (state) => state.isRandomPlanetLoading,
);
