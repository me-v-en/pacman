import {
  CTX,
  BONEY_HEAD,
  BONEY_BODY
} from "./canvas";

import {
  getDirectionFromCoord,
  compareArrays,
  substractCoord
} from "./utils";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;
const STEP_DURATION = gameData.stepAnimationDuration;
const FRAMES_STEP = gameData.framesStep;
const DIRECTIONS = ['DOWN', 'RIGHT', 'UP', 'LEFT'];

//STATE : SPAWN, SCATTER, CHASE
export default class Boney {
  constructor(coord) {
    this.init(coord);
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
    this.stepAnimationTimeStamp = null;
    this.stepAnimation = 0;

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

  getOppositeDirection(){
    switch (this.direction){
      case 'UP':
        return 'DOWN';
        break;
      case 'DOWN':
        return 'UP';
        break;
      case 'LEFT':
        return 'RIGHT';
        break;
      case 'RIGHT':
        return 'LEFT';
        break;
      default:
        return null;
    }

  }

  setMovingCoord(coord) {
    this.movingCoord = coord;
    this.animTimestamp = new Date().getTime();
    this.direction = this.computeDirection();
    window.setTimeout(() => {
      this.currentCoord = coord;
    }, ANIMATION_DURATION);
  }

  updateState() {
    switch (this.state) {
      case 'SPAWN':
        if (compareArrays(this.currentCoord, this.targetCoord)) {
          this.targetCoord = this.scatterCoord;
          this.state = 'SCATTER'
        };
        break;
      case 'SCATTER':
        if (compareArrays(this.currentCoord, this.scatterCoord)) {
          this.state = 'CHASE'
        };
        break;
      case 'CHASE':
        break;
    }
  }

  computeDirection() {
    const directionCoord = substractCoord(this.movingCoord, this.currentCoord);
    return getDirectionFromCoord(directionCoord);
  }

  isAnimationFinished() {
    return this.currentCoord === this.movingCoord;
  }

  isEnnemyKilled(targetCoord) {
    return compareArrays(targetCoord, this.currentCoord);
  }

  isTilePossible(tile) {
    if (this.justSpawned) {
      return ['PATH', 'GATE', 'HOME'].includes(tile.tileType);
    }
    return tile ?.tileType === "PATH";
  }

  updateAnimation() {
    return null;
  }

  draw(timestamp) {
    if (this.characterIsOutOfScreen()) {
      return;
    }
    if(!this.stepAnimationTimeStamp){
      this.stepAnimationTimeStamp = timestamp;
    }
    let x, y;
    [x, y] = this.getCoordToDraw();
    this.drawOnCanvas(x, y, timestamp);
  }


  characterIsOutOfScreen() {
    if (this.movingCoord[0] === 27 && this.currentCoord[0] === 0) {
      return true;
    }
    if (this.movingCoord[0] === 0 && this.currentCoord[0] === 27) {
      return true;
    }
    return false;
  }

  getCoordToDraw() {
    let x, y;
    if (this.isAnimationFinished()) {
      return this.currentCoord;
    }
    // Get the percentage of progress of the anim
    let animationProgress = this.getProgressOfAnimation();

    //Delta of the current tile and target tiles
    let deltaX = this.movingCoord[0] - this.currentCoord[0];
    let deltaY = this.movingCoord[1] - this.currentCoord[1];

    // Position based on the progress of the animation
    x = this.currentCoord[0] + deltaX * animationProgress;
    y = this.currentCoord[1] + deltaY * animationProgress;

    // Setting the position of the pacman
    return [x, y];
  }

  drawOnCanvas(x, y, timestamp) {
    let currentStepDuration = timestamp - this.stepAnimationTimeStamp;
    if(currentStepDuration > STEP_DURATION){
      this.incrementStepAnimation(timestamp);
    }
    this.drawBody(x, y);
    this.drawHead(x, y);
  }

  drawBody(x, y){
    const incrementConst = 6;

    CTX.save();

    x = x * TILE_SIZE - incrementConst / 2;
    y = (y - 0.2) * TILE_SIZE - incrementConst / 2;

    let spriteIndex = 0;
    let stepAnimation = this.stepAnimation;
    let isReversed = false;

    if(this.direction === 'LEFT' || this.direction === 'RIGHT'){
      spriteIndex = 2;
    }

    if (this.direction === 'LEFT') {
      isReversed = true;
    }

    if(stepAnimation > 7){
      spriteIndex++;
      stepAnimation = stepAnimation % 8;
    }

    if (isReversed) {
      CTX.translate( x + TILE_SIZE, y);
      CTX.scale(-1, 1);
      x = 0;
      y= 0
    }

    CTX.drawImage(
      BONEY_BODY,
      stepAnimation * SPRITE_SIZE,
      spriteIndex * SPRITE_SIZE,
      TILE_SIZE,
      TILE_SIZE,
      x,
      y,
      TILE_SIZE + incrementConst,
      TILE_SIZE + incrementConst,
    );

    CTX.restore();

  }

  drawHead(x, y) {
    const incrementConst = 6;

    CTX.save();

    x = x * TILE_SIZE - incrementConst / 2;
    y = (y - 0.6) * TILE_SIZE - incrementConst / 2;

      let spriteIndex = DIRECTIONS.findIndex((direction) => direction === this.direction);
    if (spriteIndex === -1) spriteIndex = 0;
    let isReversed = false;
    if (this.direction === 'LEFT') {
      isReversed = true;
      spriteIndex = 1;
    }

    if (isReversed) {
      CTX.translate( x + TILE_SIZE, y);
      CTX.scale(-1, 1);
      x = 0;
      y= 0
    }

    CTX.drawImage(
      BONEY_HEAD,
      spriteIndex * SPRITE_SIZE,
      0,
      TILE_SIZE,
      TILE_SIZE,
      x,
      y,
      TILE_SIZE + incrementConst,
      TILE_SIZE + incrementConst,
    );

    CTX.restore();
  }

  incrementStepAnimation(timestamp){
    this.stepAnimation++;
    this.stepAnimation = this.stepAnimation % FRAMES_STEP;
    this.stepAnimationTimeStamp = timestamp;
  }

  getProgressOfAnimation() {
    let currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
  }
}