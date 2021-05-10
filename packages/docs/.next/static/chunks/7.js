(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js ***!
  \*****************************************************************************************************/
/*! exports provided: B, G */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GlobalConfig; });
const GLOBAL_CONFIG_NAME = 'htmlplus';
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

function GlobalConfig(namespace, initial = {}) {
  return function (instance, name) {
    const connected = instance.connectedCallback;
    instance.connectedCallback = function () {
      const config = window[GLOBAL_CONFIG_NAME] || {};
      const components = config.components || {};
      const component = components[namespace] || {};
      const keys = Object.keys(component);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = component[key];
        if (typeof value === 'undefined')
          continue;
        if (this[key] !== initial[key])
          continue;
        this[key] = value;
      }
      connected && connected.bind(this)();
    };
  };
}




/***/ }),

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-card_4.entry.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-card_4.entry.js ***!
  \************************************************************************************************/
/*! exports provided: plus_card, plus_card_body, plus_card_footer, plus_card_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_card_body", function() { return CardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_card_footer", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_card_header", function() { return CardHeader; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-config-5cbf6bc5.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const cardCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;background-color:#fff;border:solid 1px rgba(0, 0, 0, 0.125);border-radius:0.25rem}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Card = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
__decorate([
  Object(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__["G"])('card')
], Card.prototype, "config", void 0);
Card.style = cardCss;

const cardBodyCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{flex:1 1 auto;padding:1rem 1rem}";

const CardBody = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
CardBody.style = cardBodyCss;

const cardFooterCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{padding:0.5rem 1rem;background-color:rgba(0, 0, 0, 0.03);border-top:solid 1px rgba(0, 0, 0, 0.125)}";

const CardFooter = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
CardFooter.style = cardFooterCss;

const cardHeaderCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{padding:0.5rem 1rem;background-color:rgba(0, 0, 0, 0.03);border-bottom:solid 1px rgba(0, 0, 0, 0.125)}";

const CardHeader = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
CardHeader.style = cardHeaderCss;




/***/ }),

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js ***!
  \*************************************************************************************************/
/*! exports provided: O, S, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return OutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Scrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return eventPath; });
const eventPath = (event) => {
  return event.path || (event.composedPath && event.composedPath());
};

class OutsideClick {
  static add(element, callback) {
    this.remove(element);
    const fn = (event) => {
      const path = eventPath(event);
      const index = path.findIndex((item) => item === element);
      if (1 < index)
        return;
      callback(event);
    };
    document.addEventListener('click', fn, true);
    this.targets.set(element, fn);
  }
  static remove(element) {
    const callback = this.targets.get(element);
    if (!callback)
      return;
    document.removeEventListener('click', callback, true);
    this.targets.delete(element);
  }
}
OutsideClick.targets = new Map();

class Scrollbar {
  static get isRTL() {
    return getComputedStyle(window.document.body).getPropertyValue('direction') === 'rtl';
  }
  static get width() {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const width = div.getBoundingClientRect().width - div.clientWidth;
    document.body.removeChild(div);
    return width;
  }
  static remove(key) {
    this.keys.add(key);
    if (this.keys.size > 1)
      return;
    const rect = document.body.getBoundingClientRect();
    const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    if (!isOverflowing)
      return;
    const property = this.isRTL ? 'paddingLeft' : 'paddingRight';
    this.style = {
      overflow: document.body.style.overflow,
      [property]: document.body.style[property],
    };
    document.body.style.overflow = 'hidden';
    const scrollbarWidth = this.width;
    document.body.style[property] = `${scrollbarWidth}px`;
  }
  static reset(key) {
    this.keys.delete(key);
    if (this.keys.size)
      return;
    const keys = Object.keys(this.style);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      document.body.style[key] = this.style[key];
    }
    this.style = {};
  }
}
Scrollbar.keys = new Set();
Scrollbar.style = {};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1jYXJkXzQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvcmVhY3Qvbm9kZV9tb2R1bGVzL0BodG1scGx1cy9jb3JlL2Rpc3QvZXNtL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7OztBQ2hDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRTtBQUNWO0FBQy9COztBQUVqQyxzQ0FBc0Msc0JBQXNCLGlDQUFpQyxzQkFBc0IsTUFBTSxrQkFBa0IsYUFBYSxzQkFBc0IsWUFBWSxxQkFBcUIsMkJBQTJCLHNCQUFzQixzQ0FBc0Msc0JBQXNCOztBQUU1VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLFlBQVksNERBQUMsQ0FBQyxvREFBSSxRQUFRLDREQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0VBQVk7QUFDZDtBQUNBOztBQUVBLDBDQUEwQyxzQkFBc0IsaUNBQWlDLHNCQUFzQixNQUFNLGNBQWMsa0JBQWtCOztBQUU3SjtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLFlBQVksNERBQUMsQ0FBQyxvREFBSSxRQUFRLDREQUFDO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsc0JBQXNCLGlDQUFpQyxzQkFBc0IsTUFBTSxvQkFBb0IscUNBQXFDLDBDQUEwQzs7QUFFbE87QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLDREQUFDLENBQUMsb0RBQUksUUFBUSw0REFBQztBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLHNCQUFzQixpQ0FBaUMsc0JBQXNCLE1BQU0sb0JBQW9CLHFDQUFxQyw2Q0FBNkM7O0FBRXJPO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0EsWUFBWSw0REFBQyxDQUFDLG9EQUFJLFFBQVEsNERBQUM7QUFDM0I7QUFDQTtBQUNBOztBQUV5SDs7Ozs7Ozs7Ozs7OztBQ2pFekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdMT0JBTF9DT05GSUdfTkFNRSA9ICdodG1scGx1cyc7XHJcbmNvbnN0IEJSRUFLUE9JTlRTID0ge1xyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzYsXHJcbiAgbWQ6IDc2OCxcclxuICBsZzogOTkyLFxyXG4gIHhsOiAxMjAwLFxyXG4gIHh4bDogMTQwMFxyXG59O1xuXG5mdW5jdGlvbiBHbG9iYWxDb25maWcobmFtZXNwYWNlLCBpbml0aWFsID0ge30pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGluc3RhbmNlLCBuYW1lKSB7XHJcbiAgICBjb25zdCBjb25uZWN0ZWQgPSBpbnN0YW5jZS5jb25uZWN0ZWRDYWxsYmFjaztcclxuICAgIGluc3RhbmNlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB3aW5kb3dbR0xPQkFMX0NPTkZJR19OQU1FXSB8fCB7fTtcclxuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbmZpZy5jb21wb25lbnRzIHx8IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzW25hbWVzcGFjZV0gfHwge307XHJcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29tcG9uZW50W2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAodGhpc1trZXldICE9PSBpbml0aWFsW2tleV0pXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0ZWQgJiYgY29ubmVjdGVkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgfTtcclxufVxuXG5leHBvcnQgeyBCUkVBS1BPSU5UUyBhcyBCLCBHbG9iYWxDb25maWcgYXMgRyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTYxOGI3ZmM4LmpzJztcbmltcG9ydCB7IEcgYXMgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9nbG9iYWwtY29uZmlnLTVjYmY2YmM1LmpzJztcbmltcG9ydCAnLi9zY3JvbGxiYXItOGQxODg1NGUuanMnO1xuXG5jb25zdCBjYXJkQ3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjA7d29yZC13cmFwOmJyZWFrLXdvcmQ7YmFja2dyb3VuZC1jbGlwOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7Ym9yZGVyLXJhZGl1czowLjI1cmVtfVwiO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBDYXJkID0gY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcclxuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic2xvdFwiLCBudWxsKSkpO1xyXG4gIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgR2xvYmFsQ29uZmlnKCdjYXJkJylcclxuXSwgQ2FyZC5wcm90b3R5cGUsIFwiY29uZmlnXCIsIHZvaWQgMCk7XHJcbkNhcmQuc3R5bGUgPSBjYXJkQ3NzO1xuXG5jb25zdCBjYXJkQm9keUNzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MXJlbSAxcmVtfVwiO1xuXG5jb25zdCBDYXJkQm9keSA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbn07XHJcbkNhcmRCb2R5LnN0eWxlID0gY2FyZEJvZHlDc3M7XG5cbmNvbnN0IGNhcmRGb290ZXJDc3MgPSBcIiosKjo6YmVmb3JlLCo6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCw6aG9zdDo6YmVmb3JlLDpob3N0OjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7cGFkZGluZzowLjVyZW0gMXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wMyk7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSl9XCI7XG5cbmNvbnN0IENhcmRGb290ZXIgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSk7XHJcbiAgfVxyXG59O1xyXG5DYXJkRm9vdGVyLnN0eWxlID0gY2FyZEZvb3RlckNzcztcblxuY29uc3QgY2FyZEhlYWRlckNzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtwYWRkaW5nOjAuNXJlbSAxcmVtO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjAzKTtib3JkZXItYm90dG9tOnNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTI1KX1cIjtcblxuY29uc3QgQ2FyZEhlYWRlciA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbn07XHJcbkNhcmRIZWFkZXIuc3R5bGUgPSBjYXJkSGVhZGVyQ3NzO1xuXG5leHBvcnQgeyBDYXJkIGFzIHBsdXNfY2FyZCwgQ2FyZEJvZHkgYXMgcGx1c19jYXJkX2JvZHksIENhcmRGb290ZXIgYXMgcGx1c19jYXJkX2Zvb3RlciwgQ2FyZEhlYWRlciBhcyBwbHVzX2NhcmRfaGVhZGVyIH07XG4iLCJjb25zdCBldmVudFBhdGggPSAoZXZlbnQpID0+IHtcclxuICByZXR1cm4gZXZlbnQucGF0aCB8fCAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcclxufTtcblxuY2xhc3MgT3V0c2lkZUNsaWNrIHtcclxuICBzdGF0aWMgYWRkKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcclxuICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHBhdGguZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBlbGVtZW50KTtcclxuICAgICAgaWYgKDEgPCBpbmRleClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5zZXQoZWxlbWVudCwgZm4pO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy50YXJnZXRzLmdldChlbGVtZW50KTtcclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgIHJldHVybjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2ssIHRydWUpO1xyXG4gICAgdGhpcy50YXJnZXRzLmRlbGV0ZShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuT3V0c2lkZUNsaWNrLnRhcmdldHMgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFNjcm9sbGJhciB7XHJcbiAgc3RhdGljIGdldCBpc1JUTCgpIHtcclxuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2lkdGgoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICByZXR1cm4gd2lkdGg7XHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmUoa2V5KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgICBpZiAodGhpcy5rZXlzLnNpemUgPiAxKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcclxuICAgIHRoaXMuc3R5bGUgPSB7XHJcbiAgICAgIG92ZXJmbG93OiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93LFxyXG4gICAgICBbcHJvcGVydHldOiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSxcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcclxuICB9XHJcbiAgc3RhdGljIHJlc2V0KGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtrZXldID0gdGhpcy5zdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gIH1cclxufVxyXG5TY3JvbGxiYXIua2V5cyA9IG5ldyBTZXQoKTtcclxuU2Nyb2xsYmFyLnN0eWxlID0ge307XG5cbmV4cG9ydCB7IE91dHNpZGVDbGljayBhcyBPLCBTY3JvbGxiYXIgYXMgUywgZXZlbnRQYXRoIGFzIGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=