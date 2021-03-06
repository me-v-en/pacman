const gameData = require("./data.json");
const ANIMATION_DURATION = gameData.animationDuration;
const NORMAL_SPEED = gameData.normalPacmanSpeed;
const POWERUP_DURATION = gameData.powerUpDuration;


import STATE from "./state";

export default class PacmanBehaviour {
  constructor(pacman) {
    this.init(pacman);
  }

  init(pacman) {
    this.pacman = pacman;
  }

 
  update() {
    this.processTile();
    this.setSpeed();
    // If animation still happening, leave
    let nextTile = this.computePathPacman();
    if (nextTile) {
      this.setMovingCoord(nextTile.coord);
    } else {
      // If no valid target tile, stop pacman
      this.pacman.direction = "";
    }
  }

  setSpeed() {
    this.pacman.speed = ANIMATION_DURATION * (1/NORMAL_SPEED);
  }

  processTile() {
    let currentTile = STATE.board.getTile(this.pacman.currentCoord);

    if (currentTile.hasSuperPoint) {
      this.startPowerUp();
    }
    if (currentTile.hasPoint || currentTile.hasSuperPoint) {
      this.addScore(10);
      currentTile.removePoint();
    }

  }

  addScore(value) {
    this.pacman.setScore(STATE.score + value);
  }

  startPowerUp() {  
    this.pacman.state = "POWERUP";

    STATE.ennemies.forEach((ennemy) => {
      ennemy.setFleeMode();
    })

    
    clearTimeout(this.pacman.powerupTimeout);
    this.pacman.powerupTimeout = setTimeout(this.resetPowerUp.bind(this), POWERUP_DURATION);
  }

  resetPowerUp() {
    console.log("resetPowerup");
    if (this.pacman.state === "POWERUP") {
      this.pacman.state = "NORMAL";
      STATE.ennemies.forEach((ennemy, index) => {
        console.log('ennemy =>', index);
        ennemy.cancelFleeMode();
      })
    }
  }
  
  computePathPacman() {
    // If no direction given, leave
    if (!this.pacman.direction && !this.isUserInputValid()) {
      return;
    }

    // Get the next tile in the user given direction
    let nextTileUserDirection = STATE.board.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.userInputDirection
    );

    // If the user direction is valid
    if (nextTileUserDirection?.tileType === "PATH") {
      this.confirmUserDirection();
      return nextTileUserDirection;
    }

    // Get the next tile in the initial direction
    let nextTileCurrentDirection = STATE.board.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.direction
    );

    // If the initial direction is valid
    if (nextTileCurrentDirection?.tileType === "PATH") {
      this.setMovingCoord(nextTileCurrentDirection.coord);
      return nextTileCurrentDirection;
    }
  }


  setMovingCoord(coord) {
    this.pacman.movingCoord = coord;
    this.pacman.animTimestamp = new Date().getTime();
    window.setTimeout(() => {
      this.pacman.currentCoord = coord;
    }, this.pacman.speed);
  }



  isUserInputValid(){
    let timeSinceLastInput = new Date().getTime() - this.pacman.inputTimestamp;
    if(timeSinceLastInput > 2000) return null;
    return this.pacman.userInputDirection;
  }

  confirmUserDirection() {
    this.pacman.direction = this.pacman.userInputDirection;
  }

}
