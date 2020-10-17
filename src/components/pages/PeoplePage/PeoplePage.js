import React from 'react';
import PropTypes from 'prop-types';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PeopleList, PersonCard } from '../../sw-components/index';

const PeoplePage = ({ match, history }) => {
  const itemsList = (
    <PeopleList
      onItemSelected={(id) => history.push(id)}
      renderName={({ name }) => name}
    />
  );

  const personCard = (
    <PersonCard
      dataId={match.params.id}
      type="person"
    />
  );

  return (
    <ErrorBoundary>
      <h2>People</h2>
      <Row left={itemsList} right={personCard} />
    </ErrorBoundary>
  );
};

PeoplePage.propTypes = {
  match: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired
};

export default PeoplePage;
