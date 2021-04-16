// BOARD = [TILE]
// Dimensions : 28 x 31
// COORD [x,y]
import Tile from './tile';

let boardData = require("./board.json");
const BOARD_ARRAY = boardData.boardArray;
const BOARD_WIDTH = boardData.boardArray[0].length;
const BOARD_HEIGHT = boardData.boardArray.length;

export default class Board {
    constructor() {
        this.boardTiles = [];
    }

    buildBoard() {
        this.boardTiles = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            let line = [];
            this.createRowElement(i);
            for (let j = 0; j < BOARD_WIDTH; j++) {
                let tile = new Tile(BOARD_ARRAY[i][j], i, j);
                line.push(tile);
            }
            this.boardTiles.push(line);
        }
    }

    createRowElement(i) {
        let DOMrow = document.createElement("div");
        DOMrow.classList = "tile-row";
        DOMrow.id = "tile-row-" + i;
        document.getElementById("board").appendChild(DOMrow);
    }

    getTile(coord){
        if(coord){
            let 
        return this.boardTiles[coord[0]][coord[1]];
        }
    }

}