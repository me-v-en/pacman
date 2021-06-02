class State {
  constructor() {
    this.initState();
  }

  initState() {
    this.score = 0;
    this.gameState = 'START';
    this.board;
    this.pacman;
    this.ennemies;
  }
}

const STATE = new State();
export default {STATE};
