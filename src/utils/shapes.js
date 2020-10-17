import PropTypes from 'prop-types';

export const PeopleShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  eyeColor: PropTypes.string,
  birthYear: PropTypes.string
});

export const PlanetShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  diameter: PropTypes.string,
  population: PropTypes.string,
  rotationPeriod: PropTypes.string
});

export const StarshipShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  model: PropTypes.string,
  length: PropTypes.string,
  passengers: PropTypes.string,
  costInCredits: PropTypes.string
});
