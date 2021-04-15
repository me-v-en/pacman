import Board from "./board";
import Pacman from "./pacman";


export default class Game {

    constructor() {
        this.board = new Board();
        this.pacman = new Pacman();
        // time since the start of the game loop
        this.lastRender = 0;
    }

    initGame(){
        this.board.buildBoard();
    }

    startGameLoop(){
        this.lastRender = 0;
window.requestAnimationFrame(loop);
    }

    loop(timestamp){
        let progress = timestamp - lastRender

        update(progress);
        draw();
      
        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }

    update(progress){
// Update the state of the world for the elapsed time since last render
    }

    draw(){
        // Update the state of the world for the elapsed time since last render
    }

}