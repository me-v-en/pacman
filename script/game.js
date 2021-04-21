import Board from "./board";
import Pacman from "./pacman";
import Tile from "./tile";

import {
    modulo,
    DIRECTION_MATRICES,
    addCoord
} from './utils';


export default class Game {

    constructor() {
        this.board = new Board();
        this.pacman = new Pacman();

        this.scoreElement = document.getElementById('score');

        this.score = 0;
        // time since the start of the game loop
        this.lastRender = 0;
        // Possible state : STOPPED, START, GAME, CHASE
        this.GAME_STATE = 'START';
    }

    initGame() {
        this.board.buildBoard();
    }

    startGameLoop() {
        this.pacman.reinitPacman();
        this.bindEventHandler();
        this.lastRender = 0;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    loop(timestamp) {
        let progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();

        if (this.GAME_STATE !== 'STOPPED') {
            this.lastRender = timestamp;
            window.requestAnimationFrame(this.loop.bind(this));
        }

    }

    update(progress) {
        // Update the state of the world for the elapsed time since last render
        this.updatePacman();
    }

    draw() {
        // Update the state of the world for the elapsed time since last render
        this.pacman.drawPacman();
    }

    bindEventHandler() {
        document.addEventListener("keyup", this.keyupEventHandler.bind(this));
    }

    unbindEventHandler() {
        document.removeEventListener("keyup", this.keyupEventHandler);
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

    updatePacman() {
        if (this.pacman.coordIsTargetCoord()) {
            this.addPointOfCurrentPacmanTile();
            // If animation is still happening
            if (this.pacman.direction || this.pacman.userInputDirection) {
                // if (!this.pacman.animationIsPending()) {
                // Calcul of the next tile in the direction
                let nextTile = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.userInputDirection);
                if (nextTile && nextTile.tileType === 'PATH') {
                    this.pacman.confirmUserDirection();
                    this.pacman.setTargetCoord(nextTile.coord);
                } else {
                    let nextTile = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.direction);
                    if (nextTile && nextTile.tileType === 'PATH') {
                        this.pacman.setTargetCoord(nextTile.coord);
                    } else {
                        this.pacman.direction = '';
                        this.pacman.state = 'IDLE';
                    }
                }
            }
        }
    }
    setPacmanTargetTile(tile) {
        this.pacman.setTargetCoord(tile.coord);
    }

    addPointOfCurrentPacmanTile() {
        let currentTile = this.board.getTile(this.pacman.currentCoord);
        if (currentTile.hasPoint) {
            this.addScore(10);
            currentTile.removePoint();
        }
    }

    getNextTileInDirection(currentCoord, direction) {
        if(direction && currentCoord){
        let directionMatrice = DIRECTION_MATRICES[direction];
        let coordToMove = addCoord(directionMatrice, currentCoord);
        return this.board.getTile(coordToMove);
        } else return false;
    }

    addScore(value) {
        this.score += value;
        this.scoreElement.textContent = this.score;
    }

}