import React from 'react';
import PropTypes from 'prop-types';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PlanetsList, PlanetCard } from '../../sw-components/index';

const PlanetsPage = ({ match, history }) => {
  const planetsList = (
    <PlanetsList
      onItemSelected={(id) => history.push(id)}
      renderName={({ name }) => name}
    />
  );

  const planetCard = (
    <PlanetCard
      dataId={match.params.id}
      type="planet"
    />
  );

  return (
    <ErrorBoundary>
      <h2>Planets</h2>
      <Row left={planetsList} right={planetCard} />
    </ErrorBoundary>
  );
};

PlanetsPage.propTypes = {
  match: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired
};

export default PlanetsPage;
