const gameData = require("./data.json");
const ANIMATION_DURATION = gameData.animationDuration;


import STATE from "./state";

import {
  getDirectionFromCoord,
  compareArrays,
  substractCoord,
  distanceBetweenCoords
} from "./utils";


const DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

export default class EnnemyBehaviour {
  constructor(ennemy) {
    this.init(ennemy);
  }

  init(ennemy) {
    this.ennemy = ennemy;
  }


  update(timestamp) {
    this.updateState();

    this.computePath();
  }

  updateState() {
    switch (this.ennemy.state) {
      case 'SPAWN':
        if (compareArrays(this.ennemy.currentCoord, this.ennemy.targetCoord)) {
          this.ennemy.targetCoord = this.ennemy.scatterCoord;
          this.ennemy.state = 'SCATTER'
        };
        break;
      case 'SCATTER':
        if (compareArrays(this.ennemy.currentCoord, this.ennemy.scatterCoord)) {
          this.ennemy.state = 'CHASE'
        };
        break;
      case 'CHASE':
        break;
    }
  }

  computePath() {
    // get all possible tiles for the ennemy
    const possibleTiles = this.getPossibleTiles();
    if (possibleTiles.length > 1 && (this.ennemy.state === 'CHASE' || this.ennemy.state === 'FLEE')) {
      this.getTarget();
    }
    // Compute what is the closest possible tile to the target coord
    let tileToMove;
    if (this.ennemy.state === "FLEE") {
      tileToMove = this.computeFarthestTileToTarget(possibleTiles);
    }
    else tileToMove = this.computeNearestTileToTarget(possibleTiles);
    if (!tileToMove) return;

    // Set the target coord
    this.setMovingCoord(tileToMove.coord);
  }

getPossibleTiles() {
    let currentCoord = this.ennemy.currentCoord;
    // Ennemies can't go backwards
    let possibleDirections = DIRECTIONS.filter((dir) => dir != this.getOppositeDirection());
    let adjacentTiles = possibleDirections.map((direction) => {
      return STATE.board.getNextTileInDirection(currentCoord, direction);
    });

    return adjacentTiles.filter((tile) => {
      return this.isTilePossible(tile);
    })
  }


  isTilePossible(tile) {
    if (this.ennemy.justSpawned) {
      return ['PATH', 'GATE', 'HOME'].includes(tile.tileType);
    }
    return tile ?.tileType === "PATH";
  }

  computeNearestTileToTarget(possibleTiles) {
    let targetCoord = this.ennemy.targetCoord;
    let closestDistance = null;
    let closestTile = null;

    possibleTiles.forEach((tile) => {
      let distance = distanceBetweenCoords(tile.coord, targetCoord);
      if (closestDistance === null || distance < closestDistance) {
        closestDistance = distance;
        closestTile = tile;
      }
    });
    return closestTile;
  }


  computeFarthestTileToTarget(possibleTiles) {
    let targetCoord = this.ennemy.targetCoord;
    let longestDistance = null;
    let farthestTile = null;

    possibleTiles.forEach((tile) => {
      let distance = distanceBetweenCoords(tile.coord, targetCoord);
      if (longestDistance === null || distance > longestDistance) {
        longestDistance = distance;
        farthestTile = tile;
      }
    });
    return farthestTile;
  }


  getTarget() {
    if (!this.ennemy.state === 'CHASE') return;
    this.ennemy.justSpawned = false;
    this.ennemy.targetCoord = STATE.pacman.movingCoord;
  }

  computeDirection() {
    const directionCoord = substractCoord(this.ennemy.movingCoord, this.ennemy.currentCoord);
    return getDirectionFromCoord(directionCoord);
  }


  getOppositeDirection(){
    switch (this.ennemy.direction){
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
        return '';
    }
  }

  setMovingCoord(coord) {
    this.ennemy.movingCoord = coord;
    this.ennemy.animTimestamp = new Date().getTime();
    this.ennemy.direction = this.computeDirection();
    window.setTimeout(() => {
      this.ennemy.currentCoord = coord;
    }, ANIMATION_DURATION);
  }

  setFleeMode() {
    if (this.ennemy.state === 'SCATTER' || this.ennemy.state === 'CHASE') {
      this.ennemy.state = 'FLEE';
      this.direction = '';
    }
  }

  cancelFleeMode() {
    if (this.ennemy.state === 'FLEE') {
      this.direction = '';
      this.ennemy.state = 'CHASE';
    }
    else this.ennemy.state = 'SPAWN';
  }

  setOppositeDirection() {
    this.ennemy.direction = this.getOppositeDirection();
  }
}