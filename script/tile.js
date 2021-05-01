import { CTX, COIN_IMAGE, PILL_IMAGE } from "./canvas";
import {compareArrays} from "./utils";

let gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
export default class Tile {
  constructor(initialData, coord) {
    //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
    this.tileType = "";
    this.coord = coord;
    this.hasPoint = false;
    this.hasSuperPoint = false;

    switch (initialData) {
      case "X":
        this.tileType = "WALL";
        break;
      case ".":
        this.tileType = "PATH";
        this.hasPoint = true;
        break;
      case "O":
        this.tileType = "PATH";
        this.hasSuperPoint = true;
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
    this.hasSuperPoint = false;
  }

  drawTile() {
    if (this.hasPoint) {
    CTX.drawImage(
      COIN_IMAGE,
      this.coord[0] * TILE_SIZE,
      this.coord[1] * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
    }

    if (this.hasSuperPoint) {
      const incrementConst = 16;

      CTX.drawImage(
        PILL_IMAGE,
        this.coord[0] * TILE_SIZE - incrementConst/2,
        this.coord[1] * TILE_SIZE - incrementConst/2,
        TILE_SIZE + incrementConst,
        TILE_SIZE + incrementConst
      );
      }
    }
  }

