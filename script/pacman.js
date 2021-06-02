import { SCORE_ELEMENT } from "./canvas";

import PacmanBehaviour from "./pacmanBehaviour";
import PacmanAnimation from "./pacmanAnimation";

import STATE from "./state";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;
const STEP_DURATION = gameData.stepAnimationDuration;
const FRAMES_STEP = gameData.framesStep;
export default class Pacman {
  constructor(coord) {
    this.init(coord);
    this.pacmanBehaviour = new PacmanBehaviour(this);
    this.pacmanAnimation = new PacmanAnimation(this);
  }

  init(coord = [1, 14]) {
    // Actual coord of the pacman
  this.currentCoord = coord;

    // Coord where the pacman is moving to
  this.movingCoord = coord;

    // Possible state : IDLE, MOVING, DEAD
    this.state = "IDLE";

    // Timestamp fo the start of the animation

    this.direction = "";

    this.userInputDirection = "";
    this.inputTimestamp = null;
  }


  update() {
    if (!this.isAnimationFinished()) {
      return;
    }

        // ADD SCORE
    this.addPoint();
    
    this.pacmanBehaviour.update();
  }

  addPoint() {
    let currentTile = STATE.board.getTile(STATE.pacman.currentCoord);

    if (currentTile.hasPoint || currentTile.hasSuperPoint) {
      this.addScore(10);
      currentTile.removePoint();
    }
  }    

  addScore(value) {
    this.setScore(STATE.score + value);
  }

  setScore(score) {
    STATE.score = score;
    SCORE_ELEMENT.textContent = STATE.score;
  }

  setUserInputDirection(direction) {
    this.userInputDirection = direction;
    this.inputTimestamp = new Date().getTime();
  }

  isAnimationFinished() {
    return this.currentCoord === this.movingCoord;
  }

  setDead() {
    this.state = "DEAD";
  }

  draw(timestamp) {
    this.pacmanAnimation.draw(timestamp);
  }

}
