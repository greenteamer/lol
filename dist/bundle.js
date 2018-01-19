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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_app__ = __webpack_require__(1);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(2);


const kain = new __WEBPACK_IMPORTED_MODULE_0__models__["a" /* Champion */]({level: 7, name: 'Kain', imageUrl: './kayn.jpg'});
const hekarim = new __WEBPACK_IMPORTED_MODULE_0__models__["a" /* Champion */]({level: 8, name: 'Hekarim', imageUrl: './heka.jpeg'});
const minionRed = new __WEBPACK_IMPORTED_MODULE_0__models__["b" /* Minion */]({level: 2, team: 'Minion red', imageUrl: './minionred.png'});
const minionBlue = new __WEBPACK_IMPORTED_MODULE_0__models__["b" /* Minion */]({level: 2, team:'Minion blue', imageUrl: './minionblue.jpg'})
console.log('heka helth: ', hekarim.helth);
console.log('kain helth: ', kain.helth);

while (kain.isAlive() && hekarim.isAlive()) {
    console.log('took on youre head');
    hekarim.punch(kain);
    minionRed.punch(kain)
    if (kain.isAlive()) {
        kain.punch(hekarim);
        minionRed.punch(hekarim)
    }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Champion {

  constructor(props) {
      console.log('props: ', props)
      this.level = props.level || 1;
      this.helth = this.level * 10;
      this.force = this.level * 1;
      this.name = props.name || 'unknown champ'
      this.imageUrl = props.imageUrl || ''
  }

  punch(champ, minion) {
      // champ.helth = champ.helth - this.force - minion.forse;
      champ.helth = champ.helth - this.force

      if (!champ.isAlive()) {

          // winner
          var img = document.createElement("img");
          img.src = this.imageUrl;
          var src = document.getElementById("root");
          src.appendChild(img);
          
          // result
          console.log(this.name, ': Yahoo, I am win... gg, \n I have ', this.helth, ' HP');
          console.log(champ.name, ': Oops, I am loh..., \n I have ', champ.helth, ' HP');

          minion.show()
      }
  }

  isAlive() {
      if (this.helth > 0) return true
      return false
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Champion;



class Minion {
 
  constructor(props) {
    console.log('props', props)
    this.level = props.level || 1
    this.helth = this.level * 10
    this.force = this.level * 0.5
    this.team = props.team
    this.imageUrl = props.imageUrl || ''
  }
  show() {
    var img = document.createElement("img")
    img.src = this.imageUrl
    var src = document.getElementById("root")
    src.appendChild(img);
  }

  punch(champ){
    champ.helth = champ.helth - this.force;
    console.log(champ.helth)
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Minion;




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzYxNjFjZjVjYTc3YjdkYjhmZjAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7O0FDQTJCOztBQUUzQiw0RUFBMkIsK0NBQStDO0FBQzFFLCtFQUE4QixtREFBbUQ7QUFDakYsK0VBQThCLDBEQUEwRDtBQUN4RixnRkFBK0IsMkRBQTJEO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NjE2MWNmNWNhNzdiN2RiOGZmMCIsImltcG9ydCAnLi9zcmMvYXBwJ1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDaGFtcGlvbiwgTWluaW9uIH0gZnJvbSAnLi9tb2RlbHMnXG5cbmNvbnN0IGthaW4gPSBuZXcgQ2hhbXBpb24oe2xldmVsOiA3LCBuYW1lOiAnS2FpbicsIGltYWdlVXJsOiAnLi9rYXluLmpwZyd9KTtcbmNvbnN0IGhla2FyaW0gPSBuZXcgQ2hhbXBpb24oe2xldmVsOiA4LCBuYW1lOiAnSGVrYXJpbScsIGltYWdlVXJsOiAnLi9oZWthLmpwZWcnfSk7XG5jb25zdCBtaW5pb25SZWQgPSBuZXcgTWluaW9uKHtsZXZlbDogMiwgdGVhbTogJ01pbmlvbiByZWQnLCBpbWFnZVVybDogJy4vbWluaW9ucmVkLnBuZyd9KTtcbmNvbnN0IG1pbmlvbkJsdWUgPSBuZXcgTWluaW9uKHtsZXZlbDogMiwgdGVhbTonTWluaW9uIGJsdWUnLCBpbWFnZVVybDogJy4vbWluaW9uYmx1ZS5qcGcnfSlcbmNvbnNvbGUubG9nKCdoZWthIGhlbHRoOiAnLCBoZWthcmltLmhlbHRoKTtcbmNvbnNvbGUubG9nKCdrYWluIGhlbHRoOiAnLCBrYWluLmhlbHRoKTtcblxud2hpbGUgKGthaW4uaXNBbGl2ZSgpICYmIGhla2FyaW0uaXNBbGl2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coJ3Rvb2sgb24geW91cmUgaGVhZCcpO1xuICAgIGhla2FyaW0ucHVuY2goa2Fpbik7XG4gICAgbWluaW9uUmVkLnB1bmNoKGthaW4pXG4gICAgaWYgKGthaW4uaXNBbGl2ZSgpKSB7XG4gICAgICAgIGthaW4ucHVuY2goaGVrYXJpbSk7XG4gICAgICAgIG1pbmlvblJlZC5wdW5jaChoZWthcmltKVxuICAgIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBDaGFtcGlvbiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwcm9wczogJywgcHJvcHMpXG4gICAgICB0aGlzLmxldmVsID0gcHJvcHMubGV2ZWwgfHwgMTtcbiAgICAgIHRoaXMuaGVsdGggPSB0aGlzLmxldmVsICogMTA7XG4gICAgICB0aGlzLmZvcmNlID0gdGhpcy5sZXZlbCAqIDE7XG4gICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8ICd1bmtub3duIGNoYW1wJ1xuICAgICAgdGhpcy5pbWFnZVVybCA9IHByb3BzLmltYWdlVXJsIHx8ICcnXG4gIH1cblxuICBwdW5jaChjaGFtcCwgbWluaW9uKSB7XG4gICAgICAvLyBjaGFtcC5oZWx0aCA9IGNoYW1wLmhlbHRoIC0gdGhpcy5mb3JjZSAtIG1pbmlvbi5mb3JzZTtcbiAgICAgIGNoYW1wLmhlbHRoID0gY2hhbXAuaGVsdGggLSB0aGlzLmZvcmNlXG5cbiAgICAgIGlmICghY2hhbXAuaXNBbGl2ZSgpKSB7XG5cbiAgICAgICAgICAvLyB3aW5uZXJcbiAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICBpbWcuc3JjID0gdGhpcy5pbWFnZVVybDtcbiAgICAgICAgICB2YXIgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICAgICAgICAgIHNyYy5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIHJlc3VsdFxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgJzogWWFob28sIEkgYW0gd2luLi4uIGdnLCBcXG4gSSBoYXZlICcsIHRoaXMuaGVsdGgsICcgSFAnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjaGFtcC5uYW1lLCAnOiBPb3BzLCBJIGFtIGxvaC4uLiwgXFxuIEkgaGF2ZSAnLCBjaGFtcC5oZWx0aCwgJyBIUCcpO1xuXG4gICAgICAgICAgbWluaW9uLnNob3coKVxuICAgICAgfVxuICB9XG5cbiAgaXNBbGl2ZSgpIHtcbiAgICAgIGlmICh0aGlzLmhlbHRoID4gMCkgcmV0dXJuIHRydWVcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTWluaW9uIHtcbiBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMnLCBwcm9wcylcbiAgICB0aGlzLmxldmVsID0gcHJvcHMubGV2ZWwgfHwgMVxuICAgIHRoaXMuaGVsdGggPSB0aGlzLmxldmVsICogMTBcbiAgICB0aGlzLmZvcmNlID0gdGhpcy5sZXZlbCAqIDAuNVxuICAgIHRoaXMudGVhbSA9IHByb3BzLnRlYW1cbiAgICB0aGlzLmltYWdlVXJsID0gcHJvcHMuaW1hZ2VVcmwgfHwgJydcbiAgfVxuICBzaG93KCkge1xuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1nLnNyYyA9IHRoaXMuaW1hZ2VVcmxcbiAgICB2YXIgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4gICAgc3JjLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cblxuICBwdW5jaChjaGFtcCl7XG4gICAgY2hhbXAuaGVsdGggPSBjaGFtcC5oZWx0aCAtIHRoaXMuZm9yY2U7XG4gICAgY29uc29sZS5sb2coY2hhbXAuaGVsdGgpXG4gIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=