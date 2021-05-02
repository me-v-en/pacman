import Board from "./board";
import {
  CANVAS_ELEMENT,
  CTX
} from "./canvas";
import Boney from "./ghost";
import Pacman from "./pacman";
import Tile from "./tile";
import STATE from "./state";

const gameData = require("./data.json");
const ENNEMIES_DATA = gameData.ennemiesData;
const DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

import {
  modulo,
  DIRECTION_MATRICES,
  addCoord,
  distanceBetweenCoords
} from "./utils";

export default class Game {
  constructor() {

    STATE.score = 0;
    // Possible state : STOPPED, START, GAME, CHASE
    STATE.gameState = "START";

    this.initGame();
  }

  initGame() {
    STATE.board = new Board();
    STATE.pacman = new Pacman();
    STATE.boneys = this.initEnnemies();

    // START, END
    STATE.gameState = 'START';

    this.draw();
  }

  startGameLoop() {
    this.bindEventHandler();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.lastRender = timestamp;

    this.draw(progress, timestamp);
    this.update(progress, timestamp);

    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(progress, timestamp) {
    // Update the state of the world for the elapsed time since last render
    this.updateGameState();
    if (STATE.gameState !== 'END') {
      STATE.pacman.update();
      this.updateEnnemies(timestamp);
    }
  }
  
  updateGameState() {
    if (this.isPacmanDead()) {
      STATE.gameState = 'END';
    }
  }


  isPacmanDead() {
    let pacmanIsDead = false;
    ennemyLoop : for (let i = 0; i < STATE.boneys.length; i++){
      let boney = STATE.boneys[i];
      if (boney.isEnnemyKilled(STATE.pacman.currentCoord)) {
        pacmanIsDead = true;
        break ennemyLoop;
      }
    }
    return pacmanIsDead;    
  }

  draw(progress, timestamp) {
    // Reinit the canvas
    CTX.fillStyle = "#2c2a2a";
    CTX.fillRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height);
    // Update the state of the world for the elapsed time since last render
    STATE.board.drawBoard();
    STATE.pacman.draw(timestamp);
    this.drawEnnemies(timestamp);
  }


  ////////////////////////////////////
  // GHOSTS
  ////////////////////////////////////
  initEnnemies() {
    const boneys = [];
    ENNEMIES_DATA.forEach((ennemyData) => {
      boneys.push(new Boney(ennemyData));
    });
    return boneys;
  }

  updateEnnemies(timestamp) {
    STATE.boneys.forEach((boney) => {
      this.updateEnnemy(boney, timestamp);
    });
  }

  updateEnnemy(ennemy,timestamp) {
    if (!ennemy.isAnimationFinished()) return;
    if (!ennemy.canMove(timestamp)) return;

    ennemy.updateState();

    // get all possible tiles for the ennemy
    const possibleTiles = this.getEnnemyPossibleTiles(ennemy);
    if (possibleTiles.length > 1 && ennemy.state === 'CHASE') {
      this.getTarget(ennemy);
    }
    // Compute what is the closest possible tile to the target coord
    const tileToMove = this.computeNearestTileToTarget(ennemy, possibleTiles);
    if (!tileToMove) return;

    // Set the target coord
    ennemy.setMovingCoord(tileToMove.coord);
  }

  getEnnemyPossibleTiles(ennemy) {
    let currentCoord = ennemy.currentCoord;
    // Ennemies can't go backwards
    let possibleDirections = DIRECTIONS.filter((dir) => dir != ennemy.getOppositeDirection());
    let adjacentTiles = possibleDirections.map((direction) => {
      return this.getNextTileInDirection(currentCoord, direction);
    });

    return adjacentTiles.filter((tile) => {
      return ennemy.isTilePossible(tile);
    })
  }

  computeNearestTileToTarget(ennemy, possibleTiles) {
    let targetCoord = ennemy.targetCoord;
    let closestDistance = null;
    let closestTile = null;

    possibleTiles.forEach((tile) => {
      let distance = distanceBetweenCoords(tile.coord, ennemy.targetCoord);
      if (closestDistance === null || distance < closestDistance) {
        closestDistance = distance;
        closestTile = tile;
      }
    });
    return closestTile;
  }

  getTarget(ennemy) {
    if (!ennemy.state === 'CHASE') return;
    ennemy.justSpawned = false;
    ennemy.targetCoord = STATE.pacman.movingCoord;
  }



  drawEnnemies(timestamp) {
    STATE.boneys.forEach((boney) => {
      boney.draw(timestamp);
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



  bindEventHandler() {
    document.addEventListener("keydown", this.keydownEventHandler.bind(this));
  }

  unbindEventHandler() {
    document.removeEventListener("keydown", this.keydownEventHandler);
  }

  keydownEventHandler(event) {
    let keycode = event.which;

    // LEFT : ARROW_LEFT or Q
    if (keycode === 37 || keycode === 81) {
      STATE.pacman.setUserInputDirection("LEFT");
      event.preventDefault();
    }
    // RIGHT : ARROW_RIGHT or D
    if (keycode === 39 || keycode === 68) {
      STATE.pacman.setUserInputDirection("RIGHT");
    event.preventDefault();
    }
    // UP : ARROW_UP or Z
    if (keycode === 38 || keycode === 90) {
      STATE.pacman.setUserInputDirection("UP");
    event.preventDefault();
    }
    // DOWN : ARROW_DOWN or S
    if (keycode === 40 || keycode === 83) {
      STATE.pacman.setUserInputDirection("DOWN");
    event.preventDefault();
    }
  }
}