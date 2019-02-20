import * as api from "../../app-logic/logic";
import {TOGGLE_ALIVE, MAKE_RANDOM, CLEAR, TICK} from "../types";

const GRID_HEIGHT = 25;
const GRID_WIDTH = 40;
const initialGrid = api.makeGrid(GRID_HEIGHT, GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch (action.type) {
    case TOGGLE_ALIVE:
      let table = state.slice(0);
      let cell = table[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return table;
    case MAKE_RANDOM:
      return api.makeGrid(GRID_HEIGHT, GRID_WIDTH, true);
    case CLEAR:
      return api.makeGrid(GRID_HEIGHT, GRID_WIDTH);
    case TICK:
      return api.advanceGrid(state.slice(0));
    default:
      return state;
  }
};
