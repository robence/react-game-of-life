import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleAlive } from '../redux/actions';
import Cell from '../components/cell';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.table.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <Cell
                    key={j}
                    alive={cell.status}
                    newBorn={cell.newBorn}
                    handleClick={() => this.props.toggleAlive(i, j)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ table }) => {
  return { table };
};

const mapDispatchToProps = (dispatch) => {
  return { toggleAlive: (x, y) => dispatch(toggleAlive(x, y)) };
};

Table.propTypes = {
  table: PropTypes.shape({
    map: PropTypes.func,
  }),
  toggleAlive: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
