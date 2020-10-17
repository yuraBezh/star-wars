import React from 'react';
import PropTypes from 'prop-types';

import './CreatureView.css';
import { getStartKey } from '../../utils/helpers';
import { PeopleShape, PlanetShape, StarshipShape } from '../../utils/shapes';

const CreatureView = ({ data, image, fields }) => {
  const startKey = getStartKey();

  const dataList = fields.map(({ field, label }, idx) => {
    const currentKey = startKey + idx;

    return (
      <li className="list-group-item" key={currentKey}>
        <span className="term">
          {label}
          :
          {' '}
        </span>
        <span>{data[field]}</span>
      </li>
    );
  });

  return (
    <>
      <img
        className="creature-image"
        crossOrigin="anonymous"
        src={image}
        alt=""
      />

      <div className="card-body">
        <h4 className="text-primary">{data.name}</h4>
        <ul className="list-group list-group-flush">
          {dataList}
        </ul>
      </div>
    </>
  );
};

CreatureView.propTypes = {
  data: PropTypes.oneOfType([PeopleShape, PlanetShape, StarshipShape]).isRequired,
  image: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    label: PropTypes.string
  })).isRequired
};

export default CreatureView;
