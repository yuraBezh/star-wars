import React from 'react';
import PropTypes from 'prop-types';

import './CreatureCard.css';
import { PeopleShape, PlanetShape, StarshipShape } from '../../utils/shapes';
import Spinner from '../Spinner';
import CreatureView from '../CreatureView';

const CreatureCard = (props) => {
  const { loading, data } = props;

  return (
    <div className="creature-card card d-flex">
      {loading && <Spinner />}
      {!loading && data && <CreatureView {...props} />}
    </div>
  );
};

CreatureCard.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.oneOfType([PeopleShape, PlanetShape, StarshipShape]).isRequired,
};

CreatureCard.defaultProps = {
  loading: false
};

export default CreatureCard;
