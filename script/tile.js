// coordX
// coordY
// hasPoints
// hasBonusPoints

export default class Tile {
    constructor(initialData, coord, hasPoints = false) {
        //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
        this.tileType = '';
        this.coord = coord;
        this.hasPoints = hasPoints;
        
        switch (initialData) {
            case 'X':
                this.tileType = 'WALL';
                break;
            case '.':
                this.tileType = 'PATH';
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

        this.DOMElement = this.createTileElement();
    }

    createTileElement(){
        let tileElement = document.createElement("div");
        tileElement.classList = `tile ${this.tileType.toLowerCase()}`;
        tileElement.id = `tile-${this.coord[0]}-${this.coord[1]}`;

        document.getElementById("tile-row-"+this.coord[0]).appendChild(tileElement);
    }
}