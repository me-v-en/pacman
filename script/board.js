import Tile from "./tile";
import { CANVAS_ELEMENT, CTX, BG_IMAGE } from "./canvas";
import { modulo, addCoord,  DIRECTION_MATRICES } from "./utils";

import STATE from "./state";

let gameData = require("./data.json");
const BOARD_ARRAY = gameData.boardArray;
const BOARD_WIDTH = gameData.boardArray[0].length;
const BOARD_HEIGHT = gameData.boardArray.length;
const CANVAS_WIDTH = gameData.canvasWidth;
const CANVAS_HEIGHT = gameData.canvasHeight;

export default class Board {
  constructor() {
    this.boardTiles = [];
    this.initBoard();
  }

  initBoard() {
    this.boardTiles = [];
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      let line = [];
      for (let x = 0; x < BOARD_WIDTH; x++) {
        let tile = new Tile(BOARD_ARRAY[y][x], [x, y]);
        line.push(tile);
      }
      this.boardTiles.push(line);
    }
  }

  getTile(coord) {
    if (coord) {
      let coordX = modulo(coord[0], BOARD_WIDTH);
      let coordY = modulo(coord[1], BOARD_HEIGHT);
      return this.boardTiles[coordY][coordX];
    }
  }

  drawBoard() {
    CTX.drawImage(BG_IMAGE, 0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height);
    this.drawTiles();
  }

  drawTiles() {
    this.boardTiles.forEach((row) => {
      row.forEach((tile) => {
        tile.drawTile();
      });
    });
  }

  getNextTileInDirection(currentCoord, direction) {
    if (!direction || !currentCoord) {
      return false;
    }

    let directionMatrice = DIRECTION_MATRICES[direction];
    let coordToMove = addCoord(directionMatrice, currentCoord);
    return STATE.board.getTile(coordToMove);
  }
}
