let gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
const ANIMATION_DURATION = gameData.animationDuration;

export default class Pacman {
    constructor(coord) {
        this.reinitPacman();
    }

    reinitPacman(coord = [14, 1]) {
        // Actual coord of the pacman
        this.currentCoord = coord;
        // Coord where the pacman is moving to
        this.targetCoord = coord;
        // Possible state : IDLE, MOVING, DEAD
        this.state = 'IDLE';
        // Timestamp fo the start of the animation
        this.animTimestamp = null;
        this.direction = '';
        this.userInputDirection = '';
        this.DOMPacman = document.getElementById('pacman');
        this.DOMPacmanHead = document.querySelector('#pacman .head');
        this.DOMPacmanBody = document.querySelector('#pacman .body');
        this.drawPacman();
    }

    // animationIsPending(){    
    //     if(this.state ==='MOVING'){
    //     return this.getProgressOfAnimation() < 1;
    //     }
    //     else return false;
    // }

    setUserInputDirection(direction) {
        this.userInputDirection = direction;
        window.setTimeout(() => {
            this.userInputDirection = '';
        }, 500);
    }

    confirmUserDirection() {
        this.direction = this.userInputDirection;
        this.changePacmanSprite();
    }

    setDirection(direction) {
        this.direction = direction;
    }

    setTargetCoord(coord) {
        this.state = 'MOVING';
        this.targetCoord = coord;
        this.animTimestamp = new Date().getTime();
        window.setTimeout(() => {
            this.currentCoord = coord;
        }, ANIMATION_DURATION);
    }

    coordIsTargetCoord() {
        return this.currentCoord === this.targetCoord;
    }

    updateAnimation() {
        return null;
    }

    drawPacman() {
        if (this.state === 'MOVING') {
            // Get the percentage of progress of the anim
            let animationProgress = this.getProgressOfAnimation();
            //Delta of the current tile and target tiles
            let deltaY = this.targetCoord[0] - this.currentCoord[0];
            let deltaX = this.targetCoord[1] - this.currentCoord[1];

            // Position based on the progress of the animation
            let top = this.currentCoord[0] + deltaY * animationProgress;
            let left = this.currentCoord[1] + deltaX * animationProgress;

            // Setting the position of the pacman
            this.DOMPacman.style.top = top * TILE_SIZE + 'px';
            this.DOMPacman.style.left = left * TILE_SIZE + 'px';
        }
        if (this.state === 'IDLE') {
            // If idle, set the pacman at the position of the tile
            this.DOMPacman.style.top = this.currentCoord[0] * TILE_SIZE + 'px';
            this.DOMPacman.style.left = this.currentCoord[1] * TILE_SIZE + 'px';
        }
    }

    getProgressOfAnimation() {
        let currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
    }

    changePacmanSprite(){
        if(this.direction !== 'LEFT'){
            this.DOMPacman.classList.remove('left');            
        }
        if(this.state === 'IDLE'){
            this.DOMPacmanHead.src = "/img/head.png";
            this.DOMPacmanBody.src = "/img/body.png";
        }
        else{
        if(this.direction === 'UP'){
            this.DOMPacmanHead.src = "/img/head-up.png";
            this.DOMPacmanBody.src = "/img/body.png";
        }
        if(this.direction === 'DOWN'){
            this.DOMPacmanHead.src = "/img/head.png";
            this.DOMPacmanBody.src = "/img/body.png";
        }
        if(this.direction === 'RIGHT' || this.direction === 'LEFT'){
            this.DOMPacmanHead.src = "/img/head-right.png";
            this.DOMPacmanBody.src = "/img/body-right.png";
            
        }
        if(this.direction === 'LEFT'){
            this.DOMPacman.classList.add('left');            
        }
    }
        
    }
}