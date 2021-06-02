import Board from "./board";
import {
  CANVAS_ELEMENT,
  CTX
} from "./canvas";
import Ennemy from "./ennemy";
import Pacman from "./pacman";
import Tile from "./tile";
import STATE from "./state";

const gameData = require("./data.json");
const ENNEMIES_DATA = gameData.ennemiesData;
const DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

import {
  modulo,
  DIRECTION_MATRICES,
  addCoord,
  distanceBetweenCoords
} from "./utils";

export default class Game {
  constructor() {

    STATE.score = 0;
    // Possible state : STOPPED, START, GAME, CHASE
    STATE.gameState = "START";

    this.initGame();
  }

  initGame() {
    STATE.board = new Board();
    STATE.pacman = new Pacman();
    STATE.ennemies = this.initEnnemies();

    // START, END
    STATE.gameState = 'START';

    this.draw();
  }

  startGameLoop() {
    this.bindEventHandler();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;
    this.lastRender = timestamp;

    this.draw(progress, timestamp);
    this.update(progress, timestamp);

    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(progress, timestamp) {
    // Update the state of the world for the elapsed time since last render
    this.updateGameState();
    if (STATE.gameState !== 'END') {
      STATE.pacman.update();
      this.updateEnnemies(timestamp);
    }
  }
  
  updateGameState() {
    if (this.isPacmanDead()) {
      STATE.pacman.setDead();
      STATE.gameState = 'END';
    }
  }


  isPacmanDead() {
    let pacmanIsDead = false;
    ennemyLoop : for (let i = 0; i < STATE.ennemies.length; i++){
      let ennemy = STATE.ennemies[i];
      if (ennemy.isPacmanKilled(STATE.pacman.currentCoord)) {
        pacmanIsDead = true;
        break ennemyLoop;
      }
    }
    return pacmanIsDead;    
  }

  draw(progress, timestamp) {
    // Reinit the canvas
    CTX.fillStyle = "#2c2a2a";
    CTX.fillRect(0, 0, CANVAS_ELEMENT.width, CANVAS_ELEMENT.height);
    // Update the state of the world for the elapsed time since last render
    STATE.board.drawBoard();
    this.drawEnnemies(timestamp);
    STATE.pacman.draw(timestamp);
  }


  ////////////////////////////////////
  // GHOSTS
  ////////////////////////////////////
  initEnnemies() {
    const ennemies = [];
    ENNEMIES_DATA.forEach((ennemyData) => {
      ennemies.push(new Ennemy(ennemyData));
    });
    return ennemies;
  }

  updateEnnemies(timestamp) {
    STATE.ennemies.forEach((ennemy) => {
      ennemy.update(timestamp);
    });
  }

  drawEnnemies(timestamp) {
    STATE.ennemies.forEach((ennemy) => {
      ennemy.draw(timestamp);
    });
  }


  bindEventHandler() {
    document.addEventListener("keydown", this.keydownEventHandler.bind(this));
  }

  unbindEventHandler() {
    document.removeEventListener("keydown", this.keydownEventHandler);
  }

  keydownEventHandler(event) {
    let keycode = event.which;

    // LEFT : ARROW_LEFT or Q
    if (keycode === 37 || keycode === 81) {
      STATE.pacman.setUserInputDirection("LEFT");
      event.preventDefault();
    }
    // RIGHT : ARROW_RIGHT or D
    if (keycode === 39 || keycode === 68) {
      STATE.pacman.setUserInputDirection("RIGHT");
    event.preventDefault();
    }
    // UP : ARROW_UP or Z
    if (keycode === 38 || keycode === 90) {
      STATE.pacman.setUserInputDirection("UP");
    event.preventDefault();
    }
    // DOWN : ARROW_DOWN or S
    if (keycode === 40 || keycode === 83) {
      STATE.pacman.setUserInputDirection("DOWN");
    event.preventDefault();
    }
  }
}