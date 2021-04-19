// coordX
// coordY
// hasPoint
// hasBonusPoints

export default class Tile {
    constructor(initialData, coord) {
        //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
        this.tileType = '';
        this.coord = coord;
        this.hasPoint = false;
        
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

        this.DOMElement = this.createTileElement();
    }

    createTileElement(){
        let tileElement = document.createElement("div");
        tileElement.className = `tile ${this.tileType.toLowerCase()} ${this.hasPoint ?  'point' : ''}`;
        tileElement.id = `tile-${this.coord[0]}-${this.coord[1]}`;

        document.getElementById("tile-row-"+this.coord[0]).appendChild(tileElement);
        return tileElement;
    }

    removePoint(){
        this.hasPoint = false;
        this.DOMElement.classList.remove('point');
    }
}