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
exports.BONEY_BODY = exports.BONEY_HEAD = exports.ISAAC_SPRITE = exports.COIN_IMAGE = exports.BG_IMAGE = exports.CTX = exports.CANVAS_ELEMENT = void 0;
var CANVAS_ELEMENT = document.getElementById("canvas");
exports.CANVAS_ELEMENT = CANVAS_ELEMENT;
var CTX = canvas.getContext("2d");
exports.CTX = CTX;
CTX.imageSmoothingEnabled = false;
var BG_IMAGE = document.getElementById("bgBoard");
exports.BG_IMAGE = BG_IMAGE;
var COIN_IMAGE = document.getElementById("coin");
exports.COIN_IMAGE = COIN_IMAGE;
var ISAAC_SPRITE = document.getElementById("isaacSprite");
exports.ISAAC_SPRITE = ISAAC_SPRITE;
var BONEY_HEAD = document.getElementById("boneyHead");
exports.BONEY_HEAD = BONEY_HEAD;
var BONEY_BODY = document.getElementById("boneyBody");
exports.BONEY_BODY = BONEY_BODY;
},{}],"script/data.json":[function(require,module,exports) {
module.exports = {
  "animationDuration": 200,
  "stepAnimationDuration": 50,
  "framesStep": 10,
  "spriteSize": 32,
  "tileSize": 30,
  "boardWidth": 28,
  "boardHeight": 31,
  "canvasWidth": 840,
  "canvasHeight": 930,
  "ennemiesData": [{
    "initialCoord": [13, 13],
    "initialTarget": [13, 11],
    "scatterTarget": [1, 26],
    "spawnTimeout": 5000
  }, {
    "initialCoord": [14, 13],
    "initialTarget": [13, 11],
    "scatterTarget": [1, 1],
    "spawnTimeout": 10000
  }],
  "boardArray": [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "-", "-", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "h", "h", "h", "h", "h", "h", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", ".", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]]
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
  return Object.entries(DIRECTION_MATRICES).find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        direction = _ref2[0],
        directionCoord = _ref2[1];

    return compareArrays(coord, directionCoord);
  })[0];
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

    switch (initialData) {
      case "X":
        this.tileType = "WALL";
        break;

      case ".":
        this.tileType = "PATH";
        this.hasPoint = true;
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
    }
  }, {
    key: "drawTile",
    value: function drawTile() {
      if (!this.hasPoint) {
        return;
      }

      _canvas.CTX.drawImage(_canvas.COIN_IMAGE, this.coord[0] * TILE_SIZE, this.coord[1] * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }]);

  return Tile;
}();

exports.default = Tile;
},{"./canvas":"script/canvas.js","./utils":"script/utils.js","./data.json":"script/data.json"}],"script/board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tile = _interopRequireDefault(require("./tile"));

var _canvas = require("./canvas");

var _utils = require("./utils");

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
  }]);

  return Board;
}();

exports.default = Board;
},{"./tile":"script/tile.js","./canvas":"script/canvas.js","./utils":"script/utils.js","./data.json":"script/data.json"}],"script/ghost.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

var _utils = require("./utils");

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
var DIRECTIONS = ['DOWN', 'RIGHT', 'UP', 'LEFT']; //STATE : SPAWN, SCATTER, CHASE

var Boney = /*#__PURE__*/function () {
  function Boney(coord) {
    _classCallCheck(this, Boney);

    this.init(coord);
  }

  _createClass(Boney, [{
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
      this.stepAnimationTimeStamp = null;
      this.stepAnimation = 0;
      this.state = 'SPAWN';
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
    key: "getOppositeDirection",
    value: function getOppositeDirection() {
      switch (this.direction) {
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
          return null;
      }
    }
  }, {
    key: "setMovingCoord",
    value: function setMovingCoord(coord) {
      var _this = this;

      this.movingCoord = coord;
      this.animTimestamp = new Date().getTime();
      this.direction = this.computeDirection();
      window.setTimeout(function () {
        _this.currentCoord = coord;
      }, ANIMATION_DURATION);
    }
  }, {
    key: "updateState",
    value: function updateState() {
      switch (this.state) {
        case 'SPAWN':
          if ((0, _utils.compareArrays)(this.currentCoord, this.targetCoord)) {
            this.targetCoord = this.scatterCoord;
            this.state = 'SCATTER';
          }

          ;
          break;

        case 'SCATTER':
          if ((0, _utils.compareArrays)(this.currentCoord, this.scatterCoord)) {
            this.state = 'CHASE';
          }

          ;
          break;

        case 'CHASE':
          break;
      }
    }
  }, {
    key: "computeDirection",
    value: function computeDirection() {
      var directionCoord = (0, _utils.substractCoord)(this.movingCoord, this.currentCoord);
      return (0, _utils.getDirectionFromCoord)(directionCoord);
    }
  }, {
    key: "isAnimationFinished",
    value: function isAnimationFinished() {
      return this.currentCoord === this.movingCoord;
    }
  }, {
    key: "isTargetReached",
    value: function isTargetReached() {
      return this.currentCoord === this.currentCoord;
    }
  }, {
    key: "isTilePossible",
    value: function isTilePossible(tile) {
      if (this.justSpawned) {
        return ['PATH', 'GATE', 'HOME'].includes(tile.tileType);
      }

      return (tile === null || tile === void 0 ? void 0 : tile.tileType) === "PATH";
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      return null;
    }
  }, {
    key: "draw",
    value: function draw(timestamp) {
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
    key: "getCoordToDraw",
    value: function getCoordToDraw() {
      var x, y;

      if (this.isAnimationFinished()) {
        return this.currentCoord;
      } // Get the percentage of progress of the anim


      var animationProgress = this.getProgressOfAnimation(); //Delta of the current tile and target tiles

      var deltaX = this.movingCoord[0] - this.currentCoord[0];
      var deltaY = this.movingCoord[1] - this.currentCoord[1]; // Position based on the progress of the animation

      x = this.currentCoord[0] + deltaX * animationProgress;
      y = this.currentCoord[1] + deltaY * animationProgress; // Setting the position of the pacman

      return [x, y];
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
      _canvas.CTX.save();

      x = x * TILE_SIZE;
      y = y * TILE_SIZE;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation;
      var isReversed = false;

      if (this.direction === 'LEFT' || this.direction === 'RIGHT') {
        spriteIndex = 2;
      }

      if (this.direction === 'LEFT') {
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

      _canvas.CTX.drawImage(_canvas.BONEY_BODY, stepAnimation * SPRITE_SIZE, spriteIndex * SPRITE_SIZE, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE, TILE_SIZE);

      _canvas.CTX.restore();
    }
  }, {
    key: "drawHead",
    value: function drawHead(x, y) {
      var _this2 = this;

      _canvas.CTX.save();

      x = x * TILE_SIZE;
      y = (y - 0.3) * TILE_SIZE;
      var spriteIndex = DIRECTIONS.findIndex(function (direction) {
        return direction === _this2.direction;
      });
      if (spriteIndex === -1) spriteIndex = 0;
      var isReversed = false;

      if (this.direction === 'LEFT') {
        isReversed = true;
        spriteIndex = 1;
      }

      if (isReversed) {
        _canvas.CTX.translate(x + TILE_SIZE, y);

        _canvas.CTX.scale(-1, 1);

        x = 0;
        y = 0;
      }

      _canvas.CTX.drawImage(_canvas.BONEY_HEAD, spriteIndex * SPRITE_SIZE, 0, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE, TILE_SIZE);

      _canvas.CTX.restore();
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
      return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
    }
  }]);

  return Boney;
}();

exports.default = Boney;
},{"./canvas":"script/canvas.js","./utils":"script/utils.js","./data.json":"script/data.json"}],"script/pacman.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canvas = require("./canvas");

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

var Pacman = /*#__PURE__*/function () {
  function Pacman(coord) {
    _classCallCheck(this, Pacman);

    this.init(coord);
  }

  _createClass(Pacman, [{
    key: "init",
    value: function init() {
      var coord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 14];
      // Actual coord of the pacman
      this.currentCoord = coord; // Coord where the pacman is moving to

      this.movingCoord = coord; // Possible state : IDLE, MOVING, DEAD

      this.state = "IDLE"; // Timestamp fo the start of the animation

      this.animTimestamp = null;
      this.direction = "";
      this.stepAnimationTimeStamp = null;
      this.stepAnimation = 0;
      this.userInputDirection = "";
      this.inputTimestamp = null;
    }
  }, {
    key: "setUserInputDirection",
    value: function setUserInputDirection(direction) {
      this.userInputDirection = direction;
      this.inputTimestamp = new Date().getTime();
    }
  }, {
    key: "isUserInputValid",
    value: function isUserInputValid() {
      var timeSinceLastInput = new Date().getTime() - this.inputTimestamp;
      if (timeSinceLastInput > 2000) return null;
      return this.userInputDirection;
    }
  }, {
    key: "confirmUserDirection",
    value: function confirmUserDirection() {
      this.direction = this.userInputDirection; // this.changePacmanSprite();
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
    }
  }, {
    key: "setMovingCoord",
    value: function setMovingCoord(coord) {
      var _this = this;

      this.state = "MOVING";
      this.movingCoord = coord;
      this.animTimestamp = new Date().getTime();
      window.setTimeout(function () {
        _this.currentCoord = coord;
      }, ANIMATION_DURATION);
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
    key: "getCoordToDraw",
    value: function getCoordToDraw() {
      var x, y;

      if (this.state === "MOVING") {
        // Get the percentage of progress of the anim
        var animationProgress = this.getProgressOfAnimation(); //Delta of the current tile and target tiles

        var deltaX = this.movingCoord[0] - this.currentCoord[0];
        var deltaY = this.movingCoord[1] - this.currentCoord[1]; // Position based on the progress of the animation

        x = this.currentCoord[0] + deltaX * animationProgress;
        y = this.currentCoord[1] + deltaY * animationProgress; // Setting the position of the pacman
      }

      if (this.state === "IDLE") {
        // If idle, set the pacman at the position of the tile
        x = this.currentCoord[0];
        y = this.currentCoord[1];
      }

      return [x, y];
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
      _canvas.CTX.save();

      x = x * TILE_SIZE;
      y = (y - 0.05) * TILE_SIZE;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation;
      var stepAnimationShift = 7;
      var stepAnimationModulo = 8;
      var isReversed = false;

      if (this.direction === 'LEFT' || this.direction === 'RIGHT') {
        spriteIndex = 2;
        stepAnimationShift = 0;
      }

      if (this.direction === 'LEFT') {
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

      _canvas.CTX.drawImage(_canvas.ISAAC_SPRITE, stepAnimation * SPRITE_SIZE, spriteIndex * SPRITE_SIZE, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE, TILE_SIZE);

      _canvas.CTX.restore();
    }
  }, {
    key: "drawHead",
    value: function drawHead(x, y) {
      _canvas.CTX.save();

      x = x * TILE_SIZE;
      y = (y - 0.4) * TILE_SIZE;
      var spriteIndex = 0;
      var stepAnimation = this.stepAnimation >= 8 ? 1 : 0;
      var isReversed = false;
      var stepAnimationShift = 0;

      if (this.direction === 'UP') {
        stepAnimationShift = 4;
      }

      if (this.direction === 'RIGHT') {
        stepAnimationShift = 2;
      }

      if (this.direction === 'LEFT') {
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

      _canvas.CTX.drawImage(_canvas.ISAAC_SPRITE, stepAnimation * SPRITE_SIZE, 0, TILE_SIZE, TILE_SIZE, x, y, TILE_SIZE, TILE_SIZE);

      _canvas.CTX.restore();
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
      return (currentTimeStamp - this.animTimestamp) / ANIMATION_DURATION;
    }
  }]);

  return Pacman;
}();

exports.default = Pacman;
},{"./canvas":"script/canvas.js","./data.json":"script/data.json"}],"script/game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _board = _interopRequireDefault(require("./board"));

var _canvas = require("./canvas");

var _ghost = _interopRequireDefault(require("./ghost"));

var _pacman = _interopRequireDefault(require("./pacman"));

var _tile = _interopRequireDefault(require("./tile"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gameData = require("./data.json");

var ENNEMIES_DATA = gameData.ennemiesData;
var DIRECTIONS = ['DOWN', 'UP', 'RIGHT', 'LEFT'];

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    _defineProperty(this, "resou", void 0);

    this.scoreElement = document.getElementById("score");
    this.score = 0; // Possible state : STOPPED, START, GAME, CHASE

    this.gameState = "START";
    this.initGame();
  }

  _createClass(Game, [{
    key: "initGame",
    value: function initGame() {
      this.board = new _board.default();
      this.pacman = new _pacman.default();
      this.boneys = this.initEnnemies();
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
      this.updatePacman();
      this.updateEnnemies(timestamp);
    }
  }, {
    key: "draw",
    value: function draw(progress, timestamp) {
      // Reinit the canvas
      _canvas.CTX.fillStyle = "#2c2a2a";

      _canvas.CTX.fillRect(0, 0, _canvas.CANVAS_ELEMENT.width, _canvas.CANVAS_ELEMENT.height); // Update the state of the world for the elapsed time since last render


      this.board.drawBoard();
      this.pacman.draw(timestamp);
      this.drawEnnemies(timestamp);
    } ////////////////////////////////////
    // PACMAN
    ////////////////////////////////////

  }, {
    key: "updatePacman",
    value: function updatePacman() {
      // If animation still happening, leave
      if (!this.pacman.isAnimationFinished()) {
        return;
      } // ADD SCORE


      this.addPointOfCurrentPacmanTile(); // If animation is still happening

      var nextTile = this.computePathPacman();

      if (nextTile) {
        this.pacman.setMovingCoord(nextTile.coord);
      } else {
        // If no valid target tile, stop pacman
        this.pacman.direction = "";
        this.pacman.state = "IDLE";
      }
    }
  }, {
    key: "computePathPacman",
    value: function computePathPacman() {
      // If no direction given, leave
      if (!this.pacman.direction && !this.pacman.isUserInputValid()) {
        return;
      } // Get the next tile in the user given direction


      var nextTileUserDirection = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.userInputDirection); // If the user direction is valid

      if ((nextTileUserDirection === null || nextTileUserDirection === void 0 ? void 0 : nextTileUserDirection.tileType) === "PATH") {
        this.pacman.confirmUserDirection();
        return nextTileUserDirection;
      } // Get the next tile in the initial direction


      var nextTileCurrentDirection = this.getNextTileInDirection(this.pacman.currentCoord, this.pacman.direction); // If the initial direction is valid

      if ((nextTileCurrentDirection === null || nextTileCurrentDirection === void 0 ? void 0 : nextTileCurrentDirection.tileType) === "PATH") {
        this.pacman.setMovingCoord(nextTileCurrentDirection.coord);
        return nextTileCurrentDirection;
      }
    } ////////////////////////////////////
    // GHOSTS
    ////////////////////////////////////

  }, {
    key: "initEnnemies",
    value: function initEnnemies() {
      var boneys = [];
      ENNEMIES_DATA.forEach(function (ennemyData) {
        boneys.push(new _ghost.default(ennemyData));
      });
      return boneys;
    }
  }, {
    key: "updateEnnemies",
    value: function updateEnnemies(timestamp) {
      var _this = this;

      this.boneys.forEach(function (boney) {
        _this.updateEnnemy(boney, timestamp);
      });
    }
  }, {
    key: "updateEnnemy",
    value: function updateEnnemy(ennemy, timestamp) {
      if (!ennemy.isAnimationFinished()) return;
      if (!ennemy.canMove(timestamp)) return;
      ennemy.updateState(); // get all possible tiles for the ennemy

      var possibleTiles = this.getEnnemyPossibleTiles(ennemy);

      if (possibleTiles.length > 1 && ennemy.state === 'CHASE') {
        this.getTarget(ennemy);
      } // Compute what is the closest possible tile to the target coord


      var tileToMove = this.computeNearestTileToTarget(ennemy, possibleTiles);
      if (!tileToMove) return; // Set the target coord

      ennemy.setMovingCoord(tileToMove.coord);
    }
  }, {
    key: "getEnnemyPossibleTiles",
    value: function getEnnemyPossibleTiles(ennemy) {
      var _this2 = this;

      var currentCoord = ennemy.currentCoord; // Ennemies can't go backwards

      var possibleDirections = DIRECTIONS.filter(function (dir) {
        return dir != ennemy.getOppositeDirection();
      });
      var adjacentTiles = possibleDirections.map(function (direction) {
        return _this2.getNextTileInDirection(currentCoord, direction);
      });
      return adjacentTiles.filter(function (tile) {
        return ennemy.isTilePossible(tile);
      });
    }
  }, {
    key: "computeNearestTileToTarget",
    value: function computeNearestTileToTarget(ennemy, possibleTiles) {
      var targetCoord = ennemy.targetCoord;
      var closestDistance = null;
      var closestTile = null;
      possibleTiles.forEach(function (tile) {
        var distance = (0, _utils.distanceBetweenCoords)(tile.coord, ennemy.targetCoord);

        if (closestDistance === null || distance < closestDistance) {
          closestDistance = distance;
          closestTile = tile;
        }
      });
      return closestTile;
    }
  }, {
    key: "getTarget",
    value: function getTarget(ennemy) {
      if (!ennemy.state === 'CHASE') return;
      ennemy.justSpawned = false;
      ennemy.targetCoord = this.pacman.movingCoord;
    }
  }, {
    key: "drawEnnemies",
    value: function drawEnnemies(timestamp) {
      this.boneys.forEach(function (boney) {
        boney.draw(timestamp);
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
      return this.board.getTile(coordToMove);
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
    key: "addScore",
    value: function addScore(value) {
      this.score += value;
      this.scoreElement.textContent = this.score;
    }
  }, {
    key: "bindEventHandler",
    value: function bindEventHandler() {
      document.addEventListener("keydown", this.keyupEventHandler.bind(this));
    }
  }, {
    key: "unbindEventHandler",
    value: function unbindEventHandler() {
      document.removeEventListener("keydown", this.keyupEventHandler);
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
  }]);

  return Game;
}();

exports.default = Game;
},{"./board":"script/board.js","./canvas":"script/canvas.js","./ghost":"script/ghost.js","./pacman":"script/pacman.js","./tile":"script/tile.js","./data.json":"script/data.json","./utils":"script/utils.js"}],"script/index.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32915" + '/');

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