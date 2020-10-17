import React from 'react';
import PropTypes from 'prop-types';

import './ItemsList.css';

const ItemsList = ({
  data,
  onItemSelected,
  renderName,
  children
}) => {
  const content = data
    ? data.map((item) => {
      const { id } = item;
      const label = renderName(item);

      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={id}
          className="list-group-item"
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    })
    : children;

  return (
    <ul className="items-list list-group">
      { content }
    </ul>
  );
};

ItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onItemSelected: PropTypes.func,
  renderName: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
  // children: PropTypes.arrayOf(
  //   PropTypes.oneOfType([
  //     PropTypes.bool,
  //     PropTypes.elementType
  //   ]),
  // ).isRequired
};

ItemsList.defaultProps = {
  data: null,
  onItemSelected: () => {},
};

export default ItemsList;
