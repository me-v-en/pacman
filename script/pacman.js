let boardData = require("./board.json");
const TILE_SIZE = boardData.tileSize;

export default class Pacman {
    constructor(coord) {
        this.reinitPacman
    }

    reinitPacman(coord = [1,1]) {
        this.coord = coord;
        this.direction = '';
        this.DOMPacman = document.getElementById('pacman');
        this.drawPacman();
    }


    setDirection(direction) {
        this.direction = direction;
    }

    updatePacman(){
        if(this.direction === 'RIGHT' ){
            this.coord[1]++;
        }
        if(this.direction === 'LEFT'){
            this.coord[1]--;
        }
        if(this.direction === 'UP'){
            this.coord[0]--;
        }
        if(this.direction === 'DOWN'){
            this.coord[0]++;
        }
    }

    drawPacman() {
        // console.log('Pacman :', this.coordX * 20, '-', this.coordY * 20)
        this.DOMPacman.style.top = this.coord[0] * TILE_SIZE + 'px';
        this.DOMPacman.style.left = this.coord[1] * TILE_SIZE + 'px';
    }
}