import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../ErrorBoundary';
import { StarshipsList } from '../../sw-components/index';

const StarshipsPage = ({ history }) => (
  <ErrorBoundary>
    <h2>Starships</h2>
    <StarshipsList
      onItemSelected={(id) => history.push(id)}
      renderName={({ name }) => name}
    />
  </ErrorBoundary>
);

StarshipsPage.propTypes = {
  history: PropTypes.any.isRequired
};

export default StarshipsPage;
