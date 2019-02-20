import React, { Component } from "react";

import Table from "./layout/table";
import Controls from "./layout/controls";
import Counter from "./layout/counter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life (React + Redux)</h1>
        <Table />
        <Controls />
        <Counter />
      </div>
    );
  }
}

export default App;
