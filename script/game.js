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

        console.log('LOOP : ', progress, timestamp, this.lastRender);
        this.update(progress);
        this.draw();

        if (this.GAME_STATE !== 'STOPPED') {
            window.setTimeout(() => {
                    this.lastRender = timestamp;
                    window.requestAnimationFrame(this.loop.bind(this));
                },
                200);
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
        console.log('add handler');
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
            this.pacman.setDirection("LEFT");
        }
        // RIGHT : ARROW_RIGHT or D
        if (keycode === 39 || keycode === 68) {
            this.pacman.setDirection("RIGHT");
        }
        // UP : ARROW_UP or Z
        if (keycode === 38 || keycode === 90) {
            this.pacman.setDirection("UP");
        }
        // DOWN : ARROW_DOWN or S
        if (keycode === 40 || keycode === 83) {
            this.pacman.setDirection("DOWN");
        }
    }

    updatePacman() {
        if (this.pacman.direction) {
            let directionMatrice = DIRECTION_MATRICES[this.pacman.direction];
            let coordToMove = addCoord(directionMatrice, this.pacman.coord);
            let tileToMove = this.board.getTile(coordToMove);
            console.log(tileToMove);
            console.log(tileToMove.hasPoint);
            if (tileToMove.tileType === 'PATH') {
                this.pacman.setCoord(tileToMove.coord);
                if (tileToMove.hasPoint) {
                    this.addScore(10);
                    tileToMove.removePoint();
                }
            } else {
                this.pacman.direction = '';
            }
        }
    }

    addScore(value){
        this.score += value;
        this.scoreElement.textContent = this.score;
    }

}