module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/[sections]/[file]": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[sections]/[file].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@htmlplus/core/dist/docs.json":
/*!****************************************************!*\
  !*** ./node_modules/@htmlplus/core/dist/docs.json ***!
  \****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"key\":\"aspect-ratio\",\"tag\":\"plus-aspect-ratio\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Aspect ratio\",\"group\":\"\",\"description\":\"This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image).\",\"events\":[],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  background: #c5cae9;\\n  padding: 12px;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-aspect-ratio value=\\\"16/9\\\">\\n  <div class=\\\"box\\\">\\n    This box will always be 16:9 (unless you put more stuff in it)\\n  </div>\\n</plus-aspect-ratio>\"}]},{\"key\":\"video\",\"title\":\"Video\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-aspect-ratio value=\\\"16/9\\\">\\n  <iframe src=\\\"https://www.youtube.com/embed/tgbNymZ7vqY\\\"></iframe>\\n</plus-aspect-ratio>\"}]},{\"key\":\"more\",\"title\":\"More\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  padding: 12px;\\n  color: white;\\n  margin: 4px;\\n}\\n\\n.ratio-one {\\n  width: 40.625%;\\n  float: right;\\n}\\n\\n.one   { background: #08dfc8 }\\n.two   { background: #ff5449 }\\n.three { background: #5f9ee9 }\\n.four  { background: #ffc903 }\\n.five  { background: #9073c1 }\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <plus-grid>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"3/2\\\" class=\\\"ratio-one\\\">\\n          <div class=\\\"box one\\\">\\n            3:2\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"16/9\\\">\\n          <div class=\\\"box two\\\">\\n            16:9\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n    </plus-grid>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <plus-grid>\\n      <plus-grid-item xs=\\\"6\\\">\\n        <plus-aspect-ratio value=\\\"1\\\">\\n          <div class=\\\"box three\\\">\\n            1:1\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"6\\\" align-self=\\\"end\\\">\\n        <plus-aspect-ratio value=\\\"4/3\\\">\\n          <div class=\\\"box four\\\">\\n            4:3\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"18/6\\\">\\n          <div class=\\\"box five\\\">\\n            18:6\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n    </plus-grid>\\n  </plus-grid-item>\\n</plus-grid>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"value\",\"type\":\"number | string\",\"description\":\"Specifies the ratio.\",\"values\":[{\"type\":\"number\"},{\"type\":\"string\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio\",\"filePath\":\"./src/components/aspect-ratio/aspect-ratio.tsx\",\"fileName\":\"aspect-ratio.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio/usage\",\"tag\":\"plus-aspect-ratio\",\"usage\":{},\"docs\":\"This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image).\",\"docsTags\":[{\"text\":\"default, video, more\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"value\",\"type\":\"number | string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"Specifies the ratio.\",\"docsTags\":[],\"values\":[{\"type\":\"number\"},{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2020-12-12T17:07:02.929Z\",\"size\":0},{\"key\":\"card-body\",\"tag\":\"plus-card-body\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card body\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body\",\"filePath\":\"./src/components/card/card-body/card-body.tsx\",\"fileName\":\"card-body.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body/usage\",\"tag\":\"plus-card-body\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"card-footer\",\"tag\":\"plus-card-footer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card footer\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer\",\"filePath\":\"./src/components/card/card-footer/card-footer.tsx\",\"fileName\":\"card-footer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer/usage\",\"tag\":\"plus-card-footer\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"card-header\",\"tag\":\"plus-card-header\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card header\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header\",\"filePath\":\"./src/components/card/card-header/card-header.tsx\",\"fileName\":\"card-header.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header/usage\",\"tag\":\"plus-card-header\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog\",\"tag\":\"plus-dialog\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog\",\"group\":\"dialog\",\"description\":\"A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.\",\"events\":[{\"name\":\"close\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the dialog is going to hide\"},{\"name\":\"closed\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the dialog is completely closed and its animation is completed.\"},{\"name\":\"open\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the dialog is going to show this event triggers\"},{\"name\":\"opened\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the dialog is completely shown and its animation is completed.\"}],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-default\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog connector=\\\"dialog-default\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"animation\",\"title\":\"Animation\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-animation\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-animation\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"persistent\",\"title\":\"Persistent\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-persistent\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-persistent\\\" persistent>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"placement\",\"title\":\"Placement\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-placement\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-placement\\\" placement=\\\"center-bottom\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"size\",\"title\":\"Size\",\"readme\":\"\",\"codes\":[{\"key\":\"script\",\"type\":\"tsx\",\"value\":\"class {\\n\\n  @State()\\n  open = false;\\n\\n  @State()\\n  size = 'md';\\n\\n  hide() {\\n    this.open = false;\\n  }\\n\\n  show(size) {\\n    this.size = size;\\n    this.open = true;\\n  }\\n\\n  render() {\\n    return (\\n      <preview split=\\\"off\\\">\\n        <Host>\\n          <button onClick={() => this.show('sm')}>\\n            Small dialog\\n          </button>\\n          &nbsp;\\n          <button onClick={() => this.show('lg')}>\\n            Large dialog\\n          </button>\\n          &nbsp;\\n          <button onClick={() => this.show('xl')}>\\n            Extra large dialog\\n          </button>\\n          &nbsp;\\n          <plus-dialog class=\\\"fade\\\" open={this.open} size={this.size} onPlusClose={() => this.hide()}>\\n            <plus-dialog-content>\\n              <plus-dialog-header>\\n                Dialog Title\\n              </plus-dialog-header>\\n              <plus-dialog-body>\\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n              </plus-dialog-body>\\n              <plus-dialog-footer>\\n                <button onClick={() => this.hide()}>\\n                  Close\\n                </button>\\n              </plus-dialog-footer>\\n            </plus-dialog-content>\\n          </plus-dialog>\\n        </Host>\\n      </preview>\\n    )\\n  }\\n}\"}]},{\"key\":\"backdrop\",\"title\":\"Backdrop\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-backdrop\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-backdrop\\\" backdrop=\\\"false\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"scrollable\",\"title\":\"Scrollable\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-scrollable\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-scrollable\\\" scrollable>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"specific-scrollable\",\"title\":\"Specific scrollable\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-specific-scrollable\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-specific-scrollable\\\" scrollable>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body scrollable>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"fullscreen\",\"title\":\"Fullscreen\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-fullscreen\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-fullscreen\\\" placement=\\\"bottom\\\" fullscreen>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"full-width\",\"title\":\"Full width\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-full-width\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-full-width\\\" full-width>\\n      <plus-dialog-content>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"full-height\",\"title\":\"Full height\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-full-height\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-full-height\\\" placement=\\\"center\\\" full-height>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n          consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"sticky\",\"title\":\"Sticky\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-sticky\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-sticky\\\" full-width sticky>\\n      <plus-dialog-content>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"nesting\",\"title\":\"Nesting\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-1\\\">\\n      Open Dialog 1\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-2\\\">\\n      Open Dialog 2\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-3\\\">\\n      Open Dialog 3\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-1\\\" size=\\\"xl\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 1\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend\\n            ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere\\n            lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum\\n            hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum,\\n            pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo\\n            fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque\\n            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna\\n            tempus, fringilla nisl.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler connector=\\\"dialog-nesting-2\\\">\\n            Open Dialog 2\\n          </plus-dialog-toggler>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-2\\\" size=\\\"lg\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 2\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae\\n            venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies\\n            nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non\\n            diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida,\\n            eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat\\n            urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis\\n            vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis.\\n            In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler connector=\\\"dialog-nesting-3\\\">\\n            Open Dialog 3\\n          </plus-dialog-toggler>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-3\\\" xs=\\\"sm\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 3\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus\\n            sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio.\\n            Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante\\n            ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum,\\n            luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis\\n            maximus.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"backdrop\",\"type\":\"boolean\",\"description\":\"Activate the dialog’s backdrop to show or not.\",\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"connector\",\"type\":\"string\",\"description\":\"Used to connect dialog and dialog-action components.\\nThis property helps you to attach which dialog action controls the dialog.\\nIt doesn't matter where the dialog action is.\\nYou can put the dialog’s action inside or outside of the dialog.\\nRead more about connectors here.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"full-height\",\"type\":\"boolean\",\"description\":\"Set the height of the dialog as much as the screen’s height.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"full-width\",\"type\":\"boolean\",\"description\":\"Set the width of the dialog as much as the screen’s width.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"fullscreen\",\"type\":\"\\\"lg-down\\\" | \\\"md-down\\\" | \\\"sm-down\\\" | \\\"xl-down\\\" | \\\"xxl-down\\\" | boolean\",\"description\":\"Set both width and height of the dialog to occupy the screen size.\",\"values\":[{\"value\":\"lg-down\",\"type\":\"string\"},{\"value\":\"md-down\",\"type\":\"string\"},{\"value\":\"sm-down\",\"type\":\"string\"},{\"value\":\"xl-down\",\"type\":\"string\"},{\"value\":\"xxl-down\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"keyboard\",\"type\":\"boolean\",\"description\":\"Closes the dialog when `escape` key is pressed.\",\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"open\",\"type\":\"boolean\",\"description\":\"Control dialog to show or not.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"persistent\",\"type\":\"boolean\",\"description\":\"It prevents the dialog from closing on clicking outside of the element.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"placement\",\"type\":\"\\\"start\\\" | \\\"left\\\" | \\\"center\\\" | \\\"right\\\" | \\\"end\\\" | \\\"top\\\" | \\\"bottom\\\" | \\\"start-top\\\" | \\\"start-center\\\" | \\\"start-bottom\\\" | \\\"left-top\\\" | \\\"left-center\\\" | \\\"left-bottom\\\" | \\\"center-top\\\" | \\\"center-center\\\" | \\\"center-bottom\\\" | \\\"right-top\\\" | \\\"right-center\\\" | \\\"right-bottom\\\" | \\\"end-top\\\" | \\\"end-center\\\" | \\\"end-bottom\\\"\",\"description\":\"Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.\\nHorizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.\",\"default\":\"'top'\",\"values\":[{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"},{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"start-top\",\"type\":\"string\"},{\"value\":\"start-center\",\"type\":\"string\"},{\"value\":\"start-bottom\",\"type\":\"string\"},{\"value\":\"left-top\",\"type\":\"string\"},{\"value\":\"left-center\",\"type\":\"string\"},{\"value\":\"left-bottom\",\"type\":\"string\"},{\"value\":\"center-top\",\"type\":\"string\"},{\"value\":\"center-center\",\"type\":\"string\"},{\"value\":\"center-bottom\",\"type\":\"string\"},{\"value\":\"right-top\",\"type\":\"string\"},{\"value\":\"right-center\",\"type\":\"string\"},{\"value\":\"right-bottom\",\"type\":\"string\"},{\"value\":\"end-top\",\"type\":\"string\"},{\"value\":\"end-center\",\"type\":\"string\"},{\"value\":\"end-bottom\",\"type\":\"string\"}]},{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"size\",\"type\":\"\\\"lg\\\" | \\\"sm\\\" | \\\"xl\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xl\",\"type\":\"string\"}]},{\"name\":\"sticky\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog\",\"filePath\":\"./src/components/dialog/dialog/dialog.tsx\",\"fileName\":\"dialog.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog/usage\",\"tag\":\"plus-dialog\",\"usage\":{},\"docs\":\"A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"},{\"text\":\"default, animation, persistent, placement, size, backdrop, scrollable, specific-scrollable, fullscreen, full-width, full-height, sticky, nesting\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"backdrop\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"backdrop\",\"reflectToAttr\":false,\"docs\":\"Activate the dialog’s backdrop to show or not.\",\"docsTags\":[],\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"Used to connect dialog and dialog-action components.\\nThis property helps you to attach which dialog action controls the dialog.\\nIt doesn't matter where the dialog action is.\\nYou can put the dialog’s action inside or outside of the dialog.\\nRead more about connectors here.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"fullHeight\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"full-height\",\"reflectToAttr\":false,\"docs\":\"Set the height of the dialog as much as the screen’s height.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"fullWidth\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"full-width\",\"reflectToAttr\":false,\"docs\":\"Set the width of the dialog as much as the screen’s width.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"fullscreen\",\"type\":\"\\\"lg-down\\\" | \\\"md-down\\\" | \\\"sm-down\\\" | \\\"xl-down\\\" | \\\"xxl-down\\\" | boolean\",\"mutable\":false,\"attr\":\"fullscreen\",\"reflectToAttr\":false,\"docs\":\"Set both width and height of the dialog to occupy the screen size.\",\"docsTags\":[],\"values\":[{\"value\":\"lg-down\",\"type\":\"string\"},{\"value\":\"md-down\",\"type\":\"string\"},{\"value\":\"sm-down\",\"type\":\"string\"},{\"value\":\"xl-down\",\"type\":\"string\"},{\"value\":\"xxl-down\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"keyboard\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"keyboard\",\"reflectToAttr\":false,\"docs\":\"Closes the dialog when `escape` key is pressed.\",\"docsTags\":[],\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"open\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"open\",\"reflectToAttr\":true,\"docs\":\"Control dialog to show or not.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"persistent\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"persistent\",\"reflectToAttr\":false,\"docs\":\"It prevents the dialog from closing on clicking outside of the element.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"placement\",\"type\":\"\\\"start\\\" | \\\"left\\\" | \\\"center\\\" | \\\"right\\\" | \\\"end\\\" | \\\"top\\\" | \\\"bottom\\\" | \\\"start-top\\\" | \\\"start-center\\\" | \\\"start-bottom\\\" | \\\"left-top\\\" | \\\"left-center\\\" | \\\"left-bottom\\\" | \\\"center-top\\\" | \\\"center-center\\\" | \\\"center-bottom\\\" | \\\"right-top\\\" | \\\"right-center\\\" | \\\"right-bottom\\\" | \\\"end-top\\\" | \\\"end-center\\\" | \\\"end-bottom\\\"\",\"mutable\":false,\"attr\":\"placement\",\"reflectToAttr\":false,\"docs\":\"Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.\\nHorizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.\",\"docsTags\":[],\"default\":\"'top'\",\"values\":[{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"},{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"start-top\",\"type\":\"string\"},{\"value\":\"start-center\",\"type\":\"string\"},{\"value\":\"start-bottom\",\"type\":\"string\"},{\"value\":\"left-top\",\"type\":\"string\"},{\"value\":\"left-center\",\"type\":\"string\"},{\"value\":\"left-bottom\",\"type\":\"string\"},{\"value\":\"center-top\",\"type\":\"string\"},{\"value\":\"center-center\",\"type\":\"string\"},{\"value\":\"center-bottom\",\"type\":\"string\"},{\"value\":\"right-top\",\"type\":\"string\"},{\"value\":\"right-center\",\"type\":\"string\"},{\"value\":\"right-bottom\",\"type\":\"string\"},{\"value\":\"end-top\",\"type\":\"string\"},{\"value\":\"end-center\",\"type\":\"string\"},{\"value\":\"end-bottom\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":false,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"size\",\"type\":\"\\\"lg\\\" | \\\"sm\\\" | \\\"xl\\\"\",\"mutable\":false,\"attr\":\"size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xl\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"sticky\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"sticky\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusClose\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the dialog is going to hide\",\"docsTags\":[]},{\"event\":\"plusClosed\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the dialog is completely closed and its animation is completed.\",\"docsTags\":[]},{\"event\":\"plusOpen\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the dialog is going to show this event triggers\",\"docsTags\":[]},{\"event\":\"plusOpened\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the dialog is completely shown and its animation is completed.\",\"docsTags\":[]}],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.808Z\",\"size\":11434},{\"key\":\"dialog-body\",\"tag\":\"plus-dialog-body\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog body\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body\",\"filePath\":\"./src/components/dialog/dialog-body/dialog-body.tsx\",\"fileName\":\"dialog-body.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body/usage\",\"tag\":\"plus-dialog-body\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":true,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-content\",\"tag\":\"plus-dialog-content\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog content\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content\",\"filePath\":\"./src/components/dialog/dialog-content/dialog-content.tsx\",\"fileName\":\"dialog-content.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content/usage\",\"tag\":\"plus-dialog-content\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":true,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-footer\",\"tag\":\"plus-dialog-footer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog footer\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer\",\"filePath\":\"./src/components/dialog/dialog-footer/dialog-footer.tsx\",\"fileName\":\"dialog-footer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer/usage\",\"tag\":\"plus-dialog-footer\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-header\",\"tag\":\"plus-dialog-header\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog header\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header\",\"filePath\":\"./src/components/dialog/dialog-header/dialog-header.tsx\",\"fileName\":\"dialog-header.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header/usage\",\"tag\":\"plus-dialog-header\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-toggler\",\"tag\":\"plus-dialog-toggler\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog toggler\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler\",\"filePath\":\"./src/components/dialog/dialog-toggler/dialog-toggler.tsx\",\"fileName\":\"dialog-toggler.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler/usage\",\"tag\":\"plus-dialog-toggler\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"drawer\",\"tag\":\"plus-drawer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Drawer\",\"group\":\"drawer\",\"description\":\"TODO\",\"events\":[{\"name\":\"close\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the drawer is going to hide\"},{\"name\":\"closed\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the drawer is completely closed and its animation is completed.\"},{\"name\":\"open\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the drawer is going to show this event triggers\"},{\"name\":\"opened\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the drawer is completely shown and its animation is completed.\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"backdrop\",\"type\":\"\\\"auto\\\" | boolean\",\"description\":\"Activate the drawer’s backdrop to show or not.\",\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"breakpoint\",\"type\":\"\\\"lg\\\" | \\\"md\\\" | \\\"sm\\\" | \\\"xs\\\"\",\"description\":\"TODO\",\"default\":\"'md'\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"md\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xs\",\"type\":\"string\"}]},{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"mini\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"mini-size\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"open\",\"type\":\"boolean\",\"description\":\"Control drawer to show or not.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"persistent\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"placement\",\"type\":\"\\\"bottom\\\" | \\\"end\\\" | \\\"left\\\" | \\\"right\\\" | \\\"start\\\" | \\\"top\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"size\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"temporary\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[{\"name\":\"--plus-drawer-size\",\"description\":\"TODO\",\"default\":\"280px\"},{\"name\":\"--plus-drawer-mini-size\",\"description\":\"TODO\",\"default\":\"0\"}],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer\",\"filePath\":\"./src/components/drawer/drawer/drawer.tsx\",\"fileName\":\"drawer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer/usage\",\"tag\":\"plus-drawer\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"drawer\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"backdrop\",\"type\":\"\\\"auto\\\" | boolean\",\"mutable\":false,\"attr\":\"backdrop\",\"reflectToAttr\":false,\"docs\":\"Activate the drawer’s backdrop to show or not.\",\"docsTags\":[],\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"breakpoint\",\"type\":\"\\\"lg\\\" | \\\"md\\\" | \\\"sm\\\" | \\\"xs\\\"\",\"mutable\":false,\"attr\":\"breakpoint\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'md'\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"md\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xs\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"mini\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"mini\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"miniSize\",\"type\":\"string\",\"mutable\":false,\"attr\":\"mini-size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"open\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"open\",\"reflectToAttr\":false,\"docs\":\"Control drawer to show or not.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"persistent\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"persistent\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"placement\",\"type\":\"\\\"bottom\\\" | \\\"end\\\" | \\\"left\\\" | \\\"right\\\" | \\\"start\\\" | \\\"top\\\"\",\"mutable\":false,\"attr\":\"placement\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"size\",\"type\":\"string\",\"mutable\":false,\"attr\":\"size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"temporary\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"temporary\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusClose\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the drawer is going to hide\",\"docsTags\":[]},{\"event\":\"plusClosed\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the drawer is completely closed and its animation is completed.\",\"docsTags\":[]},{\"event\":\"plusOpen\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the drawer is going to show this event triggers\",\"docsTags\":[]},{\"event\":\"plusOpened\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the drawer is completely shown and its animation is completed.\",\"docsTags\":[]}],\"styles\":[{\"name\":\"--plus-drawer-mini-size\",\"annotation\":\"prop\",\"docs\":\"TODO\"},{\"name\":\"--plus-drawer-size\",\"annotation\":\"prop\",\"docs\":\"TODO\"}],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.099Z\",\"size\":7372},{\"key\":\"drawer-toggler\",\"tag\":\"plus-drawer-toggler\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Drawer toggler\",\"group\":\"drawer\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler\",\"filePath\":\"./src/components/drawer/drawer-toggler/drawer-toggler.tsx\",\"fileName\":\"drawer-toggler.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler/usage\",\"tag\":\"plus-drawer-toggler\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"drawer\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"grid\",\"tag\":\"plus-grid\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Grid\",\"group\":\"grid\",\"description\":\"TODO: HTML+ grid is extremely flexible and powerful.\\nAll you need is to use one of the best flexbox-based grid systems ever in the world\\nto build simple to complex responsive layouts, just using two main components:\\nhp-grid (as a container) & hp-grid-item.\\nUse these components to align content in any form & shape and for all screen sizes\\nwith 12 available column sizes and 5 default breakpoints.\",\"events\":[],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"TODO: no border, padding (used in gutter), margin (offset) on grid-item\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"auto-sizing\",\"title\":\"Auto sizing\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n  <plus-grid>\\n    <plus-grid-item xs=\\\"12\\\" md=\\\"2\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, md=2\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" md=\\\"2\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, md=2\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"gutters\",\"title\":\"Gutters\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid gutter=\\\"lg\\\">\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=6, lg=5\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=6, lg=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=7, lg=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=5, lg=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=5, lg=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=7, lg=5\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"gutters-x\",\"title\":\"Gutters x\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid gutter-x=\\\"md\\\">\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=5\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=5\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"gutters-y\",\"title\":\"Gutters y\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid gutter-y=\\\"md\\\">\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=5\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=5\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"align-items\",\"title\":\"Align items\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"align-content\",\"title\":\"Align content\",\"readme\":\"TODO: align-content (unlike align-items) affect all rows of items\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-content=\\\"center\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"align-self\",\"title\":\"Align self\",\"readme\":\"TODO: align-self on grid-item overrides grid align-items\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\">\\n  <plus-grid-item xs=\\\"grow\\\" align-self=\\\"start\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\" align-self=\\\"end\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"justify\",\"title\":\"Justify\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid justify=\\\"center\\\">\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"reverse\",\"title\":\"Reverse\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid reverse>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 1\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 3\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"wrap\",\"title\":\"Wrap\",\"readme\":\"TODO: wrap is enable by default. if more than 12 you can off.\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid wrap=\\\"off\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      xs=6\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      xs=2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      xs=6\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      xs=2\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"offset\",\"title\":\"Offset\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item offset-xs=\\\"3\\\" xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      offset-xs=\\\"3\\\", xs=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"order\",\"title\":\"Order\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item order-xs=\\\"3\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item order-xs=\\\"2\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item order-xs=\\\"1\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=1\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"hide\",\"title\":\"Hide\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item hide-sm xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3, hide-sm\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item hide-md xs=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=4, hide-md\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item hide-lg xs=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=5, hide-lg\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"vertical\",\"title\":\"Vertical\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  height: 200px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  height: 100%;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\" vertical>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"align-content\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows (It overrides alignItems).\",\"default\":\"'stretch'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-lg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for large display sizes\\n(It overrides alignItemsLg).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-md\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for medium display sizes\\n(It overrides alignItemsMd).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-sm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for small display sizes\\n(It overrides alignItemsSm).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-xl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for extra-large display sizes\\n(It overrides alignItemsXl).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-xs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for extra-small display sizes\\n(It overrides alignItemsXs).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row.\",\"default\":\"'stretch'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-lg\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for large display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-md\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for medium display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-sm\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for small display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-xl\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for extra-large display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-xs\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for extra-small display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"gutter\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them vertically and horizontally.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"gutter-x\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them horizontally.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"gutter-y\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them vertically.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"justify\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally.\",\"default\":\"'start'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-lg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for large display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-md\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for medium display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-sm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for small display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-xl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for extra-large display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-xs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for extra-small display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"vertical\",\"type\":\"boolean\",\"description\":\"Changes the flow of contents from left-to-right to top-to-down.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"wrap\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width.\",\"default\":\"'on'\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-lg\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for large screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-md\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for medium screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-sm\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for small screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-xl\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-large screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-xs\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-small screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid\",\"filePath\":\"./src/components/grid/grid/grid.tsx\",\"fileName\":\"grid.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid/usage\",\"tag\":\"plus-grid\",\"usage\":{},\"docs\":\"TODO: HTML+ grid is extremely flexible and powerful.\\nAll you need is to use one of the best flexbox-based grid systems ever in the world\\nto build simple to complex responsive layouts, just using two main components:\\nhp-grid (as a container) & hp-grid-item.\\nUse these components to align content in any form & shape and for all screen sizes\\nwith 12 available column sizes and 5 default breakpoints.\",\"docsTags\":[{\"text\":\"grid\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"},{\"text\":\"default, auto-sizing, gutters, gutters-x, gutters-y, align-items, align-content, align-self, justify, reverse, wrap, offset, order, hide, vertical\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"alignContent\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows (It overrides alignItems).\",\"docsTags\":[],\"default\":\"'stretch'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentLg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-lg\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for large display sizes\\n(It overrides alignItemsLg).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentMd\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-md\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for medium display sizes\\n(It overrides alignItemsMd).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentSm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-sm\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for small display sizes\\n(It overrides alignItemsSm).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentXl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-xl\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for extra-large display sizes\\n(It overrides alignItemsXl).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentXs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-xs\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for extra-small display sizes\\n(It overrides alignItemsXs).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItems\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row.\",\"docsTags\":[],\"default\":\"'stretch'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsLg\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-lg\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsMd\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-md\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for medium display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsSm\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-sm\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsXl\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-xl\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsXs\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-xs\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for extra-small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutter\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them vertically and horizontally.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutterX\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter-x\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them horizontally.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutterY\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter-y\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them vertically.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justify\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally.\",\"docsTags\":[],\"default\":\"'start'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyLg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-lg\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyMd\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-md\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for medium display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifySm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-sm\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyXl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-xl\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyXs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-xs\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for extra-small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":false,\"docs\":\"Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"vertical\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"vertical\",\"reflectToAttr\":false,\"docs\":\"Changes the flow of contents from left-to-right to top-to-down.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"wrap\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width.\",\"docsTags\":[],\"default\":\"'on'\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapLg\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-lg\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for large screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapMd\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-md\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for medium screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapSm\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-sm\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for small screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapXl\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-xl\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-large screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapXs\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-xs\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-small screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.100Z\",\"size\":19694},{\"key\":\"grid-item\",\"tag\":\"plus-grid-item\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Grid item\",\"group\":\"grid\",\"description\":\"Use as many hp-grid-items as you want inside a hp-grid to layout your content.\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"align-self\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid).\\nIt overrides the align-items property of its parent.\",\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-lg\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for large breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-md\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for medium breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-sm\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for small breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-xl\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for extra-large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-large breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-xs\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-small breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"hide\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in all display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large display sizes (desktop).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium display sizes (tablets).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small display sizes (smartphones).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-xl\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in extra-large display sizes (wide desktop screen).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-xs\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in extra-small display sizes (mobile phones).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for large viewports (desktop).\\nIt also determines the number of columns for bigger display sizes when\\nthe upper breakpoint (xl) is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for medium viewports (tablets).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (lg and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"offset-lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for extra-large display sizes.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for extra-large display sizes.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for small viewports (smartphones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (md, lg, and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for extra-large viewports (wide desktop screen).\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for extra-small viewports (mobile phones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (sm, md, lg, and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item\",\"filePath\":\"./src/components/grid/grid-item/grid-item.tsx\",\"fileName\":\"grid-item.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item/usage\",\"tag\":\"plus-grid-item\",\"usage\":{},\"docs\":\"Use as many hp-grid-items as you want inside a hp-grid to layout your content.\",\"docsTags\":[{\"text\":\"grid\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"alignSelf\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid).\\nIt overrides the align-items property of its parent.\",\"docsTags\":[],\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfLg\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-lg\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for large breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfMd\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-md\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for medium breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfSm\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-sm\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for small breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfXl\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-xl\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for extra-large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-large breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfXs\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-xs\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-small breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"hide\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in all display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLg\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large display sizes (desktop).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLgDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLgUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMd\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium display sizes (tablets).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMdDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMdUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSm\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small display sizes (smartphones).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSmDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSmUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideXl\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-xl\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in extra-large display sizes (wide desktop screen).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideXs\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-xs\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in extra-small display sizes (mobile phones).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"lg\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for large viewports (desktop).\\nIt also determines the number of columns for bigger display sizes when\\nthe upper breakpoint (xl) is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"md\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for medium viewports (tablets).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (lg and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetLg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-lg\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetMd\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-md\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetSm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-sm\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetXl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-xl\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetXs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-xs\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderLg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-lg\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderMd\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-md\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderSm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-sm\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderXl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-xl\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderXs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-xs\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"sm\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for small viewports (smartphones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (md, lg, and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"xl\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for extra-large viewports (wide desktop screen).\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"xs\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for extra-small viewports (mobile phones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (sm, md, lg, and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"intersection\",\"tag\":\"plus-intersection\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Intersection\",\"group\":\"\",\"description\":\"TODO\",\"events\":[{\"name\":\"change\",\"cancelable\":false,\"detail\":\"IntersectionObserverEntry\",\"description\":\"TODO\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"once\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"type\":\"Element\",\"description\":\"TODO\",\"values\":[{\"type\":\"Element\"}]},{\"name\":\"root-margin\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"threshold\",\"type\":\"number | number[]\",\"description\":\"TODO\",\"values\":[{\"type\":\"number\"},{\"type\":\"number[]\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection\",\"filePath\":\"./src/components/intersection/intersection.tsx\",\"fileName\":\"intersection.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection/usage\",\"tag\":\"plus-intersection\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"once\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"once\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"root\",\"type\":\"Element\",\"mutable\":false,\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"Element\"}],\"optional\":true,\"required\":false},{\"name\":\"rootMargin\",\"type\":\"string\",\"mutable\":false,\"attr\":\"root-margin\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"threshold\",\"type\":\"number | number[]\",\"mutable\":false,\"attr\":\"threshold\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"number\"},{\"type\":\"number[]\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusChange\",\"detail\":\"IntersectionObserverEntry\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.823Z\",\"size\":1130},{\"key\":\"tabs\",\"tag\":\"plus-tabs\",\"tags\":[],\"deprecated\":false,\"development\":true,\"title\":\"Tabs\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[{\"name\":\"change\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"vertical\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs\",\"filePath\":\"./src/components/tabs/tabs/tabs.tsx\",\"fileName\":\"tabs.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs/usage\",\"tag\":\"plus-tabs\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"name\":\"development\"},{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"vertical\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"vertical\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"wowChange\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.843Z\",\"size\":5499},{\"key\":\"tabs-bar\",\"tag\":\"plus-tabs-bar\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs bar\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"grow\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"justify\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\"\",\"description\":\"TODO\",\"default\":\"'start'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar\",\"filePath\":\"./src/components/tabs/tabs-bar/tabs-bar.tsx\",\"fileName\":\"tabs-bar.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar/usage\",\"tag\":\"plus-tabs-bar\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"grow\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"grow\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"justify\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'start'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-panel\",\"tag\":\"plus-tabs-panel\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs panel\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel\",\"filePath\":\"./src/components/tabs/tabs-panel/tabs-panel.tsx\",\"fileName\":\"tabs-panel.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel/usage\",\"tag\":\"plus-tabs-panel\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-panel\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-panels\",\"tag\":\"plus-tabs-panels\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs panels\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels\",\"filePath\":\"./src/components/tabs/tabs-panels/tabs-panels.tsx\",\"fileName\":\"tabs-panels.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels/usage\",\"tag\":\"plus-tabs-panels\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-panels\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-tab\",\"tag\":\"plus-tabs-tab\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs tab\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"disabled\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab\",\"filePath\":\"./src/components/tabs/tabs-tab/tabs-tab.tsx\",\"fileName\":\"tabs-tab.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab/usage\",\"tag\":\"plus-tabs-tab\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-tab\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"disabled\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"disabled\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"transition\",\"tag\":\"plus-transition\",\"tags\":[],\"deprecated\":false,\"development\":true,\"title\":\"Transition\",\"group\":\"\",\"description\":\"TODO\",\"events\":[{\"name\":\"cancel\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"end\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"iteration\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"start\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"}],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview>\\n    <plus-transition name=\\\"shake-x\\\" repeat=\\\"infinite\\\">\\n        HTMLPLUS\\n    </plus-transition>\\n</preview>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"delay\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"direction\",\"type\":\"\\\"alternate\\\" | \\\"alternate-reverse\\\" | \\\"normal\\\" | \\\"reverse\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"alternate\",\"type\":\"string\"},{\"value\":\"alternate-reverse\",\"type\":\"string\"},{\"value\":\"normal\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"duration\",\"type\":\"string\",\"description\":\"TODO\",\"default\":\"'normal'\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"name\",\"type\":\"\\\"bounce\\\" | \\\"bounce-in\\\" | \\\"fade-in-down\\\" | \\\"flash\\\" | \\\"flip-in-y\\\" | \\\"head-shake\\\" | \\\"heart-beat\\\" | \\\"pulse\\\" | \\\"rubber-band\\\" | \\\"shake-x\\\" | \\\"shake-y\\\" | \\\"swing\\\" | \\\"typing\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"bounce\",\"type\":\"string\"},{\"value\":\"bounce-in\",\"type\":\"string\"},{\"value\":\"fade-in-down\",\"type\":\"string\"},{\"value\":\"flash\",\"type\":\"string\"},{\"value\":\"flip-in-y\",\"type\":\"string\"},{\"value\":\"head-shake\",\"type\":\"string\"},{\"value\":\"heart-beat\",\"type\":\"string\"},{\"value\":\"pulse\",\"type\":\"string\"},{\"value\":\"rubber-band\",\"type\":\"string\"},{\"value\":\"shake-x\",\"type\":\"string\"},{\"value\":\"shake-y\",\"type\":\"string\"},{\"value\":\"swing\",\"type\":\"string\"},{\"value\":\"typing\",\"type\":\"string\"}]},{\"name\":\"pause\",\"type\":\"\\\"hover\\\" | boolean\",\"description\":\"TODO\",\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"repeat\",\"type\":\"\\\"infinite\\\" | number\",\"description\":\"TODO\",\"values\":[{\"value\":\"infinite\",\"type\":\"string\"},{\"type\":\"number\"}]},{\"name\":\"start\",\"type\":\"\\\"hover\\\" | boolean\",\"description\":\"TODO\",\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition\",\"filePath\":\"./src/components/transition/transition.tsx\",\"fileName\":\"transition.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition/usage\",\"tag\":\"plus-transition\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"name\":\"development\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"delay\",\"type\":\"string\",\"mutable\":false,\"attr\":\"delay\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"direction\",\"type\":\"\\\"alternate\\\" | \\\"alternate-reverse\\\" | \\\"normal\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"direction\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"alternate\",\"type\":\"string\"},{\"value\":\"alternate-reverse\",\"type\":\"string\"},{\"value\":\"normal\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"duration\",\"type\":\"string\",\"mutable\":false,\"attr\":\"duration\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'normal'\",\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"name\",\"type\":\"\\\"bounce\\\" | \\\"bounce-in\\\" | \\\"fade-in-down\\\" | \\\"flash\\\" | \\\"flip-in-y\\\" | \\\"head-shake\\\" | \\\"heart-beat\\\" | \\\"pulse\\\" | \\\"rubber-band\\\" | \\\"shake-x\\\" | \\\"shake-y\\\" | \\\"swing\\\" | \\\"typing\\\"\",\"mutable\":false,\"attr\":\"name\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"bounce\",\"type\":\"string\"},{\"value\":\"bounce-in\",\"type\":\"string\"},{\"value\":\"fade-in-down\",\"type\":\"string\"},{\"value\":\"flash\",\"type\":\"string\"},{\"value\":\"flip-in-y\",\"type\":\"string\"},{\"value\":\"head-shake\",\"type\":\"string\"},{\"value\":\"heart-beat\",\"type\":\"string\"},{\"value\":\"pulse\",\"type\":\"string\"},{\"value\":\"rubber-band\",\"type\":\"string\"},{\"value\":\"shake-x\",\"type\":\"string\"},{\"value\":\"shake-y\",\"type\":\"string\"},{\"value\":\"swing\",\"type\":\"string\"},{\"value\":\"typing\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"pause\",\"type\":\"\\\"hover\\\" | boolean\",\"mutable\":false,\"attr\":\"pause\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"repeat\",\"type\":\"\\\"infinite\\\" | number\",\"mutable\":false,\"attr\":\"repeat\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"infinite\",\"type\":\"string\"},{\"type\":\"number\"}],\"optional\":true,\"required\":false},{\"name\":\"start\",\"type\":\"\\\"hover\\\" | boolean\",\"mutable\":false,\"attr\":\"start\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusCancel\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusEnd\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusIteration\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusStart\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.101Z\",\"size\":7120}]");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/alert/alert.tsx":
/*!****************************************!*\
  !*** ./src/components/alert/alert.tsx ***!
  \****************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\alert\\alert.tsx";


const Alert = props => {
  const {
    children,
    type
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('alert', {
    type
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/alert/alert.types.ts":
/*!*********************************************!*\
  !*** ./src/components/alert/alert.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/alert/index.ts":
/*!***************************************!*\
  !*** ./src/components/alert/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/components/alert/alert.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony import */ var _alert_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.types */ "./src/components/alert/alert.types.ts");
/* harmony import */ var _alert_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alert_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Alert"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alert_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/banner/banner.tsx":
/*!******************************************!*\
  !*** ./src/components/banner/banner.tsx ***!
  \******************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\banner\\banner.tsx";


const Banner = () => {
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('banner');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/banner/index.ts":
/*!****************************************!*\
  !*** ./src/components/banner/index.ts ***!
  \****************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ "./src/components/banner/banner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_0__["Banner"]; });



/***/ }),

/***/ "./src/components/box/box.tsx":
/*!************************************!*\
  !*** ./src/components/box/box.tsx ***!
  \************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\box\\box.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Box = props => {
  const {
    children,
    minWidth,
    maxWidth
  } = props,
        all = _objectWithoutProperties(props, ["children", "minWidth", "maxWidth"]);

  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('box', all);
  const style = {
    minWidth: _app_utils__WEBPACK_IMPORTED_MODULE_2__["toUnit"](minWidth),
    maxWidth: _app_utils__WEBPACK_IMPORTED_MODULE_2__["toUnit"](maxWidth)
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    style: style,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/box/box.types.ts":
/*!*****************************************!*\
  !*** ./src/components/box/box.types.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/box/index.ts":
/*!*************************************!*\
  !*** ./src/components/box/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ "./src/components/box/box.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony import */ var _box_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box.types */ "./src/components/box/box.types.ts");
/* harmony import */ var _box_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_box_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _box_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Box"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _box_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\button\\button.tsx";


const Button = props => {
  const {
    children,
    color,
    disabled,
    icon,
    outlined,
    size = 'md',
    text,
    onClick
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('button', {
    color,
    disabled,
    icon,
    outlined,
    size,
    text
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: classes,
    disabled: disabled,
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/button/button.types.ts":
/*!***********************************************!*\
  !*** ./src/components/button/button.types.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _button_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.types */ "./src/components/button/button.types.ts");
/* harmony import */ var _button_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Button"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/code/code.tsx":
/*!**************************************!*\
  !*** ./src/components/code/code.tsx ***!
  \**************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "prismjs/components/prism-jsx");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\code\\code.tsx";





const Code = props => {
  const {
    children,
    copy = true,
    language
  } = props;
  const element = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const content = (children || '').toString();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAllUnder(element.current));
  const classesCode = `${false ? undefined : ''}language-${language}`;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('code');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: element,
    className: classes,
    children: [copy && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "button",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        icon: true,
        onClick: () => _app_utils__WEBPACK_IMPORTED_MODULE_5__["copyToClipboard"](content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
      className: classesCode,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        className: classesCode,
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/code/code.types.tsx":
/*!********************************************!*\
  !*** ./src/components/code/code.types.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/code/index.ts":
/*!**************************************!*\
  !*** ./src/components/code/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code */ "./src/components/code/code.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _code__WEBPACK_IMPORTED_MODULE_0__["Code"]; });

/* harmony import */ var _code_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.types */ "./src/components/code/code.types.tsx");
/* harmony import */ var _code_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_code_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Code"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _code_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/example/example.tsx":
/*!********************************************!*\
  !*** ./src/components/example/example.tsx ***!
  \********************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return Example; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");
/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example.types */ "./src/components/example/example.types.tsx");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\example\\example.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Example = props => {
  const {
    value
  } = props;
  const code = value.code || {};
  const links = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return (code.links || []).map(link => {
      const map = {
        codesandbox: 'Edit in CodeSandbox',
        github: 'View on Github'
      };
      return _objectSpread(_objectSpread({}, link), {}, {
        title: map[link.key]
      });
    });
  }, [code.links]);
  const style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    if (!code.style) return;
    let rules = code.style;
    let className = `.ex-${value.key}`;

    try {
      var classLen = className.length,
          char,
          nextChar,
          isAt,
          isIn;
      className += ' ';
      rules = rules.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
      rules = rules.replace(/}(\s*)@/g, '}@');
      rules = rules.replace(/}(\s*)}/g, '}}');

      for (var i = 0; i < rules.length - 2; i++) {
        char = rules[i];
        nextChar = rules[i + 1];
        if (char === '@') isAt = true;
        if (!isAt && char === '{') isIn = true;
        if (isIn && char === '}') isIn = false;

        if (!isIn && nextChar !== '@' && nextChar !== '}' && (char === '}' || char === ',' || (char === '{' || char === ';') && isAt)) {
          rules = rules.slice(0, i + 1) + className + rules.slice(i + 1);
          i += classLen;
          isAt = false;
        }
      }

      ;
      if (rules.indexOf(className) !== 0 && rules.indexOf('@') !== 0) rules = className + rules;
      return rules;
    } catch {}
  }, [value.key, code.style]);
  const tabs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const tabs = [];
    Object.keys(code).filter(key => key !== 'links').map(key => {
      const tab = {
        key,
        title: _app_utils__WEBPACK_IMPORTED_MODULE_3__["toCapitalCase"](key),
        disabled: !code[key]
      };

      if (key === 'preview') {
        tab.content = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `preview-wrapper ex-${value.key}`,
          children: [code[key](), style && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
            children: style
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined);
      } else {
        const language = _example_types__WEBPACK_IMPORTED_MODULE_4__["ExampleLanguage"][key];

        tab.content = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Code"], {
          language: language,
          children: code[key]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 31
        }, undefined);
      }

      tabs.push(tab);
    });
    return tabs;
  }, [code]);
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('example');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabs"], {
      value: "preview",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
        className: "toolbar",
        alignItems: "center",
        justify: "between",
        gutterX: "sm",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          xs: "grow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsBar"], {
            children: tabs.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsTab"], {
              disabled: item.disabled,
              value: item.key,
              children: item.title
            }, item.key, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), links.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: link.value,
            target: "_blank",
            title: link.title,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
              name: "github"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined)
        }, link.key, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsPanels"], {
        className: "body",
        children: tabs.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsPanel"], {
          value: item.key,
          children: item.content && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.content, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 32
          }, undefined)
        }, item.key, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/example/example.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/example/example.types.tsx ***!
  \**************************************************/
/*! exports provided: ExampleLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return ExampleLanguage; });
let ExampleLanguage;

(function (ExampleLanguage) {
  ExampleLanguage["style"] = "css";
  ExampleLanguage["template"] = "html";
  ExampleLanguage["script"] = "js";
})(ExampleLanguage || (ExampleLanguage = {}));

/***/ }),

/***/ "./src/components/example/index.ts":
/*!*****************************************!*\
  !*** ./src/components/example/index.ts ***!
  \*****************************************/
/*! exports provided: Example, ExampleLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example */ "./src/components/example/example.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return _example__WEBPACK_IMPORTED_MODULE_0__["Example"]; });

/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.types */ "./src/components/example/example.types.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return _example_types__WEBPACK_IMPORTED_MODULE_1__["ExampleLanguage"]; });




/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\footer\\footer.tsx";




const Footer = () => {
  const items = [{
    title: _app_constants__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ABBREVIATION"],
    items: [{
      label: 'Team',
      path: '#'
    }, {
      label: 'Jobs',
      path: '#'
    }]
  }, {
    title: 'Community',
    items: [{
      label: 'Github',
      path: '#'
    }, {
      label: 'Stack Overflow',
      path: '#'
    }, {
      label: 'Blog',
      path: '#'
    }]
  }, {
    title: 'Resources',
    items: [{
      label: 'Support',
      path: '#'
    }, {
      label: 'Resources',
      path: '#'
    }, {
      label: 'Newsletter',
      path: '#'
    }]
  }, {
    title: 'Contact',
    items: [{
      label: 'Common Questions',
      path: '#'
    }, {
      label: 'Report a bug',
      path: '#'
    }, {
      label: 'Request a component',
      path: '#'
    }]
  }];
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]('footer');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      hidden: true,
      mb: 16,
      mt: 4,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
        alignItems: "start",
        justify: "center",
        children: items.map(group => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          xs: "12",
          sm: "6",
          md: "3",
          lg: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            weight: "semi-bold",
            children: group.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: group.items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: item['path'],
                children: item.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 21
              }, undefined)
            }, item.label, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined)]
        }, group.title, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mb: 12,
      mt: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Socials"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      align: "center",
      size: "label",
      children: ["\xA9 2020 ", _app_constants__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_NAME"], ". Released under MIT License."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/footer/index.ts":
/*!****************************************!*\
  !*** ./src/components/footer/index.ts ***!
  \****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer/footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });



/***/ }),

/***/ "./src/components/framework-selector/framework-selector.tsx":
/*!******************************************************************!*\
  !*** ./src/components/framework-selector/framework-selector.tsx ***!
  \******************************************************************/
/*! exports provided: FrameworkSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return FrameworkSelector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/data */ "./src/data/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\framework-selector\\framework-selector.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Option = props => {
  const {
    Option
  } = react_select__WEBPACK_IMPORTED_MODULE_4__["components"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SingleValue, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const SingleValue = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGrid"], {
  alignItems: "center",
  gutterX: "sm",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGridItem"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        width: '1.5rem',
        height: '1.5rem',
        objectFit: 'contain',
        display: 'block'
      },
      src: `/assets/logo/${props.data.logo}`,
      alt: `${props.data.label} logo`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGridItem"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      children: props.data.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

const FrameworkSelector = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_7__["useStore"])(); // TODO

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const items = _app_data__WEBPACK_IMPORTED_MODULE_6__["frameworks"].filter(framework => !framework.disabled).map(framework => ({
    value: framework.key,
    label: framework.title,
    logo: framework.logo
  }));

  const change = framework => {
    store.ui.setFramework(framework.value); // TODO

    router.replace(router.asPath);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mb: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
        color: "main-lighten-1",
        size: "caption",
        children: "SELECT YOUR FRAMEWORK"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      options: items,
      value: items.find(framework => framework.value === store.ui.framework),
      components: {
        Option,
        SingleValue
      },
      onChange: change
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
});

/***/ }),

/***/ "./src/components/framework-selector/index.ts":
/*!****************************************************!*\
  !*** ./src/components/framework-selector/index.ts ***!
  \****************************************************/
/*! exports provided: FrameworkSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework-selector */ "./src/components/framework-selector/framework-selector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return _framework_selector__WEBPACK_IMPORTED_MODULE_0__["FrameworkSelector"]; });



/***/ }),

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\header\\header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Header = ({
  menu
}) => {
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('header');
  const links = [{
    title: 'About',
    route: {
      to: 'ROUTE:FRAMEWORK:OVERVIEW'
    }
  }, {
    title: 'Components',
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: 'aspect-ratio'
      }
    }
  }, {
    title: 'Join our team!',
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: 'switch'
      }
    }
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
      alignItems: "center",
      wrap: "off",
      children: [menu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "auto",
        hideLgUp: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusDrawerToggler"], {
          connector: "main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            name: "menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "ROUTE:HOME",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/logo/logo.svg",
            width: "135px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "grow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), links.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        hideSmDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          size: "sm",
          text: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], _objectSpread(_objectSpread({}, link.route), {}, {
            children: link.title
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, link.title, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "./src/components/icon/icon.tsx":
/*!**************************************!*\
  !*** ./src/components/icon/icon.tsx ***!
  \**************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\icon\\icon.tsx";


const Icon = props => {
  const {
    color,
    name,
    size = 'sm'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('icon', {
    [name]: !!name,
    color,
    size
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: classes
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/icon/icon.types.ts":
/*!*******************************************!*\
  !*** ./src/components/icon/icon.types.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/icon/index.ts":
/*!**************************************!*\
  !*** ./src/components/icon/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/components/icon/icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _icon_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.types */ "./src/components/icon/icon.types.ts");
/* harmony import */ var _icon_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icon_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Icon"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/components/alert/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alert__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alert__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ "./src/components/banner/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_2__["Banner"]; });

/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box */ "./src/components/box/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _box__WEBPACK_IMPORTED_MODULE_3__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _box__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./src/components/button/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button__WEBPACK_IMPORTED_MODULE_4__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./src/components/code/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code__WEBPACK_IMPORTED_MODULE_5__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _code__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/components/example/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return _example__WEBPACK_IMPORTED_MODULE_6__["Example"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return _example__WEBPACK_IMPORTED_MODULE_6__["ExampleLanguage"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_7__["Footer"]; });

/* harmony import */ var _framework_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-selector */ "./src/components/framework-selector/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return _framework_selector__WEBPACK_IMPORTED_MODULE_8__["FrameworkSelector"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./src/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_9__["Header"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon */ "./src/components/icon/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon__WEBPACK_IMPORTED_MODULE_10__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input */ "./src/components/input/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input__WEBPACK_IMPORTED_MODULE_11__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link */ "./src/components/link/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_12__["Link"]; });

/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./markup */ "./src/components/markup/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _markup__WEBPACK_IMPORTED_MODULE_13__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _markup__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page */ "./src/components/page/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page__WEBPACK_IMPORTED_MODULE_14__["Page"]; });

/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parameters */ "./src/components/parameters/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parameters__WEBPACK_IMPORTED_MODULE_15__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parameters__WEBPACK_IMPORTED_MODULE_15__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./section */ "./src/components/section/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _section__WEBPACK_IMPORTED_MODULE_16__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _section__WEBPACK_IMPORTED_MODULE_16__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar__WEBPACK_IMPORTED_MODULE_17__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar__WEBPACK_IMPORTED_MODULE_17__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./socials */ "./src/components/socials/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _socials__WEBPACK_IMPORTED_MODULE_18__["Socials"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./text */ "./src/components/text/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text__WEBPACK_IMPORTED_MODULE_19__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page","Socials"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text__WEBPACK_IMPORTED_MODULE_19__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toc */ "./src/components/toc/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc__WEBPACK_IMPORTED_MODULE_20__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page","Socials"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc__WEBPACK_IMPORTED_MODULE_20__[key]; }) }(__WEBPACK_IMPORT_KEY__));






















/***/ }),

/***/ "./src/components/input/index.ts":
/*!***************************************!*\
  !*** ./src/components/input/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/components/input/input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.types */ "./src/components/input/input.types.ts");
/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Input"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/input/input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/input.tsx ***!
  \****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\input\\input.tsx";


const Input = props => {
  const {
    placeholder,
    type = 'text'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('input');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    className: classes,
    type: type,
    placeholder: placeholder
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/input/input.types.ts":
/*!*********************************************!*\
  !*** ./src/components/input/input.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/link/index.ts":
/*!**************************************!*\
  !*** ./src/components/link/index.ts ***!
  \**************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./src/components/link/link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),

/***/ "./src/components/link/link.tsx":
/*!**************************************!*\
  !*** ./src/components/link/link.tsx ***!
  \**************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\link\\link.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const {
    children
  } = props,
        args = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", _objectSpread(_objectSpread({
    ref: ref
  }, args), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
});
const Link = props => {
  const {
    children,
    params,
    to
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "params", "to"]);

  const path = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _app_services__WEBPACK_IMPORTED_MODULE_3__["router"].path(to, params), [to, params]);

  if (attributes.target === '_blank' && !attributes.rel) {
    attributes.rel = 'noopener noreferrer';
  }

  if (!path) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Anchor, _objectSpread(_objectSpread({
    href: to
  }, attributes), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 21
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Anchor, _objectSpread(_objectSpread({}, attributes), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/markup/index.ts":
/*!****************************************!*\
  !*** ./src/components/markup/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup */ "./src/components/markup/markup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Markup", function() { return _markup__WEBPACK_IMPORTED_MODULE_0__["Markup"]; });

/* harmony import */ var _markup_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.types */ "./src/components/markup/markup.types.tsx");
/* harmony import */ var _markup_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markup_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _markup_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Markup"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _markup_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/markup/markup.renderers.tsx":
/*!****************************************************!*\
  !*** ./src/components/markup/markup.renderers.tsx ***!
  \****************************************************/
/*! exports provided: renderers, tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderers", function() { return renderers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return tokenizer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\markup\\markup.renderers.tsx";



const renderers = {
  blockquote: props => {
    const value = props.node.children[0].children[0].value.trim();
    const token = (value.match(/\[\w+\]/) || [])[0] || '';
    const type = token.replace(/\[|\]/g, '');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      type: type,
      children: value.replace(token, '')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, undefined);
  },
  code: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Code"], {
    language: props.language,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 22
  }, undefined),
  heading: props => {
    const {
      children,
      level
    } = props;
    const content = level === 1 ? children : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["TocItem"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 50
    }, undefined);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: level.toString(),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }, undefined);
  },
  link: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: props.href,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 22
  }, undefined),
  paragraph: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "paragraph",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 27
  }, undefined)
};
const tokenizer = input => {
  const tokens = input.match(/\{(.*?)\}/g) || [];
  tokens.map(token => {
    const raw = token.replace(/\{|\}/g, '');
    const sections = raw.split('.');
    const type = sections[0];
    const value = sections[1];

    switch (type) {
      case 'Constants':
        input = input.replace(token, _app_constants__WEBPACK_IMPORTED_MODULE_2__[value]);
        break;

      case 'Router':
        input = input.replace(token, _app_services__WEBPACK_IMPORTED_MODULE_3__["router"].path(value));
        break;
    }
  });
  return input;
};

/***/ }),

/***/ "./src/components/markup/markup.tsx":
/*!******************************************!*\
  !*** ./src/components/markup/markup.tsx ***!
  \******************************************/
/*! exports provided: Markup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markup", function() { return Markup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markup_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markup.renderers */ "./src/components/markup/markup.renderers.tsx");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\markup\\markup.tsx";



const Markup = props => {
  const {
    children,
    ignoreParagraph
  } = props;
  if (ignoreParagraph) _markup_renderers__WEBPACK_IMPORTED_MODULE_3__["renderers"].paragraph = props => props.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    renderers: _markup_renderers__WEBPACK_IMPORTED_MODULE_3__["renderers"],
    children: Object(_markup_renderers__WEBPACK_IMPORTED_MODULE_3__["tokenizer"])(children.toString())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/markup/markup.types.tsx":
/*!************************************************!*\
  !*** ./src/components/markup/markup.types.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/page/index.ts":
/*!**************************************!*\
  !*** ./src/components/page/index.ts ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/components/page/page.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page__WEBPACK_IMPORTED_MODULE_0__["Page"]; });



/***/ }),

/***/ "./src/components/page/page.tsx":
/*!**************************************!*\
  !*** ./src/components/page/page.tsx ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");




const Page = props => {
  const {
    children,
    layout
  } = props;
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_2__["useStore"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    store.ui.setLayout(layout);
  }, [layout]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false);
};

/***/ }),

/***/ "./src/components/parameters/index.ts":
/*!********************************************!*\
  !*** ./src/components/parameters/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/components/parameters/parameters.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return _parameters__WEBPACK_IMPORTED_MODULE_0__["Parameters"]; });

/* harmony import */ var _parameters_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.types */ "./src/components/parameters/parameters.types.tsx");
/* harmony import */ var _parameters_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parameters_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parameters_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Parameters"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parameters_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/parameters/parameters.tsx":
/*!**************************************************!*\
  !*** ./src/components/parameters/parameters.tsx ***!
  \**************************************************/
/*! exports provided: Parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return Parameters; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\parameters\\parameters.tsx";



const Parameters = props => {
  const {
    items = []
  } = props;
  const hasDefault = !!items.filter(item => typeof item.default !== 'undefined').length;
  const hasType = !!items.filter(item => typeof item.type !== 'undefined').length;
  const hasValue = !!items.filter(item => typeof item.value !== 'undefined').length;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('parameters');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
      className: "item",
      gutterX: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "grow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          color: "error",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        sm: "6",
        lg: "grow",
        children: [hasType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Type"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined), hasType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          truncate: true,
          children: item.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        className: "default",
        xs: "12",
        lg: "auto",
        children: [hasDefault && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 28
        }, undefined), hasDefault && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: item.default || 'undefined'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
            ignoreParagraph: true,
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined), hasValue && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Code"], {
          language: "js",
          copy: false,
          children: item.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined)]
    }, item.name, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/parameters/parameters.types.tsx":
/*!********************************************************!*\
  !*** ./src/components/parameters/parameters.types.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/section/index.ts":
/*!*****************************************!*\
  !*** ./src/components/section/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./src/components/section/section.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_0__["Section"]; });

/* harmony import */ var _section_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.types */ "./src/components/section/section.types.tsx");
/* harmony import */ var _section_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_section_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _section_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Section"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _section_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/section/section.tsx":
/*!********************************************!*\
  !*** ./src/components/section/section.tsx ***!
  \********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\section\\section.tsx";


const Section = props => {
  const {
    children,
    size
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('section', {
    size
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/section/section.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/section/section.types.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/sidebar/index.ts":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/sidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_0__["Sidebar"]; });

/* harmony import */ var _sidebar_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.types */ "./src/components/sidebar/sidebar.types.tsx");
/* harmony import */ var _sidebar_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Sidebar"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/sidebar/sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/sidebar.tsx ***!
  \********************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\sidebar\\sidebar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO





const Sidebar = props => {
  const {
    items = []
  } = props;
  const router = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const actives = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const run = (input, ...parent) => {
      if (Array.isArray(input)) {
        let result = [];
        input.map(item => {
          const items = run(item, ...parent);
          if (items.length) result = items;
        });
        return result;
      } else if (input.items) {
        return run(input.items, input, ...parent);
      } else {
        const route = input.route;
        if (!route) return [];
        if (router.isActive(route.to, route.params)) return [input, ...parent];
        return [];
      }
    };

    const result = run(items, null).filter(item => item);
    setCurrent(result);
    return result;
  }, [items, router.asPath]);

  const isActive = item => actives.some(active => item === active);

  const isExpand = parent => {
    if (!parent) return true;
    return current.some(item => item === parent);
  };

  const toggle = (item, ...parents) => {
    const indexOf = current.findIndex(x => x === item);

    if (indexOf !== -1) {
      setCurrent([...current.slice(indexOf + 1)]);
    } else {
      setCurrent([item, ...parents]);
    }
  };

  const menu = (items, level = 0, ...parents) => {
    const isCollapsed = !isExpand(parents[0]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]({
        ['menu']: true,
        [`level-${level}`]: true,
        ['collapsed']: false // TODO isCollapsed

      }),
      children: items.map(item => {
        var _item$items;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]({
            'item': true,
            'active': isActive(item)
          }),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            size: "body",
            children: [item.route && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], _objectSpread(_objectSpread({}, item.route), {}, {
              children: item.title
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, undefined), !item.route &&
            /*#__PURE__*/
            // TODO
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: 400
              },
              onClick: () => toggle(item, ...parents),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [item.icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
                    name: item.icon,
                    size: "sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 25
                  }, undefined), "\xA0"]
                }, void 0, true), item.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined), !!((_item$items = item.items) !== null && _item$items !== void 0 && _item$items.length) && menu(item.items, level + 1, item, ...parents)]
        }, item.title, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined);
  };

  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]('sidebar');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: menu(items)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/sidebar/sidebar.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/sidebar/sidebar.types.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/socials/index.ts":
/*!*****************************************!*\
  !*** ./src/components/socials/index.ts ***!
  \*****************************************/
/*! exports provided: Socials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials */ "./src/components/socials/socials.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _socials__WEBPACK_IMPORTED_MODULE_0__["Socials"]; });



/***/ }),

/***/ "./src/components/socials/socials.tsx":
/*!********************************************!*\
  !*** ./src/components/socials/socials.tsx ***!
  \********************************************/
/*! exports provided: Socials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return Socials; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\socials\\socials.tsx";



const Socials = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
    alignItems: "center",
    gutter: "md",
    justify: "center",
    wrap: "off",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_TWITTER"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_LINKEDIN"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "linkedin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_INSTAGRAM"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "instagram"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_GITHUB"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/text/index.ts":
/*!**************************************!*\
  !*** ./src/components/text/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/components/text/text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var _text_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.types */ "./src/components/text/text.types.ts");
/* harmony import */ var _text_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_text_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Text"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/text/text.tsx":
/*!**************************************!*\
  !*** ./src/components/text/text.tsx ***!
  \**************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\text\\text.tsx";


const Text = props => {
  const {
    align = 'start',
    children,
    color,
    dense,
    inline,
    size = 'body',
    truncate,
    weight = 'normal'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('text', {
    align,
    color,
    dense,
    inline,
    size,
    truncate,
    weight
  });
  let Tag;

  switch (size) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      Tag = `h${size}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    default:
      Tag = 'div';
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, {
    className: classes,
    title: truncate ? children : undefined,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/text/text.types.ts":
/*!*******************************************!*\
  !*** ./src/components/text/text.types.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/toc/index.ts":
/*!*************************************!*\
  !*** ./src/components/toc/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc */ "./src/components/toc/toc/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _toc_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-item */ "./src/components/toc/toc-item/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_item__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_item__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc-item/index.ts":
/*!**********************************************!*\
  !*** ./src/components/toc/toc-item/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc-item */ "./src/components/toc/toc-item/toc-item.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocItem", function() { return _toc_item__WEBPACK_IMPORTED_MODULE_0__["TocItem"]; });

/* harmony import */ var _toc_item_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-item.types */ "./src/components/toc/toc-item/toc-item.types.ts");
/* harmony import */ var _toc_item_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toc_item_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_item_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","TocItem"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_item_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc-item/toc-item.tsx":
/*!**************************************************!*\
  !*** ./src/components/toc/toc-item/toc-item.tsx ***!
  \**************************************************/
/*! exports provided: TocItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocItem", function() { return TocItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\toc\\toc-item\\toc-item.tsx";





const TocItem = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(props => {
  var _children$, _children$$props;

  const {
    children,
    level
  } = props;
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useStore"])();
  const element = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const key = _app_utils__WEBPACK_IMPORTED_MODULE_5__["toKebabCase"]((((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : (_children$$props = _children$.props) === null || _children$$props === void 0 ? void 0 : _children$$props.children) || children || '').toString());

  const scrollTo = () => {
    if (!element.current) return;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const onClick = event => {
    event && event.preventDefault();
    scrollTo();
    setTimeout(() => window.location.hash = `#${key}`, 500);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let depth = level;

    if (!depth) {
      const value = parseInt(element.current.parentElement.localName.replace('h', ''));
      if (!isNaN(value)) depth = value;
    }

    store.toc.add({
      key,
      level: depth,
      value: children,
      scrollTo: onClick
    });
    const observer = new IntersectionObserver(entries => store.toc.update(key, entries[0]));
    observer.observe(element.current);
    return () => {
      observer.disconnect();
      store.toc.remove(key);
    };
  }, []);
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('toc-item');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: element,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: classes,
      to: `#${key}`,
      onClick: onClick,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/toc/toc-item/toc-item.types.ts":
/*!*******************************************************!*\
  !*** ./src/components/toc/toc-item/toc-item.types.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/toc/toc/index.ts":
/*!*****************************************!*\
  !*** ./src/components/toc/toc/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc */ "./src/components/toc/toc/toc.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toc", function() { return _toc__WEBPACK_IMPORTED_MODULE_0__["Toc"]; });

/* harmony import */ var _toc_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc.types */ "./src/components/toc/toc/toc.types.ts");
/* harmony import */ var _toc_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toc_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Toc"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc/toc.tsx":
/*!****************************************!*\
  !*** ./src/components/toc/toc/toc.tsx ***!
  \****************************************/
/*! exports provided: Toc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toc", function() { return Toc; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\toc\\toc\\toc.tsx";





const Toc = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useStore"])();
  const items = store.toc.items;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('toc');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: !!items.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        mb: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
          color: "main-lighten-1",
          size: "caption",
          children: "CONTENTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "body",
        children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]({
            ['active']: item.active,
            [`level-${item.level || 0}`]: true
          }),
          onClick: () => item.scrollTo(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
            color: "main",
            size: "label",
            children: item.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, undefined)
        }, item.key, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/toc/toc/toc.types.ts":
/*!*********************************************!*\
  !*** ./src/components/toc/toc/toc.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/configs/constants.ts":
/*!**********************************!*\
  !*** ./src/configs/constants.ts ***!
  \**********************************/
/*! exports provided: PLATFORM_ABBREVIATION, PLATFORM_KEY, PLATFORM_NAME, PLATFORM_TAG_PREFIX, PLATFORM_EVENT_PREFIX, WEBCOMPONENT_REFERENCE, WEBCOMPONENT_COMPATIBILITY, PORT_ANGULAR_PACKAGE_NAME, PORT_ANGULAR_PACKAGE_LOADER, PORT_JAVASCRIPT_PACKAGE_NAME, PORT_JAVASCRIPT_PACKAGE_LOADER, PORT_JAVASCRIPT_PACKAGE_CDN, PORT_JAVASCRIPT_PACKAGE_CDN_LOADER, PORT_REACT_PACKAGE_NAME, PORT_REACT_PACKAGE_LOADER, PORT_VUE_PACKAGE_NAME, PORT_VUE_PACKAGE_LOADER, PORT_VUE_IGNORED_ELEMENTS, SOCIAL_FACEBOOK, SOCIAL_YOUTUBE, SOCIAL_INSTAGRAM, SOCIAL_TWITTER, SOCIAL_LINKEDIN, SOCIAL_GITHUB, SOCIAL_GITHUB_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ABBREVIATION", function() { return PLATFORM_ABBREVIATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_KEY", function() { return PLATFORM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_NAME", function() { return PLATFORM_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_TAG_PREFIX", function() { return PLATFORM_TAG_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_EVENT_PREFIX", function() { return PLATFORM_EVENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBCOMPONENT_REFERENCE", function() { return WEBCOMPONENT_REFERENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBCOMPONENT_COMPATIBILITY", function() { return WEBCOMPONENT_COMPATIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_ANGULAR_PACKAGE_NAME", function() { return PORT_ANGULAR_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_ANGULAR_PACKAGE_LOADER", function() { return PORT_ANGULAR_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_NAME", function() { return PORT_JAVASCRIPT_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_LOADER", function() { return PORT_JAVASCRIPT_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_CDN", function() { return PORT_JAVASCRIPT_PACKAGE_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_CDN_LOADER", function() { return PORT_JAVASCRIPT_PACKAGE_CDN_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_REACT_PACKAGE_NAME", function() { return PORT_REACT_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_REACT_PACKAGE_LOADER", function() { return PORT_REACT_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_PACKAGE_NAME", function() { return PORT_VUE_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_PACKAGE_LOADER", function() { return PORT_VUE_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_IGNORED_ELEMENTS", function() { return PORT_VUE_IGNORED_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_FACEBOOK", function() { return SOCIAL_FACEBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_YOUTUBE", function() { return SOCIAL_YOUTUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_INSTAGRAM", function() { return SOCIAL_INSTAGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_TWITTER", function() { return SOCIAL_TWITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LINKEDIN", function() { return SOCIAL_LINKEDIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_GITHUB", function() { return SOCIAL_GITHUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_GITHUB_COMPONENTS", function() { return SOCIAL_GITHUB_COMPONENTS; });
const PLATFORM_ABBREVIATION = 'HTML+';
const PLATFORM_KEY = 'htmlplus';
const PLATFORM_NAME = 'HTMLPLUS';
const PLATFORM_TAG_PREFIX = 'plus';
const PLATFORM_EVENT_PREFIX = 'Plus';
const WEBCOMPONENT_REFERENCE = 'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements';
const WEBCOMPONENT_COMPATIBILITY = 'https://custom-elements-everywhere.com';
const PORT_ANGULAR_PACKAGE_NAME = '@htmlplus/core';
const PORT_ANGULAR_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_JAVASCRIPT_PACKAGE_NAME = '@htmlplus/core';
const PORT_JAVASCRIPT_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_JAVASCRIPT_PACKAGE_CDN = 'https://cdn.jsdelivr.net/npm/@htmlplus/core/dist/htmlplus.js';
const PORT_JAVASCRIPT_PACKAGE_CDN_LOADER = 'https://cdn.jsdelivr.net/npm/@htmlplus/core/loader/index.es2017.js';
const PORT_REACT_PACKAGE_NAME = '@htmlplus/react';
const PORT_REACT_PACKAGE_LOADER = '@htmlplus/react/loader';
const PORT_VUE_PACKAGE_NAME = '@htmlplus/core';
const PORT_VUE_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_VUE_IGNORED_ELEMENTS = 'https://vuejs.org/v2/api/#ignoredElements';
const SOCIAL_FACEBOOK = 'TODO';
const SOCIAL_YOUTUBE = 'https://www.youtube.com/channel/UCsNkxDmLU7vK_L1jgSVWWCA';
const SOCIAL_INSTAGRAM = 'https://www.instagram.com/htmlplus.io';
const SOCIAL_TWITTER = 'https://www.twitter.com/htmlplusio';
const SOCIAL_LINKEDIN = 'https://www.linkedin.com/company/htmlplus';
const SOCIAL_GITHUB = 'https://github.com/htmlplus/core';
const SOCIAL_GITHUB_COMPONENTS = 'https://github.com/htmlplus/core/tree/master/packages/core/src/components';

/***/ }),

/***/ "./src/content/en lazy recursive ^\\.\\/.*\\/.*\\.md$":
/*!***************************************************************!*\
  !*** ./src/content/en lazy ^\.\/.*\/.*\.md$ namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./getting-started/browser-support.md": [
		"./src/content/en/getting-started/browser-support.md",
		0
	],
	"./getting-started/installation.angular.md": [
		"./src/content/en/getting-started/installation.angular.md",
		1
	],
	"./getting-started/installation.javascript.md": [
		"./src/content/en/getting-started/installation.javascript.md",
		2
	],
	"./getting-started/installation.react.md": [
		"./src/content/en/getting-started/installation.react.md",
		3
	],
	"./getting-started/installation.vue.md": [
		"./src/content/en/getting-started/installation.vue.md",
		4
	],
	"./introduction/vision.md": [
		"./src/content/en/introduction/vision.md",
		5
	],
	"./introduction/what-is-htmlplus.md": [
		"./src/content/en/introduction/what-is-htmlplus.md",
		6
	],
	"./introduction/why-htmlplus.md": [
		"./src/content/en/introduction/why-htmlplus.md",
		7
	],
	"./noname/accessibility.md": [
		"./src/content/en/noname/accessibility.md",
		8
	],
	"./noname/animations.md": [
		"./src/content/en/noname/animations.md",
		9
	],
	"./noname/bidirectionality.md": [
		"./src/content/en/noname/bidirectionality.md",
		10
	],
	"./noname/breakpoints.md": [
		"./src/content/en/noname/breakpoints.md",
		11
	],
	"./noname/cancelable-event.md": [
		"./src/content/en/noname/cancelable-event.md",
		12
	],
	"./noname/connector.md": [
		"./src/content/en/noname/connector.md",
		13
	],
	"./noname/contributing.md": [
		"./src/content/en/noname/contributing.md",
		14
	],
	"./noname/css-reset.md": [
		"./src/content/en/noname/css-reset.md",
		15
	],
	"./noname/frequently-asked-questions.md": [
		"./src/content/en/noname/frequently-asked-questions.md",
		16
	],
	"./noname/getting-started.md": [
		"./src/content/en/noname/getting-started.md",
		17
	],
	"./noname/global-config.md": [
		"./src/content/en/noname/global-config.md",
		18
	],
	"./noname/installation.angular.md": [
		"./src/content/en/noname/installation.angular.md",
		19
	],
	"./noname/installation.md": [
		"./src/content/en/noname/installation.md",
		20
	],
	"./noname/installation.react.md": [
		"./src/content/en/noname/installation.react.md",
		21
	],
	"./noname/license.md": [
		"./src/content/en/noname/license.md",
		22
	],
	"./noname/overview.md": [
		"./src/content/en/noname/overview.md",
		23
	],
	"./noname/polyfills.md": [
		"./src/content/en/noname/polyfills.md",
		24
	],
	"./noname/release-notes.md": [
		"./src/content/en/noname/release-notes.md",
		25
	],
	"./noname/roadmap.md": [
		"./src/content/en/noname/roadmap.md",
		26
	],
	"./noname/server-side-rendering.md": [
		"./src/content/en/noname/server-side-rendering.md",
		27
	],
	"./noname/sponsors-and-backers.md": [
		"./src/content/en/noname/sponsors-and-backers.md",
		28
	],
	"./noname/support.md": [
		"./src/content/en/noname/support.md",
		29
	],
	"./noname/team.md": [
		"./src/content/en/noname/team.md",
		30
	],
	"./noname/versions.md": [
		"./src/content/en/noname/versions.md",
		31
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/content/en lazy recursive ^\\.\\/.*\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/data/components.ts":
/*!********************************!*\
  !*** ./src/data/components.ts ***!
  \********************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @htmlplus/core/dist/docs.json */ "./node_modules/@htmlplus/core/dist/docs.json");
var _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @htmlplus/core/dist/docs.json */ "./node_modules/@htmlplus/core/dist/docs.json", 1);
 // @ts-ignore

const components = _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0__.filter(component => !component.development);

/***/ }),

/***/ "./src/data/frameworks.ts":
/*!********************************!*\
  !*** ./src/data/frameworks.ts ***!
  \********************************/
/*! exports provided: frameworks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameworks", function() { return frameworks; });
const frameworks = [{
  key: 'javascript',
  logo: 'javascript.png',
  title: 'JavaScript'
}, {
  key: 'react',
  logo: 'react.png',
  title: 'React'
}, {
  key: 'vue',
  logo: 'vue.png',
  title: 'Vue'
}, {
  key: 'angular',
  logo: 'angular.svg',
  title: 'Angular',
  disabled: true
}, {
  key: 'svelte',
  logo: 'svelte.svg',
  title: 'Svelte',
  disabled: true
}, {
  key: 'ember',
  logo: 'ember.png',
  title: 'Ember',
  disabled: true
}, {
  key: 'preact',
  logo: 'TODO',
  title: 'Preact',
  disabled: true
}];

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/*! exports provided: components, frameworks, sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/data/components.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["components"]; });

/* harmony import */ var _frameworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks */ "./src/data/frameworks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frameworks", function() { return _frameworks__WEBPACK_IMPORTED_MODULE_1__["frameworks"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/data/sidebar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["sidebar"]; });





/***/ }),

/***/ "./src/data/sidebar.ts":
/*!*****************************!*\
  !*** ./src/data/sidebar.ts ***!
  \*****************************/
/*! exports provided: sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/data/components.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");


const sidebar = [{
  title: 'Introduction',
  icon: 'introduction',
  items: [{
    title: `What’s ${_app_constants__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_NAME"]}?`,
    route: {
      to: 'ROUTE:INTRODUCTION:WHAT'
    }
  }, {
    title: `Why ${_app_constants__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_NAME"]}?`,
    route: {
      to: 'ROUTE:INTRODUCTION:WHY'
    }
  }, // {
  //     title: 'Long-term Support',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  {
    title: 'Vision',
    route: {
      to: 'ROUTE:INTRODUCTION:VISION'
    }
  } // {
  //     title: 'Roadmap',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Versions',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Release notes',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Licence',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  ]
}, {
  title: 'Getting started',
  icon: 'getting-started',
  items: [{
    title: 'Installation',
    route: {
      to: 'ROUTE:GETTINGSTARTED:INSTALLATION'
    }
  }, // {
  //     title: 'Frequently asked questions',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  {
    title: 'Browser support',
    route: {
      to: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT'
    }
  } // {
  //     title: 'Upgrade guide',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Contributing',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  ]
}, // {
//     title: 'Features',
//     icon: 'features',
//     items: [
//         {
//             title: 'Global config',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Display Breakpoint',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Framework Integrations',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Accessibility (a11y)',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Bidirectionality (LTR/RTL)',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'CSS Reset',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Server side rendering',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Cancelable event',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
// {
//     title: 'Animations',
//     icon: 'animations',
//     items: [
//         {
//             title: 'Animation Guideline',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Transition',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
{
  title: 'UI Containers',
  icon: 'components',
  items: _components__WEBPACK_IMPORTED_MODULE_0__["components"].filter(item => item.main).map(component => ({
    title: component.title,
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: component.key
      }
    }
  }))
} // {
//     title: 'About',
//     icon: 'htmlplus',
//     items: [
//         {
//             title: 'Meet the team',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Sponsors and backers',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
// TODO
// {
//     title: 'Framework Integrations',
//     items: [
//         {
//             title: 'Overview',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:OVERVIEW',
//             },
//         },
//         {
//             title: 'React',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:REACT',
//             },
//         },
//         {
//             title: 'Angular',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:ANGULAR',
//             },
//         },
//         {
//             title: 'Vue',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:VUE',
//             },
//         },
//         {
//             title: 'JavaScript',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:JAVASCRIPT',
//             },
//         },
//     ],
// },
];

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useRouter, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-router */ "./src/hooks/use-router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return _use_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]; });

/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-store */ "./src/hooks/use-store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _use_store__WEBPACK_IMPORTED_MODULE_1__["useStore"]; });




/***/ }),

/***/ "./src/hooks/use-router.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-router.ts ***!
  \*********************************/
/*! exports provided: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");


const useRouter = () => {
  const nextRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  nextRouter.isActive = (name, params) => {
    const path = _app_services__WEBPACK_IMPORTED_MODULE_1__["router"].path(name, params);
    if (!path) return;
    return nextRouter.asPath.startsWith(path);
  };

  return nextRouter;
};

/***/ }),

/***/ "./src/hooks/use-store.ts":
/*!********************************!*\
  !*** ./src/hooks/use-store.ts ***!
  \********************************/
/*! exports provided: useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store */ "./src/store/index.ts");


const useStore = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_store__WEBPACK_IMPORTED_MODULE_1__["StoreContext"]);

/***/ }),

/***/ "./src/pages/[sections]/[file].tsx":
/*!*****************************************!*\
  !*** ./src/pages/[sections]/[file].tsx ***!
  \*****************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glob */ "glob");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\pages\\[sections]\\[file].tsx";





const All = props => {
  const {
    content,
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    layout: "default",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (All);
const getStaticProps = async ({
  params
}) => {
  const file = await __webpack_require__("./src/content/en lazy recursive ^\\.\\/.*\\/.*\\.md$")(`./${params.sections}/${params.file}.md`);
  const {
    content,
    data
  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(file.default) || {};
  return {
    props: {
      content,
      data
    }
  };
};
const getStaticPaths = async () => {
  const base = './src/content/en';
  const paths = glob__WEBPACK_IMPORTED_MODULE_2__["sync"](`${base}/**/*.md`).map(file => file.replace(base, '').replace('.md', ''));
  return {
    paths,
    fallback: false
  };
};

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: Router, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/services/router/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["router"]; });



/***/ }),

/***/ "./src/services/router/index.ts":
/*!**************************************!*\
  !*** ./src/services/router/index.ts ***!
  \**************************************/
/*! exports provided: Router, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/services/router/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/services/router/routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "router", function() { return _routes__WEBPACK_IMPORTED_MODULE_1__["router"]; });




/***/ }),

/***/ "./src/services/router/router.ts":
/*!***************************************!*\
  !*** ./src/services/router/router.ts ***!
  \***************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Router {
  constructor() {
    _defineProperty(this, "routes", []);
  }

  all() {
    return this.routes;
  }

  find(name) {
    return this.routes.find(item => item.name === name);
  }

  path(name, params) {
    const route = this.find(name);
    if (!route) return;
    let path = route.path;
    Object.keys(params || {}).map(key => {
      path = path.replace(`[${key}]`, params[key]);
    });
    return path;
  }

  register(route) {
    this.routes.push(route);
    return route;
  }

}

/***/ }),

/***/ "./src/services/router/routes.ts":
/*!***************************************!*\
  !*** ./src/services/router/routes.ts ***!
  \***************************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/services/router/router.ts");


const router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"]();
router.register({
  name: 'ROUTE:HOME',
  path: '/'
}); // INTRODUCTION

router.register({
  name: 'ROUTE:INTRODUCTION:VISION',
  path: '/introduction/vision'
});
router.register({
  name: 'ROUTE:INTRODUCTION:WHAT',
  path: `/introduction/what-is-${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_KEY"]}`
});
router.register({
  name: 'ROUTE:INTRODUCTION:WHY',
  path: `/introduction/why-${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_KEY"]}`
}); // GETTINGSTARTED

router.register({
  name: 'ROUTE:GETTINGSTARTED:INSTALLATION',
  path: '/getting-started/installation'
});
router.register({
  name: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT',
  path: '/getting-started/browser-support'
}); // COMPONENT

router.register({
  name: 'ROUTE:COMPONENT:DETAILS',
  path: '/component/[key]'
}); // router.register({
//     name: 'ROUTE:FRAMEWORK:ANGULAR',
//     path: '/framework/angular'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:JAVASCRIPT',
//     path: '/framework/javascript'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:OVERVIEW',
//     path: '/framework/overview'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:REACT',
//     path: '/framework/react'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:VUE',
//     path: '/framework/vue'
// });

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["Store"]; });

/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.context */ "./src/store/store.context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return _store_context__WEBPACK_IMPORTED_MODULE_1__["StoreContext"]; });

/* harmony import */ var _store_ui_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.ui.types */ "./src/store/store.ui.types.ts");
/* harmony import */ var _store_ui_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_store_ui_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _store_ui_types__WEBPACK_IMPORTED_MODULE_2__) if(["default","Store","StoreContext"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _store_ui_types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/store/store.context.ts":
/*!************************************!*\
  !*** ./src/store/store.context.ts ***!
  \************************************/
/*! exports provided: StoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/***/ }),

/***/ "./src/store/store.toc.ts":
/*!********************************!*\
  !*** ./src/store/store.toc.ts ***!
  \********************************/
/*! exports provided: TocStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocStore", function() { return TocStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TocStore {
  constructor(root) {
    this.root = root;

    _defineProperty(this, "items", []);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this, {
      root: false
    });
  }

  add(item) {
    this.items.push(item);
    if (item.key && `#${item.key}` !== window.location.hash) return;
    setTimeout(() => {
      item.active = true;
      item.scrollTo();
    }, 1000);
  }

  remove(key) {
    this.items = this.items.filter(item => item.key !== key);
  }

  update(key, entry) {
    const active = this.items.find(item => {
      var _item$entry;

      return (_item$entry = item.entry) === null || _item$entry === void 0 ? void 0 : _item$entry.isIntersecting;
    });
    const item = this.items.find(item => item.key === key);
    item.entry = entry;
    const entries = this.items.filter(item => {
      var _item$entry2;

      return (_item$entry2 = item.entry) === null || _item$entry2 === void 0 ? void 0 : _item$entry2.isIntersecting;
    });
    let next;

    if (entries.length) {
      next = entries[0];
    } else {
      if (!active || !active.entry) return;
      const top = active.entry.target.getBoundingClientRect().top;
      const toDown = top < 0;
      const index = this.items.findIndex(item => item.key === active.key);
      next = this.items[toDown ? index : index - 1];
    }

    if (!next) return;
    this.items.map(item => item.active = item.key === next.key);
  }

}

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_toc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.toc */ "./src/store/store.toc.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.ui */ "./src/store/store.ui.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Store {
  constructor() {
    _defineProperty(this, "toc", void 0);

    _defineProperty(this, "ui", void 0);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this);
    this.toc = new _store_toc__WEBPACK_IMPORTED_MODULE_1__["TocStore"](this);
    this.ui = new _store_ui__WEBPACK_IMPORTED_MODULE_2__["UiStore"](this);
  }

}

/***/ }),

/***/ "./src/store/store.ui.ts":
/*!*******************************!*\
  !*** ./src/store/store.ui.ts ***!
  \*******************************/
/*! exports provided: UiStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiStore", function() { return UiStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UiStore {
  constructor(root) {
    this.root = root;

    _defineProperty(this, "framework", 'react');

    _defineProperty(this, "layout", void 0);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this, {
      root: false
    }); // TODO

    this.setFramework(nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(null).framework || 'react');
  }

  setFramework(value) {
    this.framework = value; // TODO

    nookies__WEBPACK_IMPORTED_MODULE_1___default.a.set(null, 'framework', value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });
  }

  setLayout(value) {
    this.layout = value;
  }

}

/***/ }),

/***/ "./src/store/store.ui.types.ts":
/*!*************************************!*\
  !*** ./src/store/store.ui.types.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/classes.ts":
/*!******************************!*\
  !*** ./src/utils/classes.ts ***!
  \******************************/
/*! exports provided: classes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const classes = (...input) => {
  const names = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    const type = Object.prototype.toString.call(element);

    switch (type) {
      case '[object Array]':
        names.push(classes(element));
        break;

      case '[object Object]':
        const keys = Object.keys(element);

        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          const value = element[key];
          key = _app_utils__WEBPACK_IMPORTED_MODULE_0__["toKebabCase"](key);
          const type = Object.prototype.toString.call(value);

          switch (type) {
            case '[object Boolean]':
              value && names.push(`${key}`);
              break;

            case '[object Number]':
              names.push(`${key}-${value}`);
              break;

            case '[object String]':
              switch (value) {
                case '':
                case 'true':
                  names.push(`${key}`);
                  break;

                case 'false':
                  break;

                default:
                  names.push(`${key}-${value}`);
                  break;
              }

              break;
          }
        }

        break;

      case '[object String]':
        names.push(element);
        break;
    }
  }

  return names.join(' ');
};

/***/ }),

/***/ "./src/utils/copy-to-clipboard.ts":
/*!****************************************!*\
  !*** ./src/utils/copy-to-clipboard.ts ***!
  \****************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
const copyToClipboard = text => {
  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  input.remove();
};

/***/ }),

/***/ "./src/utils/get-component-name.ts":
/*!*****************************************!*\
  !*** ./src/utils/get-component-name.ts ***!
  \*****************************************/
/*! exports provided: getComponentName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentName", function() { return getComponentName; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const getComponentName = (framework, input) => {
  if (framework !== 'react') return input;
  return _app_utils__WEBPACK_IMPORTED_MODULE_0__["toPascalCase"](input);
};

/***/ }),

/***/ "./src/utils/get-event-name.ts":
/*!*************************************!*\
  !*** ./src/utils/get-event-name.ts ***!
  \*************************************/
/*! exports provided: getEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventName", function() { return getEventName; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");


const getEventName = (framework, input) => {
  if (framework !== 'react') return input;
  return `on${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_EVENT_PREFIX"]}${_app_utils__WEBPACK_IMPORTED_MODULE_1__["toCapitalCase"](input)}`;
};

/***/ }),

/***/ "./src/utils/get-property-name.ts":
/*!****************************************!*\
  !*** ./src/utils/get-property-name.ts ***!
  \****************************************/
/*! exports provided: getPropertyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return getPropertyName; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const getPropertyName = (framework, input) => {
  if (framework !== 'react') return input;
  return _app_utils__WEBPACK_IMPORTED_MODULE_0__["toCamelCase"](input);
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: classes, copyToClipboard, getComponentName, getEventName, getPropertyName, toCamelCase, toCapitalCase, toKebabCase, toPascalCase, toUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/utils/classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["classes"]; });

/* harmony import */ var _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-to-clipboard */ "./src/utils/copy-to-clipboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"]; });

/* harmony import */ var _get_component_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-component-name */ "./src/utils/get-component-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponentName", function() { return _get_component_name__WEBPACK_IMPORTED_MODULE_2__["getComponentName"]; });

/* harmony import */ var _get_event_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-event-name */ "./src/utils/get-event-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventName", function() { return _get_event_name__WEBPACK_IMPORTED_MODULE_3__["getEventName"]; });

/* harmony import */ var _get_property_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-property-name */ "./src/utils/get-property-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _get_property_name__WEBPACK_IMPORTED_MODULE_4__["getPropertyName"]; });

/* harmony import */ var _to_camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to-camel-case */ "./src/utils/to-camel-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return _to_camel_case__WEBPACK_IMPORTED_MODULE_5__["toCamelCase"]; });

/* harmony import */ var _to_capital_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-capital-case */ "./src/utils/to-capital-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCapitalCase", function() { return _to_capital_case__WEBPACK_IMPORTED_MODULE_6__["toCapitalCase"]; });

/* harmony import */ var _to_kebab_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-kebab-case */ "./src/utils/to-kebab-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return _to_kebab_case__WEBPACK_IMPORTED_MODULE_7__["toKebabCase"]; });

/* harmony import */ var _to_pascal_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to-pascal-case */ "./src/utils/to-pascal-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPascalCase", function() { return _to_pascal_case__WEBPACK_IMPORTED_MODULE_8__["toPascalCase"]; });

/* harmony import */ var _to_unit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./to-unit */ "./src/utils/to-unit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUnit", function() { return _to_unit__WEBPACK_IMPORTED_MODULE_9__["toUnit"]; });












/***/ }),

/***/ "./src/utils/to-camel-case.ts":
/*!************************************!*\
  !*** ./src/utils/to-camel-case.ts ***!
  \************************************/
/*! exports provided: toCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
// TODO
const toCamelCase = input => {
  if (!input) return input;
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
};

/***/ }),

/***/ "./src/utils/to-capital-case.ts":
/*!**************************************!*\
  !*** ./src/utils/to-capital-case.ts ***!
  \**************************************/
/*! exports provided: toCapitalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCapitalCase", function() { return toCapitalCase; });
const toCapitalCase = input => {
  if (!input) return input;
  return input.replace(/^\w/, char => char.toUpperCase());
};

/***/ }),

/***/ "./src/utils/to-kebab-case.ts":
/*!************************************!*\
  !*** ./src/utils/to-kebab-case.ts ***!
  \************************************/
/*! exports provided: toKebabCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return toKebabCase; });
const toKebabCase = input => {
  return input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(char => char.toLowerCase()).join('-');
};

/***/ }),

/***/ "./src/utils/to-pascal-case.ts":
/*!*************************************!*\
  !*** ./src/utils/to-pascal-case.ts ***!
  \*************************************/
/*! exports provided: toPascalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPascalCase", function() { return toPascalCase; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const toPascalCase = input => {
  if (!input) return input;
  return input.split('-').map(word => _app_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalCase"](word)).join('');
};

/***/ }),

/***/ "./src/utils/to-unit.ts":
/*!******************************!*\
  !*** ./src/utils/to-unit.ts ***!
  \******************************/
/*! exports provided: toUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnit", function() { return toUnit; });
const toUnit = input => {
  if (input == null || input === '') return undefined;
  if (isNaN(+input)) return String(input);
  return `${Number(input)}px`;
};

/***/ }),

/***/ "@htmlplus/react":
/*!**********************************!*\
  !*** external "@htmlplus/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@htmlplus/react");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-jsx":
/*!***********************************************!*\
  !*** external "prismjs/components/prism-jsx" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGVydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUudHlwZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4YW1wbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9mcmFtZXdvcmstc2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFya3VwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcmt1cC9tYXJrdXAucmVuZGVyZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvbWFya3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UvcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC90ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy1pdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvYy90b2MtaXRlbS90b2MtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvdG9jL3RvYy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2VuIGxhenkgXlxcLlxcLy4qXFwvLipcXC5tZCQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ZyYW1ld29ya3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZS1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZS1zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3NlY3Rpb25zXS9bZmlsZV0udHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudG9jLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudWkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcHktdG8tY2xpcGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXQtY29tcG9uZW50LW5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldC1ldmVudC1uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXQtcHJvcGVydHktbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLWNhbWVsLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLWNhcGl0YWwtY2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG8ta2ViYWItY2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG8tcGFzY2FsLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLXVuaXQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGh0bWxwbHVzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ2xvYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3QtbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaXNtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwiZnNQYXRobmFtZSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBbGVydCIsInR5cGUiLCJjbGFzc2VzIiwiVXRpbHMiLCJCYW5uZXIiLCJCb3giLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwic3R5bGUiLCJCdXR0b24iLCJjb2xvciIsImljb24iLCJvdXRsaW5lZCIsInNpemUiLCJDb2RlIiwiY29weSIsImxhbmd1YWdlIiwiZWxlbWVudCIsInVzZVJlZiIsInRvU3RyaW5nIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGxVbmRlciIsImN1cnJlbnQiLCJjbGFzc2VzQ29kZSIsIkV4YW1wbGUiLCJjb2RlIiwibGlua3MiLCJ1c2VNZW1vIiwiY29kZXNhbmRib3giLCJnaXRodWIiLCJ0aXRsZSIsInJ1bGVzIiwiY2xhc3NOYW1lIiwiY2xhc3NMZW4iLCJsZW5ndGgiLCJjaGFyIiwibmV4dENoYXIiLCJpc0F0IiwiaXNJbiIsInNsaWNlIiwiaW5kZXhPZiIsInRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJFeGFtcGxlTGFuZ3VhZ2UiLCJGb290ZXIiLCJpdGVtcyIsIkNvbnN0YW50cyIsImxhYmVsIiwiZ3JvdXAiLCJPcHRpb24iLCJTaW5nbGVWYWx1ZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImxvZ28iLCJGcmFtZXdvcmtTZWxlY3RvciIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VSb3V0ZXIiLCJmcmFtZXdvcmtzIiwiZnJhbWV3b3JrIiwiY2hhbmdlIiwidWkiLCJzZXRGcmFtZXdvcmsiLCJmaW5kIiwiSGVhZGVyIiwibWVudSIsInRvIiwiSWNvbiIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJBbmNob3IiLCJmb3J3YXJkUmVmIiwiYXR0cmlidXRlcyIsInJlbCIsInJlbmRlcmVycyIsImJsb2NrcXVvdGUiLCJub2RlIiwidHJpbSIsInRva2VuIiwibWF0Y2giLCJoZWFkaW5nIiwibGV2ZWwiLCJwYXJhZ3JhcGgiLCJ0b2tlbml6ZXIiLCJ0b2tlbnMiLCJyYXciLCJzZWN0aW9ucyIsInNwbGl0IiwiTWFya3VwIiwiaWdub3JlUGFyYWdyYXBoIiwiUGFnZSIsImxheW91dCIsInNldExheW91dCIsIlBhcmFtZXRlcnMiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdCIsImhhc1R5cGUiLCJoYXNWYWx1ZSIsImRlc2NyaXB0aW9uIiwiU2VjdGlvbiIsIlNpZGViYXIiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJhY3RpdmVzIiwicnVuIiwicGFyZW50IiwiaXNBcnJheSIsImlzQWN0aXZlIiwic29tZSIsImFjdGl2ZSIsImlzRXhwYW5kIiwidG9nZ2xlIiwicGFyZW50cyIsImZpbmRJbmRleCIsImlzQ29sbGFwc2VkIiwiZm9udFdlaWdodCIsIlNvY2lhbHMiLCJUZXh0IiwiYWxpZ24iLCJkZW5zZSIsImlubGluZSIsInRydW5jYXRlIiwid2VpZ2h0IiwiVGFnIiwidW5kZWZpbmVkIiwiVG9jSXRlbSIsInNjcm9sbFRvIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImRlcHRoIiwicGFyZW50RWxlbWVudCIsImxvY2FsTmFtZSIsInRvYyIsImFkZCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidXBkYXRlIiwiZGlzY29ubmVjdCIsInJlbW92ZSIsIlRvYyIsIlBMQVRGT1JNX0FCQlJFVklBVElPTiIsIlBMQVRGT1JNX0tFWSIsIlBMQVRGT1JNX05BTUUiLCJQTEFURk9STV9UQUdfUFJFRklYIiwiUExBVEZPUk1fRVZFTlRfUFJFRklYIiwiV0VCQ09NUE9ORU5UX1JFRkVSRU5DRSIsIldFQkNPTVBPTkVOVF9DT01QQVRJQklMSVRZIiwiUE9SVF9BTkdVTEFSX1BBQ0tBR0VfTkFNRSIsIlBPUlRfQU5HVUxBUl9QQUNLQUdFX0xPQURFUiIsIlBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX05BTUUiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9MT0FERVIiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE4iLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE5fTE9BREVSIiwiUE9SVF9SRUFDVF9QQUNLQUdFX05BTUUiLCJQT1JUX1JFQUNUX1BBQ0tBR0VfTE9BREVSIiwiUE9SVF9WVUVfUEFDS0FHRV9OQU1FIiwiUE9SVF9WVUVfUEFDS0FHRV9MT0FERVIiLCJQT1JUX1ZVRV9JR05PUkVEX0VMRU1FTlRTIiwiU09DSUFMX0ZBQ0VCT09LIiwiU09DSUFMX1lPVVRVQkUiLCJTT0NJQUxfSU5TVEFHUkFNIiwiU09DSUFMX1RXSVRURVIiLCJTT0NJQUxfTElOS0VESU4iLCJTT0NJQUxfR0lUSFVCIiwiU09DSUFMX0dJVEhVQl9DT01QT05FTlRTIiwiam9zbiIsImRldmVsb3BtZW50Iiwic2lkZWJhciIsIm1haW4iLCJuZXh0Um91dGVyIiwidXNlUm91dGVyTmV4dCIsInN0YXJ0c1dpdGgiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0IiwiQWxsIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWxlIiwibWF0dGVyIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImdsb2IiLCJmYWxsYmFjayIsInJlZ2lzdGVyIiwiY3JlYXRlQ29udGV4dCIsIlRvY1N0b3JlIiwicm9vdCIsIm1ha2VBdXRvT2JzZXJ2YWJsZSIsImlzSW50ZXJzZWN0aW5nIiwibmV4dCIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvRG93biIsImluZGV4IiwiU3RvcmUiLCJVaVN0b3JlIiwibm9va2llcyIsIm1heEFnZSIsIm5hbWVzIiwicHJvdG90eXBlIiwiY2FsbCIsImpvaW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJleGVjQ29tbWFuZCIsImdldENvbXBvbmVudE5hbWUiLCJnZXRFdmVudE5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJ0b0NhbWVsQ2FzZSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwidG9DYXBpdGFsQ2FzZSIsInRvS2ViYWJDYXNlIiwidG9QYXNjYWxDYXNlIiwidG9Vbml0IiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW3NlY3Rpb25zXS9bZmlsZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9bc2VjdGlvbnNdL1tmaWxlXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvW3NlY3Rpb25zXS9bZmlsZV0udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKFxuICAgICAgICAgIGFkZExvY2FsZShkZWxCYXNlUGF0aChwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSksIHRoaXMubG9jYWxlKVxuICAgICAgICApLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHJlc29sdmVkQXMpID8gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICAgICApLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShyZXNvbHZlZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8IChvcHRpb25zLnNjcm9sbCA/IHsgeDogMCwgeTogMCB9IDogbnVsbClcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcygnOicpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmBcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCAnZycpLCBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsICdnJyksXG4gICAgICAgICAgYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWBcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuICB2YWx1ZSA9IHZhbHVlXG4gICAgLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywgJ1xcXFwkMScpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csICcrJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csICc6JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csICc/JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCAnKicpXG5cbiAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gIC8vIGNvcnJlY3RseVxuICByZXR1cm4gcGF0aFRvUmVnZXhwXG4gICAgLmNvbXBpbGUoYC8ke3ZhbHVlfWAsIHsgdmFsaWRhdGU6IGZhbHNlIH0pKHBhcmFtcylcbiAgICAuc3Vic3RyKDEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhblxuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGNvbnN0IGhhZExvY2FsZSA9IHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBjb21waWxlTm9uUGF0aCh2YWx1ZSwgcGFyYW1zKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGxldCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG4gIGlmIChoYWRMb2NhbGUpIHtcbiAgICBwYXJhbUtleXMgPSBwYXJhbUtleXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAnbmV4dEludGVybmFsTG9jYWxlJylcbiAgfVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSAocGFyc2VkRGVzdGluYXRpb24gYXMgYW55KS5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi8uLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXNQYXRoLCBsb2NhbGVzKS5wYXRobmFtZSkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBjb25zdCBmc1BhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpLFxuICAgICAgICAgIGxvY2FsZXNcbiAgICAgICAgKS5wYXRobmFtZVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGZzUGF0aG5hbWUpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEFsZXJ0UHJvcHMgfSBmcm9tICcuL2FsZXJ0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFsZXJ0OiBSZWFjdC5GQzxBbGVydFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHR5cGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdhbGVydCcsXG4gICAgeyB0eXBlIH1cbiAgKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hbGVydCc7XG5leHBvcnQgKiBmcm9tICcuL2FsZXJ0LnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQmFubmVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdiYW5uZXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7LyogPFBsdXNHcmlkIGd1dHRlcj1cIm1kXCI+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBCZXRpc2FcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiZ3Jvd1wiIC8+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFRleHQgc2l6ZT1cImxhYmVsXCI+XG4gICAgICAgICAgICBTZWUgaG93IHtDb25zdGFudHMuUExBVEZPUk1fTkFNRX0gZml0cyBpbnRvIHRoZSBlbnRpcmUgQmV0aXNhIEVjb3N5c3RlbSAtJmd0O1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0gaGlkZS14cz5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHxcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgQkxBQ0sgTElWRVMgTUFUVEVSXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgIDwvUGx1c0dyaWQ+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYmFubmVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEJveFByb3BzIH0gZnJvbSAnLi9ib3gudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQm94OiBSZWFjdC5GQzxCb3hQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBtaW5XaWR0aCwgbWF4V2lkdGgsIC4uLmFsbCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2JveCcsXG4gICAgYWxsXG4gICk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWluV2lkdGg6IFV0aWxzLnRvVW5pdChtaW5XaWR0aCksXG4gICAgbWF4V2lkdGg6IFV0aWxzLnRvVW5pdChtYXhXaWR0aCksXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2JveCc7XG5leHBvcnQgKiBmcm9tICcuL2JveC50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2J1dHRvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNvbG9yLCBkaXNhYmxlZCwgaWNvbiwgb3V0bGluZWQsIHNpemUgPSAnbWQnLCB0ZXh0LCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnYnV0dG9uJyxcbiAgICB7IGNvbG9yLCBkaXNhYmxlZCwgaWNvbiwgb3V0bGluZWQsIHNpemUsIHRleHQgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXN9IGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9idXR0b24udHlwZXMnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4JztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IENvZGVQcm9wcyB9IGZyb20gJy4vY29kZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDb2RlOiBSZWFjdC5GQzxDb2RlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgY29weSA9IHRydWUsIGxhbmd1YWdlIH0gPSBwcm9wcztcblxuICBjb25zdCBlbGVtZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoY2hpbGRyZW4gfHwgJycpLnRvU3RyaW5nKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGVsZW1lbnQuY3VycmVudCkpO1xuXG4gIGNvbnN0IGNsYXNzZXNDb2RlID0gYCR7cHJvY2Vzcy5icm93c2VyID8gJyAnIDogJyd9bGFuZ3VhZ2UtJHtsYW5ndWFnZX1gO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdjb2RlJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2VsZW1lbnR9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7Y29weSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPEJ1dHRvbiBpY29uIG9uQ2xpY2s9eygpID0+IFV0aWxzLmNvcHlUb0NsaXBib2FyZChjb250ZW50KX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiY29weVwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxwcmUgY2xhc3NOYW1lPXtjbGFzc2VzQ29kZX0+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT17Y2xhc3Nlc0NvZGV9PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2RlLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvZGUsIEljb24sIExpbmssIFBsdXNHcmlkLCBQbHVzR3JpZEl0ZW0sIFBsdXNUYWJzLCBQbHVzVGFic0JhciwgUGx1c1RhYnNUYWIsIFBsdXNUYWJzUGFuZWxzLCBQbHVzVGFic1BhbmVsIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgRXhhbXBsZVByb3BzLCBFeGFtcGxlTGFuZ3VhZ2UgfSBmcm9tICcuL2V4YW1wbGUudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZTogUmVhY3QuRkM8RXhhbXBsZVByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNvZGUgPSB2YWx1ZS5jb2RlIHx8IHt9O1xuXG4gIGNvbnN0IGxpbmtzID0gdXNlTWVtbygoKSA9PiB7XG5cbiAgICByZXR1cm4gKGNvZGUubGlua3MgfHwgW10pXG4gICAgICAubWFwKChsaW5rKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgIGNvZGVzYW5kYm94OiAnRWRpdCBpbiBDb2RlU2FuZGJveCcsXG4gICAgICAgICAgZ2l0aHViOiAnVmlldyBvbiBHaXRodWInLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5saW5rLFxuICAgICAgICAgIHRpdGxlOiBtYXBbbGluay5rZXldLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW2NvZGUubGlua3NdKTtcblxuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4ge1xuXG4gICAgICBpZiAoIWNvZGUuc3R5bGUpIHJldHVybjtcblxuICAgICAgbGV0IHJ1bGVzID0gY29kZS5zdHlsZTtcblxuICAgICAgbGV0IGNsYXNzTmFtZSA9IGAuZXgtJHt2YWx1ZS5rZXl9YDtcblxuICAgICAgdHJ5IHsgdmFyIGNsYXNzTGVuID0gY2xhc3NOYW1lLmxlbmd0aCwgY2hhciwgbmV4dENoYXIsIGlzQXQsIGlzSW47IGNsYXNzTmFtZSArPSAnICc7IHJ1bGVzID0gcnVsZXMucmVwbGFjZSgvXFwvXFwqKD86KD8hXFwqXFwvKVtcXHNcXFNdKSpcXCpcXC98W1xcclxcblxcdF0rL2csICcnKTsgcnVsZXMgPSBydWxlcy5yZXBsYWNlKC99KFxccyopQC9nLCAnfUAnKTsgcnVsZXMgPSBydWxlcy5yZXBsYWNlKC99KFxccyopfS9nLCAnfX0nKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGggLSAyOyBpKyspIHsgY2hhciA9IHJ1bGVzW2ldOyBuZXh0Q2hhciA9IHJ1bGVzW2kgKyAxXTsgaWYgKGNoYXIgPT09ICdAJykgaXNBdCA9IHRydWU7IGlmICghaXNBdCAmJiBjaGFyID09PSAneycpIGlzSW4gPSB0cnVlOyBpZiAoaXNJbiAmJiBjaGFyID09PSAnfScpIGlzSW4gPSBmYWxzZTsgaWYgKCFpc0luICYmIG5leHRDaGFyICE9PSAnQCcgJiYgbmV4dENoYXIgIT09ICd9JyAmJiAoY2hhciA9PT0gJ30nIHx8IGNoYXIgPT09ICcsJyB8fCAoKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnOycpICYmIGlzQXQpKSkgeyBydWxlcyA9IHJ1bGVzLnNsaWNlKDAsIGkgKyAxKSArIGNsYXNzTmFtZSArIHJ1bGVzLnNsaWNlKGkgKyAxKTsgaSArPSBjbGFzc0xlbjsgaXNBdCA9IGZhbHNlOyB9IH07IGlmIChydWxlcy5pbmRleE9mKGNsYXNzTmFtZSkgIT09IDAgJiYgcnVsZXMuaW5kZXhPZignQCcpICE9PSAwKSBydWxlcyA9IGNsYXNzTmFtZSArIHJ1bGVzOyByZXR1cm4gcnVsZXM7IH0gY2F0Y2ggeyB9XG4gICAgfSxcbiAgICBbdmFsdWUua2V5LCBjb2RlLnN0eWxlXVxuICApO1xuXG4gIGNvbnN0IHRhYnMgPSB1c2VNZW1vKCgpID0+IHtcblxuICAgIGNvbnN0IHRhYnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGNvZGUpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gJ2xpbmtzJylcbiAgICAgIC5tYXAoKGtleSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhYjogYW55ID0ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB0aXRsZTogVXRpbHMudG9DYXBpdGFsQ2FzZShrZXkpLFxuICAgICAgICAgIGRpc2FibGVkOiAhY29kZVtrZXldXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByZXZpZXcnKSB7XG5cbiAgICAgICAgICB0YWIuY29udGVudCA9ICgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJldmlldy13cmFwcGVyIGV4LSR7dmFsdWUua2V5fWB9PlxuICAgICAgICAgICAgICB7Y29kZVtrZXldKCl9XG4gICAgICAgICAgICAgIHtzdHlsZSAmJiA8c3R5bGU+e3N0eWxlfTwvc3R5bGU+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBFeGFtcGxlTGFuZ3VhZ2Vba2V5IGFzIGtleW9mIHR5cGVvZiBFeGFtcGxlTGFuZ3VhZ2VdO1xuXG4gICAgICAgICAgdGFiLmNvbnRlbnQgPSAoKSA9PiA8Q29kZSBsYW5ndWFnZT17bGFuZ3VhZ2V9Pntjb2RlW2tleV19PC9Db2RlPlxuICAgICAgICB9XG5cbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9KTtcblxuICAgIHJldHVybiB0YWJzO1xuICB9LCBbY29kZV0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdleGFtcGxlJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPFBsdXNUYWJzIHZhbHVlPVwicHJldmlld1wiPlxuICAgICAgICA8UGx1c0dyaWQgY2xhc3NOYW1lPVwidG9vbGJhclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiYmV0d2VlblwiIGd1dHRlclg9XCJzbVwiPlxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCJncm93XCI+XG4gICAgICAgICAgICA8UGx1c1RhYnNCYXI+XG4gICAgICAgICAgICAgIHt0YWJzLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBsdXNUYWJzVGFiIGtleT17aXRlbS5rZXl9IGRpc2FibGVkPXtpdGVtLmRpc2FibGVkfSB2YWx1ZT17aXRlbS5rZXl9PlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9QbHVzVGFic1RhYj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1BsdXNUYWJzQmFyPlxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbms6IGFueSkgPT4gKFxuICAgICAgICAgICAgPFBsdXNHcmlkSXRlbSBrZXk9e2xpbmsua2V5fT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz17bGluay52YWx1ZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImdpdGh1YlwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BsdXNHcmlkPlxuICAgICAgICA8UGx1c1RhYnNQYW5lbHMgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIHt0YWJzLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgICA8UGx1c1RhYnNQYW5lbCBrZXk9e2l0ZW0ua2V5fSB2YWx1ZT17aXRlbS5rZXl9PlxuICAgICAgICAgICAgICB7aXRlbS5jb250ZW50ICYmIDxpdGVtLmNvbnRlbnQgLz59XG4gICAgICAgICAgICA8L1BsdXNUYWJzUGFuZWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUGx1c1RhYnNQYW5lbHM+XG4gICAgICA8L1BsdXNUYWJzPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgRXhhbXBsZVByb3BzIHtcbiAgICB2YWx1ZTogYW55XG59XG5cbmV4cG9ydCBlbnVtIEV4YW1wbGVMYW5ndWFnZSB7XG4gICAgc3R5bGUgPSAnY3NzJyxcbiAgICB0ZW1wbGF0ZSA9ICdodG1sJyxcbiAgICBzY3JpcHQgPSAnanMnXG59IiwiZXhwb3J0ICogZnJvbSAnLi9leGFtcGxlJztcbmV4cG9ydCAqIGZyb20gJy4vZXhhbXBsZS50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgUGx1c0dyaWQsIFBsdXNHcmlkSXRlbSwgVGV4dCwgU29jaWFscywgTGluayB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IENvbnN0YW50cy5QTEFURk9STV9BQkJSRVZJQVRJT04sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUZWFtJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnSm9icycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29tbXVuaXR5JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0dpdGh1YicsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1N0YWNrIE92ZXJmbG93JyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQmxvZycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUmVzb3VyY2VzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1N1cHBvcnQnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdSZXNvdXJjZXMnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdOZXdzbGV0dGVyJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDb250YWN0JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NvbW1vbiBRdWVzdGlvbnMnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdSZXBvcnQgYSBidWcnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdSZXF1ZXN0IGEgY29tcG9uZW50JyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdmb290ZXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8Qm94IGhpZGRlbiBtYj17MTZ9IG10PXs0fT5cbiAgICAgICAgPFBsdXNHcmlkIGFsaWduSXRlbXM9XCJzdGFydFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7aXRlbXMubWFwKChncm91cCkgPT4gKFxuICAgICAgICAgICAgPFBsdXNHcmlkSXRlbSBrZXk9e2dyb3VwLnRpdGxlfSB4cz1cIjEyXCIgc209XCI2XCIgbWQ9XCIzXCIgbGc9XCIyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IHdlaWdodD1cInNlbWktYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtncm91cC50aXRsZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2dyb3VwLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtWydwYXRoJ119PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUGx1c0dyaWQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWI9ezEyfSBtdD17MTJ9PlxuICAgICAgICA8U29jaWFscyAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIHNpemU9XCJsYWJlbFwiPlxuICAgICAgICAmY29weTsgMjAyMCB7Q29uc3RhbnRzLlBMQVRGT1JNX05BTUV9LiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZS5cbiAgICAgIDwvVGV4dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2Zvb3Rlcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IHsgQm94LCBQbHVzR3JpZCwgUGx1c0dyaWRJdGVtLCBUZXh0IH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCB7IGZyYW1ld29ya3MgfSBmcm9tICdAYXBwL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAYXBwL2hvb2tzJztcblxuY29uc3QgT3B0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBPcHRpb24gfSA9IGNvbXBvbmVudHM7XG5cbiAgcmV0dXJuIChcbiAgICA8T3B0aW9uIHsuLi5wcm9wc30+XG4gICAgICA8U2luZ2xlVmFsdWUgey4uLnByb3BzfSAvPlxuICAgIDwvT3B0aW9uPlxuICApXG59XG5cbmNvbnN0IFNpbmdsZVZhbHVlID0gKHByb3BzKSA9PiAoXG4gIDxQbHVzR3JpZCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ3V0dGVyWD1cInNtXCI+XG4gICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxLjVyZW0nLCBoZWlnaHQ6ICcxLjVyZW0nLCBvYmplY3RGaXQ6ICdjb250YWluJywgZGlzcGxheTogJ2Jsb2NrJyB9fVxuICAgICAgICBzcmM9e2AvYXNzZXRzL2xvZ28vJHtwcm9wcy5kYXRhLmxvZ299YH1cbiAgICAgICAgYWx0PXtgJHtwcm9wcy5kYXRhLmxhYmVsfSBsb2dvYH1cbiAgICAgIC8+XG4gICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7cHJvcHMuZGF0YS5sYWJlbH1cbiAgICAgIDwvVGV4dD5cbiAgICA8L1BsdXNHcmlkSXRlbT5cbiAgPC9QbHVzR3JpZD5cbilcblxuZXhwb3J0IGNvbnN0IEZyYW1ld29ya1NlbGVjdG9yOiBSZWFjdC5GQzxhbnk+ID0gb2JzZXJ2ZXIoKCkgPT4ge1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcblxuICAvLyBUT0RPXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGl0ZW1zID0gZnJhbWV3b3Jrc1xuICAgIC5maWx0ZXIoKGZyYW1ld29yaykgPT4gIWZyYW1ld29yay5kaXNhYmxlZClcbiAgICAubWFwKChmcmFtZXdvcmspID0+ICh7XG4gICAgICB2YWx1ZTogZnJhbWV3b3JrLmtleSxcbiAgICAgIGxhYmVsOiBmcmFtZXdvcmsudGl0bGUsXG4gICAgICBsb2dvOiBmcmFtZXdvcmsubG9nbyxcbiAgICB9KSk7XG5cbiAgY29uc3QgY2hhbmdlID0gKGZyYW1ld29yazogYW55KSA9PiB7XG5cbiAgICBzdG9yZS51aS5zZXRGcmFtZXdvcmsoZnJhbWV3b3JrLnZhbHVlKTtcblxuICAgIC8vIFRPRE9cbiAgICByb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggbWI9ezN9PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIm1haW4tbGlnaHRlbi0xXCIgc2l6ZT1cImNhcHRpb25cIj5cbiAgICAgICAgICBTRUxFQ1QgWU9VUiBGUkFNRVdPUktcbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9wdGlvbnM9e2l0ZW1zfVxuICAgICAgICB2YWx1ZT17aXRlbXMuZmluZCgoZnJhbWV3b3JrKSA9PiBmcmFtZXdvcmsudmFsdWUgPT09IHN0b3JlLnVpLmZyYW1ld29yayl9XG4gICAgICAgIGNvbXBvbmVudHM9e3sgT3B0aW9uLCBTaW5nbGVWYWx1ZSB9fVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9mcmFtZXdvcmstc2VsZWN0b3InOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEljb24sXG4gIExpbmssXG4gIFBsdXNEcmF3ZXJUb2dnbGVyLFxuICBQbHVzR3JpZCxcbiAgUGx1c0dyaWRJdGVtLFxufSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gJy4vaGVhZGVyLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SGVhZGVyUHJvcHM+ID0gKHsgbWVudSB9KSA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2hlYWRlcidcbiAgKTtcblxuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICAgIHJvdXRlOiB7XG4gICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOk9WRVJWSUVXJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NvbXBvbmVudHMnLFxuICAgICAgcm91dGU6IHtcbiAgICAgICAgdG86ICdST1VURTpDT01QT05FTlQ6REVUQUlMUycsXG4gICAgICAgIHBhcmFtczogeyBrZXk6ICdhc3BlY3QtcmF0aW8nIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0pvaW4gb3VyIHRlYW0hJyxcbiAgICAgIHJvdXRlOiB7XG4gICAgICAgIHRvOiAnUk9VVEU6Q09NUE9ORU5UOkRFVEFJTFMnLFxuICAgICAgICBwYXJhbXM6IHsga2V5OiAnc3dpdGNoJyB9XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8UGx1c0dyaWQgYWxpZ25JdGVtcz1cImNlbnRlclwiIHdyYXA9XCJvZmZcIj5cbiAgICAgICAge21lbnUgJiYgKFxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCJhdXRvXCIgaGlkZUxnVXA+XG4gICAgICAgICAgICA8UGx1c0RyYXdlclRvZ2dsZXIgY29ubmVjdG9yPVwibWFpblwiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWVudVwiIC8+XG4gICAgICAgICAgICA8L1BsdXNEcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICApfVxuICAgICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxMaW5rIHRvPVwiUk9VVEU6SE9NRVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2xvZ28vbG9nby5zdmdcIiB3aWR0aD1cIjEzNXB4XCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiZ3Jvd1wiIC8+XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIGtleT17bGluay50aXRsZX0gaGlkZVNtRG93bj5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdGV4dD5cbiAgICAgICAgICAgICAgPExpbmsgey4uLmxpbmsucm91dGV9PlxuICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L1BsdXNHcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEljb25Qcm9wcyB9IGZyb20gJy4vaWNvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBJY29uOiBSZWFjdC5GQzxJY29uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjb2xvciwgbmFtZSwgc2l6ZSA9ICdzbScgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdpY29uJyxcbiAgICB7XG4gICAgICBbbmFtZV06ICEhbmFtZSxcbiAgICAgIGNvbG9yLFxuICAgICAgc2l6ZVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gPGkgY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2ljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pY29uLnR5cGVzJzsiLCJleHBvcnQgKiBmcm9tICdAaHRtbHBsdXMvcmVhY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL2FsZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyJztcbmV4cG9ydCAqIGZyb20gJy4vYm94JztcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29kZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4YW1wbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mcmFtZXdvcmstc2VsZWN0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pY29uJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9saW5rJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya3VwJztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFtZXRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2lkZWJhcic7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbHMnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdG9jJztcbiIsImV4cG9ydCAqIGZyb20gJy4vaW5wdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC50eXBlcyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBJbnB1dFByb3BzIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgcGxhY2Vob2xkZXIsIHR5cGUgPSAndGV4dCcgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdpbnB1dCcsXG4gICk7XG5cbiAgcmV0dXJuIDxpbnB1dCBjbGFzc05hbWU9e2NsYXNzZXN9IHR5cGU9e3R5cGV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9saW5rJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICdAYXBwL3NlcnZpY2VzJztcbmltcG9ydCB7IExpbmtQcm9wcyB9IGZyb20gJy4vbGluay50eXBlcyc7XG5cbmNvbnN0IEFuY2hvcjogUmVhY3QuRkM8YW55PiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5hcmdzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxhIHJlZj17cmVmfSB7Li4uYXJnc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApXG59KTtcblxuZXhwb3J0IGNvbnN0IExpbms6IFJlYWN0LkZDPExpbmtQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBwYXJhbXMsIHRvLCAuLi5hdHRyaWJ1dGVzIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gdXNlTWVtbygoKSA9PiByb3V0ZXIucGF0aCh0bywgcGFyYW1zKSwgW3RvLCBwYXJhbXNdKTtcblxuICBpZiAoYXR0cmlidXRlcy50YXJnZXQgPT09ICdfYmxhbmsnICYmICFhdHRyaWJ1dGVzLnJlbCkge1xuXG4gICAgYXR0cmlidXRlcy5yZWwgPSAnbm9vcGVuZXIgbm9yZWZlcnJlcic7XG4gIH1cblxuICBpZiAoIXBhdGgpIHJldHVybiA8QW5jaG9yIGhyZWY9e3RvfSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvQW5jaG9yPjtcblxuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofSBwYXNzSHJlZj5cbiAgICAgIDxBbmNob3Igey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L0FuY2hvcj5cbiAgICA8L05leHRMaW5rPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbWFya3VwJztcbmV4cG9ydCAqIGZyb20gJy4vbWFya3VwLnR5cGVzJzsiLCJpbXBvcnQgeyBBbGVydCwgQ29kZSwgTGluaywgVGV4dCwgVG9jSXRlbSB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnQGFwcC9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcnMgPSB7XG4gICAgYmxvY2txdW90ZTogKHByb3BzKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICBjb25zdCB0b2tlbiA9ICgodmFsdWUubWF0Y2goL1xcW1xcdytcXF0vKSB8fCBbXSlbMF0gfHwgJycpO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbi5yZXBsYWNlKC9cXFt8XFxdL2csICcnKTtcblxuICAgICAgICByZXR1cm4gPEFsZXJ0IHR5cGU9e3R5cGV9Pnt2YWx1ZS5yZXBsYWNlKHRva2VuLCAnJyl9PC9BbGVydD47XG4gICAgfSxcbiAgICBjb2RlOiAocHJvcHMpID0+IDxDb2RlIGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0+e3Byb3BzLnZhbHVlfTwvQ29kZT4sXG4gICAgaGVhZGluZzogKHByb3BzKSA9PiB7XG5cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgbGV2ZWwgfSA9IHByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBsZXZlbCA9PT0gMSA/IGNoaWxkcmVuIDogPFRvY0l0ZW0+e2NoaWxkcmVufTwvVG9jSXRlbT47XG5cbiAgICAgICAgcmV0dXJuIDxUZXh0IHNpemU9e2xldmVsLnRvU3RyaW5nKCl9Pntjb250ZW50fTwvVGV4dD47XG4gICAgfSxcbiAgICBsaW5rOiAocHJvcHMpID0+IDxMaW5rIHRvPXtwcm9wcy5ocmVmfT57cHJvcHMuY2hpbGRyZW59PC9MaW5rPixcbiAgICBwYXJhZ3JhcGg6IChwcm9wcykgPT4gPFRleHQgc2l6ZT1cInBhcmFncmFwaFwiPntwcm9wcy5jaGlsZHJlbn08L1RleHQ+LFxufTtcblxuZXhwb3J0IGNvbnN0IHRva2VuaXplciA9IChpbnB1dCkgPT4ge1xuXG4gICAgY29uc3QgdG9rZW5zID0gaW5wdXQubWF0Y2goL1xceyguKj8pXFx9L2cpIHx8IFtdO1xuXG4gICAgdG9rZW5zLm1hcCgodG9rZW4pID0+IHtcblxuICAgICAgICBjb25zdCByYXcgPSB0b2tlbi5yZXBsYWNlKC9cXHt8XFx9L2csICcnKTtcblxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHJhdy5zcGxpdCgnLicpO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBzZWN0aW9uc1swXTtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNlY3Rpb25zWzFdO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdDb25zdGFudHMnOlxuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSh0b2tlbiwgQ29uc3RhbnRzW3ZhbHVlXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1JvdXRlcic6XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKHRva2VuLCByb3V0ZXIucGF0aCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCB7IHJlbmRlcmVycywgdG9rZW5pemVyIH0gZnJvbSAnLi9tYXJrdXAucmVuZGVyZXJzJztcbmltcG9ydCB7IE1hcmt1cFByb3BzIH0gZnJvbSAnLi9tYXJrdXAudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTWFya3VwOiBSZWFjdC5GQzxNYXJrdXBQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBpZ25vcmVQYXJhZ3JhcGggfSA9IHByb3BzO1xuXG4gIGlmIChpZ25vcmVQYXJhZ3JhcGgpIHJlbmRlcmVycy5wYXJhZ3JhcGggPSAocHJvcHMpID0+IHByb3BzLmNoaWxkcmVuXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RNYXJrZG93biByZW5kZXJlcnM9e3JlbmRlcmVyc30+XG4gICAgICB7dG9rZW5pemVyKGNoaWxkcmVuLnRvU3RyaW5nKCkpfVxuICAgIDwvUmVhY3RNYXJrZG93bj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhZ2UnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQGFwcC9ob29rcyc7XG5pbXBvcnQgeyBQYWdlUHJvcHMgfSBmcm9tICcuL3BhZ2UudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgUGFnZTogUmVhY3QuRkM8UGFnZVByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGxheW91dCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBzdG9yZS51aS5zZXRMYXlvdXQobGF5b3V0KTtcbiAgICB9LFxuICAgIFtsYXlvdXRdXG4gICk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcmFtZXRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbWV0ZXJzLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29kZSwgTWFya3VwLCBUZXh0LCBQbHVzR3JpZCwgUGx1c0dyaWRJdGVtIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1Byb3BzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBhcmFtZXRlcnM6IFJlYWN0LkZDPFBhcmFtZXRlcnNQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGl0ZW1zID0gW10gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhc0RlZmF1bHQgPSAhIWl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gdHlwZW9mIGl0ZW0uZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcpLmxlbmd0aDtcblxuICBjb25zdCBoYXNUeXBlID0gISFpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHR5cGVvZiBpdGVtLnR5cGUgIT09ICd1bmRlZmluZWQnKS5sZW5ndGg7XG5cbiAgY29uc3QgaGFzVmFsdWUgPSAhIWl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gdHlwZW9mIGl0ZW0udmFsdWUgIT09ICd1bmRlZmluZWQnKS5sZW5ndGg7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3BhcmFtZXRlcnMnXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxQbHVzR3JpZCBjbGFzc05hbWU9XCJpdGVtXCIga2V5PXtpdGVtLm5hbWV9IGd1dHRlclg9XCJtZFwiPlxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCJncm93XCI+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiPk5hbWU8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiIGNvbG9yPVwiZXJyb3JcIj57aXRlbS5uYW1lfTwvVGV4dD5cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cImdyb3dcIj5cbiAgICAgICAgICAgIHtoYXNUeXBlICYmIDxUZXh0IHNpemU9XCJib2R5XCI+VHlwZTwvVGV4dD59XG4gICAgICAgICAgICB7aGFzVHlwZSAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCIgdHJ1bmNhdGU+XG4gICAgICAgICAgICAgICAgey8qIFRPRE86IHNlZSBhbGwgdHlwZXMgKi99XG4gICAgICAgICAgICAgICAge2l0ZW0udHlwZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIGNsYXNzTmFtZT1cImRlZmF1bHRcIiB4cz1cIjEyXCIgbGc9XCJhdXRvXCI+XG4gICAgICAgICAgICB7aGFzRGVmYXVsdCAmJiA8VGV4dCBzaXplPVwiYm9keVwiPkRlZmF1bHQ8L1RleHQ+fVxuICAgICAgICAgICAge2hhc0RlZmF1bHQgJiYgPFRleHQgc2l6ZT1cImJvZHlcIj57aXRlbS5kZWZhdWx0IHx8ICd1bmRlZmluZWQnfTwvVGV4dD59XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cIjEyXCI+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiPkRlc2NyaXB0aW9uPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgPE1hcmt1cCBpZ25vcmVQYXJhZ3JhcGg+e2l0ZW0uZGVzY3JpcHRpb259PC9NYXJrdXA+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAge2hhc1ZhbHVlICYmIChcbiAgICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCIxMlwiPlxuICAgICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiPlZhbHVlPC9UZXh0PlxuICAgICAgICAgICAgICA8Q29kZSBsYW5ndWFnZT1cImpzXCIgY29weT17ZmFsc2V9PntpdGVtLnZhbHVlfTwvQ29kZT5cbiAgICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGx1c0dyaWQ+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBTZWN0aW9uUHJvcHMgfSBmcm9tICcuL3NlY3Rpb24udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbjogUmVhY3QuRkM8U2VjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHNpemUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdzZWN0aW9uJyxcbiAgICB7IHNpemUgfVxuICApO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3NpZGViYXInO1xuZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyLnR5cGVzJzsiLCIvLyBUT0RPXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBUZXh0IH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ0BhcHAvaG9va3MnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBTaWRlYmFySXRlbSwgU2lkZWJhclByb3BzIH0gZnJvbSAnLi9zaWRlYmFyLnR5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9pY29uJztcblxuZXhwb3J0IGNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFNpZGViYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGl0ZW1zID0gW10gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhY3RpdmVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHJ1biA9IChpbnB1dCwgLi4ucGFyZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cbiAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICBpbnB1dC5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBydW4oaXRlbSwgLi4ucGFyZW50KTtcblxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkgcmVzdWx0ID0gaXRlbXM7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0Lml0ZW1zKSB7XG5cbiAgICAgICAgICByZXR1cm4gcnVuKGlucHV0Lml0ZW1zLCBpbnB1dCwgLi4ucGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgIGNvbnN0IHJvdXRlID0gaW5wdXQucm91dGU7XG5cbiAgICAgICAgICBpZiAoIXJvdXRlKSByZXR1cm4gW107XG5cbiAgICAgICAgICBpZiAocm91dGVyLmlzQWN0aXZlKHJvdXRlLnRvLCByb3V0ZS5wYXJhbXMpKSByZXR1cm4gW2lucHV0LCAuLi5wYXJlbnRdO1xuXG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJ1bihpdGVtcywgbnVsbCkuZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICAgICAgc2V0Q3VycmVudChyZXN1bHQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgW2l0ZW1zLCByb3V0ZXIuYXNQYXRoXVxuICApO1xuXG4gIGNvbnN0IGlzQWN0aXZlID0gKGl0ZW0pID0+IGFjdGl2ZXMuc29tZSgoYWN0aXZlKSA9PiBpdGVtID09PSBhY3RpdmUpO1xuXG4gIGNvbnN0IGlzRXhwYW5kID0gKHBhcmVudCkgPT4ge1xuXG4gICAgaWYgKCFwYXJlbnQpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGN1cnJlbnQuc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gcGFyZW50KTtcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZSA9IChpdGVtLCAuLi5wYXJlbnRzKSA9PiB7XG5cbiAgICBjb25zdCBpbmRleE9mID0gY3VycmVudC5maW5kSW5kZXgoKHgpID0+IHggPT09IGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4T2YgIT09IC0xKSB7XG5cbiAgICAgIHNldEN1cnJlbnQoWy4uLmN1cnJlbnQuc2xpY2UoaW5kZXhPZiArIDEpXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICBzZXRDdXJyZW50KFtpdGVtLCAuLi5wYXJlbnRzXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVudSA9IChpdGVtczogQXJyYXk8U2lkZWJhckl0ZW0+LCBsZXZlbCA9IDAsIC4uLnBhcmVudHMpID0+IHtcblxuICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gIWlzRXhwYW5kKHBhcmVudHNbMF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bFxuICAgICAgICBjbGFzc05hbWU9e1V0aWxzLmNsYXNzZXMoe1xuICAgICAgICAgIFsnbWVudSddOiB0cnVlLFxuICAgICAgICAgIFtgbGV2ZWwtJHtsZXZlbH1gXTogdHJ1ZSxcbiAgICAgICAgICBbJ2NvbGxhcHNlZCddOiBmYWxzZSAvLyBUT0RPIGlzQ29sbGFwc2VkXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1V0aWxzLmNsYXNzZXMoe1xuICAgICAgICAgICAgICAnaXRlbSc6IHRydWUsXG4gICAgICAgICAgICAgICdhY3RpdmUnOiBpc0FjdGl2ZShpdGVtKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAge2l0ZW0ucm91dGUgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rIHsuLi5pdGVtLnJvdXRlfT57aXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshaXRlbS5yb3V0ZSAmJiAoXG4gICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19IG9uQ2xpY2s9eygpID0+IHRvZ2dsZShpdGVtLCAuLi5wYXJlbnRzKX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e2l0ZW0uaWNvbiBhcyBhbnl9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7LyogVE9ETyAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiA8SWNvbiBuYW1lPXtpc0V4cGFuZChpdGVtKSA/ICdhbmltYXRpb25zJyA6ICdhc3BlY3QtcmF0aW8nfSAvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHshIWl0ZW0uaXRlbXM/Lmxlbmd0aCAmJiBtZW51KGl0ZW0uaXRlbXMsIGxldmVsICsgMSwgaXRlbSwgLi4ucGFyZW50cyl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3NpZGViYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7bWVudShpdGVtcyl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zb2NpYWxzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uLCBMaW5rLCBQbHVzR3JpZCwgUGx1c0dyaWRJdGVtIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTb2NpYWxzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQbHVzR3JpZCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ3V0dGVyPVwibWRcIiBqdXN0aWZ5PVwiY2VudGVyXCIgd3JhcD1cIm9mZlwiPlxuICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgPExpbmsgdG89e0NvbnN0YW50cy5TT0NJQUxfVFdJVFRFUn0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInR3aXR0ZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxMaW5rIHRvPXtDb25zdGFudHMuU09DSUFMX0xJTktFRElOfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwibGlua2VkaW5cIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxMaW5rIHRvPXtDb25zdGFudHMuU09DSUFMX0lOU1RBR1JBTX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImluc3RhZ3JhbVwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgPExpbmsgdG89e0NvbnN0YW50cy5TT0NJQUxfR0lUSFVCfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiZ2l0aHViXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgPC9QbHVzR3JpZD5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0LnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBUZXh0UHJvcHMgfSBmcm9tICcuL3RleHQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVGV4dDogUmVhY3QuRkM8VGV4dFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHtcbiAgICBhbGlnbiA9ICdzdGFydCcsXG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IsXG4gICAgZGVuc2UsXG4gICAgaW5saW5lLFxuICAgIHNpemUgPSAnYm9keScsXG4gICAgdHJ1bmNhdGUsXG4gICAgd2VpZ2h0ID0gJ25vcm1hbCdcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICd0ZXh0JyxcbiAgICB7IGFsaWduLCBjb2xvciwgZGVuc2UsIGlubGluZSwgc2l6ZSwgdHJ1bmNhdGUsIHdlaWdodCB9XG4gICk7XG5cbiAgbGV0IFRhZztcblxuICBzd2l0Y2ggKHNpemUpIHtcblxuICAgIGNhc2UgJzEnOlxuICAgIGNhc2UgJzInOlxuICAgIGNhc2UgJzMnOlxuICAgIGNhc2UgJzQnOlxuICAgIGNhc2UgJzUnOlxuICAgIGNhc2UgJzYnOlxuICAgICAgVGFnID0gYGgke3NpemV9YCBhcyBhbnk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhcmFncmFwaCc6XG4gICAgICBUYWcgPSAncCcgYXMgYW55O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgVGFnID0gJ2RpdicgYXMgYW55O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHRpdGxlPXt0cnVuY2F0ZSA/IGNoaWxkcmVuIDogdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3RvYyc7XG5leHBvcnQgKiBmcm9tICcuL3RvYy1pdGVtJzsiLCJleHBvcnQgKiBmcm9tICcuL3RvYy1pdGVtJztcbmV4cG9ydCAqIGZyb20gJy4vdG9jLWl0ZW0udHlwZXMnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAYXBwL2hvb2tzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgVG9jSXRlbVByb3BzIH0gZnJvbSAnLi90b2MtaXRlbS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUb2NJdGVtOiBSZWFjdC5GQzxUb2NJdGVtUHJvcHM+ID0gb2JzZXJ2ZXIoKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgbGV2ZWwgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcblxuICBjb25zdCBlbGVtZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGtleSA9IFV0aWxzLnRvS2ViYWJDYXNlKChjaGlsZHJlblswXT8ucHJvcHM/LmNoaWxkcmVuIHx8IGNoaWxkcmVuIHx8ICcnKS50b1N0cmluZygpKTtcblxuICBjb25zdCBzY3JvbGxUbyA9ICgpID0+IHtcblxuICAgIGlmICghZWxlbWVudC5jdXJyZW50KSByZXR1cm47XG5cbiAgICBlbGVtZW50LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgYmxvY2s6ICdzdGFydCcsXG4gICAgICBpbmxpbmU6ICduZWFyZXN0J1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudCkgPT4ge1xuXG4gICAgZXZlbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNjcm9sbFRvKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCMke2tleX1gLCA1MDApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGxldCBkZXB0aCA9IGxldmVsO1xuXG4gICAgaWYgKCFkZXB0aCkge1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGVsZW1lbnQuY3VycmVudC5wYXJlbnRFbGVtZW50LmxvY2FsTmFtZS5yZXBsYWNlKCdoJywgJycpKTtcblxuICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIGRlcHRoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc3RvcmUudG9jLmFkZCh7XG4gICAgICBrZXksXG4gICAgICBsZXZlbDogZGVwdGgsXG4gICAgICB2YWx1ZTogY2hpbGRyZW4sXG4gICAgICBzY3JvbGxUbzogb25DbGlja1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHN0b3JlLnRvYy51cGRhdGUoa2V5LCBlbnRyaWVzWzBdKSk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQuY3VycmVudCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuXG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgIHN0b3JlLnRvYy5yZW1vdmUoa2V5KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAndG9jLWl0ZW0nXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZWxlbWVudH0+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIHRvPXtgIyR7a2V5fWB9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90b2MnO1xuZXhwb3J0ICogZnJvbSAnLi90b2MudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAYXBwL2hvb2tzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgVG9jUHJvcHMgfSBmcm9tICcuL3RvYy50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUb2M6IFJlYWN0LkZDPFRvY1Byb3BzPiA9IG9ic2VydmVyKCgpID0+IHtcblxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XG5cbiAgY29uc3QgaXRlbXMgPSBzdG9yZS50b2MuaXRlbXM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3RvYydcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIWl0ZW1zLmxlbmd0aCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJveCBtYj17M30+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIm1haW4tbGlnaHRlbi0xXCIgc2l6ZT1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgQ09OVEVOVFNcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVdGlscy5jbGFzc2VzKHtcbiAgICAgICAgICAgICAgICAgIFsnYWN0aXZlJ106IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgW2BsZXZlbC0ke2l0ZW0ubGV2ZWwgfHwgMH1gXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGl0ZW0uc2Nyb2xsVG8oKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwibWFpblwiIHNpemU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBQTEFURk9STV9BQkJSRVZJQVRJT04gPSAnSFRNTCsnO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0tFWSA9ICdodG1scGx1cyc7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fTkFNRSA9ICdIVE1MUExVUyc7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fVEFHX1BSRUZJWCA9ICdwbHVzJztcbmV4cG9ydCBjb25zdCBQTEFURk9STV9FVkVOVF9QUkVGSVggPSAnUGx1cyc7XG5cbmV4cG9ydCBjb25zdCBXRUJDT01QT05FTlRfUkVGRVJFTkNFID0gJ2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1dlYl9Db21wb25lbnRzL1VzaW5nX2N1c3RvbV9lbGVtZW50cyc7XG5leHBvcnQgY29uc3QgV0VCQ09NUE9ORU5UX0NPTVBBVElCSUxJVFkgPSAnaHR0cHM6Ly9jdXN0b20tZWxlbWVudHMtZXZlcnl3aGVyZS5jb20nO1xuXG5leHBvcnQgY29uc3QgUE9SVF9BTkdVTEFSX1BBQ0tBR0VfTkFNRSA9ICdAaHRtbHBsdXMvY29yZSc7XG5leHBvcnQgY29uc3QgUE9SVF9BTkdVTEFSX1BBQ0tBR0VfTE9BREVSID0gJ0BodG1scGx1cy9jb3JlL2xvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9OQU1FID0gJ0BodG1scGx1cy9jb3JlJztcbmV4cG9ydCBjb25zdCBQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9MT0FERVIgPSAnQGh0bWxwbHVzL2NvcmUvbG9hZGVyJztcbmV4cG9ydCBjb25zdCBQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE4gPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AaHRtbHBsdXMvY29yZS9kaXN0L2h0bWxwbHVzLmpzJztcbmV4cG9ydCBjb25zdCBQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE5fTE9BREVSID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQGh0bWxwbHVzL2NvcmUvbG9hZGVyL2luZGV4LmVzMjAxNy5qcyc7XG5cbmV4cG9ydCBjb25zdCBQT1JUX1JFQUNUX1BBQ0tBR0VfTkFNRSA9ICdAaHRtbHBsdXMvcmVhY3QnO1xuZXhwb3J0IGNvbnN0IFBPUlRfUkVBQ1RfUEFDS0FHRV9MT0FERVIgPSAnQGh0bWxwbHVzL3JlYWN0L2xvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBQT1JUX1ZVRV9QQUNLQUdFX05BTUUgPSAnQGh0bWxwbHVzL2NvcmUnO1xuZXhwb3J0IGNvbnN0IFBPUlRfVlVFX1BBQ0tBR0VfTE9BREVSID0gJ0BodG1scGx1cy9jb3JlL2xvYWRlcic7XG5leHBvcnQgY29uc3QgUE9SVF9WVUVfSUdOT1JFRF9FTEVNRU5UUyA9ICdodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2lnbm9yZWRFbGVtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTT0NJQUxfRkFDRUJPT0sgPSAnVE9ETyc7XG5leHBvcnQgY29uc3QgU09DSUFMX1lPVVRVQkUgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3NOa3hEbUxVN3ZLX0wxamdTVldXQ0EnO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9JTlNUQUdSQU0gPSAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1scGx1cy5pbyc7XG5leHBvcnQgY29uc3QgU09DSUFMX1RXSVRURVIgPSAnaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaHRtbHBsdXNpbyc7XG5leHBvcnQgY29uc3QgU09DSUFMX0xJTktFRElOID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2h0bWxwbHVzJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfR0lUSFVCID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1cy9jb3JlJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfR0lUSFVCX0NPTVBPTkVOVFMgPSAnaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzL2NvcmUvdHJlZS9tYXN0ZXIvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cydcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9nZXR0aW5nLXN0YXJ0ZWQvYnJvd3Nlci1zdXBwb3J0Lm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vZ2V0dGluZy1zdGFydGVkL2Jyb3dzZXItc3VwcG9ydC5tZFwiLFxuXHRcdDBcblx0XSxcblx0XCIuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uYW5ndWxhci5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uYW5ndWxhci5tZFwiLFxuXHRcdDFcblx0XSxcblx0XCIuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uamF2YXNjcmlwdC5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uamF2YXNjcmlwdC5tZFwiLFxuXHRcdDJcblx0XSxcblx0XCIuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24ucmVhY3QubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLnJlYWN0Lm1kXCIsXG5cdFx0M1xuXHRdLFxuXHRcIi4vZ2V0dGluZy1zdGFydGVkL2luc3RhbGxhdGlvbi52dWUubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLnZ1ZS5tZFwiLFxuXHRcdDRcblx0XSxcblx0XCIuL2ludHJvZHVjdGlvbi92aXNpb24ubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9pbnRyb2R1Y3Rpb24vdmlzaW9uLm1kXCIsXG5cdFx0NVxuXHRdLFxuXHRcIi4vaW50cm9kdWN0aW9uL3doYXQtaXMtaHRtbHBsdXMubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9pbnRyb2R1Y3Rpb24vd2hhdC1pcy1odG1scGx1cy5tZFwiLFxuXHRcdDZcblx0XSxcblx0XCIuL2ludHJvZHVjdGlvbi93aHktaHRtbHBsdXMubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9pbnRyb2R1Y3Rpb24vd2h5LWh0bWxwbHVzLm1kXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vbm9uYW1lL2FjY2Vzc2liaWxpdHkubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvYWNjZXNzaWJpbGl0eS5tZFwiLFxuXHRcdDhcblx0XSxcblx0XCIuL25vbmFtZS9hbmltYXRpb25zLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL2FuaW1hdGlvbnMubWRcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9ub25hbWUvYmlkaXJlY3Rpb25hbGl0eS5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9iaWRpcmVjdGlvbmFsaXR5Lm1kXCIsXG5cdFx0MTBcblx0XSxcblx0XCIuL25vbmFtZS9icmVha3BvaW50cy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9icmVha3BvaW50cy5tZFwiLFxuXHRcdDExXG5cdF0sXG5cdFwiLi9ub25hbWUvY2FuY2VsYWJsZS1ldmVudC5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9jYW5jZWxhYmxlLWV2ZW50Lm1kXCIsXG5cdFx0MTJcblx0XSxcblx0XCIuL25vbmFtZS9jb25uZWN0b3IubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvY29ubmVjdG9yLm1kXCIsXG5cdFx0MTNcblx0XSxcblx0XCIuL25vbmFtZS9jb250cmlidXRpbmcubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvY29udHJpYnV0aW5nLm1kXCIsXG5cdFx0MTRcblx0XSxcblx0XCIuL25vbmFtZS9jc3MtcmVzZXQubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvY3NzLXJlc2V0Lm1kXCIsXG5cdFx0MTVcblx0XSxcblx0XCIuL25vbmFtZS9mcmVxdWVudGx5LWFza2VkLXF1ZXN0aW9ucy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9mcmVxdWVudGx5LWFza2VkLXF1ZXN0aW9ucy5tZFwiLFxuXHRcdDE2XG5cdF0sXG5cdFwiLi9ub25hbWUvZ2V0dGluZy1zdGFydGVkLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL2dldHRpbmctc3RhcnRlZC5tZFwiLFxuXHRcdDE3XG5cdF0sXG5cdFwiLi9ub25hbWUvZ2xvYmFsLWNvbmZpZy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9nbG9iYWwtY29uZmlnLm1kXCIsXG5cdFx0MThcblx0XSxcblx0XCIuL25vbmFtZS9pbnN0YWxsYXRpb24uYW5ndWxhci5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9pbnN0YWxsYXRpb24uYW5ndWxhci5tZFwiLFxuXHRcdDE5XG5cdF0sXG5cdFwiLi9ub25hbWUvaW5zdGFsbGF0aW9uLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL2luc3RhbGxhdGlvbi5tZFwiLFxuXHRcdDIwXG5cdF0sXG5cdFwiLi9ub25hbWUvaW5zdGFsbGF0aW9uLnJlYWN0Lm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL2luc3RhbGxhdGlvbi5yZWFjdC5tZFwiLFxuXHRcdDIxXG5cdF0sXG5cdFwiLi9ub25hbWUvbGljZW5zZS5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9saWNlbnNlLm1kXCIsXG5cdFx0MjJcblx0XSxcblx0XCIuL25vbmFtZS9vdmVydmlldy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9vdmVydmlldy5tZFwiLFxuXHRcdDIzXG5cdF0sXG5cdFwiLi9ub25hbWUvcG9seWZpbGxzLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL3BvbHlmaWxscy5tZFwiLFxuXHRcdDI0XG5cdF0sXG5cdFwiLi9ub25hbWUvcmVsZWFzZS1ub3Rlcy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9yZWxlYXNlLW5vdGVzLm1kXCIsXG5cdFx0MjVcblx0XSxcblx0XCIuL25vbmFtZS9yb2FkbWFwLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL3JvYWRtYXAubWRcIixcblx0XHQyNlxuXHRdLFxuXHRcIi4vbm9uYW1lL3NlcnZlci1zaWRlLXJlbmRlcmluZy5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL25vbmFtZS9zZXJ2ZXItc2lkZS1yZW5kZXJpbmcubWRcIixcblx0XHQyN1xuXHRdLFxuXHRcIi4vbm9uYW1lL3Nwb25zb3JzLWFuZC1iYWNrZXJzLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL3Nwb25zb3JzLWFuZC1iYWNrZXJzLm1kXCIsXG5cdFx0Mjhcblx0XSxcblx0XCIuL25vbmFtZS9zdXBwb3J0Lm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vbm9uYW1lL3N1cHBvcnQubWRcIixcblx0XHQyOVxuXHRdLFxuXHRcIi4vbm9uYW1lL3RlYW0ubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvdGVhbS5tZFwiLFxuXHRcdDMwXG5cdF0sXG5cdFwiLi9ub25hbWUvdmVyc2lvbnMubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9ub25hbWUvdmVyc2lvbnMubWRcIixcblx0XHQzMVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbnRlbnQvZW4gbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvLipcXFxcLm1kJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCBqb3NuIGZyb20gJ0BodG1scGx1cy9jb3JlL2Rpc3QvZG9jcy5qc29uJztcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBqb3NuLmZpbHRlcigoY29tcG9uZW50KSA9PiAhY29tcG9uZW50LmRldmVsb3BtZW50KTtcbiIsImV4cG9ydCBjb25zdCBmcmFtZXdvcmtzID0gW1xuICAgIHtcbiAgICAgICAga2V5OiAnamF2YXNjcmlwdCcsXG4gICAgICAgIGxvZ286ICdqYXZhc2NyaXB0LnBuZycsXG4gICAgICAgIHRpdGxlOiAnSmF2YVNjcmlwdCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAncmVhY3QnLFxuICAgICAgICBsb2dvOiAncmVhY3QucG5nJyxcbiAgICAgICAgdGl0bGU6ICdSZWFjdCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAndnVlJyxcbiAgICAgICAgbG9nbzogJ3Z1ZS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1Z1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAnYW5ndWxhcicsXG4gICAgICAgIGxvZ286ICdhbmd1bGFyLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnQW5ndWxhcicsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdzdmVsdGUnLFxuICAgICAgICBsb2dvOiAnc3ZlbHRlLnN2ZycsXG4gICAgICAgIHRpdGxlOiAnU3ZlbHRlJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ2VtYmVyJyxcbiAgICAgICAgbG9nbzogJ2VtYmVyLnBuZycsXG4gICAgICAgIHRpdGxlOiAnRW1iZXInLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAncHJlYWN0JyxcbiAgICAgICAgbG9nbzogJ1RPRE8nLFxuICAgICAgICB0aXRsZTogJ1ByZWFjdCcsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5leHBvcnQgKiBmcm9tICcuL3NpZGViYXInOyIsImltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbicsXG4gICAgICAgIGljb246ICdpbnRyb2R1Y3Rpb24nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgV2hhdOKAmXMgJHtDb25zdGFudHMuUExBVEZPUk1fTkFNRX0/YCxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpXSEFUJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYFdoeSAke0NvbnN0YW50cy5QTEFURk9STV9OQU1FfT9gLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOldIWScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdMb25nLXRlcm0gU3VwcG9ydCcsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWaXNpb24nLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlZJU0lPTicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdSb2FkbWFwJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1ZlcnNpb25zJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1JlbGVhc2Ugbm90ZXMnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnTGljZW5jZScsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdHZXR0aW5nIHN0YXJ0ZWQnLFxuICAgICAgICBpY29uOiAnZ2V0dGluZy1zdGFydGVkJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0luc3RhbGxhdGlvbicsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpHRVRUSU5HU1RBUlRFRDpJTlNUQUxMQVRJT04nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQnJvd3NlciBzdXBwb3J0JyxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkdFVFRJTkdTVEFSVEVEOkJST1dTRVJTVVBQT1JUJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1VwZ3JhZGUgZ3VpZGUnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnQ29udHJpYnV0aW5nJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcbiAgICAvLyAgICAgaWNvbjogJ2ZlYXR1cmVzJyxcbiAgICAvLyAgICAgaXRlbXM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0dsb2JhbCBjb25maWcnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnRGlzcGxheSBCcmVha3BvaW50JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0ZyYW1ld29yayBJbnRlZ3JhdGlvbnMnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQWNjZXNzaWJpbGl0eSAoYTExeSknLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQmlkaXJlY3Rpb25hbGl0eSAoTFRSL1JUTCknLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQ1NTIFJlc2V0JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1NlcnZlciBzaWRlIHJlbmRlcmluZycsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWxhYmxlIGV2ZW50JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXVxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ0FuaW1hdGlvbnMnLFxuICAgIC8vICAgICBpY29uOiAnYW5pbWF0aW9ucycsXG4gICAgLy8gICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdBbmltYXRpb24gR3VpZGVsaW5lJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1RyYW5zaXRpb24nLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVUkgQ29udGFpbmVycycsXG4gICAgICAgIGljb246ICdjb21wb25lbnRzJyxcbiAgICAgICAgaXRlbXM6IGNvbXBvbmVudHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubWFpbilcbiAgICAgICAgICAgIC5tYXAoKGNvbXBvbmVudCkgPT4gKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogY29tcG9uZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6Q09NUE9ORU5UOkRFVEFJTFMnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29tcG9uZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgIC8vICAgICBpY29uOiAnaHRtbHBsdXMnLFxuICAgIC8vICAgICBpdGVtczogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnTWVldCB0aGUgdGVhbScsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdTcG9uc29ycyBhbmQgYmFja2VycycsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF1cbiAgICAvLyB9LFxuICAgIC8vIFRPRE9cbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnRnJhbWV3b3JrIEludGVncmF0aW9ucycsXG4gICAgLy8gICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdPdmVydmlldycsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6T1ZFUlZJRVcnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnUmVhY3QnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOlJFQUNUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0FuZ3VsYXInLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOkFOR1VMQVInLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnVnVlJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpWVUUnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnSmF2YVNjcmlwdCcsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6SkFWQVNDUklQVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gfSxcbl0iLCJleHBvcnQgKiBmcm9tICcuL3VzZS1yb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi91c2Utc3RvcmUnO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIGFzIHVzZVJvdXRlck5leHQsIE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICdAYXBwL3NlcnZpY2VzJztcblxuaW50ZXJmYWNlIFJvdXRlckhvb2sgZXh0ZW5kcyBOZXh0Um91dGVyIHtcbiAgaXNBY3RpdmUobmFtZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUm91dGVyID0gKCk6IFJvdXRlckhvb2sgPT4ge1xuXG4gIGNvbnN0IG5leHRSb3V0ZXI6IFJvdXRlckhvb2sgPSB1c2VSb3V0ZXJOZXh0KCkgYXMgUm91dGVySG9vaztcblxuICBuZXh0Um91dGVyLmlzQWN0aXZlID0gKG5hbWU6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KSA9PiB7XG5cbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGgobmFtZSwgcGFyYW1zKTtcblxuICAgIGlmICghcGF0aCkgcmV0dXJuO1xuXG4gICAgcmV0dXJuIG5leHRSb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgocGF0aCk7XG4gIH07XG5cbiAgcmV0dXJuIG5leHRSb3V0ZXI7XG59O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3JlLCBTdG9yZUNvbnRleHQgfSBmcm9tICdAYXBwL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gKCk6IFN0b3JlID0+IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgeyBNYXJrdXAsIFBhZ2UsIFRleHQgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuXG5jb25zdCBBbGw6IFJlYWN0LkZDPGFueT4gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSBsYXlvdXQ9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICA8VGV4dD57ZGF0YS50aXRsZX08L1RleHQ+XG4gICAgICAgICAgICA8TWFya3VwPntjb250ZW50fTwvTWFya3VwPlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG5cbiAgICBjb25zdCBmaWxlID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9jb250ZW50L2VuLyR7cGFyYW1zLnNlY3Rpb25zfS8ke3BhcmFtcy5maWxlfS5tZGApO1xuXG4gICAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBtYXR0ZXIoZmlsZS5kZWZhdWx0KSB8fCB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBiYXNlID0gJy4vc3JjL2NvbnRlbnQvZW4nO1xuXG4gICAgY29uc3QgcGF0aHMgPSBnbG9iLnN5bmMoYCR7YmFzZX0vKiovKi5tZGApLm1hcCgoZmlsZSkgPT4gZmlsZS5yZXBsYWNlKGJhc2UsICcnKS5yZXBsYWNlKCcubWQnLCAnJykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vcm91dGVyJztcbiIsImV4cG9ydCAqIGZyb20gJy4vcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzJztcbiIsImV4cG9ydCBpbnRlcmZhY2UgUm91dGUge1xuICBuYW1lOiBzdHJpbmcsXG4gIHBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlczogUm91dGVbXSA9IFtdO1xuXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXM7XG4gIH1cblxuICBmaW5kKG5hbWU6IHN0cmluZyk6IFJvdXRlIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIHBhdGgobmFtZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpOiBzdHJpbmcge1xuXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLmZpbmQobmFtZSk7XG5cbiAgICBpZiAoIXJvdXRlKSByZXR1cm47XG5cbiAgICBsZXQgcGF0aCA9IHJvdXRlLnBhdGg7XG5cbiAgICBPYmplY3Qua2V5cyhwYXJhbXMgfHwge30pXG4gICAgICAubWFwKChrZXkpID0+IHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZShgWyR7a2V5fV1gLCBwYXJhbXNba2V5XSlcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICByZWdpc3Rlcihyb3V0ZTogUm91dGUpOiBSb3V0ZSB7XG5cbiAgICB0aGlzLnJvdXRlcy5wdXNoKHJvdXRlKTtcblxuICAgIHJldHVybiByb3V0ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6SE9NRScsXG4gICAgcGF0aDogJy8nXG59KTtcblxuLy8gSU5UUk9EVUNUSU9OXG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOklOVFJPRFVDVElPTjpWSVNJT04nLFxuICAgIHBhdGg6ICcvaW50cm9kdWN0aW9uL3Zpc2lvbidcbn0pO1xuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpJTlRST0RVQ1RJT046V0hBVCcsXG4gICAgcGF0aDogYC9pbnRyb2R1Y3Rpb24vd2hhdC1pcy0ke0NvbnN0YW50cy5QTEFURk9STV9LRVl9YFxufSk7XG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOklOVFJPRFVDVElPTjpXSFknLFxuICAgIHBhdGg6IGAvaW50cm9kdWN0aW9uL3doeS0ke0NvbnN0YW50cy5QTEFURk9STV9LRVl9YFxufSk7XG5cbi8vIEdFVFRJTkdTVEFSVEVEXG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOkdFVFRJTkdTVEFSVEVEOklOU1RBTExBVElPTicsXG4gICAgcGF0aDogJy9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uJ1xufSk7XG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOkdFVFRJTkdTVEFSVEVEOkJST1dTRVJTVVBQT1JUJyxcbiAgICBwYXRoOiAnL2dldHRpbmctc3RhcnRlZC9icm93c2VyLXN1cHBvcnQnXG59KTtcblxuLy8gQ09NUE9ORU5UXG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOkNPTVBPTkVOVDpERVRBSUxTJyxcbiAgICBwYXRoOiAnL2NvbXBvbmVudC9ba2V5XSdcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuLy8gcm91dGVyLnJlZ2lzdGVyKHtcbi8vICAgICBuYW1lOiAnUk9VVEU6RlJBTUVXT1JLOkFOR1VMQVInLFxuLy8gICAgIHBhdGg6ICcvZnJhbWV3b3JrL2FuZ3VsYXInXG4vLyB9KTtcblxuLy8gcm91dGVyLnJlZ2lzdGVyKHtcbi8vICAgICBuYW1lOiAnUk9VVEU6RlJBTUVXT1JLOkpBVkFTQ1JJUFQnLFxuLy8gICAgIHBhdGg6ICcvZnJhbWV3b3JrL2phdmFzY3JpcHQnXG4vLyB9KTtcblxuLy8gcm91dGVyLnJlZ2lzdGVyKHtcbi8vICAgICBuYW1lOiAnUk9VVEU6RlJBTUVXT1JLOk9WRVJWSUVXJyxcbi8vICAgICBwYXRoOiAnL2ZyYW1ld29yay9vdmVydmlldydcbi8vIH0pO1xuXG4vLyByb3V0ZXIucmVnaXN0ZXIoe1xuLy8gICAgIG5hbWU6ICdST1VURTpGUkFNRVdPUks6UkVBQ1QnLFxuLy8gICAgIHBhdGg6ICcvZnJhbWV3b3JrL3JlYWN0J1xuLy8gfSk7XG5cbi8vIHJvdXRlci5yZWdpc3Rlcih7XG4vLyAgICAgbmFtZTogJ1JPVVRFOkZSQU1FV09SSzpWVUUnLFxuLy8gICAgIHBhdGg6ICcvZnJhbWV3b3JrL3Z1ZSdcbi8vIH0pO1xuXG4iLCJleHBvcnQgKiBmcm9tICcuL3N0b3JlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmUuY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3N0b3JlLnVpLnR5cGVzJztcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdG9yZT4obnVsbCBhcyBhbnkpO1xuIiwiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgVG9jSXRlbSB9IGZyb20gJy4vc3RvcmUudG9jLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRvY1N0b3JlIHtcblxuICBpdGVtczogQXJyYXk8VG9jSXRlbT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSByb290OiBTdG9yZSkge1xuXG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMsIHsgcm9vdDogZmFsc2UgfSk7XG4gIH1cblxuICBhZGQoaXRlbTogVG9jSXRlbSkge1xuXG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgaWYgKGl0ZW0ua2V5ICYmIGAjJHtpdGVtLmtleX1gICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaCkgcmV0dXJuO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgaXRlbS5zY3JvbGxUbygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG5cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ICE9PSBrZXkpO1xuICB9XG5cbiAgdXBkYXRlKGtleTogc3RyaW5nLCBlbnRyeSkge1xuXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmVudHJ5Py5pc0ludGVyc2VjdGluZyk7XG5cbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcblxuICAgIGl0ZW0uZW50cnkgPSBlbnRyeTtcblxuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5lbnRyeT8uaXNJbnRlcnNlY3RpbmcpO1xuXG4gICAgbGV0IG5leHQ7XG5cbiAgICBpZiAoZW50cmllcy5sZW5ndGgpIHtcblxuICAgICAgbmV4dCA9IGVudHJpZXNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICBpZiAoIWFjdGl2ZSB8fCAhYWN0aXZlLmVudHJ5KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRvcCA9IGFjdGl2ZS5lbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICBjb25zdCB0b0Rvd24gPSB0b3AgPCAwO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmtleSA9PT0gYWN0aXZlLmtleSk7XG5cbiAgICAgIG5leHQgPSB0aGlzLml0ZW1zW3RvRG93biA/IGluZGV4IDogaW5kZXggLSAxXTtcbiAgICB9XG5cbiAgICBpZiAoIW5leHQpIHJldHVybjtcblxuICAgIHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmFjdGl2ZSA9IGl0ZW0ua2V5ID09PSBuZXh0LmtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgVG9jU3RvcmUgfSBmcm9tICcuL3N0b3JlLnRvYyc7XG5pbXBvcnQgeyBVaVN0b3JlIH0gZnJvbSAnLi9zdG9yZS51aSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG5cbiAgdG9jOiBUb2NTdG9yZTtcblxuICB1aTogVWlTdG9yZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKTtcblxuICAgIHRoaXMudG9jID0gbmV3IFRvY1N0b3JlKHRoaXMpO1xuXG4gICAgdGhpcy51aSA9IG5ldyBVaVN0b3JlKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IEZyYW1ld29yaywgTGF5b3V0IH0gZnJvbSAnLi9zdG9yZS51aS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBVaVN0b3JlIHtcblxuICBmcmFtZXdvcms6IEZyYW1ld29yayA9ICdyZWFjdCc7XG5cbiAgbGF5b3V0PzogTGF5b3V0O1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJvb3Q6IFN0b3JlKSB7XG5cbiAgICBtYWtlQXV0b09ic2VydmFibGUodGhpcywgeyByb290OiBmYWxzZSB9KTtcblxuICAgIC8vIFRPRE9cbiAgICB0aGlzLnNldEZyYW1ld29yayhub29raWVzLmdldChudWxsKS5mcmFtZXdvcmsgYXMgYW55IHx8ICdyZWFjdCcpO1xuICB9XG5cbiAgc2V0RnJhbWV3b3JrKHZhbHVlOiBGcmFtZXdvcmspIHtcblxuICAgIHRoaXMuZnJhbWV3b3JrID0gdmFsdWU7XG5cbiAgICAvLyBUT0RPXG4gICAgbm9va2llcy5zZXQoXG4gICAgICBudWxsLFxuICAgICAgJ2ZyYW1ld29yaycsXG4gICAgICB2YWx1ZSxcbiAgICAgIHtcbiAgICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHNldExheW91dCh2YWx1ZTogTGF5b3V0KSB7XG4gICAgdGhpcy5sYXlvdXQgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjbGFzc2VzID0gKC4uLmlucHV0KTogc3RyaW5nID0+IHtcblxuICAgIGNvbnN0IG5hbWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGlucHV0W2ldO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGNsYXNzZXMoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAga2V5ID0gVXRpbHMudG9LZWJhYkNhc2Uoa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiYgbmFtZXMucHVzaChgJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChgJHtrZXl9LSR7dmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJ1ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGAke2tleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGAke2tleX0tJHt2YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuYW1lcy5qb2luKCcgJyk7XG59OyIsImV4cG9ydCBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICBpbnB1dC52YWx1ZSA9IHRleHQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGlucHV0LnNlbGVjdCgpO1xuXG4gICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTkpO1xuXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAgIGlucHV0LnJlbW92ZSgpO1xufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50TmFtZSA9IChmcmFtZXdvcmssIGlucHV0KSA9PiB7XG5cbiAgICBpZiAoZnJhbWV3b3JrICE9PSAncmVhY3QnKSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gVXRpbHMudG9QYXNjYWxDYXNlKGlucHV0KTtcbn0iLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRFdmVudE5hbWUgPSAoZnJhbWV3b3JrLCBpbnB1dCkgPT4ge1xuXG4gICAgaWYgKGZyYW1ld29yayAhPT0gJ3JlYWN0JykgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIGBvbiR7Q29uc3RhbnRzLlBMQVRGT1JNX0VWRU5UX1BSRUZJWH0ke1V0aWxzLnRvQ2FwaXRhbENhc2UoaW5wdXQpfWA7XG59IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9wZXJ0eU5hbWUgPSAoZnJhbWV3b3JrLCBpbnB1dCkgPT4ge1xuXG4gICAgaWYgKGZyYW1ld29yayAhPT0gJ3JlYWN0JykgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIFV0aWxzLnRvQ2FtZWxDYXNlKGlucHV0KTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3B5LXRvLWNsaXBib2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2dldC1jb21wb25lbnQtbmFtZSc7XG5leHBvcnQgKiBmcm9tICcuL2dldC1ldmVudC1uYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0LXByb3BlcnR5LW5hbWUnO1xuZXhwb3J0ICogZnJvbSAnLi90by1jYW1lbC1jYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG8tY2FwaXRhbC1jYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG8ta2ViYWItY2FzZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvLXBhc2NhbC1jYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG8tdW5pdCc7XG4iLCIvLyBUT0RPXG5leHBvcnQgY29uc3QgdG9DYW1lbENhc2UgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3KS9nLCAod29yZCwgaW5kZXgpID0+IGluZGV4ID09PSAwID8gd29yZC50b0xvd2VyQ2FzZSgpIDogd29yZC50b1VwcGVyQ2FzZSgpKS5yZXBsYWNlKC9cXHMrL2csICcnKS5yZXBsYWNlKC8tL2csICcnKTtcbn0iLCJleHBvcnQgY29uc3QgdG9DYXBpdGFsQ2FzZSA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG5cbiAgICBpZiAoIWlucHV0KSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcdy8sIChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufSIsImV4cG9ydCBjb25zdCB0b0tlYmFiQ2FzZSA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0XG4gICAgICAgIC5tYXRjaCgvW0EtWl17Mix9KD89W0EtWl1bYS16XStbMC05XSp8XFxiKXxbQS1aXT9bYS16XStbMC05XSp8W0EtWl18WzAtOV0rL2cpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IGNoYXIudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgLmpvaW4oJy0nKTtcbn0iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHRvUGFzY2FsQ2FzZSA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG5cbiAgICBpZiAoIWlucHV0KSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoJy0nKS5tYXAoKHdvcmQpID0+IFV0aWxzLnRvQ2FwaXRhbENhc2Uod29yZCkpLmpvaW4oJycpO1xufSIsImV4cG9ydCBjb25zdCB0b1VuaXQgPSAoaW5wdXQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuXG4gICAgaWYgKGlucHV0ID09IG51bGwgfHwgaW5wdXQgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGlzTmFOKCtpbnB1dCEpKSByZXR1cm4gU3RyaW5nKGlucHV0KTtcblxuICAgIHJldHVybiBgJHtOdW1iZXIoaW5wdXQpfXB4YDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaHRtbHBsdXMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3QtbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=