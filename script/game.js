import Board from "./board";
import Pacman from "./pacman";


export default class Game {

    constructor() {
        this.board = new Board();
        this.pacman = new Pacman();
        // time since the start of the game loop
        this.lastRender = 0;
        // Possible state : STOPPED, START, GAME, CHASE
        this.GAME_STATE = 'START';
    }

    initGame() {
        this.board.buildBoard();
        this.startGameLoop();
    }

    startGameLoop() {
        this.pacman.reinitPacman();
        this.bindEventHandler();
        this.lastRender = 0;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    loop(timestamp) {
        let progress = timestamp - this.lastRender;

        // console.log('LOOP : ', progress, timestamp, this.lastRender);
        this.update(progress);
        this.draw();

        if (this.GAME_STATE !== 'STOPPED') {
            window.setTimeout(() => {
                    this.lastRender = timestamp;
                    window.requestAnimationFrame(this.loop.bind(this));
                },
                500);
        }
    }

    update(progress) {
        // Update the state of the world for the elapsed time since last render
        this.pacman.updatePacman();
    }

    draw() {
        // Update the state of the world for the elapsed time since last render
        this.pacman.drawPacman();
    }

    bindEventHandler() {
        console.log('add handler');
        document.addEventListener("keyup", this.keyupEventHandler);
    }

    unbindEventHandler() {
        console.log('remove handler');
        document.removeEventListener("keyup", this.keyupEventHandler);
    }

    keyupEventHandler(event) {
        let keycode = event.target.value;

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

    updatePacman(){
        if(this.pacman.direction){
            
        }
    }

}