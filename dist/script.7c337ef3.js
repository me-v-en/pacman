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
})({"script/canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENNEMY_BODY = exports.ENNEMY_HEAD = exports.ISAAC_SPRITE = exports.PILL_IMAGE = exports.COIN_IMAGE = exports.BG_IMAGE = exports.CTX = exports.SCORE_ELEMENT = exports.CANVAS_ELEMENT = void 0;
var CANVAS_ELEMENT = document.getElementById("canvas");
exports.CANVAS_ELEMENT = CANVAS_ELEMENT;
var SCORE_ELEMENT = document.getElementById("score");
exports.SCORE_ELEMENT = SCORE_ELEMENT;
var CTX = canvas.getContext("2d");
exports.CTX = CTX;
CTX.imageSmoothingEnabled = false;
var BG_IMAGE = document.getElementById("bgBoard");
exports.BG_IMAGE = BG_IMAGE;
var COIN_IMAGE = document.getElementById("coin");
exports.COIN_IMAGE = COIN_IMAGE;
var PILL_IMAGE = document.getElementById("pill");
exports.PILL_IMAGE = PILL_IMAGE;
var ISAAC_SPRITE = document.getElementById("isaacSprite");
exports.ISAAC_SPRITE = ISAAC_SPRITE;
var ENNEMY_HEAD = document.getElementById("ennemyHead");
exports.ENNEMY_HEAD = ENNEMY_HEAD;
var ENNEMY_BODY = document.getElementById("ennemyBody");
exports.ENNEMY_BODY = ENNEMY_BODY;
},{}],"script/data.json":[function(require,module,exports) {
module.exports = {
  "animationDuration": 200,
  "stepAnimationDuration": 80,
  "framesStep": 10,
  "spriteSize": 32,
  "tileSize": 32,
  "boardWidth": 28,
  "boardHeight": 31,
  "canvasWidth": 840,
  "canvasHeight": 930,
  "powerUpDuration": 10000,
  "ennemiesData": [{
    "initialCoord": [12, 13],
    "initialTarget": [13, 11],
    "scatterTarget": [1, 26],
    "spawnTimeout": 2000
  }, {
    "initialCoord": [13, 13],
    "initialTarget": [13, 11],
    "scatterTarget": [1, 1],
    "spawnTimeout": 4000
  }, {
    "initialCoord": [14, 13],
    "initialTarget": [13, 11],
    "scatterTarget": [26, 1],
    "spawnTimeout": 6000
  }, {
    "initialCoord": [15, 13],
    "initialTarget": [14, 11],
    "scatterTarget": [26, 29],
    "spawnTimeout": 8000
  }],
  "boardArray": [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", "O", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "O", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "-", "-", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", "O", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", "O", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]]
};
},{}],"script/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modulo = modulo;
exports.moduloCoord = moduloCoord;
exports.getDirectionFromCoord = getDirectionFromCoord;
exports.addCoord = addCoord;
exports.substractCoord = substractCoord;
exports.distanceBetweenCoords = distanceBetweenCoords;
exports.compareArrays = compareArrays;
exports.DIRECTION_MATRICES = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var gameData = require("./data.json");

var CANVAS_WIDTH = gameData.canvasWidth;
var CANVAS_HEIGHT = gameData.canvasHeight;
var DIRECTION_MATRICES = {
  'LEFT': [-1, 0],
  'RIGHT': [1, 0],
  'UP': [0, -1],
  'DOWN': [0, 1]
};
exports.DIRECTION_MATRICES = DIRECTION_MATRICES;

function modulo(n, m) {
  var mod = (n % m + m) % m;
  return mod < 0 ? mod + Math.abs(m) : mod;
}

;

function moduloCoord(coord) {
  return [modulo(coord[0], CANVAS_WIDTH), modulo(coord[1], CANVAS_HEIGHT)];
}

;

function getDirectionFromCoord(coord) {
  var directionObject = Object.entries(DIRECTION_MATRICES).find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        direction = _ref2[0],
        directionCoord = _ref2[1];

    return compareArrays(coord, directionCoord);
  });

  if (directionObject) {
    return directionObject[0];
  }
}

function addCoord(coord1, coord2) {
  return coord1.map(function (value, index) {
    return value += coord2[index];
  });
}

;

function substractCoord(coord1, coord2) {
  return coord1.map(function (value, index) {
    return value -= coord2[index];
  });
}

;

function distanceBetweenCoords(coord1, coord2) {
  var part1 = Math.pow(coord1[0] - coord2[0], 2);
  var part2 = Math.pow(coord1[1] - coord2[1], 2);
  return Math.sqrt(part1 + part2);
}

;

function compareArrays(a, b) {
  // if length is not equal
  if ((a === null || a === void 0 ? void 0 : a.length) != (b === null || b === void 0 ? void 0 : b.length)) return false; // comapring each element of array

  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }

  return true;
}
},{"./data.json":"script/data.json"}],"script/tile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var TILE_SIZE = gameData.tileSize;

var Tile = /*#__PURE__*/function () {
  function Tile(initialData, coord) {
    _classCallCheck(this, Tile);

    //possible tileType : 'PATH', 'WALL', 'GATE', 'HOME'
    this.tileType = "";
    this.coord = coord;
    this.hasPoint = false;
    this.hasSuperPoint = false;

    switch (initialData) {
      case "X":
        this.tileType = "WALL";
        break;

      case ".":
        this.tileType = "PATH";
        this.hasPoint = true;
        break;

      case "O":
        this.tileType = "PATH";
        this.hasSuperPoint = true;
        break;

      case "-":
        this.tileType = "GATE";
        break;

      case "h":
        this.tileType = "HOME";
        break;

      default:
        break;
    }
  }

  _createClass(Tile, [{
    key: "removePoint",
    value: function removePoint() {
      this.hasPoint = false;
      this.hasSuperPoint = false;
    }
  }, {
    key: "drawTile",
    value: function drawTile() {
      if (this.hasPoint) {
        _canvas.CTX.drawImage(_canvas.COIN_IMAGE, this.coord[0] * TILE_SIZE, this.coord[1] * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }

      if (this.hasSuperPoint) {
        var incrementConst = 16;

        _canvas.CTX.drawImage(_canvas.PILL_IMAGE, this.coord[0] * TILE_SIZE - incrementConst / 2, this.coord[1] * TILE_SIZE - incrementConst / 2, TILE_SIZE + incrementConst, TILE_SIZE + incrementConst);
      }
    }
  }]);

  return Tile;
}();

exports.default = Tile;
},{"./canvas":"script/canvas.js","./utils":"script/utils.js","./data.json":"script/data.json"}],"script/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    this.initState();
  }

  _createClass(State, [{
    key: "initState",
    value: function initState() {
      this.score = 0;
      this.gameState = 'START';
      this.board;
      this.pacman;
      this.ennemies;
    }
  }]);

  return State;
}();

var STATE = new State();
var _default = {
  STATE: STATE
};
exports.default = _default;
},{}],"script/board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tile = _interopRequireDefault(require("./tile"));

var _canvas = require("./canvas");

var _utils = require("./utils");

var _state = _interopRequireDefault(require("./state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var BOARD_ARRAY = gameData.boardArray;
var BOARD_WIDTH = gameData.boardArray[0].length;
var BOARD_HEIGHT = gameData.boardArray.length;
var CANVAS_WIDTH = gameData.canvasWidth;
var CANVAS_HEIGHT = gameData.canvasHeight;

var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.boardTiles = [];
    this.initBoard();
  }

  _createClass(Board, [{
    key: "initBoard",
    value: function initBoard() {
      this.boardTiles = [];

      for (var y = 0; y < BOARD_HEIGHT; y++) {
        var line = [];

        for (var x = 0; x < BOARD_WIDTH; x++) {
          var tile = new _tile.default(BOARD_ARRAY[y][x], [x, y]);
          line.push(tile);
        }

        this.boardTiles.push(line);
      }
    }
  }, {
    key: "getTile",
    value: function getTile(coord) {
      if (coord) {
        var coordX = (0, _utils.modulo)(coord[0], BOARD_WIDTH);
        var coordY = (0, _utils.modulo)(coord[1], BOARD_HEIGHT);
        return this.boardTiles[coordY][coordX];
      }
    }
  }, {
    key: "drawBoard",
    value: function drawBoard() {
      _canvas.CTX.drawImage(_canvas.BG_IMAGE, 0, 0, _canvas.CANVAS_ELEMENT.width, _canvas.CANVAS_ELEMENT.height);

      this.drawTiles();
    }
  }, {
    key: "drawTiles",
    value: function drawTiles() {
      this.boardTiles.forEach(function (row) {
        row.forEach(function (tile) {
          tile.drawTile();
        });
      });
    }
  }, {
    key: "getNextTileInDirection",
    value: function getNextTileInDirection(currentCoord, direction) {
      if (!direction || !currentCoord) {
        return false;
      }

      var directionMatrice = _utils.DIRECTION_MATRICES[direction];
      var coordToMove = (0, _utils.addCoord)(directionMatrice, currentCoord);
      return _state.default.board.getTile(coordToMove);
    }
  }]);

  return Board;
}();

exports.default = Board;
},{"./tile":"script/tile.js","./canvas":"script/canvas.js","./utils":"script/utils.js","./state":"script/state.js","./data.json":"script/data.json"}],"script/ennemyBehaviour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state = _interopRequireDefault(require("./state"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var ANIMATION_DURATION = gameData.animationDuration;
var DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

var EnnemyBehaviour = /*#__PURE__*/function () {
  function EnnemyBehaviour(ennemy) {
    _classCallCheck(this, EnnemyBehaviour);

    this.init(ennemy);
  }

  _createClass(EnnemyBehaviour, [{
    key: "init",
    value: function init(ennemy) {
      this.ennemy = ennemy;
    }
  }, {
    key: "update",
    value: function update(timestamp) {
      this.updateState();
      this.computePath();
    }
  }, {
    key: "updateState",
    value: function updateState() {
      switch (this.ennemy.state) {
        case 'SPAWN':
          if ((0, _utils.compareArrays)(this.ennemy.currentCoord, this.ennemy.targetCoord)) {
            this.ennemy.targetCoord = this.ennemy.scatterCoord;
            this.ennemy.state = 'SCATTER';
          }

          ;
          break;

        case 'SCATTER':
          if ((0, _utils.compareArrays)(this.ennemy.currentCoord, this.ennemy.scatterCoord)) {
            this.ennemy.state = 'CHASE';
          }

          ;
          break;

        case 'CHASE':
          break;
      }
    }
  }, {
    key: "computePath",
    value: function computePath() {
      // get all possible tiles for the ennemy
      var possibleTiles = this.getPossibleTiles();

      if (possibleTiles.length > 1 && (this.ennemy.state === 'CHASE' || this.ennemy.state === 'FLEE')) {
        this.getTarget();
      } // Compute what is the closest possible tile to the target coord


      var tileToMove;

      if (this.ennemy.state === "FLEE") {
        tileToMove = this.computeFarthestTileToTarget(possibleTiles);
      } else tileToMove = this.computeNearestTileToTarget(possibleTiles);

      if (!tileToMove) return; // Set the target coord

      this.setMovingCoord(tileToMove.coord);
    }
  }, {
    key: "getPossibleTiles",
    value: function getPossibleTiles() {
      var _this = this;

      var currentCoord = this.ennemy.currentCoord; // Ennemies can't go backwards

      var possibleDirections = DIRECTIONS.filter(function (dir) {
        return dir != _this.getOppositeDirection();
      });
      var adjacentTiles = possibleDirections.map(function (direction) {
        return _state.default.board.getNextTileInDirection(currentCoord, direction);
      });
      return adjacentTiles.filter(function (tile) {
        return _this.isTilePossible(tile);
      });
    }
  }, {
    key: "isTilePossible",
    value: function isTilePossible(tile) {
      if (this.ennemy.justSpawned) {
        return ['PATH', 'GATE', 'HOME'].includes(tile.tileType);
      }

      return (tile === null || tile === void 0 ? void 0 : tile.tileType) === "PATH";
    }
  }, {
    key: "computeNearestTileToTarget",
    value: function computeNearestTileToTarget(possibleTiles) {
      var targetCoord = this.ennemy.targetCoord;
      var closestDistance = null;
      var closestTile = null;
      possibleTiles.forEach(function (tile) {
        var distance = (0, _utils.distanceBetweenCoords)(tile.coord, targetCoord);

        if (closestDistance === null || distance < closestDistance) {
          closestDistance = distance;
          closestTile = tile;
        }
      });
      return closestTile;
    }
  }, {
    key: "computeFarthestTileToTarget",
    value: function computeFarthestTileToTarget(possibleTiles) {
      var targetCoord = this.ennemy.targetCoord;
      var longestDistance = null;
      var farthestTile = null;
      possibleTiles.forEach(function (tile) {
        var distance = (0, _utils.distanceBetweenCoords)(tile.coord, targetCoord);

        if (longestDistance === null || distance > longestDistance) {
          longestDistance = distance;
          farthestTile = tile;
        }
      });
      return farthestTile;
    }
  }, {
    key: "getTarget",
    value: function getTarget() {
      if (!this.ennemy.state === 'CHASE') return;
      this.ennemy.justSpawned = false;
      this.ennemy.targetCoord = _state.default.pacman.movingCoord;
    }
  }, {
    key: "computeDirection",
    value: function computeDirection() {
      var directionCoord = (0, _utils.substractCoord)(this.ennemy.movingCoord, this.ennemy.currentCoord);
      return (0, _utils.getDirectionFromCoord)(directionCoord);
    }
  }, {
    key: "getOppositeDirection",
    value: function getOppositeDirection() {
      switch (this.ennemy.direction) {
        case 'UP':
          return 'DOWN';
          break;

        case 'DOWN':
          return 'UP';
          break;

        case 'LEFT':
          return 'RIGHT';
          break;

        case 'RIGHT':
          return 'LEFT';
          break;

        default:
          return '';
      }
    }
  }, {
    key: "setMovingCoord",
    value: function setMovingCoord(coord) {
      var _this2 = this;

      this.ennemy.movingCoord = coord;
      this.ennemy.animTimestamp = new Date().getTime();
      this.ennemy.direction = this.computeDirection();
      window.setTimeout(function () {
        _this2.ennemy.currentCoord = coord;
      }, ANIMATION_DURATION);
    }
  }, {
    key: "setFleeMode",
    value: function setFleeMode() {
      if (this.ennemy.state === 'SCATTER' || this.ennemy.state === 'CHASE') {
        this.ennemy.state = 'FLEE';
        this.direction = '';
      }
    }
  }, {
    key: "cancelFleeMode",
    value: function cancelFleeMode() {
      if (this.ennemy.state === 'FLEE') {
        this.direction = '';
        this.ennemy.state = 'CHASE';
      } else this.ennemy.state = 'SPAWN';
    }
  }, {
    key: "setOppositeDirection",
    value: function setOppositeDirection() {
      this.ennemy.direction = this.getOppositeDirection();
    }
  }]);

  return EnnemyBehaviour;
}();

exports.default = EnnemyBehaviour;
},{"./data.json":"script/data.json","./state":"script/state.js","./utils":"script/utils.js"}],"script/ennemyAnimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

var _state = _interopRequireDefault(require("./state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var TILE_SIZE = gameData.tileSize;
var SPRITE_SIZE = gameData.spriteSize;
var ANIMATION_DURATION = gameData.animationDuration;
var STEP_DURATION = gameData.stepAnimationDuration;
var FRAMES_STEP = gameData.framesStep;
var DIRECTIONS = ['DOWN', 'RIGHT', 'UP', 'LEFT'];

var EnnemyAnimation = /*#__PURE__*/function () {
  function EnnemyAnimation(ennemy) {
    _classCallCheck(this, EnnemyAnimation);

    this.init(ennemy);
  }

  _createClass(EnnemyAnimation, [{
    key: "init",
    value: function init(ennemy) {
      this.ennemy = ennemy;
      this.stepAnimationTimeStamp = null;
      this.stepAnimation = 0;
    }
  }, {
    key: "draw",
    value: function draw(timestamp) {
      if (this.characterIsOutOfScreen()) {
        return;
      }

      if (!this.stepAnimationTimeStamp) {
        this.stepAnimationTimeStamp = timestamp;
      }

      var x, y;

      var _this$getCoordToDraw = this.getCoordToDraw();

      var _this$getCoordToDraw2 = _slicedToArray(_this$getCoordToDraw, 2);

      x = _this$getCoordToDraw2[0];
      y = _this$getCoordToDraw2[1];
      this.drawOnCanvas(x, y, timestamp);
    }
  }, {
    key: "characterIsOutOfScreen",
    value: function characterIsOutOfScreen() {
      if (this.ennemy.movingCoord[0] === 27 && this.ennemy.currentCoord[0] === 0) {
        return true;
      }

      if (this.ennemy.movingCoord[0] === 0 && this.ennemy.currentCoord[0] === 27) {
        return true;
      }

      return false;
    }
  }, {
    key: "isAnimationFinished",
    value: function isAnimationFinished() {
      return this.ennemy.currentCoord === this.ennemy.movingCoord;
    }
  }, {
    key: "getCoordToDraw",
    value: function getCoordToDraw() {
      var x, y;

      if (this.isAnimationFinished()) {
        return this.ennemy.currentCoord;
      } // Get the percentage of progress of the anim


      var animationProgress = this.getProgressOfAnimation(); //Delta of the current tile and target tiles

      var deltaX = this.ennemy.movingCoord[0] - this.ennemy.currentCoord[0];
      var deltaY = this.ennemy.movingCoord[1] - this.ennemy.currentCoord[1]; // Position based on the progress of the animation

      x = this.ennemy.currentCoord[0] + deltaX * animationProgress;
      y = this.ennemy.currentCoord[1] + deltaY * animationProgress; // Setting the position of the pacman

      return [x, y];
    }
  }, {
    key: "incrementStepAnimation",
    value: function incrementStepAnimation(timestamp) {
      this.stepAnimation++;
      this.stepAnimation = this.stepAnimation % FRAMES_STEP;
      this.stepAnimationTimeStamp = timestamp;
    }
  }, {
    key: "getProgressOfAnimation",
    value: function getProgressOfAnimation() {
      var currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - this.ennemy.animTimestamp) / ANIMATION_DURATION;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(x, y, timestamp) {
      var currentStepDuration = timestamp - this.stepAnimationTimeStamp;

      if (currentStepDuration > STEP_DURATION) {
        this.incrementStepAnimation(timestamp);
      }

      this.drawBody(x, y);
      this.drawHead(x, y);
    }
  }, {
    key: "drawBody",
    value: function drawBody(x, y) {
      var incrementConst = 6;

      _canvas.CTX.save();

      x = x * TILE_SIZE - incrementConst / 2;
      y = (y - 0.2) * TILE_SIZE - incrementConst / 2;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation;
      var isReversed = false;

      if (this.ennemy.direction === 'LEFT' || this.ennemy.direction === 'RIGHT') {
        spriteIndex = 2;
      }

      if (this.ennemy.direction === 'LEFT') {
        isReversed = true;
      }

      if (stepAnimation > 7) {
        spriteIndex++;
        stepAnimation = stepAnimation % 8;
      }

      if (isReversed) {
        _canvas.CTX.translate(x + TILE_SIZE, y);

        _canvas.CTX.scale(-1, 1);

        x = 0;
        y = 0;
      }

      _canvas.CTX.drawImage(_canvas.ENNEMY_BODY, stepAnimation * SPRITE_SIZE, spriteIndex * SPRITE_SIZE, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE + incrementConst, TILE_SIZE + incrementConst);

      _canvas.CTX.restore();
    }
  }, {
    key: "drawHead",
    value: function drawHead(x, y) {
      var _this = this;

      var incrementConst = 6;

      _canvas.CTX.save();

      x = x * TILE_SIZE - incrementConst / 2;
      y = (y - 0.6) * TILE_SIZE - incrementConst / 2;
      var spriteIndex = DIRECTIONS.findIndex(function (direction) {
        return direction === _this.ennemy.direction;
      });
      if (spriteIndex === -1) spriteIndex = 0;
      var isReversed = false;

      if (this.ennemy.direction === 'LEFT') {
        isReversed = true;
        spriteIndex = 1;
      }

      if (isReversed) {
        _canvas.CTX.translate(x + TILE_SIZE, y);

        _canvas.CTX.scale(-1, 1);

        x = 0;
        y = 0;
      }

      _canvas.CTX.drawImage(_canvas.ENNEMY_HEAD, spriteIndex * SPRITE_SIZE, 0, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE + incrementConst, TILE_SIZE + incrementConst);

      _canvas.CTX.restore();
    }
  }]);

  return EnnemyAnimation;
}();

exports.default = EnnemyAnimation;
},{"./data.json":"script/data.json","./canvas":"script/canvas.js","./state":"script/state.js"}],"script/ennemy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _ennemyBehaviour = _interopRequireDefault(require("./ennemyBehaviour"));

var _ennemyAnimation = _interopRequireDefault(require("./ennemyAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json"); //STATE : SPAWN, SCATTER, CHASE, FLEE, DEAD


var Ennemy = /*#__PURE__*/function () {
  function Ennemy(coord) {
    _classCallCheck(this, Ennemy);

    this.init(coord);
    this.ennemyBehaviour = new _ennemyBehaviour.default(this);
    this.ennemyAnimation = new _ennemyAnimation.default(this);
  }

  _createClass(Ennemy, [{
    key: "init",
    value: function init(ennemyData) {
      this.ennemyData = ennemyData; // Actual coord

      this.currentCoord = ennemyData.initialCoord; // Coord where the pacman is moving to

      this.movingCoord = this.currentCoord; // Position of the gate to move to

      this.targetCoord = ennemyData.initialTarget;
      this.scatterCoord = ennemyData.scatterTarget;
      this.spawnTimeout = ennemyData.spawnTimeout;
      this.justSpawned = true; // Timestamp fo the start of the animation

      this.direction = "";
      this.userInputDirection = "";
      this.beginningGameTimestamp = null;
      this.animTimestamp = null;
      this.state = 'SPAWN';
    }
  }, {
    key: "setFleeMode",
    value: function setFleeMode() {
      this.ennemyBehaviour.setFleeMode();
    }
  }, {
    key: "cancelFleeMode",
    value: function cancelFleeMode() {
      this.ennemyBehaviour.cancelFleeMode();
    }
  }, {
    key: "canMove",
    value: function canMove(timestamp) {
      if (!this.beginningGameTimestamp) {
        this.beginningGameTimestamp = timestamp;
        return false;
      }

      return timestamp - this.beginningGameTimestamp > this.spawnTimeout;
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
    }
  }, {
    key: "update",
    value: function update(timestamp) {
      if (!this.isAnimationFinished()) return;
      if (!this.canMove(timestamp)) return;
      this.ennemyBehaviour.update(timestamp);
    }
  }, {
    key: "isPacmanKilled",
    value: function isPacmanKilled(targetCoord) {
      if (this.state === 'FLEE' || this.state === 'DEAD') return false;
      return (0, _utils.compareArrays)(targetCoord, this.currentCoord);
    }
  }, {
    key: "isAnimationFinished",
    value: function isAnimationFinished() {
      return this.currentCoord === this.movingCoord;
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      return null;
    }
  }, {
    key: "draw",
    value: function draw(timestamp) {
      this.ennemyAnimation.draw(timestamp);
    }
  }]);

  return Ennemy;
}();

exports.default = Ennemy;
},{"./utils":"script/utils.js","./ennemyBehaviour":"script/ennemyBehaviour.js","./ennemyAnimation":"script/ennemyAnimation.js","./data.json":"script/data.json"}],"script/pacmanBehaviour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state = _interopRequireDefault(require("./state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var ANIMATION_DURATION = gameData.animationDuration;
var POWERUP_DURATION = gameData.powerUpDuration;

var PacmanBehaviour = /*#__PURE__*/function () {
  function PacmanBehaviour(pacman) {
    _classCallCheck(this, PacmanBehaviour);

    this.init(pacman);
  }

  _createClass(PacmanBehaviour, [{
    key: "init",
    value: function init(pacman) {
      this.pacman = pacman;
    }
  }, {
    key: "update",
    value: function update() {
      this.processTile(); // If animation still happening, leave

      var nextTile = this.computePathPacman();

      if (nextTile) {
        this.setMovingCoord(nextTile.coord);
      } else {
        // If no valid target tile, stop pacman
        this.pacman.direction = "";
      }
    }
  }, {
    key: "processTile",
    value: function processTile() {
      var currentTile = _state.default.board.getTile(this.pacman.currentCoord);

      if (currentTile.hasSuperPoint) {
        this.startPowerUp();
      }

      if (currentTile.hasPoint || currentTile.hasSuperPoint) {
        this.addScore(10);
        currentTile.removePoint();
      }
    }
  }, {
    key: "addScore",
    value: function addScore(value) {
      this.pacman.setScore(_state.default.score + value);
    }
  }, {
    key: "startPowerUp",
    value: function startPowerUp() {
      this.pacman.state = "POWERUP";

      _state.default.ennemies.forEach(function (ennemy) {
        ennemy.setFleeMode();
      });

      clearTimeout(this.pacman.powerupTimeout);
      this.pacman.powerupTimeout = setTimeout(this.resetPowerUp.bind(this), POWERUP_DURATION);
    }
  }, {
    key: "resetPowerUp",
    value: function resetPowerUp() {
      if (this.pacman.state === "POWERUP") {
        this.pacman.state = "MOVING";

        _state.default.ennemies.forEach(function (ennemy) {
          ennemy.cancelFleeMode();
        });
      }
    }
  }, {
    key: "computePathPacman",
    value: function computePathPacman() {
      // If no direction given, leave
      if (!this.pacman.direction && !this.isUserInputValid()) {
        return;
      } // Get the next tile in the user given direction


      var nextTileUserDirection = _state.default.board.getNextTileInDirection(this.pacman.currentCoord, this.pacman.userInputDirection); // If the user direction is valid


      if ((nextTileUserDirection === null || nextTileUserDirection === void 0 ? void 0 : nextTileUserDirection.tileType) === "PATH") {
        this.confirmUserDirection();
        return nextTileUserDirection;
      } // Get the next tile in the initial direction


      var nextTileCurrentDirection = _state.default.board.getNextTileInDirection(this.pacman.currentCoord, this.pacman.direction); // If the initial direction is valid


      if ((nextTileCurrentDirection === null || nextTileCurrentDirection === void 0 ? void 0 : nextTileCurrentDirection.tileType) === "PATH") {
        this.setMovingCoord(nextTileCurrentDirection.coord);
        return nextTileCurrentDirection;
      }
    }
  }, {
    key: "setMovingCoord",
    value: function setMovingCoord(coord) {
      var _this = this;

      this.pacman.state = "MOVING";
      this.pacman.movingCoord = coord;
      this.pacman.animTimestamp = new Date().getTime();
      window.setTimeout(function () {
        _this.pacman.currentCoord = coord;
      }, ANIMATION_DURATION);
    }
  }, {
    key: "isUserInputValid",
    value: function isUserInputValid() {
      var timeSinceLastInput = new Date().getTime() - this.pacman.inputTimestamp;
      if (timeSinceLastInput > 2000) return null;
      return this.pacman.userInputDirection;
    }
  }, {
    key: "confirmUserDirection",
    value: function confirmUserDirection() {
      this.pacman.direction = this.pacman.userInputDirection;
    }
  }]);

  return PacmanBehaviour;
}();

exports.default = PacmanBehaviour;
},{"./data.json":"script/data.json","./state":"script/state.js"}],"script/pacmanAnimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

var _state = _interopRequireDefault(require("./state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var TILE_SIZE = gameData.tileSize;
var SPRITE_SIZE = gameData.spriteSize;
var ANIMATION_DURATION = gameData.animationDuration;
var STEP_DURATION = gameData.stepAnimationDuration;
var FRAMES_STEP = gameData.framesStep;

var PacmanAnimation = /*#__PURE__*/function () {
  function PacmanAnimation(pacman) {
    _classCallCheck(this, PacmanAnimation);

    this.init(pacman);
  }

  _createClass(PacmanAnimation, [{
    key: "init",
    value: function init(pacman) {
      this.pacman = pacman;
      this.stepAnimationTimeStamp = null;
      this.stepAnimation = 0;
      this.isFrameAfterDeath = false;
    }
  }, {
    key: "draw",
    value: function draw(timestamp) {
      if (this.characterIsOutOfScreen()) {
        return;
      }

      if (this.pacman.state === "DEAD" && !this.isFrameAfterDeath) {
        this.isFrameAfterDeath = true;
        this.resetAnimation(timestamp);
      }

      if (!this.stepAnimationTimeStamp) {
        this.stepAnimationTimeStamp = timestamp;
      }

      var x, y;

      var _this$getCoordToDraw = this.getCoordToDraw();

      var _this$getCoordToDraw2 = _slicedToArray(_this$getCoordToDraw, 2);

      x = _this$getCoordToDraw2[0];
      y = _this$getCoordToDraw2[1];
      this.drawOnCanvas(x, y, timestamp);
    }
  }, {
    key: "resetAnimation",
    value: function resetAnimation(timestamp) {
      this.stepAnimation = 0;
      this.stepAnimationTimeStamp = timestamp;
    }
  }, {
    key: "characterIsOutOfScreen",
    value: function characterIsOutOfScreen() {
      if (this.pacman.movingCoord[0] === 27 && this.pacman.currentCoord[0] === 0) {
        return true;
      }

      if (this.pacman.movingCoord[0] === 0 && this.pacman.currentCoord[0] === 27) {
        return true;
      }

      return false;
    }
  }, {
    key: "getCoordToDraw",
    value: function getCoordToDraw() {
      var x, y;

      if (!this.pacman.direction || this.pacman.state === "DEAD") {
        // If idle, set the pacman at the position of the tile
        x = this.pacman.currentCoord[0];
        y = this.pacman.currentCoord[1];
      } else if (this.pacman.state === "MOVING") {
        // Get the percentage of progress of the anim
        var animationProgress = this.getProgressOfAnimation(); //Delta of the current tile and target tiles

        var deltaX = this.pacman.movingCoord[0] - this.pacman.currentCoord[0];
        var deltaY = this.pacman.movingCoord[1] - this.pacman.currentCoord[1]; // Position based on the progress of the animation

        x = this.pacman.currentCoord[0] + deltaX * animationProgress;
        y = this.pacman.currentCoord[1] + deltaY * animationProgress; // Setting the position of the pacman
      }

      return [x, y];
    }
  }, {
    key: "incrementStepAnimation",
    value: function incrementStepAnimation(timestamp) {
      if (this.pacman.state === "DEAD" && this.stepAnimation > 2) {
        this.stepAnimation = 3;
        this.stepAnimationTimeStamp = timestamp;
      } else {
        this.stepAnimation++;
        this.stepAnimation = this.stepAnimation % FRAMES_STEP;
        this.stepAnimationTimeStamp = timestamp;
      }
    }
  }, {
    key: "getProgressOfAnimation",
    value: function getProgressOfAnimation() {
      var currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - this.pacman.animTimestamp) / ANIMATION_DURATION;
    }
  }, {
    key: "drawOnCanvas",
    value: function drawOnCanvas(x, y, timestamp) {
      var currentStepDuration = timestamp - this.stepAnimationTimeStamp;

      if (currentStepDuration > STEP_DURATION) {
        this.incrementStepAnimation(timestamp);
      }

      if (this.pacman.state === "DEAD") {
        this.drawDeath(x, y);
      } else {
        this.drawBody(x, y);
        this.drawHead(x, y);
      }
    }
  }, {
    key: "drawDeath",
    value: function drawDeath(x, y) {
      var decalageSource = 6;
      var decalageDestination = 32;
      var frameCoord = [{
        x: 0,
        y: 3
      }, {
        x: 0,
        y: 4
      }, {
        x: 2,
        y: 3
      }, {
        x: 3,
        y: 2
      }];

      _canvas.CTX.save();

      var coordX = x * TILE_SIZE - decalageDestination / 2;
      var coordY = (y - .5) * TILE_SIZE - decalageDestination / 2;

      _canvas.CTX.drawImage(_canvas.ISAAC_SPRITE, frameCoord[this.stepAnimation].x * SPRITE_SIZE * 2 + decalageSource, frameCoord[this.stepAnimation].y * SPRITE_SIZE * 2 + decalageSource * 1.5, TILE_SIZE * 2 - decalageSource * 2, TILE_SIZE * 2 - decalageSource * 2, coordX, coordY, TILE_SIZE * 2, TILE_SIZE * 2);

      _canvas.CTX.restore();
    }
  }, {
    key: "drawBody",
    value: function drawBody(x, y) {
      var incrementConst = 6;

      _canvas.CTX.save();

      x = x * TILE_SIZE - incrementConst / 2;
      y = (y - 0.1) * TILE_SIZE - incrementConst / 2;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation;
      var stepAnimationShift = 7;
      var stepAnimationModulo = 8;
      var isReversed = false;

      if (this.pacman.direction === 'LEFT' || this.pacman.direction === 'RIGHT') {
        spriteIndex = 2;
        stepAnimationShift = 0;
      }

      if (this.pacman.direction === 'LEFT') {
        isReversed = true;
      }

      stepAnimation += stepAnimationShift;

      if (stepAnimation >= stepAnimationModulo) {
        spriteIndex++;
        stepAnimation = stepAnimation % stepAnimationModulo;
      }

      if (isReversed) {
        _canvas.CTX.translate(x + TILE_SIZE, y);

        _canvas.CTX.scale(-1, 1);

        x = 0;
        y = 0;
      }

      _canvas.CTX.drawImage(_canvas.ISAAC_SPRITE, stepAnimation * SPRITE_SIZE, spriteIndex * SPRITE_SIZE, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE + incrementConst, TILE_SIZE + incrementConst);

      _canvas.CTX.restore();
    }
  }, {
    key: "drawHead",
    value: function drawHead(x, y) {
      var incrementConst = 6;

      _canvas.CTX.save();

      x = x * TILE_SIZE - incrementConst / 2;
      y = (y - 0.50) * TILE_SIZE - incrementConst / 2;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation >= 8 ? 1 : 0;
      var isReversed = false;
      var stepAnimationShift = 0;

      if (this.pacman.direction === 'UP') {
        stepAnimationShift = 4;
      }

      if (this.pacman.direction === 'RIGHT') {
        stepAnimationShift = 2;
      }

      if (this.pacman.direction === 'LEFT') {
        stepAnimationShift = 2;
        isReversed = true;
      }

      stepAnimation += stepAnimationShift;

      if (isReversed) {
        _canvas.CTX.translate(x + TILE_SIZE, y);

        _canvas.CTX.scale(-1, 1);

        x = 0;
        y = 0;
      }

      _canvas.CTX.drawImage(_canvas.ISAAC_SPRITE, stepAnimation * SPRITE_SIZE, 0, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE + incrementConst, TILE_SIZE + incrementConst);

      _canvas.CTX.restore();
    }
  }]);

  return PacmanAnimation;
}();

exports.default = PacmanAnimation;
},{"./data.json":"script/data.json","./canvas":"script/canvas.js","./state":"script/state.js"}],"script/pacman.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

var _pacmanBehaviour = _interopRequireDefault(require("./pacmanBehaviour"));

var _pacmanAnimation = _interopRequireDefault(require("./pacmanAnimation"));

var _state = _interopRequireDefault(require("./state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var TILE_SIZE = gameData.tileSize;
var SPRITE_SIZE = gameData.spriteSize;
var ANIMATION_DURATION = gameData.animationDuration;
var STEP_DURATION = gameData.stepAnimationDuration;
var FRAMES_STEP = gameData.framesStep;

var Pacman = /*#__PURE__*/function () {
  function Pacman(coord) {
    _classCallCheck(this, Pacman);

    this.init(coord);
    this.pacmanBehaviour = new _pacmanBehaviour.default(this);
    this.pacmanAnimation = new _pacmanAnimation.default(this);
  }

  _createClass(Pacman, [{
    key: "init",
    value: function init() {
      var coord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 14];
      // Actual coord of the pacman
      this.currentCoord = coord; // Coord where the pacman is moving to

      this.movingCoord = coord; // Possible state : MOVING, POWERUP, DEAD
      // Timestamp fo the start of the animation

      this.direction = "";
      this.userInputDirection = "";
      this.inputTimestamp = null;
      this.powerupTimeout;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.isAnimationFinished()) {
        return;
      }

      this.pacmanBehaviour.update();
    }
  }, {
    key: "setScore",
    value: function setScore(score) {
      _state.default.score = score;
      _canvas.SCORE_ELEMENT.textContent = _state.default.score;
    }
  }, {
    key: "setUserInputDirection",
    value: function setUserInputDirection(direction) {
      this.userInputDirection = direction;
      this.inputTimestamp = new Date().getTime();
    }
  }, {
    key: "isAnimationFinished",
    value: function isAnimationFinished() {
      return this.currentCoord === this.movingCoord;
    }
  }, {
    key: "setDead",
    value: function setDead() {
      this.state = "DEAD";
    }
  }, {
    key: "draw",
    value: function draw(timestamp) {
      this.pacmanAnimation.draw(timestamp);
    }
  }]);

  return Pacman;
}();

exports.default = Pacman;
},{"./canvas":"script/canvas.js","./pacmanBehaviour":"script/pacmanBehaviour.js","./pacmanAnimation":"script/pacmanAnimation.js","./state":"script/state.js","./data.json":"script/data.json"}],"script/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _board = _interopRequireDefault(require("./board"));

var _canvas = require("./canvas");

var _ennemy = _interopRequireDefault(require("./ennemy"));

var _pacman = _interopRequireDefault(require("./pacman"));

var _tile = _interopRequireDefault(require("./tile"));

var _state = _interopRequireDefault(require("./state"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameData = require("./data.json");

var ENNEMIES_DATA = gameData.ennemiesData;
var DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    _state.default.score = 0; // Possible state : STOPPED, START, GAME, CHASE

    _state.default.gameState = "START";
    this.initGame();
  }

  _createClass(Game, [{
    key: "initGame",
    value: function initGame() {
      _state.default.board = new _board.default();
      _state.default.pacman = new _pacman.default();
      _state.default.ennemies = this.initEnnemies(); // START, END

      _state.default.gameState = 'START';
      this.draw();
    }
  }, {
    key: "startGameLoop",
    value: function startGameLoop() {
      this.bindEventHandler();
      window.requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "loop",
    value: function loop(timestamp) {
      var progress = timestamp - this.lastRender;
      this.lastRender = timestamp;
      this.draw(progress, timestamp);
      this.update(progress, timestamp);
      window.requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "update",
    value: function update(progress, timestamp) {
      // Update the state of the world for the elapsed time since last render
      this.updateGameState();

      if (_state.default.gameState !== 'END') {
        _state.default.pacman.update();

        this.updateEnnemies(timestamp);
      }
    }
  }, {
    key: "updateGameState",
    value: function updateGameState() {
      if (this.isPacmanDead()) {
        _state.default.pacman.setDead();

        _state.default.gameState = 'END';
      }
    }
  }, {
    key: "isPacmanDead",
    value: function isPacmanDead() {
      var pacmanIsDead = false;

      ennemyLoop: for (var i = 0; i < _state.default.ennemies.length; i++) {
        var ennemy = _state.default.ennemies[i];

        if (ennemy.isPacmanKilled(_state.default.pacman.currentCoord)) {
          pacmanIsDead = true;
          break ennemyLoop;
        }
      }

      return pacmanIsDead;
    }
  }, {
    key: "draw",
    value: function draw(progress, timestamp) {
      // Reinit the canvas
      _canvas.CTX.fillStyle = "#2c2a2a";

      _canvas.CTX.fillRect(0, 0, _canvas.CANVAS_ELEMENT.width, _canvas.CANVAS_ELEMENT.height); // Update the state of the world for the elapsed time since last render


      _state.default.board.drawBoard();

      this.drawEnnemies(timestamp);

      _state.default.pacman.draw(timestamp);
    } ////////////////////////////////////
    // GHOSTS
    ////////////////////////////////////

  }, {
    key: "initEnnemies",
    value: function initEnnemies() {
      var ennemies = [];
      ENNEMIES_DATA.forEach(function (ennemyData) {
        ennemies.push(new _ennemy.default(ennemyData));
      });
      return ennemies;
    }
  }, {
    key: "updateEnnemies",
    value: function updateEnnemies(timestamp) {
      _state.default.ennemies.forEach(function (ennemy) {
        ennemy.update(timestamp);
      });
    }
  }, {
    key: "drawEnnemies",
    value: function drawEnnemies(timestamp) {
      _state.default.ennemies.forEach(function (ennemy) {
        ennemy.draw(timestamp);
      });
    }
  }, {
    key: "bindEventHandler",
    value: function bindEventHandler() {
      document.addEventListener("keydown", this.keydownEventHandler.bind(this));
    }
  }, {
    key: "unbindEventHandler",
    value: function unbindEventHandler() {
      document.removeEventListener("keydown", this.keydownEventHandler);
    }
  }, {
    key: "keydownEventHandler",
    value: function keydownEventHandler(event) {
      var keycode = event.which; // LEFT : ARROW_LEFT or Q

      if (keycode === 37 || keycode === 81) {
        _state.default.pacman.setUserInputDirection("LEFT");

        event.preventDefault();
      } // RIGHT : ARROW_RIGHT or D


      if (keycode === 39 || keycode === 68) {
        _state.default.pacman.setUserInputDirection("RIGHT");

        event.preventDefault();
      } // UP : ARROW_UP or Z


      if (keycode === 38 || keycode === 90) {
        _state.default.pacman.setUserInputDirection("UP");

        event.preventDefault();
      } // DOWN : ARROW_DOWN or S


      if (keycode === 40 || keycode === 83) {
        _state.default.pacman.setUserInputDirection("DOWN");

        event.preventDefault();
      }
    }
  }]);

  return Game;
}();

exports.default = Game;
},{"./board":"script/board.js","./canvas":"script/canvas.js","./ennemy":"script/ennemy.js","./pacman":"script/pacman.js","./tile":"script/tile.js","./state":"script/state.js","./data.json":"script/data.json","./utils":"script/utils.js"}],"script/index.js":[function(require,module,exports) {
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
},{"./game":"script/game.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35467" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/index.js"], null)
//# sourceMappingURL=/script.7c337ef3.js.map