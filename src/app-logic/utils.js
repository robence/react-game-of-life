// helper
export const makeArray = (n) => {
  return Array(n).fill(null);
};

// make grid
export const initRows = (width, makeRandom) => {
  return makeArray(width).map(() => {
    let value;
    if (makeRandom) {
      value = Math.random() > 0.85;
    }
    return {
      status: value,
      newBorn: value,
    };
  });
};

export const initColumns = (grid, height, width, makeRandom) => {
  return makeArray(height).map(() => {
    grid.push(initRows(width, makeRandom));
  });
};

// advance grid
export const getCellData = (isCellAlive, neighbours) => {
  if (isCellAlive) {
    const status = neighbours > 3 || neighbours < 2 ? 0 : 1;
    return { status };
  } else {
    if (neighbours === 3) {
      return {
        status: 1,
        newBorn: true,
      };
    } else {
      return { status: 0 };
    }
  }
};

export const calculateNeighbours = (grid, x, y, gridHeight, gridWidth) => {
  let topRow = x - 1 < 0 ? gridHeight - 1 : x - 1;
  let bottomRow = x + 1 === gridHeight ? 0 : x + 1;
  let leftColumn = y - 1 < 0 ? gridWidth - 1 : y - 1;
  let rightColumn = y + 1 === gridWidth ? 0 : y + 1;

  let total = 0;
  total += grid[topRow][leftColumn].status;
  total += grid[topRow][y].status;
  total += grid[topRow][rightColumn].status;
  total += grid[x][leftColumn].status;
  total += grid[x][rightColumn].status;
  total += grid[bottomRow][leftColumn].status;
  total += grid[bottomRow][y].status;
  total += grid[bottomRow][rightColumn].status;

  return total;
};

const advanceRow = (grid, i, gridHeight, gridWidth) => {
  return makeArray(gridWidth).map((_, j) => {
    const isCellAlive = grid[i][j].status;
    const neighbours = calculateNeighbours(grid, i, j, gridHeight, gridWidth);

    return getCellData(isCellAlive, neighbours);
  });
};

export const advanceColumn = (grid, gridHeight, gridWidth) => {
  return makeArray(gridHeight).map((_, i) => {
    return advanceRow(grid, i, gridHeight, gridWidth);
  });
};
