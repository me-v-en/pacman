const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;
const STEP_DURATION = gameData.stepAnimationDuration;
const FRAMES_STEP = gameData.framesStep;

import { CTX, ISAAC_SPRITE } from "./canvas";

import STATE from "./state";

export default class PacmanAnimation {
  constructor(pacman) {
    this.init(pacman);
  }

  init(pacman) {
    this.pacman = pacman;
    this.stepAnimationTimeStamp = null;
    this.stepAnimation = 0;
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
    if (this.pacman.movingCoord[0] === 27 && this.pacman.currentCoord[0] === 0) {
      return true;
    }
    if (this.pacman.movingCoord[0] === 0 && this.pacman.currentCoord[0] === 27) {
      return true;
    }
    return false;
  }

  getCoordToDraw(){
    let x,y;
    if (this.pacman.state === "MOVING") {
      // Get the percentage of progress of the anim
      let animationProgress = this.getProgressOfAnimation();
      //Delta of the current tile and target tiles
      let deltaX = this.pacman.movingCoord[0] - this.pacman.currentCoord[0];
      let deltaY = this.pacman.movingCoord[1] - this.pacman.currentCoord[1];

      // Position based on the progress of the animation
      x = this.pacman.currentCoord[0] + deltaX * animationProgress;
      y = this.pacman.currentCoord[1] + deltaY * animationProgress;

      // Setting the position of the pacman
    }
    if (this.pacman.state === "IDLE") {
      // If idle, set the pacman at the position of the tile
      x = this.pacman.currentCoord[0];
      y = this.pacman.currentCoord[1];
    }
    return[x,y];
  }

  incrementStepAnimation(timestamp){
    this.stepAnimation++;
    this.stepAnimation = this.stepAnimation % FRAMES_STEP;
    this.stepAnimationTimeStamp = timestamp;
  }

  getProgressOfAnimation() {
    let currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - this.pacman.animTimestamp) / ANIMATION_DURATION;
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
    y = (y - 0.1) * TILE_SIZE - incrementConst / 2;

    let spriteIndex = 0;
    let stepAnimation = this.stepAnimation;
    let stepAnimationShift = 7;
    let stepAnimationModulo = 8;
    let isReversed = false;

    if(this.pacman.direction === 'LEFT' || this.pacman.direction === 'RIGHT'){
      spriteIndex = 2;
      stepAnimationShift = 0;

    }

    if (this.pacman.direction === 'LEFT') {
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
      TILE_SIZE + incrementConst,
      TILE_SIZE + incrementConst,
    );

    CTX.restore();

  }

  drawHead(x, y) {
    const incrementConst = 6;

    CTX.save();

    x = x * TILE_SIZE - incrementConst / 2;
    y = (y - 0.50) * TILE_SIZE - incrementConst / 2;

    let spriteIndex = 0;
    let stepAnimation = this.stepAnimation >= 8 ? 1 : 0;
    let isReversed = false;
    let stepAnimationShift = 0;

    if (this.pacman.direction === 'UP') {
      stepAnimationShift = 4;
    }
    if (this.pacman.direction === 'RIGHT') {
      stepAnimationShift = 2;
    }
    if (this.pacman.direction === 'LEFT') {
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
      TILE_SIZE + incrementConst,
      TILE_SIZE + incrementConst,
    );

    CTX.restore();
  }
}