import { SCORE_ELEMENT } from "./canvas";

import PacmanBehaviour from "./pacmanBehaviour";
import PacmanAnimation from "./pacmanAnimation";

import STATE from "./state";
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

    // Possible state : NORMAL, POWERUP, DEAD

    // Timestamp fo the start of the animation

    this.direction = "";

    this.userInputDirection = "";
    this.inputTimestamp = null;
    this.powerupTimeout;
    this.state = 'NORMAL';
  }


  update() {
    if (!this.isAnimationFinished()) {
      return;
    }

    this.pacmanBehaviour.update();
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
