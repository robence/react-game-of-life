import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <span onClick={props.handleClick} className="button">
    <i className={props.icon} /> {props.title}
  </span>
);

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
