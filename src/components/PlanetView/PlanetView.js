import React from 'react';
import PropTypes from 'prop-types';

const PlanetView = ({
  planet: {
    id,
    name,
    diameter,
    population,
    rotationPeriod
  }
}) => (
  <>
    <img
      className="random-img"
      crossOrigin="anonymous"
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      alt=""
    />
    <div>
      <h2>{name}</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="term">Population: </span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period: </span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter: </span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </>
);

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    diameter: PropTypes.string,
    population: PropTypes.string,
    rotationPeriod: PropTypes.string
  }).isRequired
};

export default PlanetView;
