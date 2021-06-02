const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;
const STEP_DURATION = gameData.stepAnimationDuration;
const FRAMES_STEP = gameData.framesStep;

const DIRECTIONS = ['DOWN', 'RIGHT', 'UP', 'LEFT'];

import { CTX, ENNEMY_HEAD, ENNEMY_BODY } from "./canvas";

import STATE from "./state";

export default class EnnemyAnimation {
  constructor(ennemy) {
    this.init(ennemy);
  }

  init(ennemy) {
    this.ennemy = ennemy;
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
    if (this.ennemy.movingCoord[0] === 27 && this.ennemy.currentCoord[0] === 0) {
      return true;
    }
    if (this.ennemy.movingCoord[0] === 0 && this.ennemy.currentCoord[0] === 27) {
      return true;
    }
    return false;
  }

  isAnimationFinished() {
    return this.ennemy.currentCoord === this.ennemy.movingCoord;
  }

  getCoordToDraw(){
    let x, y;
    
    if (this.isAnimationFinished()) {
      return this.ennemy.currentCoord;
    }
    // Get the percentage of progress of the anim
    let animationProgress = this.getProgressOfAnimation();

    //Delta of the current tile and target tiles
    let deltaX = this.ennemy.movingCoord[0] - this.ennemy.currentCoord[0];
    let deltaY = this.ennemy.movingCoord[1] - this.ennemy.currentCoord[1];

    // Position based on the progress of the animation
    x = this.ennemy.currentCoord[0] + deltaX * animationProgress;
    y = this.ennemy.currentCoord[1] + deltaY * animationProgress;


    // Setting the position of the pacman
    return [x, y];
  }

  incrementStepAnimation(timestamp){
    this.stepAnimation++;
    this.stepAnimation = this.stepAnimation % FRAMES_STEP;
    this.stepAnimationTimeStamp = timestamp;
  }

  getProgressOfAnimation() {
    let currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - this.ennemy.animTimestamp) / ANIMATION_DURATION;
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

    if(this.ennemy.direction === 'LEFT' || this.ennemy.direction === 'RIGHT'){
      spriteIndex = 2;
    }

    if (this.ennemy.direction === 'LEFT') {
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
      ENNEMY_BODY,
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

      let spriteIndex = DIRECTIONS.findIndex((direction) => direction === this.ennemy.direction);
    if (spriteIndex === -1) spriteIndex = 0;
    let isReversed = false;
    if (this.ennemy.direction === 'LEFT') {
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
      ENNEMY_HEAD,
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
}
