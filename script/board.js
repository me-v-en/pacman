// BOARD = [TILE]
// Dimensions : 28 x 31
let boardData = require("./board.json"),
    const BOARD_ARRAY = boardData.boardArray;
const BOARD_WIDTH = boardData.boardArray;
const BOARD_HEIGHT = boardData.boardArray;

class Board {
    constructor() {
        this.board = BOARD_ARRAY;
        this.boardTiles = [];
        this.boardDOMElements = [];
    }

    buildBoard = () => {
        this.boardTiles = [];
        this.boardDOMElements = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            let line = [];
            for (let j = 0; j < BOARD_WIDTH; j++) {
                let tile = new Tile();
                line.push(tile);
                // createDOMElement
            }
        }
    }




}