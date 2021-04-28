import { CTX, ISAAC_SPRITE } from "./canvas";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;
const STEP_DURATION = gameData.stepAnimationDuration;
const FRAMES_STEP = gameData.framesStep;
export default class Pacman {
  constructor(coord) {
    this.init(coord);
  }

  init(coord = [1, 14]) {
    // Actual coord of the pacman
  this.currentCoord = coord;

    // Coord where the pacman is moving to
  this.movingCoord = coord;

    // Possible state : IDLE, MOVING, DEAD
    this.state = "IDLE";

    // Timestamp fo the start of the animation
    this.animTimestamp = null;
    this.direction = "";
    this.stepAnimationTimeStamp = null;
    this.stepAnimation = 0;
    this.userInputDirection = "";
    this.inputTimestamp = null;
  }

  setUserInputDirection(direction) {
    this.userInputDirection = direction;
    this.inputTimestamp = new Date().getTime();
  }

  isUserInputValid(){
    let timeSinceLastInput = new Date().getTime() - this.inputTimestamp;
    if(timeSinceLastInput > 2000) return null;
    return this.userInputDirection;
  }

  confirmUserDirection() {
    this.direction = this.userInputDirection;
    // this.changePacmanSprite();
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setMovingCoord(coord) {
    this.state = "MOVING";
    this.movingCoord = coord;
    this.animTimestamp = new Date().getTime();
    window.setTimeout(() => {
      this.currentCoord = coord;
    }, ANIMATION_DURATION);
  }

  isAnimationFinished() {
    return this.currentCoord === this.movingCoord;
  }

  updateAnimation() {
    return null;
  }

  draw(timestamp) {
    if(!this.stepAnimationTimeStamp){
      this.stepAnimationTimeStamp = timestamp;
    }
    let x, y;
    [x, y] = this.getCoordToDraw();
    this.drawOnCanvas(x, y, timestamp);
  }

  getCoordToDraw(){
    let x,y;
    if (this.state === "MOVING") {
      // Get the percentage of progress of the anim
      let animationProgress = this.getProgressOfAnimation();
      //Delta of the current tile and target tiles
      let deltaX = this.movingCoord[0] - this.currentCoord[0];
      let deltaY = this.movingCoord[1] - this.currentCoord[1];

      // Position based on the progress of the animation
      x = this.currentCoord[0] + deltaX * animationProgress;
      y = this.currentCoord[1] + deltaY * animationProgress;

      // Setting the position of the pacman
    }
    if (this.state === "IDLE") {
      // If idle, set the pacman at the position of the tile
      x = this.currentCoord[0];
      y = this.currentCoord[1];
    }
    return[x,y];
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
    CTX.save();

    x = x * TILE_SIZE;
    y = (y - 0.05) * TILE_SIZE;

    let spriteIndex = 0;
    let stepAnimation = this.stepAnimation;
    let stepAnimationShift = 7;
    let stepAnimationModulo = 8;
    let isReversed = false;

    if(this.direction === 'LEFT' || this.direction === 'RIGHT'){
      spriteIndex = 2;
      stepAnimationShift = 0;

    }

    if (this.direction === 'LEFT') {
      isReversed = true;
    }

    stepAnimation += stepAnimationShift;

    if(stepAnimation >= stepAnimationModulo){
      spriteIndex++;
      stepAnimation = stepAnimation % stepAnimationModulo;
    }

    if (isReversed) {
      CTX.translate( x + TILE_SIZE, y);
      CTX.scale(-1, 1);
      x = 0;
      y= 0
    }

    CTX.drawImage(
      ISAAC_SPRITE,
      stepAnimation * SPRITE_SIZE,
      spriteIndex * SPRITE_SIZE,
      TILE_SIZE,
      TILE_SIZE,
      x,
      y,
      TILE_SIZE,
      TILE_SIZE,
    );

    CTX.restore();

  }

  drawHead(x, y) {
    CTX.save();

    x = x * TILE_SIZE;
    y = (y - 0.4) * TILE_SIZE;

    let spriteIndex = 0;
    let stepAnimation = this.stepAnimation >= 8 ? 1 : 0;
    let isReversed = false;
    let stepAnimationShift = 0;

    if (this.direction === 'UP') {
      stepAnimationShift = 4;
    }
    if (this.direction === 'RIGHT') {
      stepAnimationShift = 2;
    }
    if (this.direction === 'LEFT') {
      stepAnimationShift = 2;
      isReversed = true;
    }



    stepAnimation += stepAnimationShift;

    if (isReversed) {
      CTX.translate( x + TILE_SIZE, y);
      CTX.scale(-1, 1);
      x = 0;
      y= 0
    }

    CTX.drawImage(
      ISAAC_SPRITE,
      stepAnimation * SPRITE_SIZE,
      0,
      TILE_SIZE,
      TILE_SIZE,
      x,
      y,
      TILE_SIZE,
      TILE_SIZE,
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
