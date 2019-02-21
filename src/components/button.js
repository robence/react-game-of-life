import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'glamor';

const styles = style({
  display: 'inline-block',
  marginRight: '0.4em',
  padding: '0.3em 0.7em',
  fontSize: '0.9em',
  fontWeight: '400',
  lineHeight: '1.5em',
  background: 'rgb(66, 134, 244)',
  color: '#fff',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(66, 134, 244, 0.8)',
  },
});

const Button = (props) => {
  return (
    <span onClick={props.handleClick} {...styles}>
      <i className={props.icon} /> {props.title}
    </span>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
