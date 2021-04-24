import { CANVAS_ELEMENT, CTX, COIN_IMAGE } from "./canvas";

let gameData = require("./data.json");
const TILE_SIZE = gameData.tileSize;
export default class Tile {
    constructor(initialData, coord) {
        //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
        this.tileType = '';
        this.coord = coord;
        this.hasPoint = false;
        console.log(coord);
        if(coord === [0,0]){
            console.log(COIN_IMAGE);
        }
        
        switch (initialData) {
            case 'X':
                this.tileType = 'WALL';
                break;
            case '.':
                this.tileType = 'PATH';
                this.hasPoint = true;
                break;
            case '-':
                this.tileType = 'GATE';
                break;
            case 'h':
                this.tileType = 'HOME';
                break;
            default:
                break;
        }
    }

   
    removePoint(){
        this.hasPoint = false;
    }
    
    drawTile(){
        // console.log('drawTile ', this.coord);
        CTX.drawImage(COIN_IMAGE, this.coord[1], this.coord[0], this.tileSize, this.tileSize);     
    }
}