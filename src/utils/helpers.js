import { MAX_ID_PLANET, MIN_ID_PLANET } from '../constants/stuff';

export const getRandomPlanetId = () => Math.floor(Math.random() * MAX_ID_PLANET) + MIN_ID_PLANET;

const getId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;

  return item.url.match(idRegExp)[1];
};

export const mapPlanet = (planet) => ({
  id: getId(planet),
  name: planet.name,
  population: planet.population,
  rotationPeriod: planet.rotation_period,
  diameter: planet.diameter,
});

export const getStartKey = () => Math.floor(Math.random() * 20);
