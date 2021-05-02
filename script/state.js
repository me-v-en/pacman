class State {
  constructor() {
    this.initState();
  }

  initState() {
    this.score = 0;
    this.gameState = 'START';
    this.board;
    this.pacman;
    this.boneys;
  }
}

const STATE = new State();
export default {STATE};
