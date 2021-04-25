// BOARD = [TILE]
// Dimensions : 28 x 31
// COORD [x,y]
import Tile from "./tile";
import { CANVAS_ELEMENT, CTX, BG_IMAGE } from "./canvas";

import { modulo } from "./utils";

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
    this.drawBoard();
  }

  initBoard() {
    this.boardTiles = [];
    for (let i = 0; i < BOARD_HEIGHT; i++) {
      let line = [];
      for (let j = 0; j < BOARD_WIDTH; j++) {
        let tile = new Tile(BOARD_ARRAY[i][j], [i, j]);
        line.push(tile);
      }
      this.boardTiles.push(line);
    }
  }

  getTile(coord) {
    if (coord) {
      let coordY = modulo(coord[0], BOARD_HEIGHT);
      let coordX = modulo(coord[1], BOARD_WIDTH);
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
}
