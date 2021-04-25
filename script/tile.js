import { CTX, COIN_IMAGE } from "./canvas";

let gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
export default class Tile {
  constructor(initialData, coord) {
    //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
    this.tileType = "";
    this.coord = coord;
    this.hasPoint = false;

    switch (initialData) {
      case "X":
        this.tileType = "WALL";
        break;
      case ".":
        this.tileType = "PATH";
        this.hasPoint = true;
        break;
      case "-":
        this.tileType = "GATE";
        break;
      case "h":
        this.tileType = "HOME";
        break;
      default:
        break;
    }
  }

  removePoint() {
    this.hasPoint = false;
  }

  drawTile() {
    if (!this.hasPoint) {
      return;
    }

    CTX.drawImage(
      COIN_IMAGE,
      this.coord[1] * TILE_SIZE,
      this.coord[0] * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }
}
