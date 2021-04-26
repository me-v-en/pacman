import { CTX, HEAD_IMAGE, BODY_IMAGE } from "./canvas";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const ANIMATION_DURATION = gameData.animationDuration;

export default class Pacman {
  constructor(ctx, coord) {
    this.ctx = ctx;
    this.initPacman();
  }

  initPacman(coord = [14, 1]) {
    // Actual coord of the pacman
    this.currentCoord = coord;

    // Coord where the pacman is moving to
    this.targetCoord = coord;

    // Possible state : IDLE, MOVING, DEAD
    this.state = "IDLE";

    // Timestamp fo the start of the animation
    this.animTimestamp = null;
    this.direction = "";
    this.userInputDirection = "";
  }

  setUserInputDirection(direction) {
    this.userInputDirection = direction;
    window.setTimeout(() => {
      this.userInputDirection = "";
    }, 500);
  }

  confirmUserDirection() {
    this.direction = this.userInputDirection;
    // this.changePacmanSprite();
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setTargetCoord(coord) {
    this.state = "MOVING";
    this.targetCoord = coord;
    this.animTimestamp = new Date().getTime();
    window.setTimeout(() => {
      this.currentCoord = coord;
    }, ANIMATION_DURATION);
  }

  isAnimationFinished() {
    return this.currentCoord === this.targetCoord;
  }

  updateAnimation() {
    return null;
  }

  drawPacman() {
    let x, y;
    if (this.state === "MOVING") {
      // Get the percentage of progress of the anim
      let animationProgress = this.getProgressOfAnimation();
      //Delta of the current tile and target tiles
      let deltaY = this.targetCoord[0] - this.currentCoord[0];
      let deltaX = this.targetCoord[1] - this.currentCoord[1];

      // Position based on the progress of the animation
      y = this.currentCoord[0] + deltaY * animationProgress;
      x = this.currentCoord[1] + deltaX * animationProgress;

      // Setting the position of the pacman
    }
    if (this.state === "IDLE") {
      // If idle, set the pacman at the position of the tile
      y = this.currentCoord[0];
      x = this.currentCoord[1];
    }

    this.drawImageOnCanvas(x, y);
  }

  drawImageOnCanvas(x, y) {
    CTX.drawImage(
      BODY_IMAGE,
      x * TILE_SIZE,
      (y + 0) * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
    CTX.drawImage(
      HEAD_IMAGE,
      x * TILE_SIZE,
      (y - 0.4) * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  getProgressOfAnimation() {
    let currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
  }
}
