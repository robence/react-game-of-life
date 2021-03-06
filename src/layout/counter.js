import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const style = {
      float: 'right',
      color: 'white',
      fontSize: 27,
    };
    return <div style={style}>Generations: {this.props.generations}</div>;
  }
}

const mapStateToProps = ({ counter }) => {
  return { generations: counter };
};

Counter.propTypes = {
  generations: PropTypes.number,
};

export default connect(mapStateToProps)(Counter);
