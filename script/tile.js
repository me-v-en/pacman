// coordX
// coordY
// hasPoints
// hasBonusPoints

export default class Tile {
    constructor(initialData, coordY, coordX, hasPoints = false) {
        //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
        this.tileType = '';
        this.coordY = coordY;
        this.coordX = coordX;
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
        tileElement.id = `tile-${this.coordY}-${this.coordX}`;

        document.getElementById("tile-row-"+this.coordY).appendChild(tileElement);
    }
}