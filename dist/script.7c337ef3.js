// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script/tile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// coordX
// coordY
// hasPoint
// hasBonusPoints
var Tile = /*#__PURE__*/function () {
  function Tile(initialData, coord) {
    _classCallCheck(this, Tile);

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

  _createClass(Tile, [{
    key: "createTileElement",
    value: function createTileElement() {
      var tileElement = document.createElement("div");
      tileElement.className = "tile ".concat(this.tileType.toLowerCase(), " ").concat(this.hasPoint ? 'point' : '');
      tileElement.id = "tile-".concat(this.coord[0], "-").concat(this.coord[1]);
      document.getElementById("tile-row-" + this.coord[0]).appendChild(tileElement);
      return tileElement;
    }
  }, {
    key: "removePoint",
    value: function removePoint() {
      this.hasPoint = false;
      this.DOMElement.classList.remove('point');
    }
  }]);

  return Tile;
}();

exports.default = Tile;
},{}],"script/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modulo = modulo;
exports.addCoord = addCoord;
exports.DIRECTION_MATRICES = void 0;

function modulo(n, m) {
  var mod = (n % m + m) % m;
  return mod < 0 ? mod + Math.abs(m) : mod;
}

;
var DIRECTION_MATRICES = {
  'LEFT': [0, -1],
  'RIGHT': [0, 1],
  'UP': [-1, 0],
  'DOWN': [1, 0]
};
exports.DIRECTION_MATRICES = DIRECTION_MATRICES;

function addCoord(coord1, coord2) {
  if (coord1.length === coord2.length) {
    return coord1.map(function (value, index) {
      return value += coord2[index];
    });
  }
}

;
},{}],"script/data.json":[function(require,module,exports) {
module.exports = {
  "animationDuration": 100,
  "tileSize": 30,
  "boardWidth": 28,
  "boardHeight": 31,
  "boardArray": [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "-", "-", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]]
};
},{}],"script/board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tile = _interopRequireDefault(require("./tile"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var BOARD_ARRAY = gameData.boardArray;
var BOARD_WIDTH = gameData.boardArray[0].length;
var BOARD_HEIGHT = gameData.boardArray.length;

var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.boardTiles = [];
  }

  _createClass(Board, [{
    key: "buildBoard",
    value: function buildBoard() {
      this.boardTiles = [];

      for (var i = 0; i < BOARD_HEIGHT; i++) {
        var line = [];
        this.createRowElement(i);

        for (var j = 0; j < BOARD_WIDTH; j++) {
          var tile = new _tile.default(BOARD_ARRAY[i][j], [i, j]);
          line.push(tile);
        }

        this.boardTiles.push(line);
      }
    }
  }, {
    key: "createRowElement",
    value: function createRowElement(i) {
      var DOMrow = document.createElement("div");
      DOMrow.classList = "tile-row";
      DOMrow.id = "tile-row-" + i;
      document.getElementById("board").appendChild(DOMrow);
    }
  }, {
    key: "getTile",
    value: function getTile(coord) {
      if (coord) {
        var coordY = (0, _utils.modulo)(coord[0], BOARD_HEIGHT);
        var coordX = (0, _utils.modulo)(coord[1], BOARD_WIDTH);
        return this.boardTiles[coordY][coordX];
      }
    }
  }]);

  return Board;
}();

exports.default = Board;
},{"./tile":"script/tile.js","./utils":"script/utils.js","./data.json":"script/data.json"}],"script/pacman.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var TILE_SIZE = gameData.tileSize;
var ANIMATION_DURATION = gameData.animationDuration;

var Pacman = /*#__PURE__*/function () {
  function Pacman(coord) {
    _classCallCheck(this, Pacman);

    this.reinitPacman();
  }

  _createClass(Pacman, [{
    key: "reinitPacman",
    value: function reinitPacman() {
      var coord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [14, 1];
      // Actual coord of the pacman
      this.currentCoord = coord; // Coord where the pacman is moving to

      this.targetCoord = coord; // Possible state : IDLE, MOVING, DEAD

      this.state = 'IDLE'; // Timestamp fo the start of the animation

      this.animTimestamp = null;
      this.direction = '';
      this.userInputDirection = '';
      this.DOMPacman = document.getElementById('pacman');
      this.DOMPacmanHead = document.querySelector('#pacman .head');
      this.DOMPacmanBody = document.querySelector('#pacman .body');
      this.drawPacman();
    } // animationIsPending(){    
    //     if(this.state ==='MOVING'){
    //     return this.getProgressOfAnimation() < 1;
    //     }
    //     else return false;
    // }

  }, {
    key: "setUserInputDirection",
    value: function setUserInputDirection(direction) {
      var _this = this;

      this.userInputDirection = direction;
      window.setTimeout(function () {
        _this.userInputDirection = '';
      }, 500);
    }
  }, {
    key: "confirmUserDirection",
    value: function confirmUserDirection() {
      this.direction = this.userInputDirection;
      this.changePacmanSprite();
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
    }
  }, {
    key: "setTargetCoord",
    value: function setTargetCoord(coord) {
      var _this2 = this;

      this.state = 'MOVING';
      this.targetCoord = coord;
      this.animTimestamp = new Date().getTime();
      window.setTimeout(function () {
        _this2.currentCoord = coord;
      }, ANIMATION_DURATION);
    }
  }, {
    key: "coordIsTargetCoord",
    value: function coordIsTargetCoord() {
      return this.currentCoord === this.targetCoord;
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      return null;
    }
  }, {
    key: "drawPacman",
    value: function drawPacman() {
      if (this.state === 'MOVING') {
        // Get the percentage of progress of the anim
        var animationProgress = this.getProgressOfAnimation(); //Delta of the current tile and target tiles

        var deltaY = this.targetCoord[0] - this.currentCoord[0];
        var deltaX = this.targetCoord[1] - this.currentCoord[1]; // Position based on the progress of the animation

        var top = this.currentCoord[0] + deltaY * animationProgress;
        var left = this.currentCoord[1] + deltaX * animationProgress; // Setting the position of the pacman

        this.DOMPacman.style.top = top * TILE_SIZE + 'px';
        this.DOMPacman.style.left = left * TILE_SIZE + 'px';
      }

      if (this.state === 'IDLE') {
        // If idle, set the pacman at the position of the tile
        this.DOMPacman.style.top = this.currentCoord[0] * TILE_SIZE + 'px';
        this.DOMPacman.style.left = this.currentCoord[1] * TILE_SIZE + 'px';
      }
    }
  }, {
    key: "getProgressOfAnimation",
    value: function getProgressOfAnimation() {
      var currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
    }
  }, {
    key: "changePacmanSprite",
    value: function changePacmanSprite() {
      if (this.direction !== 'LEFT') {
        this.DOMPacman.classList.remove('left');
      }

      if (this.state === 'IDLE') {
        this.DOMPacmanHead.src = "/img/head.png";
        this.DOMPacmanBody.src = "/img/body.png";
      } else {
        if (this.direction === 'UP') {
          this.DOMPacmanHead.src = "/img/head-up.png";
          this.DOMPacmanBody.src = "/img/body.png";
        }

        if (this.direction === 'DOWN') {
          this.DOMPacmanHead.src = "/img/head.png";
          this.DOMPacmanBody.src = "/img/body.png";
        }

        if (this.direction === 'RIGHT' || this.direction === 'LEFT') {
          this.DOMPacmanHead.src = "/img/head-right.png";
          this.DOMPacmanBody.src = "/img/body-right.png";
        }

        if (this.direction === 'LEFT') {
          this.DOMPacman.classList.add('left');
        }
      }
    }
  }]);

  return Pacman;
}();

exports.default = Pacman;
},{"./data.json":"script/data.json"}],"script/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _board = _interopRequireDefault(require("./board"));

var _pacman = _interopRequireDefault(require("./pacman"));

var _tile = _interopRequireDefault(require("./tile"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = new _board.default();
    this.pacman = new _pacman.default();
    this.scoreElement = document.getElementById('score');
    this.score = 0; // time since the start of the game loop

    this.lastRender = 0; // Possible state : STOPPED, START, GAME, CHASE

    this.GAME_STATE = 'START';
  }

  _createClass(Game, [{
    key: "initGame",
    value: function initGame() {
      this.board.buildBoard();
    }
  }, {
    key: "startGameLoop",
    value: function startGameLoop() {
      this.pacman.reinitPacman();
      this.bindEventHandler();
      this.lastRender = 0;
      window.requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "loop",
    value: function loop(timestamp) {
      var progress = timestamp - this.lastRender;
      this.update(progress);
      this.draw();

      if (this.GAME_STATE !== 'STOPPED') {
        this.lastRender = timestamp;
        window.requestAnimationFrame(this.loop.bind(this));
      }
    }
  }, {
    key: "update",
    value: function update(progress) {
      // Update the state of the world for the elapsed time since last render
      this.updatePacman();
    }
  }, {
    key: "draw",
    value: function draw() {
      // Update the state of the world for the elapsed time since last render
      this.pacman.drawPacman();
    }
  }, {
    key: "bindEventHandler",
    value: function bindEventHandler() {
      document.addEventListener("keyup", this.keyupEventHandler.bind(this));
    }
  }, {
    key: "unbindEventHandler",
    value: function unbindEventHandler() {
      document.removeEventListener("keyup", this.keyupEventHandler);
    }
  }, {
    key: "keyupEventHandler",
    value: function keyupEventHandler(event) {
      event.preventDefault();
      var keycode = event.which; // LEFT : ARROW_LEFT or Q

      if (keycode === 37 || keycode === 81) {
        this.pacman.setUserInputDirection("LEFT");
      } // RIGHT : ARROW_RIGHT or D


      if (keycode === 39 || keycode === 68) {
        this.pacman.setUserInputDirection("RIGHT");
      } // UP : ARROW_UP or Z


      if (keycode === 38 || keycode === 90) {
        this.pacman.setUserInputDirection("UP");
      } // DOWN : ARROW_DOWN or S


      if (keycode === 40 || keycode === 83) {
        this.pacman.setUserInputDirection("DOWN");
      }
    }
  }, {
    key: "updatePacman",
    value: function updatePacman() {
      if (this.pacman.coordIsTargetCoord()) {
        this.addPointOfCurrentPacmanTile(); // If animation is still happening

        if (this.pacman.direction || this.pacman.userInputDirection) {
          // if (!this.pacman.animationIsPending()) {
          // Calcul of the next tile in the direction
          var nextTile = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.userInputDirection);

          if (nextTile && nextTile.tileType === 'PATH') {
            this.pacman.confirmUserDirection();
            this.pacman.setTargetCoord(nextTile.coord);
          } else {
            var _nextTile = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.direction);

            if (_nextTile && _nextTile.tileType === 'PATH') {
              this.pacman.setTargetCoord(_nextTile.coord);
            } else {
              this.pacman.direction = '';
              this.pacman.state = 'IDLE';
            }
          }
        }
      }
    }
  }, {
    key: "setPacmanTargetTile",
    value: function setPacmanTargetTile(tile) {
      this.pacman.setTargetCoord(tile.coord);
    }
  }, {
    key: "addPointOfCurrentPacmanTile",
    value: function addPointOfCurrentPacmanTile() {
      var currentTile = this.board.getTile(this.pacman.currentCoord);

      if (currentTile.hasPoint) {
        this.addScore(10);
        currentTile.removePoint();
      }
    }
  }, {
    key: "getNextTileInDirection",
    value: function getNextTileInDirection(currentCoord, direction) {
      if (direction && currentCoord) {
        var directionMatrice = _utils.DIRECTION_MATRICES[direction];
        var coordToMove = (0, _utils.addCoord)(directionMatrice, currentCoord);
        return this.board.getTile(coordToMove);
      } else return false;
    }
  }, {
    key: "addScore",
    value: function addScore(value) {
      this.score += value;
      this.scoreElement.textContent = this.score;
    }
  }]);

  return Game;
}();

exports.default = Game;
},{"./board":"script/board.js","./pacman":"script/pacman.js","./tile":"script/tile.js","./utils":"script/utils.js"}],"script/index.js":[function(require,module,exports) {
"use strict";

var _game = _interopRequireDefault(require("./game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  var game = new _game.default();
  game.initGame();
  game.startGameLoop();
});
},{"./game":"script/game.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54811" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/index.js"], null)
//# sourceMappingURL=/script.7c337ef3.js.map