import Board from "./board";
import { CANVAS_ELEMENT, CTX } from "./canvas";
import Boney from "./ghost";
import Pacman from "./pacman";
import Tile from "./tile";

const gameData = require("./data.json");
const ENNEMIES_DATA = gameData.ennemiesData;
const DIRECTIONS = ['UP','DOWN','LEFT', 'RIGHT'];

import { modulo, DIRECTION_MATRICES, addCoord, distanceBetweenCoords } from "./utils";

export default class Game {
  constructor() {
    this.scoreElement = document.getElementById("score");

    this.score = 0;
    // Possible state : STOPPED, START, GAME, CHASE
    this.gameState = "START";

    this.initGame();
  }

  initGame() {
    this.board = new Board();
    this.pacman = new Pacman();
    this.boneys = this.initEnnemies();

    this.draw();
  }

  startGameLoop() {
    this.bindEventHandler();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.draw();
    this.update(progress);

    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(progress) {
    // Update the state of the world for the elapsed time since last render
    this.updatePacman();
    this.updateEnnemies();
  }

  draw() {
    // Reinit the canvas
    CTX.fillStyle = "#2c2a2a";
    CTX.fillRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height);
    // Update the state of the world for the elapsed time since last render
    this.board.drawBoard();
    this.pacman.draw();
    this.drawEnnemies();
  }

  ////////////////////////////////////
  // PACMAN
  ////////////////////////////////////

  updatePacman() {
    // If animation still happening, leave
    if (!this.pacman.isAnimationFinished()) {
      return;
    }

    // ADD SCORE
    this.addPointOfCurrentPacmanTile();
    // If animation is still happening

    let nextTile = this.computePathPacman();
    if (nextTile) {
      this.pacman.setMovingCoord(nextTile.coord);
    } else {
      // If no valid target tile, stop pacman
      this.pacman.direction = "";
      this.pacman.state = "IDLE";
    }
  }

  computePathPacman() {
    // If no direction given, leave
    if (!this.pacman.direction && !this.pacman.isUserInputValid()) {
      return;
    }

    // Get the next tile in the user given direction
    let nextTileUserDirection = this.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.userInputDirection
    );

    // If the user direction is valid
    if (nextTileUserDirection?.tileType === "PATH") {
      this.pacman.confirmUserDirection();
      return nextTileUserDirection;
    }

    // Get the next tile in the initial direction
    let nextTileCurrentDirection = this.getNextTileInDirection(
      this.pacman.currentCoord,
      this.pacman.direction
    );

    // If the initial direction is valid
    if (nextTileCurrentDirection?.tileType === "PATH") {
      this.pacman.setMovingCoord(nextTileCurrentDirection.coord);
      return nextTileCurrentDirection;
    }
  }

  ////////////////////////////////////
  // GHOSTS
  ////////////////////////////////////
  initEnnemies() {
    const boneys = [];
    ENNEMIES_DATA.forEach((ennemyData)=>{
      boneys.push(new Boney(ennemyData));
    });
    return boneys;
  }

  updateEnnemies(){
    this.boneys.forEach((boney)=>{
      this.updateEnnemy(boney);
    });
  }

  updateEnnemy(ennemy){
    if(!ennemy.isAnimationFinished())return;
    // get all possible tiles for the ennemy
    const possibleTiles = this.getEnnemyPossibleTiles(ennemy);
    if(possibleTiles.length > 1 && ennemy.isInitialTargetReached()){
      this.getNewTarget(ennemy);
    }
    // Compute what is the closest possible tile to the target coord
    const tileToMove = this.computeNearestTileToTarget(ennemy, possibleTiles);
    if(!tileToMove)return;

    // Set the target coord
    ennemy.setMovingCoord(tileToMove.coord);
  }

  getEnnemyPossibleTiles(ennemy){
    let currentCoord = ennemy.currentCoord;
    // Ennemies can't go backwards
    let possibleDirections = DIRECTIONS.filter((dir)=>dir!=ennemy.direction);
    let adjacentTiles = possibleDirections.map((direction)=>{
      return this.getNextTileInDirection(currentCoord, direction);
    });

    return adjacentTiles.filter((tile)=>{
      return ennemy.isTilePossible(tile);
    })
  }

  computeNearestTileToTarget(ennemy, possibleTiles){
    let targetCoord = ennemy.targetCoord;
    let closestDistance = null;
    let closestTile = null;
    
    possibleTiles.forEach((tile)=>{
      let distance = distanceBetweenCoords(tile.coord, ennemy.targetCoord);
      if(closestDistance === null || distance < closestDistance){
        closestDistance = distance;
        closestTile = tile;
      }
    });
    return closestTile;
  }

  getNewTarget(ennemy){
    ennemy.justSpawned = false;
    ennemy.targetCoord = this.pacman.movingCoord;
  }



  drawEnnemies(){
    this.boneys.forEach((boney)=>{
      boney.draw();
    });
  }


  getNextTileInDirection(currentCoord, direction) {
    if (!direction || !currentCoord) {
      return false;
    }

    let directionMatrice = DIRECTION_MATRICES[direction];
    let coordToMove = addCoord(directionMatrice, currentCoord);
    return this.board.getTile(coordToMove);
  }

  addPointOfCurrentPacmanTile() {
    let currentTile = this.board.getTile(this.pacman.currentCoord);

    if (currentTile.hasPoint) {
      this.addScore(10);
      currentTile.removePoint();
    }
  }

  addScore(value) {
    this.score += value;
    this.scoreElement.textContent = this.score;
  }

  bindEventHandler() {
    document.addEventListener("keydown", this.keyupEventHandler.bind(this));
  }

  unbindEventHandler() {
    document.removeEventListener("keydown", this.keyupEventHandler);
  }

  keyupEventHandler(event) {
    event.preventDefault();
    let keycode = event.which;

    // LEFT : ARROW_LEFT or Q
    if (keycode === 37 || keycode === 81) {
      this.pacman.setUserInputDirection("LEFT");
    }
    // RIGHT : ARROW_RIGHT or D
    if (keycode === 39 || keycode === 68) {
      this.pacman.setUserInputDirection("RIGHT");
    }
    // UP : ARROW_UP or Z
    if (keycode === 38 || keycode === 90) {
      this.pacman.setUserInputDirection("UP");
    }
    // DOWN : ARROW_DOWN or S
    if (keycode === 40 || keycode === 83) {
      this.pacman.setUserInputDirection("DOWN");
    }
  }
}
