import {
  compareArrays
} from "./utils";

import EnnemyBehaviour from "./ennemyBehaviour";
import EnnemyAnimation from "./ennemyAnimation";

const gameData = require("./data.json");

//STATE : SPAWN, SCATTER, CHASE, FLEE, DEAD
export default class Ennemy {
  constructor(ennemyData) {
    this.ennemyData = ennemyData;
    this.initPermanentProperties();
    this.initInitialProperties();

    this.ennemyBehaviour = new EnnemyBehaviour(this);
    this.ennemyAnimation = new EnnemyAnimation(this);
  }

  initPermanentProperties() {
    this.beginningGameTimestamp = null;
  }

  initInitialProperties() {
    // Actual coord
    this.currentCoord = this.ennemyData.initialCoord;

    // Coord where the pacman is moving to
    this.movingCoord = this.currentCoord;

    // Position of the gate to move to
    this.targetCoord = this.ennemyData.initialTarget;
    this.scatterCoord = this.ennemyData.scatterTarget;
    this.spawnTimeout = this.ennemyData.spawnTimeout;
    this.justSpawned = true;

    // Timestamp fo the start of the animation
    this.direction = "";
    this.userInputDirection = "";


    this.beginningGameTimestamp = null;
    this.animTimestamp = null;

    this.state = 'SPAWN';
  }

  setFleeMode() {
    this.ennemyBehaviour.setFleeMode();
  }

  cancelFleeMode() {
    this.ennemyBehaviour.cancelFleeMode();

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
    if (this.state === 'FLEE' || this.state === 'DEAD') return false;
    return compareArrays(targetCoord, this.currentCoord);
  }

  isKilled(targetCoord) {
    if (this.state === 'DEAD') return false;
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

  setDead() {
    this.state = 'DEAD';
    // console.log('SET ENNEMY DEAD : ', this.state);
  }
}