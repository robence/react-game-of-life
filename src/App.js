import React, { Component } from 'react';

import Table from './layout/table';
import Controls from './layout/controls';
import Counter from './layout/counter';

const style = {
  textAlign: 'center',
  fontSize: '2em',
  fontWeight: '500',
  color: 'white',
};

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={style}>Game of Life</h1>
        <Table />
        <Controls />
        <Counter />
      </div>
    );
  }
}

export default App;
