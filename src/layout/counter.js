import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return <div className="counter">Generations: {this.props.generations}</div>;
  }
}

const mapStateToProps = ({ counter }) => {
  return { generations: counter };
};

Counter.propTypes = {
  generations: PropTypes.number,
};

export default connect(mapStateToProps)(Counter);
