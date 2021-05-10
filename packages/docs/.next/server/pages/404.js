module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/404.tsx");
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

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\pages\\404.tsx";



const Error = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    layout: "error",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      size: "body",
      children: "404 | Page Not Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "ROUTE:HOME",
      children: "GO TO Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGVydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUudHlwZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4YW1wbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9mcmFtZXdvcmstc2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFya3VwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcmt1cC9tYXJrdXAucmVuZGVyZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvbWFya3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UvcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC90ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy1pdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvYy90b2MtaXRlbS90b2MtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvdG9jL3RvYy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZnJhbWV3b3Jrcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy80MDQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudG9jLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudWkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcHktdG8tY2xpcGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXQtY29tcG9uZW50LW5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldC1ldmVudC1uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXQtcHJvcGVydHktbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLWNhbWVsLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLWNhcGl0YWwtY2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG8ta2ViYWItY2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG8tcGFzY2FsLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLXVuaXQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGh0bWxwbHVzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3QtbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaXNtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwiZnNQYXRobmFtZSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBbGVydCIsInR5cGUiLCJjbGFzc2VzIiwiVXRpbHMiLCJCYW5uZXIiLCJCb3giLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwic3R5bGUiLCJCdXR0b24iLCJjb2xvciIsImljb24iLCJvdXRsaW5lZCIsInNpemUiLCJDb2RlIiwiY29weSIsImxhbmd1YWdlIiwiZWxlbWVudCIsInVzZVJlZiIsInRvU3RyaW5nIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGxVbmRlciIsImN1cnJlbnQiLCJjbGFzc2VzQ29kZSIsIkV4YW1wbGUiLCJjb2RlIiwibGlua3MiLCJ1c2VNZW1vIiwiY29kZXNhbmRib3giLCJnaXRodWIiLCJ0aXRsZSIsInJ1bGVzIiwiY2xhc3NOYW1lIiwiY2xhc3NMZW4iLCJsZW5ndGgiLCJjaGFyIiwibmV4dENoYXIiLCJpc0F0IiwiaXNJbiIsInNsaWNlIiwiaW5kZXhPZiIsInRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJFeGFtcGxlTGFuZ3VhZ2UiLCJGb290ZXIiLCJpdGVtcyIsIkNvbnN0YW50cyIsImxhYmVsIiwiZ3JvdXAiLCJPcHRpb24iLCJTaW5nbGVWYWx1ZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImxvZ28iLCJGcmFtZXdvcmtTZWxlY3RvciIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VSb3V0ZXIiLCJmcmFtZXdvcmtzIiwiZnJhbWV3b3JrIiwiY2hhbmdlIiwidWkiLCJzZXRGcmFtZXdvcmsiLCJmaW5kIiwiSGVhZGVyIiwibWVudSIsInRvIiwiSWNvbiIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJBbmNob3IiLCJmb3J3YXJkUmVmIiwiYXR0cmlidXRlcyIsInJlbCIsInJlbmRlcmVycyIsImJsb2NrcXVvdGUiLCJub2RlIiwidHJpbSIsInRva2VuIiwibWF0Y2giLCJoZWFkaW5nIiwibGV2ZWwiLCJwYXJhZ3JhcGgiLCJ0b2tlbml6ZXIiLCJ0b2tlbnMiLCJyYXciLCJzZWN0aW9ucyIsInNwbGl0IiwiTWFya3VwIiwiaWdub3JlUGFyYWdyYXBoIiwiUGFnZSIsImxheW91dCIsInNldExheW91dCIsIlBhcmFtZXRlcnMiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdCIsImhhc1R5cGUiLCJoYXNWYWx1ZSIsImRlc2NyaXB0aW9uIiwiU2VjdGlvbiIsIlNpZGViYXIiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJhY3RpdmVzIiwicnVuIiwicGFyZW50IiwiaXNBcnJheSIsImlzQWN0aXZlIiwic29tZSIsImFjdGl2ZSIsImlzRXhwYW5kIiwidG9nZ2xlIiwicGFyZW50cyIsImZpbmRJbmRleCIsImlzQ29sbGFwc2VkIiwiZm9udFdlaWdodCIsIlNvY2lhbHMiLCJUZXh0IiwiYWxpZ24iLCJkZW5zZSIsImlubGluZSIsInRydW5jYXRlIiwid2VpZ2h0IiwiVGFnIiwidW5kZWZpbmVkIiwiVG9jSXRlbSIsInNjcm9sbFRvIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImRlcHRoIiwicGFyZW50RWxlbWVudCIsImxvY2FsTmFtZSIsInRvYyIsImFkZCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidXBkYXRlIiwiZGlzY29ubmVjdCIsInJlbW92ZSIsIlRvYyIsIlBMQVRGT1JNX0FCQlJFVklBVElPTiIsIlBMQVRGT1JNX0tFWSIsIlBMQVRGT1JNX05BTUUiLCJQTEFURk9STV9UQUdfUFJFRklYIiwiUExBVEZPUk1fRVZFTlRfUFJFRklYIiwiV0VCQ09NUE9ORU5UX1JFRkVSRU5DRSIsIldFQkNPTVBPTkVOVF9DT01QQVRJQklMSVRZIiwiUE9SVF9BTkdVTEFSX1BBQ0tBR0VfTkFNRSIsIlBPUlRfQU5HVUxBUl9QQUNLQUdFX0xPQURFUiIsIlBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX05BTUUiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9MT0FERVIiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE4iLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE5fTE9BREVSIiwiUE9SVF9SRUFDVF9QQUNLQUdFX05BTUUiLCJQT1JUX1JFQUNUX1BBQ0tBR0VfTE9BREVSIiwiUE9SVF9WVUVfUEFDS0FHRV9OQU1FIiwiUE9SVF9WVUVfUEFDS0FHRV9MT0FERVIiLCJQT1JUX1ZVRV9JR05PUkVEX0VMRU1FTlRTIiwiU09DSUFMX0ZBQ0VCT09LIiwiU09DSUFMX1lPVVRVQkUiLCJTT0NJQUxfSU5TVEFHUkFNIiwiU09DSUFMX1RXSVRURVIiLCJTT0NJQUxfTElOS0VESU4iLCJTT0NJQUxfR0lUSFVCIiwiU09DSUFMX0dJVEhVQl9DT01QT05FTlRTIiwiam9zbiIsImRldmVsb3BtZW50Iiwic2lkZWJhciIsIm1haW4iLCJuZXh0Um91dGVyIiwidXNlUm91dGVyTmV4dCIsInN0YXJ0c1dpdGgiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0IiwiRXJyb3IiLCJyZWdpc3RlciIsImNyZWF0ZUNvbnRleHQiLCJUb2NTdG9yZSIsInJvb3QiLCJtYWtlQXV0b09ic2VydmFibGUiLCJpc0ludGVyc2VjdGluZyIsIm5leHQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b0Rvd24iLCJpbmRleCIsIlN0b3JlIiwiVWlTdG9yZSIsIm5vb2tpZXMiLCJtYXhBZ2UiLCJuYW1lcyIsInByb3RvdHlwZSIsImNhbGwiLCJqb2luIiwiY29weVRvQ2xpcGJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZXhlY0NvbW1hbmQiLCJnZXRDb21wb25lbnROYW1lIiwiZ2V0RXZlbnROYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwidG9DYW1lbENhc2UiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInRvQ2FwaXRhbENhc2UiLCJ0b0tlYmFiQ2FzZSIsInRvUGFzY2FsQ2FzZSIsInRvVW5pdCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzLzQwNC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoXG4gICAgICAgICAgYWRkTG9jYWxlKGRlbEJhc2VQYXRoKHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lKSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICAgICAgaGFzQmFzZVBhdGgocmVzb2x2ZWRBcykgPyBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgICAgICkucGF0aG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKHJlc29sdmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHwgKG9wdGlvbnMuc2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsKVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMobm9ybWFsaXplTG9jYWxlUGF0aChhc1BhdGgsIGxvY2FsZXMpLnBhdGhuYW1lKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGNvbnN0IGZzUGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCksXG4gICAgICAgICAgbG9jYWxlc1xuICAgICAgICApLnBhdGhuYW1lXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoZnNQYXRobmFtZSlcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgQWxlcnRQcm9wcyB9IGZyb20gJy4vYWxlcnQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQWxlcnQ6IFJlYWN0LkZDPEFsZXJ0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgdHlwZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2FsZXJ0JyxcbiAgICB7IHR5cGUgfVxuICApO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2FsZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBCYW5uZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2Jhbm5lcidcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHsvKiA8UGx1c0dyaWQgZ3V0dGVyPVwibWRcIj5cbiAgICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIEJldGlzYVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCJncm93XCIgLz5cbiAgICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8VGV4dCBzaXplPVwibGFiZWxcIj5cbiAgICAgICAgICAgIFNlZSBob3cge0NvbnN0YW50cy5QTEFURk9STV9OQU1FfSBmaXRzIGludG8gdGhlIGVudGlyZSBCZXRpc2EgRWNvc3lzdGVtIC0mZ3Q7XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgPFBsdXNHcmlkSXRlbSBoaWRlLXhzPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgfFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBCTEFDSyBMSVZFUyBNQVRURVJcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgPC9QbHVzR3JpZD4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9iYW5uZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgQm94UHJvcHMgfSBmcm9tICcuL2JveC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBCb3g6IFJlYWN0LkZDPEJveFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIG1pbldpZHRoLCBtYXhXaWR0aCwgLi4uYWxsIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnYm94JyxcbiAgICBhbGxcbiAgKTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtaW5XaWR0aDogVXRpbHMudG9Vbml0KG1pbldpZHRoKSxcbiAgICBtYXhXaWR0aDogVXRpbHMudG9Vbml0KG1heFdpZHRoKSxcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3N0eWxlfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYm94JztcbmV4cG9ydCAqIGZyb20gJy4vYm94LnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vYnV0dG9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgY29sb3IsIGRpc2FibGVkLCBpY29uLCBvdXRsaW5lZCwgc2l6ZSA9ICdtZCcsIHRleHQsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdidXR0b24nLFxuICAgIHsgY29sb3IsIGRpc2FibGVkLCBpY29uLCBvdXRsaW5lZCwgc2l6ZSwgdGV4dCB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc30gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2J1dHRvbi50eXBlcyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3gnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgQ29kZVByb3BzIH0gZnJvbSAnLi9jb2RlLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IENvZGU6IFJlYWN0LkZDPENvZGVQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBjb3B5ID0gdHJ1ZSwgbGFuZ3VhZ2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgY29udGVudCA9IChjaGlsZHJlbiB8fCAnJykudG9TdHJpbmcoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIoZWxlbWVudC5jdXJyZW50KSk7XG5cbiAgY29uc3QgY2xhc3Nlc0NvZGUgPSBgJHtwcm9jZXNzLmJyb3dzZXIgPyAnICcgOiAnJ31sYW5ndWFnZS0ke2xhbmd1YWdlfWA7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2NvZGUnXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZWxlbWVudH0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHtjb3B5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICA8QnV0dG9uIGljb24gb25DbGljaz17KCkgPT4gVXRpbHMuY29weVRvQ2xpcGJvYXJkKGNvbnRlbnQpfT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb3B5XCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHByZSBjbGFzc05hbWU9e2NsYXNzZXNDb2RlfT5cbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtjbGFzc2VzQ29kZX0+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29kZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvZGUudHlwZXMnOyIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29kZSwgSWNvbiwgTGluaywgUGx1c0dyaWQsIFBsdXNHcmlkSXRlbSwgUGx1c1RhYnMsIFBsdXNUYWJzQmFyLCBQbHVzVGFic1RhYiwgUGx1c1RhYnNQYW5lbHMsIFBsdXNUYWJzUGFuZWwgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBFeGFtcGxlUHJvcHMsIEV4YW1wbGVMYW5ndWFnZSB9IGZyb20gJy4vZXhhbXBsZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlOiBSZWFjdC5GQzxFeGFtcGxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29kZSA9IHZhbHVlLmNvZGUgfHwge307XG5cbiAgY29uc3QgbGlua3MgPSB1c2VNZW1vKCgpID0+IHtcblxuICAgIHJldHVybiAoY29kZS5saW5rcyB8fCBbXSlcbiAgICAgIC5tYXAoKGxpbmspID0+IHtcblxuICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgY29kZXNhbmRib3g6ICdFZGl0IGluIENvZGVTYW5kYm94JyxcbiAgICAgICAgICBnaXRodWI6ICdWaWV3IG9uIEdpdGh1YicsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmxpbmssXG4gICAgICAgICAgdGl0bGU6IG1hcFtsaW5rLmtleV0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbY29kZS5saW5rc10pO1xuXG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiB7XG5cbiAgICAgIGlmICghY29kZS5zdHlsZSkgcmV0dXJuO1xuXG4gICAgICBsZXQgcnVsZXMgPSBjb2RlLnN0eWxlO1xuXG4gICAgICBsZXQgY2xhc3NOYW1lID0gYC5leC0ke3ZhbHVlLmtleX1gO1xuXG4gICAgICB0cnkgeyB2YXIgY2xhc3NMZW4gPSBjbGFzc05hbWUubGVuZ3RoLCBjaGFyLCBuZXh0Q2hhciwgaXNBdCwgaXNJbjsgY2xhc3NOYW1lICs9ICcgJzsgcnVsZXMgPSBydWxlcy5yZXBsYWNlKC9cXC9cXCooPzooPyFcXCpcXC8pW1xcc1xcU10pKlxcKlxcL3xbXFxyXFxuXFx0XSsvZywgJycpOyBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoL30oXFxzKilAL2csICd9QCcpOyBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoL30oXFxzKil9L2csICd9fScpOyBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aCAtIDI7IGkrKykgeyBjaGFyID0gcnVsZXNbaV07IG5leHRDaGFyID0gcnVsZXNbaSArIDFdOyBpZiAoY2hhciA9PT0gJ0AnKSBpc0F0ID0gdHJ1ZTsgaWYgKCFpc0F0ICYmIGNoYXIgPT09ICd7JykgaXNJbiA9IHRydWU7IGlmIChpc0luICYmIGNoYXIgPT09ICd9JykgaXNJbiA9IGZhbHNlOyBpZiAoIWlzSW4gJiYgbmV4dENoYXIgIT09ICdAJyAmJiBuZXh0Q2hhciAhPT0gJ30nICYmIChjaGFyID09PSAnfScgfHwgY2hhciA9PT0gJywnIHx8ICgoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICc7JykgJiYgaXNBdCkpKSB7IHJ1bGVzID0gcnVsZXMuc2xpY2UoMCwgaSArIDEpICsgY2xhc3NOYW1lICsgcnVsZXMuc2xpY2UoaSArIDEpOyBpICs9IGNsYXNzTGVuOyBpc0F0ID0gZmFsc2U7IH0gfTsgaWYgKHJ1bGVzLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gMCAmJiBydWxlcy5pbmRleE9mKCdAJykgIT09IDApIHJ1bGVzID0gY2xhc3NOYW1lICsgcnVsZXM7IHJldHVybiBydWxlczsgfSBjYXRjaCB7IH1cbiAgICB9LFxuICAgIFt2YWx1ZS5rZXksIGNvZGUuc3R5bGVdXG4gICk7XG5cbiAgY29uc3QgdGFicyA9IHVzZU1lbW8oKCkgPT4ge1xuXG4gICAgY29uc3QgdGFicyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoY29kZSlcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSAnbGlua3MnKVxuICAgICAgLm1hcCgoa2V5KSA9PiB7XG5cbiAgICAgICAgY29uc3QgdGFiOiBhbnkgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRpdGxlOiBVdGlscy50b0NhcGl0YWxDYXNlKGtleSksXG4gICAgICAgICAgZGlzYWJsZWQ6ICFjb2RlW2tleV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoa2V5ID09PSAncHJldmlldycpIHtcblxuICAgICAgICAgIHRhYi5jb250ZW50ID0gKCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwcmV2aWV3LXdyYXBwZXIgZXgtJHt2YWx1ZS5rZXl9YH0+XG4gICAgICAgICAgICAgIHtjb2RlW2tleV0oKX1cbiAgICAgICAgICAgICAge3N0eWxlICYmIDxzdHlsZT57c3R5bGV9PC9zdHlsZT59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICBjb25zdCBsYW5ndWFnZSA9IEV4YW1wbGVMYW5ndWFnZVtrZXkgYXMga2V5b2YgdHlwZW9mIEV4YW1wbGVMYW5ndWFnZV07XG5cbiAgICAgICAgICB0YWIuY29udGVudCA9ICgpID0+IDxDb2RlIGxhbmd1YWdlPXtsYW5ndWFnZX0+e2NvZGVba2V5XX08L0NvZGU+XG4gICAgICAgIH1cblxuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYnM7XG4gIH0sIFtjb2RlXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2V4YW1wbGUnXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8UGx1c1RhYnMgdmFsdWU9XCJwcmV2aWV3XCI+XG4gICAgICAgIDxQbHVzR3JpZCBjbGFzc05hbWU9XCJ0b29sYmFyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnk9XCJiZXR3ZWVuXCIgZ3V0dGVyWD1cInNtXCI+XG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cImdyb3dcIj5cbiAgICAgICAgICAgIDxQbHVzVGFic0Jhcj5cbiAgICAgICAgICAgICAge3RhYnMubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8UGx1c1RhYnNUYWIga2V5PXtpdGVtLmtleX0gZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9IHZhbHVlPXtpdGVtLmtleX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1BsdXNUYWJzVGFiPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUGx1c1RhYnNCYXI+XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAge2xpbmtzLm1hcCgobGluazogYW55KSA9PiAoXG4gICAgICAgICAgICA8UGx1c0dyaWRJdGVtIGtleT17bGluay5rZXl9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPXtsaW5rLnZhbHVlfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZ2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUGx1c0dyaWQ+XG4gICAgICAgIDxQbHVzVGFic1BhbmVscyBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAge3RhYnMubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxQbHVzVGFic1BhbmVsIGtleT17aXRlbS5rZXl9IHZhbHVlPXtpdGVtLmtleX0+XG4gICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnQgJiYgPGl0ZW0uY29udGVudCAvPn1cbiAgICAgICAgICAgIDwvUGx1c1RhYnNQYW5lbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QbHVzVGFic1BhbmVscz5cbiAgICAgIDwvUGx1c1RhYnM+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBFeGFtcGxlUHJvcHMge1xuICAgIHZhbHVlOiBhbnlcbn1cblxuZXhwb3J0IGVudW0gRXhhbXBsZUxhbmd1YWdlIHtcbiAgICBzdHlsZSA9ICdjc3MnLFxuICAgIHRlbXBsYXRlID0gJ2h0bWwnLFxuICAgIHNjcmlwdCA9ICdqcydcbn0iLCJleHBvcnQgKiBmcm9tICcuL2V4YW1wbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9leGFtcGxlLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBQbHVzR3JpZCwgUGx1c0dyaWRJdGVtLCBUZXh0LCBTb2NpYWxzLCBMaW5rIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcblxuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogQ29uc3RhbnRzLlBMQVRGT1JNX0FCQlJFVklBVElPTixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlYW0nLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdKb2JzJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDb21tdW5pdHknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnR2l0aHViJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU3RhY2sgT3ZlcmZsb3cnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdCbG9nJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZXNvdXJjZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnU3VwcG9ydCcsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1Jlc291cmNlcycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ05ld3NsZXR0ZXInLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1JlcG9ydCBhIGJ1ZycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1JlcXVlc3QgYSBjb21wb25lbnQnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2Zvb3RlcidcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxCb3ggaGlkZGVuIG1iPXsxNn0gbXQ9ezR9PlxuICAgICAgICA8UGx1c0dyaWQgYWxpZ25JdGVtcz1cInN0YXJ0XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGdyb3VwKSA9PiAoXG4gICAgICAgICAgICA8UGx1c0dyaWRJdGVtIGtleT17Z3JvdXAudGl0bGV9IHhzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjNcIiBsZz1cIjJcIj5cbiAgICAgICAgICAgICAgPFRleHQgd2VpZ2h0PVwic2VtaS1ib2xkXCI+XG4gICAgICAgICAgICAgICAge2dyb3VwLnRpdGxlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW1bJ3BhdGgnXX0+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QbHVzR3JpZD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYj17MTJ9IG10PXsxMn0+XG4gICAgICAgIDxTb2NpYWxzIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGFsaWduPVwiY2VudGVyXCIgc2l6ZT1cImxhYmVsXCI+XG4gICAgICAgICZjb3B5OyAyMDIwIHtDb25zdGFudHMuUExBVEZPUk1fTkFNRX0uIFJlbGVhc2VkIHVuZGVyIE1JVCBMaWNlbnNlLlxuICAgICAgPC9UZXh0PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgU2VsZWN0LCB7IGNvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgeyBCb3gsIFBsdXNHcmlkLCBQbHVzR3JpZEl0ZW0sIFRleHQgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZnJhbWV3b3JrcyB9IGZyb20gJ0BhcHAvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ0BhcHAvaG9va3MnO1xuXG5jb25zdCBPcHRpb24gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IE9wdGlvbiB9ID0gY29tcG9uZW50cztcblxuICByZXR1cm4gKFxuICAgIDxPcHRpb24gey4uLnByb3BzfT5cbiAgICAgIDxTaW5nbGVWYWx1ZSB7Li4ucHJvcHN9IC8+XG4gICAgPC9PcHRpb24+XG4gIClcbn1cblxuY29uc3QgU2luZ2xlVmFsdWUgPSAocHJvcHMpID0+IChcbiAgPFBsdXNHcmlkIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBndXR0ZXJYPVwic21cIj5cbiAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgPGltZ1xuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEuNXJlbScsIGhlaWdodDogJzEuNXJlbScsIG9iamVjdEZpdDogJ2NvbnRhaW4nLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgIHNyYz17YC9hc3NldHMvbG9nby8ke3Byb3BzLmRhdGEubG9nb31gfVxuICAgICAgICBhbHQ9e2Ake3Byb3BzLmRhdGEubGFiZWx9IGxvZ29gfVxuICAgICAgLz5cbiAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtwcm9wcy5kYXRhLmxhYmVsfVxuICAgICAgPC9UZXh0PlxuICAgIDwvUGx1c0dyaWRJdGVtPlxuICA8L1BsdXNHcmlkPlxuKVxuXG5leHBvcnQgY29uc3QgRnJhbWV3b3JrU2VsZWN0b3I6IFJlYWN0LkZDPGFueT4gPSBvYnNlcnZlcigoKSA9PiB7XG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xuXG4gIC8vIFRPRE9cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXRlbXMgPSBmcmFtZXdvcmtzXG4gICAgLmZpbHRlcigoZnJhbWV3b3JrKSA9PiAhZnJhbWV3b3JrLmRpc2FibGVkKVxuICAgIC5tYXAoKGZyYW1ld29yaykgPT4gKHtcbiAgICAgIHZhbHVlOiBmcmFtZXdvcmsua2V5LFxuICAgICAgbGFiZWw6IGZyYW1ld29yay50aXRsZSxcbiAgICAgIGxvZ286IGZyYW1ld29yay5sb2dvLFxuICAgIH0pKTtcblxuICBjb25zdCBjaGFuZ2UgPSAoZnJhbWV3b3JrOiBhbnkpID0+IHtcblxuICAgIHN0b3JlLnVpLnNldEZyYW1ld29yayhmcmFtZXdvcmsudmFsdWUpO1xuXG4gICAgLy8gVE9ET1xuICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlci5hc1BhdGgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBtYj17M30+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwibWFpbi1saWdodGVuLTFcIiBzaXplPVwiY2FwdGlvblwiPlxuICAgICAgICAgIFNFTEVDVCBZT1VSIEZSQU1FV09SS1xuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17aXRlbXN9XG4gICAgICAgIHZhbHVlPXtpdGVtcy5maW5kKChmcmFtZXdvcmspID0+IGZyYW1ld29yay52YWx1ZSA9PT0gc3RvcmUudWkuZnJhbWV3b3JrKX1cbiAgICAgICAgY29tcG9uZW50cz17eyBPcHRpb24sIFNpbmdsZVZhbHVlIH19XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZyYW1ld29yay1zZWxlY3Rvcic7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgTGluayxcbiAgUGx1c0RyYXdlclRvZ2dsZXIsXG4gIFBsdXNHcmlkLFxuICBQbHVzR3JpZEl0ZW0sXG59IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEhlYWRlclByb3BzIH0gZnJvbSAnLi9oZWFkZXIudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoeyBtZW51IH0pID0+IHtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnaGVhZGVyJ1xuICApO1xuXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgcm91dGU6IHtcbiAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6T1ZFUlZJRVcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29tcG9uZW50cycsXG4gICAgICByb3V0ZToge1xuICAgICAgICB0bzogJ1JPVVRFOkNPTVBPTkVOVDpERVRBSUxTJyxcbiAgICAgICAgcGFyYW1zOiB7IGtleTogJ2FzcGVjdC1yYXRpbycgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnSm9pbiBvdXIgdGVhbSEnLFxuICAgICAgcm91dGU6IHtcbiAgICAgICAgdG86ICdST1VURTpDT01QT05FTlQ6REVUQUlMUycsXG4gICAgICAgIHBhcmFtczogeyBrZXk6ICdzd2l0Y2gnIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxQbHVzR3JpZCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgd3JhcD1cIm9mZlwiPlxuICAgICAgICB7bWVudSAmJiAoXG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cImF1dG9cIiBoaWRlTGdVcD5cbiAgICAgICAgICAgIDxQbHVzRHJhd2VyVG9nZ2xlciBjb25uZWN0b3I9XCJtYWluXCI+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJtZW51XCIgLz5cbiAgICAgICAgICAgIDwvUGx1c0RyYXdlclRvZ2dsZXI+XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPExpbmsgdG89XCJST1VURTpIT01FXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby9sb2dvLnN2Z1wiIHdpZHRoPVwiMTM1cHhcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCJncm93XCIgLz5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0ga2V5PXtsaW5rLnRpdGxlfSBoaWRlU21Eb3duPlxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0ZXh0PlxuICAgICAgICAgICAgICA8TGluayB7Li4ubGluay5yb3V0ZX0+XG4gICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvUGx1c0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgSWNvblByb3BzIH0gZnJvbSAnLi9pY29uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEljb246IFJlYWN0LkZDPEljb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNvbG9yLCBuYW1lLCBzaXplID0gJ3NtJyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2ljb24nLFxuICAgIHtcbiAgICAgIFtuYW1lXTogISFuYW1lLFxuICAgICAgY29sb3IsXG4gICAgICBzaXplXG4gICAgfVxuICApO1xuXG4gIHJldHVybiA8aSBjbGFzc05hbWU9e2NsYXNzZXN9IC8+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaWNvbic7XG5leHBvcnQgKiBmcm9tICcuL2ljb24udHlwZXMnOyIsImV4cG9ydCAqIGZyb20gJ0BodG1scGx1cy9yZWFjdCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iYW5uZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ib3gnO1xuZXhwb3J0ICogZnJvbSAnLi9idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vZXhhbXBsZSc7XG5leHBvcnQgKiBmcm9tICcuL2Zvb3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZyYW1ld29yay1zZWxlY3Rvcic7XG5leHBvcnQgKiBmcm9tICcuL2hlYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dCc7XG5leHBvcnQgKiBmcm9tICcuL2xpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXJrdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyYW1ldGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyJztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFscyc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi90b2MnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbnB1dCc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0LnR5cGVzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IElucHV0UHJvcHMgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBwbGFjZWhvbGRlciwgdHlwZSA9ICd0ZXh0JyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2lucHV0JyxcbiAgKTtcblxuICByZXR1cm4gPGlucHV0IGNsYXNzTmFtZT17Y2xhc3Nlc30gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2xpbmsnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ0BhcHAvc2VydmljZXMnO1xuaW1wb3J0IHsgTGlua1Byb3BzIH0gZnJvbSAnLi9saW5rLnR5cGVzJztcblxuY29uc3QgQW5jaG9yOiBSZWFjdC5GQzxhbnk+ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmFyZ3MgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGEgcmVmPXtyZWZ9IHsuLi5hcmdzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gIClcbn0pO1xuXG5leHBvcnQgY29uc3QgTGluazogUmVhY3QuRkM8TGlua1Byb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhcmFtcywgdG8sIC4uLmF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSB1c2VNZW1vKCgpID0+IHJvdXRlci5wYXRoKHRvLCBwYXJhbXMpLCBbdG8sIHBhcmFtc10pO1xuXG4gIGlmIChhdHRyaWJ1dGVzLnRhcmdldCA9PT0gJ19ibGFuaycgJiYgIWF0dHJpYnV0ZXMucmVsKSB7XG5cbiAgICBhdHRyaWJ1dGVzLnJlbCA9ICdub29wZW5lciBub3JlZmVycmVyJztcbiAgfVxuXG4gIGlmICghcGF0aCkgcmV0dXJuIDxBbmNob3IgaHJlZj17dG99IHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9BbmNob3I+O1xuXG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9IHBhc3NIcmVmPlxuICAgICAgPEFuY2hvciB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvQW5jaG9yPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9tYXJrdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXJrdXAudHlwZXMnOyIsImltcG9ydCB7IEFsZXJ0LCBDb2RlLCBMaW5rLCBUZXh0LCBUb2NJdGVtIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICdAYXBwL3NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVycyA9IHtcbiAgICBibG9ja3F1b3RlOiAocHJvcHMpID0+IHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGNvbnN0IHRva2VuID0gKCh2YWx1ZS5tYXRjaCgvXFxbXFx3K1xcXS8pIHx8IFtdKVswXSB8fCAnJyk7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpO1xuXG4gICAgICAgIHJldHVybiA8QWxlcnQgdHlwZT17dHlwZX0+e3ZhbHVlLnJlcGxhY2UodG9rZW4sICcnKX08L0FsZXJ0PjtcbiAgICB9LFxuICAgIGNvZGU6IChwcm9wcykgPT4gPENvZGUgbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfT57cHJvcHMudmFsdWV9PC9Db2RlPixcbiAgICBoZWFkaW5nOiAocHJvcHMpID0+IHtcblxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCBsZXZlbCB9ID0gcHJvcHM7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGxldmVsID09PSAxID8gY2hpbGRyZW4gOiA8VG9jSXRlbT57Y2hpbGRyZW59PC9Ub2NJdGVtPjtcblxuICAgICAgICByZXR1cm4gPFRleHQgc2l6ZT17bGV2ZWwudG9TdHJpbmcoKX0+e2NvbnRlbnR9PC9UZXh0PjtcbiAgICB9LFxuICAgIGxpbms6IChwcm9wcykgPT4gPExpbmsgdG89e3Byb3BzLmhyZWZ9Pntwcm9wcy5jaGlsZHJlbn08L0xpbms+LFxuICAgIHBhcmFncmFwaDogKHByb3BzKSA9PiA8VGV4dCBzaXplPVwicGFyYWdyYXBoXCI+e3Byb3BzLmNoaWxkcmVufTwvVGV4dD4sXG59O1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVyID0gKGlucHV0KSA9PiB7XG5cbiAgICBjb25zdCB0b2tlbnMgPSBpbnB1dC5tYXRjaCgvXFx7KC4qPylcXH0vZykgfHwgW107XG5cbiAgICB0b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJhdyA9IHRva2VuLnJlcGxhY2UoL1xce3xcXH0vZywgJycpO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gcmF3LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IHNlY3Rpb25zWzBdO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc2VjdGlvbnNbMV07XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ0NvbnN0YW50cyc6XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKHRva2VuLCBDb25zdGFudHNbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUm91dGVyJzpcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UodG9rZW4sIHJvdXRlci5wYXRoKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbnB1dDtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHsgcmVuZGVyZXJzLCB0b2tlbml6ZXIgfSBmcm9tICcuL21hcmt1cC5yZW5kZXJlcnMnO1xuaW1wb3J0IHsgTWFya3VwUHJvcHMgfSBmcm9tICcuL21hcmt1cC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBNYXJrdXA6IFJlYWN0LkZDPE1hcmt1cFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlnbm9yZVBhcmFncmFwaCB9ID0gcHJvcHM7XG5cbiAgaWYgKGlnbm9yZVBhcmFncmFwaCkgcmVuZGVyZXJzLnBhcmFncmFwaCA9IChwcm9wcykgPT4gcHJvcHMuY2hpbGRyZW5cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1hcmtkb3duIHJlbmRlcmVycz17cmVuZGVyZXJzfT5cbiAgICAgIHt0b2tlbml6ZXIoY2hpbGRyZW4udG9TdHJpbmcoKSl9XG4gICAgPC9SZWFjdE1hcmtkb3duPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcGFnZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAYXBwL2hvb2tzJztcbmltcG9ydCB7IFBhZ2VQcm9wcyB9IGZyb20gJy4vcGFnZS50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlOiBSZWFjdC5GQzxQYWdlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgbGF5b3V0IH0gPSBwcm9wcztcblxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIHN0b3JlLnVpLnNldExheW91dChsYXlvdXQpO1xuICAgIH0sXG4gICAgW2xheW91dF1cbiAgKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyYW1ldGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFtZXRlcnMudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2RlLCBNYXJrdXAsIFRleHQsIFBsdXNHcmlkLCBQbHVzR3JpZEl0ZW0gfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzUHJvcHMgfSBmcm9tICcuL3BhcmFtZXRlcnMudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgUGFyYW1ldGVyczogUmVhY3QuRkM8UGFyYW1ldGVyc1Byb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgaXRlbXMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGFzRGVmYXVsdCA9ICEhaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB0eXBlb2YgaXRlbS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykubGVuZ3RoO1xuXG4gIGNvbnN0IGhhc1R5cGUgPSAhIWl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gdHlwZW9mIGl0ZW0udHlwZSAhPT0gJ3VuZGVmaW5lZCcpLmxlbmd0aDtcblxuICBjb25zdCBoYXNWYWx1ZSA9ICEhaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB0eXBlb2YgaXRlbS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpLmxlbmd0aDtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAncGFyYW1ldGVycydcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFBsdXNHcmlkIGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e2l0ZW0ubmFtZX0gZ3V0dGVyWD1cIm1kXCI+XG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cImdyb3dcIj5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+TmFtZTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCIgY29sb3I9XCJlcnJvclwiPntpdGVtLm5hbWV9PC9UZXh0PlxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiZ3Jvd1wiPlxuICAgICAgICAgICAge2hhc1R5cGUgJiYgPFRleHQgc2l6ZT1cImJvZHlcIj5UeXBlPC9UZXh0Pn1cbiAgICAgICAgICAgIHtoYXNUeXBlICYmIChcbiAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIiB0cnVuY2F0ZT5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogc2VlIGFsbCB0eXBlcyAqL31cbiAgICAgICAgICAgICAgICB7aXRlbS50eXBlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0gY2xhc3NOYW1lPVwiZGVmYXVsdFwiIHhzPVwiMTJcIiBsZz1cImF1dG9cIj5cbiAgICAgICAgICAgIHtoYXNEZWZhdWx0ICYmIDxUZXh0IHNpemU9XCJib2R5XCI+RGVmYXVsdDwvVGV4dD59XG4gICAgICAgICAgICB7aGFzRGVmYXVsdCAmJiA8VGV4dCBzaXplPVwiYm9keVwiPntpdGVtLmRlZmF1bHQgfHwgJ3VuZGVmaW5lZCd9PC9UZXh0Pn1cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiMTJcIj5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+RGVzY3JpcHRpb248L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiPlxuICAgICAgICAgICAgICA8TWFya3VwIGlnbm9yZVBhcmFncmFwaD57aXRlbS5kZXNjcmlwdGlvbn08L01hcmt1cD5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICB7aGFzVmFsdWUgJiYgKFxuICAgICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+VmFsdWU8L1RleHQ+XG4gICAgICAgICAgICAgIDxDb2RlIGxhbmd1YWdlPVwianNcIiBjb3B5PXtmYWxzZX0+e2l0ZW0udmFsdWV9PC9Db2RlPlxuICAgICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QbHVzR3JpZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NlY3Rpb24udHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFNlY3Rpb25Qcm9wcyB9IGZyb20gJy4vc2VjdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uOiBSZWFjdC5GQzxTZWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3NlY3Rpb24nLFxuICAgIHsgc2l6ZSB9XG4gICk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2lkZWJhcic7XG5leHBvcnQgKiBmcm9tICcuL3NpZGViYXIudHlwZXMnOyIsIi8vIFRPRE9cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIFRleHQgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnQGFwcC9ob29rcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFNpZGViYXJJdGVtLCBTaWRlYmFyUHJvcHMgfSBmcm9tICcuL3NpZGViYXIudHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2ljb24nO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8U2lkZWJhclByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgaXRlbXMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFjdGl2ZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IHtcblxuICAgICAgY29uc3QgcnVuID0gKGlucHV0LCAuLi5wYXJlbnQpID0+IHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblxuICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICAgIGlucHV0Lm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHJ1bihpdGVtLCAuLi5wYXJlbnQpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSByZXN1bHQgPSBpdGVtcztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaXRlbXMpIHtcblxuICAgICAgICAgIHJldHVybiBydW4oaW5wdXQuaXRlbXMsIGlucHV0LCAuLi5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgY29uc3Qgcm91dGUgPSBpbnB1dC5yb3V0ZTtcblxuICAgICAgICAgIGlmICghcm91dGUpIHJldHVybiBbXTtcblxuICAgICAgICAgIGlmIChyb3V0ZXIuaXNBY3RpdmUocm91dGUudG8sIHJvdXRlLnBhcmFtcykpIHJldHVybiBbaW5wdXQsIC4uLnBhcmVudF07XG5cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gcnVuKGl0ZW1zLCBudWxsKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xuXG4gICAgICBzZXRDdXJyZW50KHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBbaXRlbXMsIHJvdXRlci5hc1BhdGhdXG4gICk7XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAoaXRlbSkgPT4gYWN0aXZlcy5zb21lKChhY3RpdmUpID0+IGl0ZW0gPT09IGFjdGl2ZSk7XG5cbiAgY29uc3QgaXNFeHBhbmQgPSAocGFyZW50KSA9PiB7XG5cbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gY3VycmVudC5zb21lKChpdGVtKSA9PiBpdGVtID09PSBwYXJlbnQpO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlID0gKGl0ZW0sIC4uLnBhcmVudHMpID0+IHtcblxuICAgIGNvbnN0IGluZGV4T2YgPSBjdXJyZW50LmZpbmRJbmRleCgoeCkgPT4geCA9PT0gaXRlbSk7XG5cbiAgICBpZiAoaW5kZXhPZiAhPT0gLTEpIHtcblxuICAgICAgc2V0Q3VycmVudChbLi4uY3VycmVudC5zbGljZShpbmRleE9mICsgMSldKTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIHNldEN1cnJlbnQoW2l0ZW0sIC4uLnBhcmVudHNdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZW51ID0gKGl0ZW1zOiBBcnJheTxTaWRlYmFySXRlbT4sIGxldmVsID0gMCwgLi4ucGFyZW50cykgPT4ge1xuXG4gICAgY29uc3QgaXNDb2xsYXBzZWQgPSAhaXNFeHBhbmQocGFyZW50c1swXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17VXRpbHMuY2xhc3Nlcyh7XG4gICAgICAgICAgWydtZW51J106IHRydWUsXG4gICAgICAgICAgW2BsZXZlbC0ke2xldmVsfWBdOiB0cnVlLFxuICAgICAgICAgIFsnY29sbGFwc2VkJ106IGZhbHNlIC8vIFRPRE8gaXNDb2xsYXBzZWRcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17VXRpbHMuY2xhc3Nlcyh7XG4gICAgICAgICAgICAgICdpdGVtJzogdHJ1ZSxcbiAgICAgICAgICAgICAgJ2FjdGl2ZSc6IGlzQWN0aXZlKGl0ZW0pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiPlxuICAgICAgICAgICAgICB7aXRlbS5yb3V0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmsgey4uLml0ZW0ucm91dGV9PntpdGVtLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgeyFpdGVtLnJvdXRlICYmIChcbiAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0gb25DbGljaz17KCkgPT4gdG9nZ2xlKGl0ZW0sIC4uLnBhcmVudHMpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17aXRlbS5pY29uIGFzIGFueX0gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHsvKiBUT0RPICovfVxuICAgICAgICAgICAgICAgICAgey8qIDxJY29uIG5hbWU9e2lzRXhwYW5kKGl0ZW0pID8gJ2FuaW1hdGlvbnMnIDogJ2FzcGVjdC1yYXRpbyd9IC8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgeyEhaXRlbS5pdGVtcz8ubGVuZ3RoICYmIG1lbnUoaXRlbS5pdGVtcywgbGV2ZWwgKyAxLCBpdGVtLCAuLi5wYXJlbnRzKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnc2lkZWJhcidcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHttZW51KGl0ZW1zKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3NvY2lhbHMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb24sIExpbmssIFBsdXNHcmlkLCBQbHVzR3JpZEl0ZW0gfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNvY2lhbHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBsdXNHcmlkIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBndXR0ZXI9XCJtZFwiIGp1c3RpZnk9XCJjZW50ZXJcIiB3cmFwPVwib2ZmXCI+XG4gICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICA8TGluayB0bz17Q29uc3RhbnRzLlNPQ0lBTF9UV0lUVEVSfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwidHdpdHRlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgPExpbmsgdG89e0NvbnN0YW50cy5TT0NJQUxfTElOS0VESU59PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJsaW5rZWRpblwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgPExpbmsgdG89e0NvbnN0YW50cy5TT0NJQUxfSU5TVEFHUkFNfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5zdGFncmFtXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICA8TGluayB0bz17Q29uc3RhbnRzLlNPQ0lBTF9HSVRIVUJ9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJnaXRodWJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICA8L1BsdXNHcmlkPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFRleHRQcm9wcyB9IGZyb20gJy4vdGV4dC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUZXh0OiBSZWFjdC5GQzxUZXh0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qge1xuICAgIGFsaWduID0gJ3N0YXJ0JyxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvcixcbiAgICBkZW5zZSxcbiAgICBpbmxpbmUsXG4gICAgc2l6ZSA9ICdib2R5JyxcbiAgICB0cnVuY2F0ZSxcbiAgICB3ZWlnaHQgPSAnbm9ybWFsJ1xuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3RleHQnLFxuICAgIHsgYWxpZ24sIGNvbG9yLCBkZW5zZSwgaW5saW5lLCBzaXplLCB0cnVuY2F0ZSwgd2VpZ2h0IH1cbiAgKTtcblxuICBsZXQgVGFnO1xuXG4gIHN3aXRjaCAoc2l6ZSkge1xuXG4gICAgY2FzZSAnMSc6XG4gICAgY2FzZSAnMic6XG4gICAgY2FzZSAnMyc6XG4gICAgY2FzZSAnNCc6XG4gICAgY2FzZSAnNSc6XG4gICAgY2FzZSAnNic6XG4gICAgICBUYWcgPSBgaCR7c2l6ZX1gIGFzIGFueTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGFyYWdyYXBoJzpcbiAgICAgIFRhZyA9ICdwJyBhcyBhbnk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBUYWcgPSAnZGl2JyBhcyBhbnk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgdGl0bGU9e3RydW5jYXRlID8gY2hpbGRyZW4gOiB1bmRlZmluZWR9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGFnPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdG9jJztcbmV4cG9ydCAqIGZyb20gJy4vdG9jLWl0ZW0nOyIsImV4cG9ydCAqIGZyb20gJy4vdG9jLWl0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi90b2MtaXRlbS50eXBlcyc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ0BhcHAvaG9va3MnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBUb2NJdGVtUHJvcHMgfSBmcm9tICcuL3RvYy1pdGVtLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFRvY0l0ZW06IFJlYWN0LkZDPFRvY0l0ZW1Qcm9wcz4gPSBvYnNlcnZlcigocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBsZXZlbCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qga2V5ID0gVXRpbHMudG9LZWJhYkNhc2UoKGNoaWxkcmVuWzBdPy5wcm9wcz8uY2hpbGRyZW4gfHwgY2hpbGRyZW4gfHwgJycpLnRvU3RyaW5nKCkpO1xuXG4gIGNvbnN0IHNjcm9sbFRvID0gKCkgPT4ge1xuXG4gICAgaWYgKCFlbGVtZW50LmN1cnJlbnQpIHJldHVybjtcblxuICAgIGVsZW1lbnQuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgIGlubGluZTogJ25lYXJlc3QnXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG5cbiAgICBldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2Nyb2xsVG8oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgIyR7a2V5fWAsIDUwMCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgbGV0IGRlcHRoID0gbGV2ZWw7XG5cbiAgICBpZiAoIWRlcHRoKSB7XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZWxlbWVudC5jdXJyZW50LnBhcmVudEVsZW1lbnQubG9jYWxOYW1lLnJlcGxhY2UoJ2gnLCAnJykpO1xuXG4gICAgICBpZiAoIWlzTmFOKHZhbHVlKSkgZGVwdGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdG9yZS50b2MuYWRkKHtcbiAgICAgIGtleSxcbiAgICAgIGxldmVsOiBkZXB0aCxcbiAgICAgIHZhbHVlOiBjaGlsZHJlbixcbiAgICAgIHNjcm9sbFRvOiBvbkNsaWNrXG4gICAgfSk7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4gc3RvcmUudG9jLnVwZGF0ZShrZXksIGVudHJpZXNbMF0pKTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5jdXJyZW50KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG5cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgc3RvcmUudG9jLnJlbW92ZShrZXkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICd0b2MtaXRlbSdcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtlbGVtZW50fT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgdG89e2AjJHtrZXl9YH1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RvYyc7XG5leHBvcnQgKiBmcm9tICcuL3RvYy50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ0BhcHAvaG9va3MnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBUb2NQcm9wcyB9IGZyb20gJy4vdG9jLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFRvYzogUmVhY3QuRkM8VG9jUHJvcHM+ID0gb2JzZXJ2ZXIoKCkgPT4ge1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcblxuICBjb25zdCBpdGVtcyA9IHN0b3JlLnRvYy5pdGVtcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAndG9jJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgeyEhaXRlbXMubGVuZ3RoICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IG1iPXszfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwibWFpbi1saWdodGVuLTFcIiBzaXplPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICBDT05URU5UU1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1V0aWxzLmNsYXNzZXMoe1xuICAgICAgICAgICAgICAgICAgWydhY3RpdmUnXTogaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICBbYGxldmVsLSR7aXRlbS5sZXZlbCB8fCAwfWBdOiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXRlbS5zY3JvbGxUbygpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJtYWluXCIgc2l6ZT1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0FCQlJFVklBVElPTiA9ICdIVE1MKyc7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fS0VZID0gJ2h0bWxwbHVzJztcbmV4cG9ydCBjb25zdCBQTEFURk9STV9OQU1FID0gJ0hUTUxQTFVTJztcbmV4cG9ydCBjb25zdCBQTEFURk9STV9UQUdfUFJFRklYID0gJ3BsdXMnO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0VWRU5UX1BSRUZJWCA9ICdQbHVzJztcblxuZXhwb3J0IGNvbnN0IFdFQkNPTVBPTkVOVF9SRUZFUkVOQ0UgPSAnaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvV2ViX0NvbXBvbmVudHMvVXNpbmdfY3VzdG9tX2VsZW1lbnRzJztcbmV4cG9ydCBjb25zdCBXRUJDT01QT05FTlRfQ09NUEFUSUJJTElUWSA9ICdodHRwczovL2N1c3RvbS1lbGVtZW50cy1ldmVyeXdoZXJlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBQT1JUX0FOR1VMQVJfUEFDS0FHRV9OQU1FID0gJ0BodG1scGx1cy9jb3JlJztcbmV4cG9ydCBjb25zdCBQT1JUX0FOR1VMQVJfUEFDS0FHRV9MT0FERVIgPSAnQGh0bWxwbHVzL2NvcmUvbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IFBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX05BTUUgPSAnQGh0bWxwbHVzL2NvcmUnO1xuZXhwb3J0IGNvbnN0IFBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX0xPQURFUiA9ICdAaHRtbHBsdXMvY29yZS9sb2FkZXInO1xuZXhwb3J0IGNvbnN0IFBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX0NETiA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BodG1scGx1cy9jb3JlL2Rpc3QvaHRtbHBsdXMuanMnO1xuZXhwb3J0IGNvbnN0IFBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX0NETl9MT0FERVIgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AaHRtbHBsdXMvY29yZS9sb2FkZXIvaW5kZXguZXMyMDE3LmpzJztcblxuZXhwb3J0IGNvbnN0IFBPUlRfUkVBQ1RfUEFDS0FHRV9OQU1FID0gJ0BodG1scGx1cy9yZWFjdCc7XG5leHBvcnQgY29uc3QgUE9SVF9SRUFDVF9QQUNLQUdFX0xPQURFUiA9ICdAaHRtbHBsdXMvcmVhY3QvbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IFBPUlRfVlVFX1BBQ0tBR0VfTkFNRSA9ICdAaHRtbHBsdXMvY29yZSc7XG5leHBvcnQgY29uc3QgUE9SVF9WVUVfUEFDS0FHRV9MT0FERVIgPSAnQGh0bWxwbHVzL2NvcmUvbG9hZGVyJztcbmV4cG9ydCBjb25zdCBQT1JUX1ZVRV9JR05PUkVEX0VMRU1FTlRTID0gJ2h0dHBzOi8vdnVlanMub3JnL3YyL2FwaS8jaWdub3JlZEVsZW1lbnRzJztcblxuZXhwb3J0IGNvbnN0IFNPQ0lBTF9GQUNFQk9PSyA9ICdUT0RPJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfWU9VVFVCRSA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDc05reERtTFU3dktfTDFqZ1NWV1dDQSc7XG5leHBvcnQgY29uc3QgU09DSUFMX0lOU1RBR1JBTSA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxwbHVzLmlvJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfVFdJVFRFUiA9ICdodHRwczovL3d3dy50d2l0dGVyLmNvbS9odG1scGx1c2lvJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfTElOS0VESU4gPSAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvaHRtbHBsdXMnO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9HSVRIVUIgPSAnaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzL2NvcmUnO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9HSVRIVUJfQ09NUE9ORU5UUyA9ICdodHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXMvY29yZS90cmVlL21hc3Rlci9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzJ1xuIiwiaW1wb3J0IGpvc24gZnJvbSAnQGh0bWxwbHVzL2NvcmUvZGlzdC9kb2NzLmpzb24nO1xuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IGpvc24uZmlsdGVyKChjb21wb25lbnQpID0+ICFjb21wb25lbnQuZGV2ZWxvcG1lbnQpO1xuIiwiZXhwb3J0IGNvbnN0IGZyYW1ld29ya3MgPSBbXG4gICAge1xuICAgICAgICBrZXk6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgbG9nbzogJ2phdmFzY3JpcHQucG5nJyxcbiAgICAgICAgdGl0bGU6ICdKYXZhU2NyaXB0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdyZWFjdCcsXG4gICAgICAgIGxvZ286ICdyZWFjdC5wbmcnLFxuICAgICAgICB0aXRsZTogJ1JlYWN0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICd2dWUnLFxuICAgICAgICBsb2dvOiAndnVlLnBuZycsXG4gICAgICAgIHRpdGxlOiAnVnVlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdhbmd1bGFyJyxcbiAgICAgICAgbG9nbzogJ2FuZ3VsYXIuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICdBbmd1bGFyJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ3N2ZWx0ZScsXG4gICAgICAgIGxvZ286ICdzdmVsdGUuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICdTdmVsdGUnLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAnZW1iZXInLFxuICAgICAgICBsb2dvOiAnZW1iZXIucG5nJyxcbiAgICAgICAgdGl0bGU6ICdFbWJlcicsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdwcmVhY3QnLFxuICAgICAgICBsb2dvOiAnVE9ETycsXG4gICAgICAgIHRpdGxlOiAnUHJlYWN0JyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSxcbl07XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mcmFtZXdvcmtzJztcbmV4cG9ydCAqIGZyb20gJy4vc2lkZWJhcic7IiwiaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uJyxcbiAgICAgICAgaWNvbjogJ2ludHJvZHVjdGlvbicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGBXaGF04oCZcyAke0NvbnN0YW50cy5QTEFURk9STV9OQU1FfT9gLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOldIQVQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgV2h5ICR7Q29uc3RhbnRzLlBMQVRGT1JNX05BTUV9P2AsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046V0hZJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0xvbmctdGVybSBTdXBwb3J0JyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Zpc2lvbicsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046VklTSU9OJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1JvYWRtYXAnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnVmVyc2lvbnMnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnUmVsZWFzZSBub3RlcycsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdMaWNlbmNlJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0dldHRpbmcgc3RhcnRlZCcsXG4gICAgICAgIGljb246ICdnZXR0aW5nLXN0YXJ0ZWQnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSW5zdGFsbGF0aW9uJyxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkdFVFRJTkdTVEFSVEVEOklOU1RBTExBVElPTicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdGcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCcm93c2VyIHN1cHBvcnQnLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6R0VUVElOR1NUQVJURUQ6QlJPV1NFUlNVUFBPUlQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnVXBncmFkZSBndWlkZScsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdDb250cmlidXRpbmcnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnRmVhdHVyZXMnLFxuICAgIC8vICAgICBpY29uOiAnZmVhdHVyZXMnLFxuICAgIC8vICAgICBpdGVtczogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnR2xvYmFsIGNvbmZpZycsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdEaXNwbGF5IEJyZWFrcG9pbnQnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnRnJhbWV3b3JrIEludGVncmF0aW9ucycsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdBY2Nlc3NpYmlsaXR5IChhMTF5KScsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdCaWRpcmVjdGlvbmFsaXR5IChMVFIvUlRMKScsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdDU1MgUmVzZXQnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnU2VydmVyIHNpZGUgcmVuZGVyaW5nJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbGFibGUgZXZlbnQnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnQW5pbWF0aW9ucycsXG4gICAgLy8gICAgIGljb246ICdhbmltYXRpb25zJyxcbiAgICAvLyAgICAgaXRlbXM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0FuaW1hdGlvbiBHdWlkZWxpbmUnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnVHJhbnNpdGlvbicsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF1cbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdVSSBDb250YWluZXJzJyxcbiAgICAgICAgaWNvbjogJ2NvbXBvbmVudHMnLFxuICAgICAgICBpdGVtczogY29tcG9uZW50c1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5tYWluKVxuICAgICAgICAgICAgLm1hcCgoY29tcG9uZW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBjb21wb25lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpDT01QT05FTlQ6REVUQUlMUycsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjb21wb25lbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgLy8gICAgIGljb246ICdodG1scGx1cycsXG4gICAgLy8gICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdNZWV0IHRoZSB0ZWFtJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1Nwb25zb3JzIGFuZCBiYWNrZXJzJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXVxuICAgIC8vIH0sXG4gICAgLy8gVE9ET1xuICAgIC8vIHtcbiAgICAvLyAgICAgdGl0bGU6ICdGcmFtZXdvcmsgSW50ZWdyYXRpb25zJyxcbiAgICAvLyAgICAgaXRlbXM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ092ZXJ2aWV3JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpPVkVSVklFVycsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdSZWFjdCcsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6UkVBQ1QnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQW5ndWxhcicsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6QU5HVUxBUicsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdWdWUnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOlZVRScsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdKYXZhU2NyaXB0JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpKQVZBU0NSSVBUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyB9LFxuXSIsImV4cG9ydCAqIGZyb20gJy4vdXNlLXJvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3VzZS1zdG9yZSc7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgYXMgdXNlUm91dGVyTmV4dCwgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ0BhcHAvc2VydmljZXMnO1xuXG5pbnRlcmZhY2UgUm91dGVySG9vayBleHRlbmRzIE5leHRSb3V0ZXIge1xuICBpc0FjdGl2ZShuYW1lOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VSb3V0ZXIgPSAoKTogUm91dGVySG9vayA9PiB7XG5cbiAgY29uc3QgbmV4dFJvdXRlcjogUm91dGVySG9vayA9IHVzZVJvdXRlck5leHQoKSBhcyBSb3V0ZXJIb29rO1xuXG4gIG5leHRSb3V0ZXIuaXNBY3RpdmUgPSAobmFtZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpID0+IHtcblxuICAgIGNvbnN0IHBhdGggPSByb3V0ZXIucGF0aChuYW1lLCBwYXJhbXMpO1xuXG4gICAgaWYgKCFwYXRoKSByZXR1cm47XG5cbiAgICByZXR1cm4gbmV4dFJvdXRlci5hc1BhdGguc3RhcnRzV2l0aChwYXRoKTtcbiAgfTtcblxuICByZXR1cm4gbmV4dFJvdXRlcjtcbn07XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RvcmUsIFN0b3JlQ29udGV4dCB9IGZyb20gJ0BhcHAvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoKTogU3RvcmUgPT4gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIFBhZ2UsIFRleHQgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuXG5jb25zdCBFcnJvcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2UgbGF5b3V0PVwiZXJyb3JcIj5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgNDA0IHwgUGFnZSBOb3QgRm91bmRcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiUk9VVEU6SE9NRVwiPlxuICAgICAgICAgICAgICAgIEdPIFRPIEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7IiwiZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXInO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXMnO1xuIiwiZXhwb3J0IGludGVyZmFjZSBSb3V0ZSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgcGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcm91dGVzOiBSb3V0ZVtdID0gW107XG5cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcztcbiAgfVxuXG4gIGZpbmQobmFtZTogc3RyaW5nKTogUm91dGUge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgcGF0aChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6IHN0cmluZyB7XG5cbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuZmluZChuYW1lKTtcblxuICAgIGlmICghcm91dGUpIHJldHVybjtcblxuICAgIGxldCBwYXRoID0gcm91dGUucGF0aDtcblxuICAgIE9iamVjdC5rZXlzKHBhcmFtcyB8fCB7fSlcbiAgICAgIC5tYXAoKGtleSkgPT4ge1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKGBbJHtrZXl9XWAsIHBhcmFtc1trZXldKVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcblxuICAgIHRoaXMucm91dGVzLnB1c2gocm91dGUpO1xuXG4gICAgcmV0dXJuIHJvdXRlO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpIT01FJyxcbiAgICBwYXRoOiAnLydcbn0pO1xuXG4vLyBJTlRST0RVQ1RJT05cblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlZJU0lPTicsXG4gICAgcGF0aDogJy9pbnRyb2R1Y3Rpb24vdmlzaW9uJ1xufSk7XG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOklOVFJPRFVDVElPTjpXSEFUJyxcbiAgICBwYXRoOiBgL2ludHJvZHVjdGlvbi93aGF0LWlzLSR7Q29uc3RhbnRzLlBMQVRGT1JNX0tFWX1gXG59KTtcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6SU5UUk9EVUNUSU9OOldIWScsXG4gICAgcGF0aDogYC9pbnRyb2R1Y3Rpb24vd2h5LSR7Q29uc3RhbnRzLlBMQVRGT1JNX0tFWX1gXG59KTtcblxuLy8gR0VUVElOR1NUQVJURURcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6R0VUVElOR1NUQVJURUQ6SU5TVEFMTEFUSU9OJyxcbiAgICBwYXRoOiAnL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24nXG59KTtcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6R0VUVElOR1NUQVJURUQ6QlJPV1NFUlNVUFBPUlQnLFxuICAgIHBhdGg6ICcvZ2V0dGluZy1zdGFydGVkL2Jyb3dzZXItc3VwcG9ydCdcbn0pO1xuXG4vLyBDT01QT05FTlRcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6Q09NUE9ORU5UOkRFVEFJTFMnLFxuICAgIHBhdGg6ICcvY29tcG9uZW50L1trZXldJ1xufSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyByb3V0ZXIucmVnaXN0ZXIoe1xuLy8gICAgIG5hbWU6ICdST1VURTpGUkFNRVdPUks6QU5HVUxBUicsXG4vLyAgICAgcGF0aDogJy9mcmFtZXdvcmsvYW5ndWxhcidcbi8vIH0pO1xuXG4vLyByb3V0ZXIucmVnaXN0ZXIoe1xuLy8gICAgIG5hbWU6ICdST1VURTpGUkFNRVdPUks6SkFWQVNDUklQVCcsXG4vLyAgICAgcGF0aDogJy9mcmFtZXdvcmsvamF2YXNjcmlwdCdcbi8vIH0pO1xuXG4vLyByb3V0ZXIucmVnaXN0ZXIoe1xuLy8gICAgIG5hbWU6ICdST1VURTpGUkFNRVdPUks6T1ZFUlZJRVcnLFxuLy8gICAgIHBhdGg6ICcvZnJhbWV3b3JrL292ZXJ2aWV3J1xuLy8gfSk7XG5cbi8vIHJvdXRlci5yZWdpc3Rlcih7XG4vLyAgICAgbmFtZTogJ1JPVVRFOkZSQU1FV09SSzpSRUFDVCcsXG4vLyAgICAgcGF0aDogJy9mcmFtZXdvcmsvcmVhY3QnXG4vLyB9KTtcblxuLy8gcm91dGVyLnJlZ2lzdGVyKHtcbi8vICAgICBuYW1lOiAnUk9VVEU6RlJBTUVXT1JLOlZVRScsXG4vLyAgICAgcGF0aDogJy9mcmFtZXdvcmsvdnVlJ1xuLy8gfSk7XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vc3RvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdG9yZS5jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmUudWkudHlwZXMnO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0b3JlPihudWxsIGFzIGFueSk7XG4iLCJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBUb2NJdGVtIH0gZnJvbSAnLi9zdG9yZS50b2MudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVG9jU3RvcmUge1xuXG4gIGl0ZW1zOiBBcnJheTxUb2NJdGVtPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJvb3Q6IFN0b3JlKSB7XG5cbiAgICBtYWtlQXV0b09ic2VydmFibGUodGhpcywgeyByb290OiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFkZChpdGVtOiBUb2NJdGVtKSB7XG5cbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBpZiAoaXRlbS5rZXkgJiYgYCMke2l0ZW0ua2V5fWAgIT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoKSByZXR1cm47XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICBpdGVtLnNjcm9sbFRvKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgIT09IGtleSk7XG4gIH1cblxuICB1cGRhdGUoa2V5OiBzdHJpbmcsIGVudHJ5KSB7XG5cbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZW50cnk/LmlzSW50ZXJzZWN0aW5nKTtcblxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpO1xuXG4gICAgaXRlbS5lbnRyeSA9IGVudHJ5O1xuXG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmVudHJ5Py5pc0ludGVyc2VjdGluZyk7XG5cbiAgICBsZXQgbmV4dDtcblxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCkge1xuXG4gICAgICBuZXh0ID0gZW50cmllc1swXTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIGlmICghYWN0aXZlIHx8ICFhY3RpdmUuZW50cnkpIHJldHVybjtcblxuICAgICAgY29uc3QgdG9wID0gYWN0aXZlLmVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGNvbnN0IHRvRG93biA9IHRvcCA8IDA7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBhY3RpdmUua2V5KTtcblxuICAgICAgbmV4dCA9IHRoaXMuaXRlbXNbdG9Eb3duID8gaW5kZXggOiBpbmRleCAtIDFdO1xuICAgIH1cblxuICAgIGlmICghbmV4dCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uYWN0aXZlID0gaXRlbS5rZXkgPT09IG5leHQua2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBUb2NTdG9yZSB9IGZyb20gJy4vc3RvcmUudG9jJztcbmltcG9ydCB7IFVpU3RvcmUgfSBmcm9tICcuL3N0b3JlLnVpJztcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcblxuICB0b2M6IFRvY1N0b3JlO1xuXG4gIHVpOiBVaVN0b3JlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xuXG4gICAgdGhpcy50b2MgPSBuZXcgVG9jU3RvcmUodGhpcyk7XG5cbiAgICB0aGlzLnVpID0gbmV3IFVpU3RvcmUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IG5vb2tpZXMgZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgRnJhbWV3b3JrLCBMYXlvdXQgfSBmcm9tICcuL3N0b3JlLnVpLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFVpU3RvcmUge1xuXG4gIGZyYW1ld29yazogRnJhbWV3b3JrID0gJ3JlYWN0JztcblxuICBsYXlvdXQ/OiBMYXlvdXQ7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgcm9vdDogU3RvcmUpIHtcblxuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzLCB7IHJvb3Q6IGZhbHNlIH0pO1xuXG4gICAgLy8gVE9ET1xuICAgIHRoaXMuc2V0RnJhbWV3b3JrKG5vb2tpZXMuZ2V0KG51bGwpLmZyYW1ld29yayBhcyBhbnkgfHwgJ3JlYWN0Jyk7XG4gIH1cblxuICBzZXRGcmFtZXdvcmsodmFsdWU6IEZyYW1ld29yaykge1xuXG4gICAgdGhpcy5mcmFtZXdvcmsgPSB2YWx1ZTtcblxuICAgIC8vIFRPRE9cbiAgICBub29raWVzLnNldChcbiAgICAgIG51bGwsXG4gICAgICAnZnJhbWV3b3JrJyxcbiAgICAgIHZhbHVlLFxuICAgICAge1xuICAgICAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgc2V0TGF5b3V0KHZhbHVlOiBMYXlvdXQpIHtcbiAgICB0aGlzLmxheW91dCA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGNsYXNzZXMgPSAoLi4uaW5wdXQpOiBzdHJpbmcgPT4ge1xuXG4gICAgY29uc3QgbmFtZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRbaV07XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goY2xhc3NlcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgT2JqZWN0XSc6XG5cbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBVdGlscy50b0tlYmFiQ2FzZShrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAmJiBuYW1lcy5wdXNoKGAke2tleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGAke2tleX0tJHt2YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7a2V5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7a2V5fS0ke3ZhbHVlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzLmpvaW4oJyAnKTtcbn07IiwiZXhwb3J0IGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgIGlucHV0LnZhbHVlID0gdGV4dDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgaW5wdXQuc2VsZWN0KCk7XG5cbiAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG5cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXG4gICAgaW5wdXQucmVtb3ZlKCk7XG59IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnROYW1lID0gKGZyYW1ld29yaywgaW5wdXQpID0+IHtcblxuICAgIGlmIChmcmFtZXdvcmsgIT09ICdyZWFjdCcpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBVdGlscy50b1Bhc2NhbENhc2UoaW5wdXQpO1xufSIsImltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdldEV2ZW50TmFtZSA9IChmcmFtZXdvcmssIGlucHV0KSA9PiB7XG5cbiAgICBpZiAoZnJhbWV3b3JrICE9PSAncmVhY3QnKSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gYG9uJHtDb25zdGFudHMuUExBVEZPUk1fRVZFTlRfUFJFRklYfSR7VXRpbHMudG9DYXBpdGFsQ2FzZShpbnB1dCl9YDtcbn0iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnR5TmFtZSA9IChmcmFtZXdvcmssIGlucHV0KSA9PiB7XG5cbiAgICBpZiAoZnJhbWV3b3JrICE9PSAncmVhY3QnKSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gVXRpbHMudG9DYW1lbENhc2UoaW5wdXQpO1xufSIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcHktdG8tY2xpcGJvYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0LWNvbXBvbmVudC1uYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0LWV2ZW50LW5hbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9nZXQtcHJvcGVydHktbmFtZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvLWNhbWVsLWNhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi90by1jYXBpdGFsLWNhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi90by1rZWJhYi1jYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG8tcGFzY2FsLWNhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi90by11bml0JztcbiIsIi8vIFRPRE9cbmV4cG9ydCBjb25zdCB0b0NhbWVsQ2FzZSA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG5cbiAgICBpZiAoIWlucHV0KSByZXR1cm4gaW5wdXQ7XG5cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csICh3b3JkLCBpbmRleCkgPT4gaW5kZXggPT09IDAgPyB3b3JkLnRvTG93ZXJDYXNlKCkgOiB3b3JkLnRvVXBwZXJDYXNlKCkpLnJlcGxhY2UoL1xccysvZywgJycpLnJlcGxhY2UoLy0vZywgJycpO1xufSIsImV4cG9ydCBjb25zdCB0b0NhcGl0YWxDYXNlID0gKGlucHV0OiBzdHJpbmcpID0+IHtcblxuICAgIGlmICghaW5wdXQpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFx3LywgKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59IiwiZXhwb3J0IGNvbnN0IHRvS2ViYWJDYXNlID0gKGlucHV0OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgLm1hdGNoKC9bQS1aXXsyLH0oPz1bQS1aXVthLXpdK1swLTldKnxcXGIpfFtBLVpdP1thLXpdK1swLTldKnxbQS1aXXxbMC05XSsvZylcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAuam9pbignLScpO1xufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgdG9QYXNjYWxDYXNlID0gKGlucHV0OiBzdHJpbmcpID0+IHtcblxuICAgIGlmICghaW5wdXQpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBpbnB1dC5zcGxpdCgnLScpLm1hcCgod29yZCkgPT4gVXRpbHMudG9DYXBpdGFsQ2FzZSh3b3JkKSkuam9pbignJyk7XG59IiwiZXhwb3J0IGNvbnN0IHRvVW5pdCA9IChpbnB1dDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG5cbiAgICBpZiAoaW5wdXQgPT0gbnVsbCB8fCBpbnB1dCA9PT0gJycpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNOYU4oK2lucHV0ISkpIHJldHVybiBTdHJpbmcoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGAke051bWJlcihpbnB1dCl9cHhgO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBodG1scGx1cy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3QtbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=