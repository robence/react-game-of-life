import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'glamor';

const newBorn = style({
  background: 'rgb(66, 134, 244)',
});
const alive = style({
  background: 'rgba(66, 134, 244, 0.6)',
});

const hoverEmpty = style({
  background: '#ddd',
});

const styles = style({
  '.alive': alive,
  '.new-born': newBorn,
  ':hover:not(alive):not(newBborn)': hoverEmpty,
  border: '1px solid #ddd',
  height: '1em',
  width: '1em',
});

const Cell = (props) => (
  <td
    onClick={props.handleClick}
    {...styles}
    className={`${props.alive ? 'alive' : ''} ${
      props.newBorn ? 'new-born' : ''
    }`}
  />
);

Cell.propTypes = {
  alive: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  newBorn: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Cell;
