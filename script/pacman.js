import { CTX, ISAAC_HEAD, ISAAC_BODY } from "./canvas";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const SPRITE_SIZE = gameData.spriteSize;
const ANIMATION_DURATION = gameData.animationDuration;

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

  draw() {
    let x, y;
    [x, y] = this.getCoordToDraw();
    this.drawOnCanvas(x, y);
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

  drawOnCanvas(x, y) {
      // move to x + img's width
      // ctx.translate(x+img.width,y);
  
      // scaleX by -1; this "trick" flips horizontally
      // ctx.scale(-1,1);
      
      // draw the img
      // no need for x,y since we've already translated
      // ctx.drawImage(img,0,0);
      
      // always clean up -- reset transformations to default
      // ctx.setTransform(1,0,0,1,0,0);
    CTX.drawImage(
      ISAAC_BODY,
      x * TILE_SIZE,
      (y + 0) * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
    CTX.drawImage(
      ISAAC_HEAD,
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
