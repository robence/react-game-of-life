import * as utils from './utils';

export const makeGrid = (height, width, makeRandom = false) => {
  // global
  var grid = [];
  utils.initColumns(grid, height, width, makeRandom);
  return grid;
};

export const advanceGrid = function(grid = []) {
  let gridHeight = grid.length;
  let gridWidth = grid[0].length;

  return utils.advanceColumn(grid, gridHeight, gridWidth);
};
