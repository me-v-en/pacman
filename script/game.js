import Board from "./board";
import { CANVAS_ELEMENT, CTX } from "./canvas";
import Pacman from "./pacman";
import Tile from "./tile";

import { modulo, DIRECTION_MATRICES, addCoord } from "./utils";

export default class Game {
  constructor() {
    this.board = new Board();
    this.pacman = new Pacman();

    this.scoreElement = document.getElementById("score");

    this.score = 0;
    // Possible state : STOPPED, START, GAME, CHASE
    this.gameState = "START";

    this.initGame();
  }

  initGame() {
    this.board.initBoard();
    this.pacman.initPacman();

    this.draw();
  }

  startGameLoop() {
    this.bindEventHandler();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.draw();
    this.update(progress);

    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(progress) {
    // Update the state of the world for the elapsed time since last render
    this.updatePacman();
  }

  draw() {
    // Reinit the canvas
    CTX.fillStyle = "#2c2a2a";
    CTX.fillRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height);
    // Update the state of the world for the elapsed time since last render
    this.board.drawBoard();
    this.pacman.drawPacman();
  }

  updatePacman() {
    // If animation still happening, leave
    if (!this.pacman.isAnimationFinished()) {
      return;
    }

    // ADD SCORE
    this.addPointOfCurrentPacmanTile();
    // If animation is still happening

    let nextTile = this.computePathPacman();
    if (nextTile) {
      this.pacman.setTargetCoord(nextTile.coord);
    } else {
      // If no valid target tile, stop pacman
      this.pacman.direction = "";
      this.pacman.state = "IDLE";
    }
  }

  computePathPacman() {
    // If no direction given, leave
    if (!this.pacman.direction && !this.pacman.userInputDirection) {
      return;
    }

    // Get the next tile in the user given direction
    let nextTileUserDirection = this.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.userInputDirection
    );

    // If the user direction is valid
    if (nextTileUserDirection?.tileType === "PATH") {
      this.pacman.confirmUserDirection();
      return nextTileUserDirection;
    }

    // Get the next tile in the initial direction
    let nextTileCurrentDirection = this.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.direction
    );

    // If the initial direction is valid
    if (nextTileCurrentDirection?.tileType === "PATH") {
      this.pacman.setTargetCoord(nextTileCurrentDirection.coord);
      return nextTileCurrentDirection;
    }
  }

  setPacmanTargetTile(tile) {
    this.pacman.setTargetCoord(tile.coord);
  }

  addPointOfCurrentPacmanTile() {
    let currentTile = this.board.getTile(this.pacman.currentCoord);
    if (currentTile.hasPoint) {
      this.addScore(10);
      currentTile.removePoint();
    }
  }

  getNextTileInDirection(currentCoord, direction) {
    if (!direction || !currentCoord) {
      return false;
    }

    let directionMatrice = DIRECTION_MATRICES[direction];
    let coordToMove = addCoord(directionMatrice, currentCoord);
    return this.board.getTile(coordToMove);
  }

  addScore(value) {
    this.score += value;
    this.scoreElement.textContent = this.score;
  }

  bindEventHandler() {
    document.addEventListener("keyup", this.keyupEventHandler.bind(this));
  }

  unbindEventHandler() {
    document.removeEventListener("keyup", this.keyupEventHandler);
  }

  keyupEventHandler(event) {
    event.preventDefault();
    let keycode = event.which;

    // LEFT : ARROW_LEFT or Q
    if (keycode === 37 || keycode === 81) {
      this.pacman.setUserInputDirection("LEFT");
    }
    // RIGHT : ARROW_RIGHT or D
    if (keycode === 39 || keycode === 68) {
      this.pacman.setUserInputDirection("RIGHT");
    }
    // UP : ARROW_UP or Z
    if (keycode === 38 || keycode === 90) {
      this.pacman.setUserInputDirection("UP");
    }
    // DOWN : ARROW_DOWN or S
    if (keycode === 40 || keycode === 83) {
      this.pacman.setUserInputDirection("DOWN");
    }
  }
}
