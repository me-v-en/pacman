import { CTX } from "./canvas";
import{getDirectionFromCoord, compareArrays, substractCoord} from "./utils";

const gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const ANIMATION_DURATION = gameData.animationDuration;

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
    this.justSpawned = true;

    // Timestamp fo the start of the animation
    this.direction = "";
    this.userInputDirection = "";

    this.animTimestamp = null;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setMovingCoord(coord) {
    this.movingCoord = coord;
    this.animTimestamp = new Date().getTime();
    this.direction = this.computeDirection();
    window.setTimeout(() => {
      this.currentCoord = coord;
    }, ANIMATION_DURATION);
  }

  computeDirection(){
    const directionCoord = substractCoord(this.currentCoord, this.movingCoord);
    return getDirectionFromCoord(directionCoord);
  }

  isAnimationFinished() {
    return this.currentCoord === this.movingCoord;
  }

  isTargetReached(){
      return this.currentCoord === this.currentCoord;
  }

  isInitialTargetReached(){
    return !this.justSpawned || compareArrays(this.ennemyData.initialTarget, this.currentCoord);
  }


  isTilePossible(tile){
      if(this.justSpawned){
          return ['PATH', 'GATE', 'HOME'].includes(tile.tileType);
      }
      return tile?.tileType === "PATH";
  }

  updateAnimation() {
    return null;
  }

  draw() {
    let x, y;
    [x, y] = this.getCoordToDraw();
    this.drawOnCanvas(x, y);
  }

  getCoordToDraw() {
    let x, y;
    if(this.isAnimationFinished()){
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
return [x,y];
  }

  drawOnCanvas(x, y) {
    CTX.fillStyle = "red";
    CTX.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    // CTX.drawImage(
    //   BODY_IMAGE,
    //   x * TILE_SIZE,
    //   (y + 0) * TILE_SIZE,
    //   TILE_SIZE,
    //   TILE_SIZE
    // );
    // CTX.drawImage(
    //   HEAD_IMAGE,
    //   x * TILE_SIZE,
    //   (y - 0.4) * TILE_SIZE,
    //   TILE_SIZE,
    //   TILE_SIZE
    // );
  }

  getProgressOfAnimation() {
    let currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
  }
}
