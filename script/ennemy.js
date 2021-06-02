import {
  getDirectionFromCoord,
  compareArrays,
  substractCoord
} from "./utils";

import EnnemyBehaviour from "./ennemyBehaviour";
import EnnemyAnimation from "./ennemyAnimation";

const gameData = require("./data.json");

//STATE : SPAWN, SCATTER, CHASE
export default class Ennemy {
  constructor(coord) {
    this.init(coord);
    this.ennemyBehaviour = new EnnemyBehaviour(this);
    this.ennemyAnimation = new EnnemyAnimation(this);
  }

  init(ennemyData) {
    this.ennemyData = ennemyData;
    // Actual coord
    this.currentCoord = ennemyData.initialCoord;

    // Coord where the pacman is moving to
    this.movingCoord = this.currentCoord;

    // Position of the gate to move to
    this.targetCoord = ennemyData.initialTarget;
    this.scatterCoord = ennemyData.scatterTarget;
    this.spawnTimeout = ennemyData.spawnTimeout;
    this.justSpawned = true;

    // Timestamp fo the start of the animation
    this.direction = "";
    this.userInputDirection = "";


    this.beginningGameTimestamp = null;
    this.animTimestamp = null;

    this.state = 'SPAWN';
  }

  canMove(timestamp) {
    if (!this.beginningGameTimestamp) {
      this.beginningGameTimestamp = timestamp;
      return false;
    }

    return (timestamp - this.beginningGameTimestamp) > this.spawnTimeout;
  }

  setDirection(direction) {
    this.direction = direction;
  }


  update(timestamp) {
    if (!this.isAnimationFinished()) return;
    if (!this.canMove(timestamp)) return;

    this.ennemyBehaviour.update(timestamp);
  }

  isPacmanKilled(targetCoord) {
    return compareArrays(targetCoord, this.currentCoord);
  }

  isAnimationFinished() {
    return this.currentCoord === this.movingCoord;
  }

  updateAnimation() {
    return null;
  }

  draw(timestamp) {
    this.ennemyAnimation.draw(timestamp);
  }
}