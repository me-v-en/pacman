parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NRet":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BONEY_BODY=exports.BONEY_HEAD=exports.ISAAC_SPRITE=exports.COIN_IMAGE=exports.BG_IMAGE=exports.CTX=exports.CANVAS_ELEMENT=void 0;var e=document.getElementById("canvas");exports.CANVAS_ELEMENT=e;var t=canvas.getContext("2d");exports.CTX=t,t.imageSmoothingEnabled=!1;var o=document.getElementById("bgBoard");exports.BG_IMAGE=o;var r=document.getElementById("coin");exports.COIN_IMAGE=r;var E=document.getElementById("isaacSprite");exports.ISAAC_SPRITE=E;var n=document.getElementById("boneyHead");exports.BONEY_HEAD=n;var s=document.getElementById("boneyBody");exports.BONEY_BODY=s;
},{}],"rOsU":[function(require,module,exports) {
module.exports={animationDuration:200,stepAnimationDuration:50,framesStep:10,spriteSize:32,tileSize:30,boardWidth:28,boardHeight:31,canvasWidth:840,canvasHeight:930,ennemiesData:[{initialCoord:[13,13],initialTarget:[13,11],scatterTarget:[1,26],spawnTimeout:5e3},{initialCoord:[14,13],initialTarget:[13,11],scatterTarget:[1,1],spawnTimeout:1e4}],boardArray:[["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X",".",".",".",".",".",".",".",".",".",".",".",".","X","X",".",".",".",".",".",".",".",".",".",".",".",".","X"],["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],["X",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","X"],["X",".","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X",".","X"],["X",".","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X",".","X"],["X",".",".",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".",".",".","X"],["X","X","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".",".",".",".",".",".",".",".",".",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".","X","X","X","-","-","X","X","X",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".","X","h","h","h","h","h","h","X",".","X","X",".","X","X","X","X","X","X"],[".",".",".",".",".",".",".",".",".",".","X","h","h","h","h","h","h","X",".",".",".",".",".",".",".",".",".","."],["X","X","X","X","X","X",".","X","X",".","X","h","h","h","h","h","h","X",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".",".",".",".",".",".",".",".",".",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X"],["X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X"],["X",".",".",".",".",".",".",".",".",".",".",".",".","X","X",".",".",".",".",".",".",".",".",".",".",".",".","X"],["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],["X",".","X","X","X","X",".","X","X","X","X","X",".","X","X",".","X","X","X","X","X",".","X","X","X","X",".","X"],["X",".",".",".","X","X",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","X","X",".",".",".","X"],["X","X","X",".","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X",".","X","X","X"],["X","X","X",".","X","X",".","X","X",".","X","X","X","X","X","X","X","X",".","X","X",".","X","X",".","X","X","X"],["X",".",".",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".","X","X",".",".",".",".",".",".","X"],["X",".","X","X","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X","X","X",".","X"],["X",".","X","X","X","X","X","X","X","X","X","X",".","X","X",".","X","X","X","X","X","X","X","X","X","X",".","X"],["X",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","X"],["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]};
},{}],"dURd":[function(require,module,exports) {
"use strict";function r(r,e){return u(r)||o(r,e)||n(r,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function o(r,t){var n=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=n){var e,o,u=[],a=!0,i=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(u.push(e.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}function u(r){if(Array.isArray(r))return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.modulo=s,exports.moduloCoord=f,exports.getDirectionFromCoord=d,exports.addCoord=p,exports.substractCoord=v,exports.distanceBetweenCoords=y,exports.compareArrays=h,exports.DIRECTION_MATRICES=void 0;var a=require("./data.json"),i=a.canvasWidth,c=a.canvasHeight,l={LEFT:[-1,0],RIGHT:[1,0],UP:[0,-1],DOWN:[0,1]};function s(r,t){var n=(r%t+t)%t;return n<0?n+Math.abs(t):n}function f(r){return[s(r[0],i),s(r[1],c)]}function d(t){return Object.entries(l).find(function(n){var e=r(n,2),o=(e[0],e[1]);return h(t,o)})[0]}function p(r,t){return r.map(function(r,n){return r+t[n]})}function v(r,t){return r.map(function(r,n){return r-t[n]})}function y(r,t){var n=Math.pow(r[0]-t[0],2),e=Math.pow(r[1]-t[1],2);return Math.sqrt(n+e)}function h(r,t){if((null==r?void 0:r.length)!=(null==t?void 0:t.length))return!1;for(var n=0;n<r.length;n++)if(r[n]!=t[n])return!1;return!0}exports.DIRECTION_MATRICES=l;
},{"./data.json":"rOsU"}],"zP0G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./canvas"),t=require("./utils");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}var n=require("./data.json"),o=n.tileSize,s=function(){function t(e,r){switch(i(this,t),this.tileType="",this.coord=r,this.hasPoint=!1,e){case"X":this.tileType="WALL";break;case".":this.tileType="PATH",this.hasPoint=!0;break;case"-":this.tileType="GATE";break;case"h":this.tileType="HOME"}}return a(t,[{key:"removePoint",value:function(){this.hasPoint=!1}},{key:"drawTile",value:function(){this.hasPoint&&e.CTX.drawImage(e.COIN_IMAGE,this.coord[0]*o,this.coord[1]*o,o,o)}}]),t}();exports.default=s;
},{"./canvas":"NRet","./utils":"dURd","./data.json":"rOsU"}],"C0wJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./tile")),r=require("./canvas"),a=require("./utils");function t(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var a=0;a<r.length;a++){var t=r[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,r,a){return r&&n(e.prototype,r),a&&n(e,a),e}var u=require("./data.json"),l=u.boardArray,s=u.boardArray[0].length,d=u.boardArray.length,f=u.canvasWidth,c=u.canvasHeight,h=function(){function t(){i(this,t),this.boardTiles=[],this.initBoard()}return o(t,[{key:"initBoard",value:function(){this.boardTiles=[];for(var r=0;r<d;r++){for(var a=[],t=0;t<s;t++){var i=new e.default(l[r][t],[t,r]);a.push(i)}this.boardTiles.push(a)}}},{key:"getTile",value:function(e){if(e){var r=(0,a.modulo)(e[0],s),t=(0,a.modulo)(e[1],d);return this.boardTiles[t][r]}}},{key:"drawBoard",value:function(){r.CTX.drawImage(r.BG_IMAGE,0,0,r.CANVAS_ELEMENT.width,r.CANVAS_ELEMENT.height),this.drawTiles()}},{key:"drawTiles",value:function(){this.boardTiles.forEach(function(e){e.forEach(function(e){e.drawTile()})})}}]),t}();exports.default=h;
},{"./tile":"zP0G","./canvas":"NRet","./utils":"dURd","./data.json":"rOsU"}],"BRyw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./canvas"),e=require("./utils");function i(t,e){return s(t)||a(t,e)||r(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){var i=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(t);!(a=(n=i.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(u){s=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}function s(t){if(Array.isArray(t))return t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}var m=require("./data.json"),d=m.tileSize,l=m.spriteSize,p=m.animationDuration,f=m.stepAnimationDuration,v=m.framesStep,T=["DOWN","RIGHT","UP","LEFT"],C=function(){function n(t){u(this,n),this.init(t)}return h(n,[{key:"init",value:function(t){this.ennemyData=t,this.currentCoord=t.initialCoord,this.movingCoord=this.currentCoord,this.targetCoord=t.initialTarget,this.scatterCoord=t.scatterTarget,this.spawnTimeout=t.spawnTimeout,this.justSpawned=!0,this.direction="",this.userInputDirection="",this.beginningGameTimestamp=null,this.animTimestamp=null,this.stepAnimationTimeStamp=null,this.stepAnimation=0,this.state="SPAWN"}},{key:"canMove",value:function(t){return this.beginningGameTimestamp?t-this.beginningGameTimestamp>this.spawnTimeout:(this.beginningGameTimestamp=t,!1)}},{key:"setDirection",value:function(t){this.direction=t}},{key:"getOppositeDirection",value:function(){switch(this.direction){case"UP":return"DOWN";case"DOWN":return"UP";case"LEFT":return"RIGHT";case"RIGHT":return"LEFT";default:return null}}},{key:"setMovingCoord",value:function(t){var e=this;this.movingCoord=t,this.animTimestamp=(new Date).getTime(),this.direction=this.computeDirection(),window.setTimeout(function(){e.currentCoord=t},p)}},{key:"updateState",value:function(){switch(this.state){case"SPAWN":(0,e.compareArrays)(this.currentCoord,this.targetCoord)&&(this.targetCoord=this.scatterCoord,this.state="SCATTER");break;case"SCATTER":(0,e.compareArrays)(this.currentCoord,this.scatterCoord)&&(this.state="CHASE")}}},{key:"computeDirection",value:function(){var t=(0,e.substractCoord)(this.movingCoord,this.currentCoord);return(0,e.getDirectionFromCoord)(t)}},{key:"isAnimationFinished",value:function(){return this.currentCoord===this.movingCoord}},{key:"isTargetReached",value:function(){return this.currentCoord==this.currentCoord}},{key:"isTilePossible",value:function(t){return this.justSpawned?["PATH","GATE","HOME"].includes(t.tileType):"PATH"===(null==t?void 0:t.tileType)}},{key:"updateAnimation",value:function(){return null}},{key:"draw",value:function(t){var e,n;this.stepAnimationTimeStamp||(this.stepAnimationTimeStamp=t);var r=i(this.getCoordToDraw(),2);e=r[0],n=r[1],this.drawOnCanvas(e,n,t)}},{key:"getCoordToDraw",value:function(){if(this.isAnimationFinished())return this.currentCoord;var t=this.getProgressOfAnimation(),e=this.movingCoord[0]-this.currentCoord[0],i=this.movingCoord[1]-this.currentCoord[1];return[this.currentCoord[0]+e*t,this.currentCoord[1]+i*t]}},{key:"drawOnCanvas",value:function(t,e,i){i-this.stepAnimationTimeStamp>f&&this.incrementStepAnimation(i),this.drawBody(t,e),this.drawHead(t,e)}},{key:"drawBody",value:function(e,i){t.CTX.save(),e*=d,i*=d;var n=0,r=this.stepAnimation,o=!1;"LEFT"!==this.direction&&"RIGHT"!==this.direction||(n=2),"LEFT"===this.direction&&(o=!0),r>7&&(n++,r%=8),o&&(t.CTX.translate(e+d,i),t.CTX.scale(-1,1),e=0,i=0),t.CTX.drawImage(t.BONEY_BODY,r*l,n*l,d,d,e,i,d,d),t.CTX.restore()}},{key:"drawHead",value:function(e,i){var n=this;t.CTX.save(),e*=d,i=(i-.3)*d;var r=T.findIndex(function(t){return t===n.direction});-1===r&&(r=0);var o=!1;"LEFT"===this.direction&&(o=!0,r=1),o&&(t.CTX.translate(e+d,i),t.CTX.scale(-1,1),e=0,i=0),t.CTX.drawImage(t.BONEY_HEAD,r*l,0,d,d,e,i,d,d),t.CTX.restore()}},{key:"incrementStepAnimation",value:function(t){this.stepAnimation++,this.stepAnimation=this.stepAnimation%v,this.stepAnimationTimeStamp=t}},{key:"getProgressOfAnimation",value:function(){return((new Date).getTime()-this.animTimestamp)/p}}]),n}();exports.default=C;
},{"./canvas":"NRet","./utils":"dURd","./data.json":"rOsU"}],"fnOe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./canvas");function e(t,e){return a(t)||o(t,e)||n(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){var i=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(t);!(a=(n=i.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(u){s=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}function a(t){if(Array.isArray(t))return t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}var m=require("./data.json"),l=m.tileSize,h=m.spriteSize,d=m.animationDuration,f=m.stepAnimationDuration,p=m.framesStep,v=function(){function i(t){s(this,i),this.init(t)}return c(i,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,14];this.currentCoord=t,this.movingCoord=t,this.state="IDLE",this.animTimestamp=null,this.direction="",this.stepAnimationTimeStamp=null,this.stepAnimation=0,this.userInputDirection="",this.inputTimestamp=null}},{key:"setUserInputDirection",value:function(t){this.userInputDirection=t,this.inputTimestamp=(new Date).getTime()}},{key:"isUserInputValid",value:function(){return(new Date).getTime()-this.inputTimestamp>2e3?null:this.userInputDirection}},{key:"confirmUserDirection",value:function(){this.direction=this.userInputDirection}},{key:"setDirection",value:function(t){this.direction=t}},{key:"setMovingCoord",value:function(t){var e=this;this.state="MOVING",this.movingCoord=t,this.animTimestamp=(new Date).getTime(),window.setTimeout(function(){e.currentCoord=t},d)}},{key:"isAnimationFinished",value:function(){return this.currentCoord===this.movingCoord}},{key:"updateAnimation",value:function(){return null}},{key:"draw",value:function(t){var i,n;this.stepAnimationTimeStamp||(this.stepAnimationTimeStamp=t);var r=e(this.getCoordToDraw(),2);i=r[0],n=r[1],this.drawOnCanvas(i,n,t)}},{key:"getCoordToDraw",value:function(){var t,e;if("MOVING"===this.state){var i=this.getProgressOfAnimation(),n=this.movingCoord[0]-this.currentCoord[0],r=this.movingCoord[1]-this.currentCoord[1];t=this.currentCoord[0]+n*i,e=this.currentCoord[1]+r*i}return"IDLE"===this.state&&(t=this.currentCoord[0],e=this.currentCoord[1]),[t,e]}},{key:"drawOnCanvas",value:function(t,e,i){i-this.stepAnimationTimeStamp>f&&this.incrementStepAnimation(i),this.drawBody(t,e),this.drawHead(t,e)}},{key:"drawBody",value:function(e,i){t.CTX.save(),e*=l,i=(i-.05)*l;var n=0,r=this.stepAnimation,o=7,a=!1;"LEFT"!==this.direction&&"RIGHT"!==this.direction||(n=2,o=0),"LEFT"===this.direction&&(a=!0),(r+=o)>=8&&(n++,r%=8),a&&(t.CTX.translate(e+l,i),t.CTX.scale(-1,1),e=0,i=0),t.CTX.drawImage(t.ISAAC_SPRITE,r*h,n*h,l,l,e,i,l,l),t.CTX.restore()}},{key:"drawHead",value:function(e,i){t.CTX.save(),e*=l,i=(i-.4)*l;var n=this.stepAnimation>=8?1:0,r=!1,o=0;"UP"===this.direction&&(o=4),"RIGHT"===this.direction&&(o=2),"LEFT"===this.direction&&(o=2,r=!0),n+=o,r&&(t.CTX.translate(e+l,i),t.CTX.scale(-1,1),e=0,i=0),t.CTX.drawImage(t.ISAAC_SPRITE,n*h,0,l,l,e,i,l,l),t.CTX.restore()}},{key:"incrementStepAnimation",value:function(t){this.stepAnimation++,this.stepAnimation=this.stepAnimation%p,this.stepAnimationTimeStamp=t}},{key:"getProgressOfAnimation",value:function(){return((new Date).getTime()-this.animTimestamp)/d}}]),i}();exports.default=v;
},{"./canvas":"NRet","./data.json":"rOsU"}],"ZxoE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./board")),t=require("./canvas"),n=o(require("./ghost")),i=o(require("./pacman")),a=o(require("./tile")),r=require("./utils");function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=require("./data.json"),h=l.ennemiesData,f=["DOWN","UP","RIGHT","LEFT"],m=function(){function a(){s(this,a),d(this,"resou",void 0),this.scoreElement=document.getElementById("score"),this.score=0,this.gameState="START",this.initGame()}return c(a,[{key:"initGame",value:function(){this.board=new e.default,this.pacman=new i.default,this.boneys=this.initEnnemies(),this.draw()}},{key:"startGameLoop",value:function(){this.bindEventHandler(),window.requestAnimationFrame(this.loop.bind(this))}},{key:"loop",value:function(e){var t=e-this.lastRender;this.lastRender=e,this.draw(t,e),this.update(t,e),window.requestAnimationFrame(this.loop.bind(this))}},{key:"update",value:function(e,t){this.updatePacman(),this.updateEnnemies(t)}},{key:"draw",value:function(e,n){t.CTX.fillStyle="#2c2a2a",t.CTX.fillRect(0,0,t.CANVAS_ELEMENT.width,t.CANVAS_ELEMENT.height),this.board.drawBoard(),this.pacman.draw(n),this.drawEnnemies(n)}},{key:"updatePacman",value:function(){if(this.pacman.isAnimationFinished()){this.addPointOfCurrentPacmanTile();var e=this.computePathPacman();e?this.pacman.setMovingCoord(e.coord):(this.pacman.direction="",this.pacman.state="IDLE")}}},{key:"computePathPacman",value:function(){if(this.pacman.direction||this.pacman.isUserInputValid()){var e=this.getNextTileInDirection(this.pacman.currentCoord,this.pacman.userInputDirection);if("PATH"===(null==e?void 0:e.tileType))return this.pacman.confirmUserDirection(),e;var t=this.getNextTileInDirection(this.pacman.currentCoord,this.pacman.direction);return"PATH"===(null==t?void 0:t.tileType)?(this.pacman.setMovingCoord(t.coord),t):void 0}}},{key:"initEnnemies",value:function(){var e=[];return h.forEach(function(t){e.push(new n.default(t))}),e}},{key:"updateEnnemies",value:function(e){var t=this;this.boneys.forEach(function(n){t.updateEnnemy(n,e)})}},{key:"updateEnnemy",value:function(e,t){if(e.isAnimationFinished()&&e.canMove(t)){e.updateState();var n=this.getEnnemyPossibleTiles(e);n.length>1&&"CHASE"===e.state&&this.getTarget(e);var i=this.computeNearestTileToTarget(e,n);i&&e.setMovingCoord(i.coord)}}},{key:"getEnnemyPossibleTiles",value:function(e){var t=this,n=e.currentCoord;return f.filter(function(t){return t!=e.getOppositeDirection()}).map(function(e){return t.getNextTileInDirection(n,e)}).filter(function(t){return e.isTilePossible(t)})}},{key:"computeNearestTileToTarget",value:function(e,t){e.targetCoord;var n=null,i=null;return t.forEach(function(t){var a=(0,r.distanceBetweenCoords)(t.coord,e.targetCoord);(null===n||a<n)&&(n=a,i=t)}),i}},{key:"getTarget",value:function(e){"CHASE"!==!e.state&&(e.justSpawned=!1,e.targetCoord=this.pacman.movingCoord)}},{key:"drawEnnemies",value:function(e){this.boneys.forEach(function(t){t.draw(e)})}},{key:"getNextTileInDirection",value:function(e,t){if(!t||!e)return!1;var n=r.DIRECTION_MATRICES[t],i=(0,r.addCoord)(n,e);return this.board.getTile(i)}},{key:"addPointOfCurrentPacmanTile",value:function(){var e=this.board.getTile(this.pacman.currentCoord);e.hasPoint&&(this.addScore(10),e.removePoint())}},{key:"addScore",value:function(e){this.score+=e,this.scoreElement.textContent=this.score}},{key:"bindEventHandler",value:function(){document.addEventListener("keydown",this.keyupEventHandler.bind(this))}},{key:"unbindEventHandler",value:function(){document.removeEventListener("keydown",this.keyupEventHandler)}},{key:"keyupEventHandler",value:function(e){e.preventDefault();var t=e.which;37!==t&&81!==t||this.pacman.setUserInputDirection("LEFT"),39!==t&&68!==t||this.pacman.setUserInputDirection("RIGHT"),38!==t&&90!==t||this.pacman.setUserInputDirection("UP"),40!==t&&83!==t||this.pacman.setUserInputDirection("DOWN")}}]),a}();exports.default=m;
},{"./board":"C0wJ","./canvas":"NRet","./ghost":"BRyw","./pacman":"fnOe","./tile":"zP0G","./data.json":"rOsU","./utils":"dURd"}],"fWRU":[function(require,module,exports) {
"use strict";var e=t(require("./game"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}n(function(){var t=new e.default;t.initGame(),t.startGameLoop()});
},{"./game":"ZxoE"}]},{},["fWRU"], null)
//# sourceMappingURL=/script.cb3aa424.js.map