import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => (
  <td
    onClick={props.handleClick}
    className={`${props.alive ? 'alive' : ''} ${
      props.newBorn ? 'new-born' : ''
    }`}
  />
);

Cell.propTypes = {
  alive: PropTypes.string,
  newBorn: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Cell;
