/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascripts/synth/envelopes.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/synth/envelopes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Envelope =
/*#__PURE__*/
function () {
  function Envelope(options) {
    _classCallCheck(this, Envelope);

    this.context = options.context;
    this.attackTimeInput = document.getElementById("attack-envelope");
    this.attackTime = this.attackTimeInput.value;
    this.attackTimeInput.addEventListener('change', this.setAttack.bind(this), false);
    this.releaseTimeInput = document.getElementById("release-envelope");
    this.releaseTime = this.releaseTimeInput.value;
    this.releaseTimeInput.addEventListener('change', this.setRelease.bind(this), false);
  }

  _createClass(Envelope, [{
    key: "setAttack",
    value: function setAttack() {
      this.attackTime = parseFloat(event.target.value);
    }
  }, {
    key: "setRelease",
    value: function setRelease() {
      this.releaseTime = parseFloat(event.target.value);
    }
  }]);

  return Envelope;
}();

/* harmony default export */ __webpack_exports__["default"] = (Envelope);

/***/ }),

/***/ "./app/assets/javascripts/synth/filters.js":
/*!*************************************************!*\
  !*** ./app/assets/javascripts/synth/filters.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter(options) {
    _classCallCheck(this, Filter);

    this.context = options.context;
    this.filter = options.context.createBiquadFilter();
    this.filterTypeControl = document.getElementById('filterType');
    this.filter.type = this.filterTypeControl.value;
    this.filterTypeControl.addEventListener('change', this.setFilterType.bind(this), false);
    this.filterFrequencyControl = document.getElementById('filterFrequency');
    this.filter.frequency.value = this.filterFrequencyControl.value;
    this.filterFrequencyControl.addEventListener('change', this.setFrequency.bind(this), false);
    this.filterResonanceControl = document.getElementById('filterResonance');
    this.filter.Q.value = this.filterResonanceControl.value;
    this.filterResonanceControl.addEventListener('change', this.setResonance.bind(this), false);
  }

  _createClass(Filter, [{
    key: "setFilterType",
    value: function setFilterType() {
      this.filter.type = event.target.value;
    }
  }, {
    key: "setFrequency",
    value: function setFrequency() {
      this.filter.frequency.setValueAtTime(event.target.value, this.context.currentTime);
    }
  }, {
    key: "setResonance",
    value: function setResonance() {
      this.filter.Q.setValueAtTime(event.target.value, this.context.currentTime);
    }
  }, {
    key: "connect",
    value: function connect(connection) {
      this.filter.connect(connection);
    }
  }]);

  return Filter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./app/assets/javascripts/synth/lfos.js":
/*!**********************************************!*\
  !*** ./app/assets/javascripts/synth/lfos.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LFO =
/*#__PURE__*/
function () {
  function LFO(options) {
    _classCallCheck(this, LFO);

    this.context = options.context, this.osc = options.context.createOscillator();
    this.osc.type = "sine";
    this.depth = options.context.createGain();
    this.lfoDepthControl = document.getElementById('lfo-depth');
    this.maxAmount = 0;
    this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount);
    this.lfoDepthControl.addEventListener('change', this.setLFODepth.bind(this), false);
    this.osc.connect(this.depth);
    this.lfoFrequencyControl = document.getElementById('lfo-frequency');
    this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value);
    this.lfoFrequencyControl.addEventListener('change', this.setLFOFrequency.bind(this), false);
    this.source = null;
    this.osc.start();
  }

  _createClass(LFO, [{
    key: "setLFODepth",
    value: function setLFODepth() {
      this.depth.gain.value = this.maxAmount * parseFloat(event.target.value);
    }
  }, {
    key: "setLFOFrequency",
    value: function setLFOFrequency() {
      this.osc.frequency.value = parseFloat(event.target.value);
    }
  }, {
    key: "setParams",
    value: function setParams(param, source) {
      if (source === this.source) {
        this.source = null;
        this.depth.disconnect();
        this.maxAmount = 0;
      } else if (source === "amp") {
        this.source = "amp";
        this.depth.disconnect();
        this.depth.connect(param);
        this.maxAmount = 1;
        this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount);
        this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value);
      } else if (source === "filter") {
        this.source = "filter";
        this.depth.disconnect();
        this.depth.connect(param);
        this.maxAmount = 10000;
        this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount);
        this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value);
      } else if (source === "frequency") {
        this.source = "frequency";
        this.depth.disconnect();
        this.maxAmount = 25;
        this.depth.gain.value = parseFloat(this.lfoDepthControl.value * this.maxAmount);
        this.osc.frequency.value = parseFloat(this.lfoFrequencyControl.value);
        debugger;
      }
    }
  }]);

  return LFO;
}();

/* harmony default export */ __webpack_exports__["default"] = (LFO);

/***/ }),

/***/ "./app/assets/javascripts/synth/note_table.js":
/*!****************************************************!*\
  !*** ./app/assets/javascripts/synth/note_table.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var octaveOne = {
  '90': 65.406391325149658,
  //Z - C
  '83': 69.295657744218024,
  //S - C#
  '88': 73.416191979351890,
  //X - D
  '68': 77.781745930520227,
  //D - D#
  '67': 82.406889228217482,
  //C - E
  '86': 87.307057858250971,
  //V - F
  '71': 92.498605677908599,
  //G - F#
  '66': 97.998858995437323,
  //B - G
  '72': 103.826174394986284,
  //H - G#
  '78': 110.000000000000000,
  //N - A
  '74': 116.540940379522479,
  //J - A#
  '77': 123.470825314031027,
  //M - B
  '81': 130.812782650299317,
  //Q - C
  '50': 138.591315488436048,
  //2 - C#
  '87': 146.832383958703780,
  //W - D
  '51': 155.563491861040455,
  //3 - D#
  '69': 164.813778456434964,
  //E - E
  '82': 174.614115716501942,
  //R - F
  '53': 184.997211355817199,
  //5 - F#
  '84': 195.997717990874647,
  //T - G
  '54': 207.652348789972569,
  //6 - G#
  '89': 220.000000000000000,
  //Y - A
  '55': 233.081880759044958,
  //7 - A#
  '85': 246.941650628062055,
  //U - B
  'C': 65.406391325149658,
  'Csharp': 69.295657744218024,
  'D': 73.416191979351890,
  'Dsharp': 77.781745930520227,
  'E': 82.406889228217482,
  'F': 87.307057858250971,
  'Fsharp': 92.498605677908599,
  'G': 97.998858995437323,
  'Gsharp': 103.826174394986284,
  'A': 110.000000000000000,
  'Asharp': 116.540940379522479,
  'B': 123.470825314031027,
  'C2': 130.812782650299317,
  'Csharp2': 138.591315488436048,
  'D2': 146.832383958703780,
  'Dsharp2': 155.563491861040455,
  'E2': 164.813778456434964,
  'F2': 174.614115716501942,
  'Fsharp2': 184.997211355817199,
  'G2': 195.997717990874647,
  'Gsharp2': 207.652348789972569,
  'A2': 220.000000000000000,
  'Asharp2': 233.081880759044958,
  'B2': 246.941650628062055
};
var octaveTwo = {
  '90': 130.812782650299317,
  //Z - C
  '83': 138.591315488436048,
  //S - C#
  '88': 146.832383958703780,
  //X - D
  '68': 155.563491861040455,
  //D - D#
  '67': 164.813778456434964,
  //C - E
  '86': 174.614115716501942,
  //V - F
  '71': 184.997211355817199,
  //G - F#
  '66': 195.997717990874647,
  //B - G
  '72': 207.652348789972569,
  //H - G#
  '78': 220.000000000000000,
  //N - A
  '74': 233.081880759044958,
  //J - A#
  '77': 246.941650628062055,
  //M - B
  '81': 261.625565300598634,
  //Q - C
  '50': 277.182630976872096,
  //2 - C#
  '87': 293.664767917407560,
  //W - D
  '51': 311.126983722080910,
  //3 - D#
  '69': 329.627556912869929,
  //E - E
  '82': 349.228231433003884,
  //R - F
  '53': 369.994422711634398,
  //5 - F#
  '84': 391.995435981749294,
  //T - G
  '54': 415.304697579945138,
  //6 - G#
  '89': 440.000000000000000,
  //Y - A
  '55': 466.163761518089916,
  //7 - A#
  '85': 493.883301256124111,
  //U - B
  'C': 130.812782650299317,
  'Csharp': 138.591315488436048,
  'D': 146.832383958703780,
  'Dsharp': 155.563491861040455,
  'E': 164.813778456434964,
  'F': 174.614115716501942,
  'Fsharp': 184.997211355817199,
  'G': 195.997717990874647,
  'Gsharp': 207.652348789972569,
  'A': 220.000000000000000,
  'Asharp': 233.081880759044958,
  'B': 246.941650628062055,
  'C2': 261.625565300598634,
  'Csharp2': 277.182630976872096,
  'D2': 293.664767917407560,
  'Dsharp2': 311.126983722080910,
  'E2': 329.627556912869929,
  'F2': 349.228231433003884,
  'Fsharp2': 369.994422711634398,
  'G2': 391.995435981749294,
  'Gsharp2': 415.304697579945138,
  'A2': 440.000000000000000,
  'Asharp2': 466.163761518089916,
  'B2': 493.883301256124111
};
var octaveThree = {
  '90': 261.625565300598634,
  //Z - C
  '83': 277.182630976872096,
  //S - C#
  '88': 293.664767917407560,
  //X - D
  '68': 311.126983722080910,
  //D - D#
  '67': 329.627556912869929,
  //C - E
  '86': 349.228231433003884,
  //V - F
  '71': 369.994422711634398,
  //G - F#
  '66': 391.995435981749294,
  //B - G
  '72': 415.304697579945138,
  //H - G#
  '78': 440.000000000000000,
  //N - A
  '74': 466.163761518089916,
  //J - A#
  '77': 493.883301256124111,
  //M - B
  '81': 523.251130601197269,
  //Q - C
  '50': 554.365261953744192,
  //2 - C#
  '87': 587.329535834815120,
  //W - D
  '51': 622.253967444161821,
  //3 - D#
  '69': 659.255113825739859,
  //E - E
  '82': 698.456462866007768,
  //R - F
  '53': 739.988845423268797,
  //5 - F#
  '84': 783.990871963498588,
  //T - G
  '54': 830.609395159890277,
  //6 - G#
  '89': 880.000000000000000,
  //Y - A
  '55': 932.327523036179832,
  //7 - A#
  '85': 987.766602512248223,
  //U - B
  'C': 261.625565300598634,
  'Csharp': 277.182630976872096,
  'D': 293.664767917407560,
  'Dsharp': 311.126983722080910,
  'E': 329.627556912869929,
  'F': 349.228231433003884,
  'Fsharp': 369.994422711634398,
  'G': 391.995435981749294,
  'Gsharp': 415.304697579945138,
  'A': 440.000000000000000,
  'Asharp': 466.163761518089916,
  'B': 493.883301256124111,
  'C2': 523.251130601197269,
  'Csharp2': 554.365261953744192,
  'D2': 587.329535834815120,
  'Dsharp2': 622.253967444161821,
  'E2': 659.255113825739859,
  'F2': 698.456462866007768,
  'Fsharp2': 739.988845423268797,
  'G2': 783.990871963498588,
  'Gsharp2': 830.609395159890277,
  'A2': 880.000000000000000,
  'Asharp2': 932.327523036179832,
  'B2': 987.766602512248223
};
var octaveFour = {
  '90': 523.251130601197269,
  //Z - C
  '83': 554.365261953744192,
  //S - C#
  '88': 587.329535834815120,
  //X - D
  '68': 622.253967444161821,
  //D - D#
  '67': 659.255113825739859,
  //C - E
  '86': 698.456462866007768,
  //V - F
  '71': 739.988845423268797,
  //G - F#
  '66': 783.990871963498588,
  //B - G
  '72': 830.609395159890277,
  //H - G#
  '78': 880.000000000000000,
  //N - A
  '74': 932.327523036179832,
  //J - A#
  '77': 987.766602512248223,
  //M - B
  '81': 1046.502261202394538,
  //Q - C
  '50': 1108.730523907488384,
  //2 - C#
  '87': 1174.659071669630241,
  //W - D
  '51': 1244.507934888323642,
  //3 - D#
  '69': 1318.510227651479718,
  //E - E
  '82': 1396.912925732015537,
  //R - F
  '53': 1479.977690846537595,
  //5 - F#
  '84': 1567.981743926997176,
  //T - G
  '54': 1661.218790319780554,
  //6 - G#
  '89': 1760.000000000000000,
  //Y - A
  '55': 1864.655046072359665,
  //7 - A#
  '85': 1975.533205024496447,
  //U - B
  'C': 523.251130601197269,
  'Csharp': 554.365261953744192,
  'D': 587.329535834815120,
  'Dsharp': 622.253967444161821,
  'E': 659.255113825739859,
  'F': 698.456462866007768,
  'Fsharp': 739.988845423268797,
  'G': 783.990871963498588,
  'Gsharp': 830.609395159890277,
  'A': 880.000000000000000,
  'Asharp': 932.327523036179832,
  'B': 987.766602512248223,
  'C2': 1046.502261202394538,
  'Csharp2': 1108.730523907488384,
  'D2': 1174.659071669630241,
  'Dsharp2': 1244.507934888323642,
  'E2': 1318.510227651479718,
  'F2': 1396.912925732015537,
  'Fsharp2': 1479.977690846537595,
  'G2': 1567.981743926997176,
  'Gsharp2': 1661.218790319780554,
  'A2': 1760.000000000000000,
  'Asharp2': 1864.655046072359665,
  'B2': 1975.533205024496447
};
var octaveFive = {
  '90': 1046.502261202394538,
  //Z - C
  '83': 1108.730523907488384,
  //S - C#
  '88': 1174.659071669630241,
  //X - D
  '68': 1244.507934888323642,
  //D - D#
  '67': 1318.510227651479718,
  //C - E
  '86': 1396.912925732015537,
  //V - F
  '71': 1479.977690846537595,
  //G - F#
  '66': 1567.981743926997176,
  //B - G
  '72': 1661.218790319780554,
  //H - G#
  '78': 1760.000000000000000,
  //N - A
  '74': 1864.655046072359665,
  //J - A#
  '77': 1975.533205024496447,
  //M - B
  '81': 2093.004522404789077,
  //Q - C
  '50': 2217.461047814976769,
  //2 - C#
  '87': 2349.318143339260482,
  //W - D
  '51': 2489.015869776647285,
  //3 - D#
  '69': 2637.020455302959437,
  //E - E
  '82': 2793.825851464031075,
  //R - F
  '53': 2959.955381693075191,
  //5 - F#
  '84': 3135.963487853994352,
  //T - G
  '54': 3322.437580639561108,
  //6 - G#
  '89': 3520.000000000000000,
  //Y - A
  '55': 3729.310092144719331,
  //7 - A#
  '85': 3951.066410048992894,
  //U - B
  'C': 1046.502261202394538,
  'Csharp': 1108.730523907488384,
  'D': 1174.659071669630241,
  'Dsharp': 1244.507934888323642,
  'E': 1318.510227651479718,
  'F': 1396.912925732015537,
  'Fsharp': 1479.977690846537595,
  'G': 1567.981743926997176,
  'Gsharp': 1661.218790319780554,
  'A': 1760.000000000000000,
  'Asharp': 1864.655046072359665,
  'B': 1975.533205024496447,
  'C2': 2093.004522404789077,
  'Csharp2': 2217.461047814976769,
  'D2': 2349.318143339260482,
  'Dsharp2': 2489.015869776647285,
  'E2': 2637.020455302959437,
  'F2': 2793.825851464031075,
  'Fsharp2': 2959.955381693075191,
  'G2': 3135.963487853994352,
  'Gsharp2': 3322.437580639561108,
  'A2': 3520.000000000000000,
  'Asharp2': 3729.310092144719331,
  'B2': 3951.066410048992894
};
var correspondingDiv = {
  '90a': 'C',
  '83a': 'Csharp',
  '88a': 'D',
  '68a': 'Dsharp',
  '67a': 'E',
  '86a': 'F',
  '71a': 'Fsharp',
  '66a': 'G',
  '72a': 'Gsharp',
  '78a': 'A',
  '74a': 'Asharp',
  '77a': 'B',
  '81a': 'C2',
  '50a': 'Csharp2',
  '87a': 'D2',
  '51a': 'Dsharp2',
  '69a': 'E2',
  '82a': 'F2',
  '53a': 'Fsharp2',
  '84a': 'G2',
  '54a': 'Gsharp2',
  '89a': 'A2',
  '55a': 'Asharp2',
  '85a': 'B2'
};

var NoteTable =
/*#__PURE__*/
function () {
  function NoteTable() {
    _classCallCheck(this, NoteTable);

    this.array = [octaveOne, octaveTwo, octaveThree, octaveFour, octaveFive];
    this.octaveControl = document.getElementById('octave-control');
    this.octave = this.array[2];
    this.correspondingDiv = correspondingDiv;
    this.octaveControl.addEventListener('input', this.setOctave.bind(this), false);
  }

  _createClass(NoteTable, [{
    key: "setOctave",
    value: function setOctave(event) {
      var input = event.target.value.toString();

      if (input === "1") {
        this.octave = this.array[0];
      }

      if (input === "2") {
        this.octave = this.array[1];
      }

      if (input === "3") {
        this.octave = this.array[2];
      }

      if (input === "4") {
        this.octave = this.array[3];
      }

      if (input === "5") {
        this.octave = this.array[4];
      }
    }
  }]);

  return NoteTable;
}();

/* harmony default export */ __webpack_exports__["default"] = (NoteTable);

/***/ }),

/***/ "./app/assets/javascripts/synth/oscillators.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascripts/synth/oscillators.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_table */ "./app/assets/javascripts/synth/note_table.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Oscillator =
/*#__PURE__*/
function () {
  function Oscillator(options) {
    _classCallCheck(this, Oscillator);

    this.context = options.context;
    this.osc = options.context.createOscillator();
    this.gain = options.context.createGain();
    this.waveformControl = document.getElementById('waveform');
    this.osc.type = this.waveformControl.value;
    this.waveformControl.addEventListener('change', this.setWaveform.bind(this), false);
    this.gainControl = document.getElementById('gain');
    this.testing = this.gainControl.value;
    this.gainControl.addEventListener('change', this.setGain.bind(this), false);
    this.attackTime = parseFloat(options.envelope.attackTime);
    this.releaseTime = parseFloat(options.envelope.releaseTime);
  }

  _createClass(Oscillator, [{
    key: "playNote",
    value: function playNote() {
      this.osc.start();
      this.gain.gain.value = 0;
      this.gain.gain.linearRampToValueAtTime(this.testing, this.context.currentTime + this.attackTime);
    }
  }, {
    key: "releaseNote",
    value: function releaseNote() {
      this.gain.gain.linearRampToValueAtTime(0, this.context.currentTime + this.attackTime + this.releaseTime); // setTimeout(function(){this.osc.stop();}, (this.releaseTime * 1000))
    }
  }, {
    key: "setGain",
    value: function setGain(event) {
      var value = parseFloat(event.target.value);

      if (isFinite(value)) {
        this.testing = value;
      }
    }
  }, {
    key: "setWaveform",
    value: function setWaveform(event) {
      this.osc.type = event.target.value;
    }
  }, {
    key: "connect",
    value: function connect(connection) {
      this.gain.connect(connection);
    }
  }]);

  return Oscillator;
}();

/* harmony default export */ __webpack_exports__["default"] = (Oscillator);

/***/ }),

/***/ "./app/assets/javascripts/synth/synth_master.js":
/*!******************************************************!*\
  !*** ./app/assets/javascripts/synth/synth_master.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_table */ "./app/assets/javascripts/synth/note_table.js");
/* harmony import */ var _oscillators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillators */ "./app/assets/javascripts/synth/oscillators.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./app/assets/javascripts/synth/filters.js");
/* harmony import */ var _envelopes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envelopes */ "./app/assets/javascripts/synth/envelopes.js");
/* harmony import */ var _lfos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lfos */ "./app/assets/javascripts/synth/lfos.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Synth =
/*#__PURE__*/
function () {
  function Synth() {
    _classCallCheck(this, Synth);

    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.notetable = new _note_table__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.envelope = new _envelopes__WEBPACK_IMPORTED_MODULE_3__["default"]({
      context: this.ctx
    });
    this.oscillator = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({
      context: this.ctx,
      envelope: this.envelope
    });
    this.filter = new _filters__WEBPACK_IMPORTED_MODULE_2__["default"]({
      context: this.ctx
    });
    this.lfo = new _lfos__WEBPACK_IMPORTED_MODULE_4__["default"]({
      context: this.ctx
    });
    this.masterVolume = this.ctx.createGain();
    this.octaveControl = document.getElementById('octave-control');
    this.octaveControl.addEventListener('input', this.setOctave.bind(this), false);
    this.activeNotes = {};
    window.addEventListener('keydown', this.keyDown.bind(this), false);
    window.addEventListener('keyup', this.keyUp.bind(this), false);
    window.addEventListener('mousedown', this.mouseDown.bind(this), false);
    window.addEventListener('mouseup', this.mouseUp.bind(this), false);
    this.lfoMode = "";
    this.lfoVolume = document.getElementById('lfo-amp');
    this.lfoVolume.addEventListener('click', this.setLfoVolume.bind(this), false);
    this.lfoPitch = document.getElementById('lfo-pitch');
    this.lfoPitch.addEventListener('click', this.setLfoPitch.bind(this), false); // this.lfoFilter = document.getElementById('lfo-filter')
    // this.lfoFilter.addEventListener('click', this.setLfoFilter.bind(this), false);

    this.masterVolumeInput = document.getElementById('volume');
    this.masterVolume.gain.value = this.masterVolumeInput.value;
    this.masterVolumeInput.addEventListener('change', this.setMasterVolume.bind(this), false);
  }

  _createClass(Synth, [{
    key: "setOctave",
    value: function setOctave() {
      var activeNotes = this.activeNotes;
      var noteTable = this.notetable;

      if (this.activeNotes) {
        Object.keys(this.activeNotes).forEach(function (activeNote) {
          var osc = activeNotes[activeNote].osc;
          osc.frequency.value = noteTable.octave[activeNote];
        });
      }
    }
  }, {
    key: "setMasterVolume",
    value: function setMasterVolume() {
      this.masterVolume.gain.setValueAtTime(parseFloat(event.target.value), this.ctx.currentTime);
    }
  }, {
    key: "setUp",
    value: function setUp() {
      // this.connect(this.oscillator.osc, this.filter.filter)
      this.connect(this.filter.filter, this.masterVolume);
      this.connect(this.masterVolume, this.ctx.destination);
    }
  }, {
    key: "connect",
    value: function connect(a, b) {
      a.connect(b);
    }
  }, {
    key: "setLfoVolume",
    value: function setLfoVolume() {
      this.lfo.setParams(this.masterVolume.gain, "amp");

      if (this.lfoMode !== "volume") {
        this.lfoMode = "volume";
      } else {
        this.lfoMode = "";
      }
    }
  }, {
    key: "setLfoPitch",
    value: function setLfoPitch() {
      if (this.lfoMode !== "pitch") {
        this.lfoMode = "pitch";
      } else {
        this.lfoMode = "";
      }
    } // keyboard control 

  }, {
    key: "keyDown",
    value: function keyDown(event) {
      var key = (event.detail || event.which).toString();

      if (key === "32") {
        var activeNotes = this.activeNotes;
        var correspondingDiv = this.notetable.correspondingDiv;
        Object.keys(this.activeNotes).forEach(function (activeNote, i) {
          if (!isNaN(activeNote)) {
            var div = correspondingDiv[activeNote + 'a'];
            var correspondingKey = document.getElementById(div);
            correspondingKey.style.backgroundColor = null;
          } else {
            var correspondingKey = document.getElementById(activeNote);
            correspondingKey.style.backgroundColor = null;
          }

          var osc = activeNotes[activeNote];
          osc.releaseNote();
          delete activeNotes[activeNote];
        });
      }

      if (this.notetable.octave[key] && !this.activeNotes[key]) {
        this.playNote(key);
        var div = this.notetable.correspondingDiv[key + 'a'];
        var correspondingKey = document.getElementById(div);
        correspondingKey.style.backgroundColor = '#ccf';
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(event) {
      var key = (event.detail || event.which).toString();

      if (this.notetable.octave[key] && this.activeNotes[key]) {
        var div = this.notetable.correspondingDiv[key + 'a'];
        var correspondingKey = document.getElementById(div);
        correspondingKey.style.backgroundColor = null;
        this.activeNotes[key].releaseNote();
        delete this.activeNotes[key];
      }
    } //piano control

  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      var key = (event.target.id || event.which).toString();

      if (this.notetable.octave[key] && !this.activeNotes[key]) {
        this.playNote(key);
        var correspondingKey = document.getElementById(key);
        correspondingKey.style.backgroundColor = '#ccf';
      }
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      var key = (event.target.id || event.which).toString();

      if (this.notetable.octave[key] && this.activeNotes[key]) {
        var correspondingKey = document.getElementById(key);
        correspondingKey.style.backgroundColor = null;
        this.activeNotes[key].releaseNote();
        delete this.activeNotes[key];
      }
    } //HANDLES CREATION & STORING OF Notes

  }, {
    key: "playNote",
    value: function playNote(key) {
      var osc = new _oscillators__WEBPACK_IMPORTED_MODULE_1__["default"]({
        context: this.ctx,
        envelope: this.envelope
      });
      osc.osc.frequency.setValueAtTime(this.notetable.octave[key], this.ctx.currentTime);

      if (this.lfoMode === "pitch") {
        var pitchLfo = new _lfos__WEBPACK_IMPORTED_MODULE_4__["default"]({
          context: this.ctx
        });
        this.lfo.source = "frequency";
        this.lfo.depth.disconnect();
        pitchLfo.setParams(null, "frequency");
        pitchLfo.depth.connect(osc.osc.frequency);
      }

      this.activeNotes[key] = osc;
      this.activeNotes[key].playNote();
      this.connect(this.activeNotes[key].osc, osc.gain);
      this.connect(osc.gain, this.filter.filter);
    }
  }]);

  return Synth;
}();

/* harmony default export */ __webpack_exports__["default"] = (Synth);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_assets_javascripts_synth_synth_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/assets/javascripts/synth/synth_master */ "./app/assets/javascripts/synth/synth_master.js");


document.addEventListener("DOMContentLoaded", function () {
  var synthesizer = new _app_assets_javascripts_synth_synth_master__WEBPACK_IMPORTED_MODULE_0__["default"]();
  synthesizer.setUp();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map