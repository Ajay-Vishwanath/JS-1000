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

/***/ "./app/assets/javascripts/synth/initial_setup.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/synth/initial_setup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // const osc = audioCtx.createOscillator();

var gain = audioCtx.createGain();
var filter = audioCtx.createBiquadFilter(); // osc.connect(gain);

gain.connect(filter);
filter.connect(audioCtx.destination);
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
var keyboardFrequencyMap = octaveThree;
window.addEventListener('keydown', keyDown, false);
window.addEventListener('keyup', keyUp, false);
window.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);
var octave = document.getElementById('octave-control');
octave.addEventListener('input', setOctave, false);
var waveform = 'sine';
var activeNotes = {};

function setOctave(event) {
  var input = event.target.value.toString();

  if (input === "1") {
    keyboardFrequencyMap = octaveOne;
  }

  if (input === "2") {
    keyboardFrequencyMap = octaveTwo;
  }

  if (input === "3") {
    keyboardFrequencyMap = octaveThree;
  }

  if (input === "4") {
    keyboardFrequencyMap = octaveFour;
  }

  if (input === "5") {
    keyboardFrequencyMap = octaveFive;
  }
} // keyboard control 


function keyDown(event) {
  var key = (event.detail || event.which).toString();

  if (key === "32") {
    Object.keys(activeNotes).forEach(function (key, i) {
      var osc = activeNotes[key];
      osc.stop();
      delete activeNotes[key];
    });
  }

  if (keyboardFrequencyMap[key] && !activeNotes[key]) {
    playNote(key);
    var div = correspondingDiv[key + 'a'];
    var correspondingKey = document.getElementById(div);
    correspondingKey.style.backgroundColor = '#ccf';
  }
}

function keyUp(event) {
  var key = (event.detail || event.which).toString();

  if (keyboardFrequencyMap[key] && activeNotes[key]) {
    var div = correspondingDiv[key + 'a'];
    var correspondingKey = document.getElementById(div);
    correspondingKey.style.backgroundColor = null;
    activeNotes[key].stop();
    delete activeNotes[key];
  }
} //piano control


function mouseDown(event) {
  var key = (event.target.id || event.which).toString();

  if (keyboardFrequencyMap[key] && !activeNotes[key]) {
    playNote(key);
    var correspondingKey = document.getElementById(key);
    correspondingKey.style.backgroundColor = '#ccf';
  }
}

function mouseUp(event) {
  var key = (event.target.id || event.which).toString();

  if (keyboardFrequencyMap[key] && activeNotes[key]) {
    var correspondingKey = document.getElementById(key);
    correspondingKey.style.backgroundColor = null;
    activeNotes[key].stop();
    delete activeNotes[key];
  }
} //HANDLES CREATION & STORING OF Notes


function playNote(key) {
  var osc = audioCtx.createOscillator();
  osc.frequency.setValueAtTime(keyboardFrequencyMap[key], audioCtx.currentTime);
  osc.type = waveform;
  activeNotes[key] = osc;
  activeNotes[key].connect(gain);
  activeNotes[key].start();
} //controls for adjusting parameters 


document.addEventListener("DOMContentLoaded", function (event) {
  var waveformControl = document.getElementById('waveform');
  waveformControl.addEventListener('change', function (event) {
    waveform = event.target.value;
  });
  var gainControl = document.getElementById('gain');
  gainControl.addEventListener('change', function (event) {
    gain.gain.setValueAtTime(event.target.value, audioCtx.currentTime);
  });
  var filterTypeControl = document.getElementById('filterType');
  filterTypeControl.addEventListener('change', function (event) {
    filter.type = event.target.value;
  });
  var filterFrequencyControl = document.getElementById('filterFrequency');
  filterFrequencyControl.addEventListener('change', function (event) {
    filter.frequency.setValueAtTime(event.target.value, audioCtx.currentTime);
  });
  var filterResonanceControl = document.getElementById('filterResonance');
  filterResonanceControl.addEventListener('change', function (event) {
    filter.Q.setValueAtTime(event.target.value, audioCtx.currentTime);
  });
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_assets_javascripts_synth_initial_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/assets/javascripts/synth/initial_setup */ "./app/assets/javascripts/synth/initial_setup.js");
/* harmony import */ var _app_assets_javascripts_synth_initial_setup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_assets_javascripts_synth_initial_setup__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map