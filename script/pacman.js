// TARGET
// COORD_X
// COORD_Y
// isChaseMode
// 

export default class Pacman {
    constructor(coordY = 1, coordX = 1) {
        this.coordX = coordX;
        this.coordY = coordY;
        // possible directions : 'UP', 'DOWN', 'LEFT', 'RIGHT'
        this.direction = '';
        this.DOMPacman = document.getElementById('pacman');
        this.movePacman();
    }

    movePacman() {
        console.log('Pacman :',this.coordX * 20,'-',this.coordY * 20)
        this.DOMPacman.style.top = this.coordY * 20 +'px';
        this.DOMPacman.style.left = this.coordX * 20+'px';
    }
}