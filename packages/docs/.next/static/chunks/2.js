(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js ***!
  \********************************************************************************************/
/*! exports provided: B */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Bind; });
function Bind(target, key, descriptor) {
  let fn = descriptor.value;
  if (typeof fn !== 'function') {
    throw new TypeError(`@boundMethod decorator can only be applied to methods not: ${typeof fn}`);
  }
  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  let definingProperty = false;
  return {
    configurable: true,
    get() {
      // eslint-disable-next-line no-prototype-builtins
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function')
        return fn;
      const boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return boundFn;
        },
        set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set(value) {
      fn = value;
    }
  };
}




/***/ }),

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-intersection.entry.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-intersection.entry.js ***!
  \******************************************************************************************************/
/*! exports provided: plus_intersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_intersection", function() { return Intersection; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const intersectionCss = ":host{display:block}";

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
const Intersection = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusChange = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusChange", 2);
  }
  get option() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };
  }
  callback(entries) {
    const [entry] = entries;
    this.intersecting = entry.isIntersecting;
    this.plusChange.emit(entry);
    if (!this.intersecting || !this.once)
      return;
    this.disconnectedCallback();
  }
  connectedCallback() {
    this.observer = new IntersectionObserver(this.callback, this.option);
    this.observer.observe(Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { intersecting: this.intersecting }, this.intersecting && Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Intersection.prototype, "callback", null);
Intersection.style = intersectionCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1pbnRlcnNlY3Rpb24uZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvcmVhY3Qvbm9kZV9tb2R1bGVzL0BodG1scGx1cy9jb3JlL2Rpc3QvZXNtL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixVQUFVO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ3BDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RztBQUM5RDtBQUNkOztBQUVqQywrQkFBK0IsY0FBYzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCLHNCQUFzQiw0REFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBQyxDQUFDLG9EQUFJLEdBQUcsa0NBQWtDLHVCQUF1Qiw0REFBQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7QUNyRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCaW5kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgbGV0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBAYm91bmRNZXRob2QgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBub3Q6ICR7dHlwZW9mIGZufWApO1xyXG4gIH1cclxuICAvLyBJbiBJRTExIGNhbGxpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5IGhhcyBhIHNpZGUtZWZmZWN0IG9mIGV2YWx1YXRpbmcgdGhlXHJcbiAgLy8gZ2V0dGVyIGZvciB0aGUgcHJvcGVydHkgd2hpY2ggaXMgYmVpbmcgcmVwbGFjZWQuIFRoaXMgY2F1c2VzIGluZmluaXRlXHJcbiAgLy8gcmVjdXJzaW9uIGFuZCBhbiBcIk91dCBvZiBzdGFjayBzcGFjZVwiIGVycm9yLlxyXG4gIGxldCBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldCgpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xyXG4gICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgICBjb25zdCBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIGJvdW5kRm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgIGZuID0gdmFsdWU7XHJcbiAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGJvdW5kRm47XHJcbiAgICB9LFxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgIGZuID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxuXG5leHBvcnQgeyBCaW5kIGFzIEIgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZyBhcyBnZXRFbGVtZW50LCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LTYxOGI3ZmM4LmpzJztcbmltcG9ydCB7IEIgYXMgQmluZCB9IGZyb20gJy4vYmluZC1kYWRjNDRkZC5qcyc7XG5pbXBvcnQgJy4vc2Nyb2xsYmFyLThkMTg4NTRlLmpzJztcblxuY29uc3QgaW50ZXJzZWN0aW9uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrfVwiO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBJbnRlcnNlY3Rpb24gPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIHRoaXMucGx1c0NoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwicGx1c0NoYW5nZVwiLCAyKTtcclxuICB9XHJcbiAgZ2V0IG9wdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvb3Q6IHRoaXMucm9vdCxcclxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5yb290TWFyZ2luLFxyXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMudGhyZXNob2xkLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY2FsbGJhY2soZW50cmllcykge1xyXG4gICAgY29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICB0aGlzLmludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nO1xyXG4gICAgdGhpcy5wbHVzQ2hhbmdlLmVtaXQoZW50cnkpO1xyXG4gICAgaWYgKCF0aGlzLmludGVyc2VjdGluZyB8fCAhdGhpcy5vbmNlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgfVxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmNhbGxiYWNrLCB0aGlzLm9wdGlvbik7XHJcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZ2V0RWxlbWVudCh0aGlzKSk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgKF9hID0gdGhpcy5vYnNlcnZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIHsgaW50ZXJzZWN0aW5nOiB0aGlzLmludGVyc2VjdGluZyB9LCB0aGlzLmludGVyc2VjdGluZyAmJiBoKFwic2xvdFwiLCBudWxsKSkpO1xyXG4gIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgQmluZFxyXG5dLCBJbnRlcnNlY3Rpb24ucHJvdG90eXBlLCBcImNhbGxiYWNrXCIsIG51bGwpO1xyXG5JbnRlcnNlY3Rpb24uc3R5bGUgPSBpbnRlcnNlY3Rpb25Dc3M7XG5cbmV4cG9ydCB7IEludGVyc2VjdGlvbiBhcyBwbHVzX2ludGVyc2VjdGlvbiB9O1xuIiwiY29uc3QgZXZlbnRQYXRoID0gKGV2ZW50KSA9PiB7XHJcbiAgcmV0dXJuIGV2ZW50LnBhdGggfHwgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKSk7XHJcbn07XG5cbmNsYXNzIE91dHNpZGVDbGljayB7XHJcbiAgc3RhdGljIGFkZChlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoID0gZXZlbnRQYXRoKGV2ZW50KTtcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXRoLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZWxlbWVudCk7XHJcbiAgICAgIGlmICgxIDwgaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRhcmdldHMuc2V0KGVsZW1lbnQsIGZuKTtcclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMudGFyZ2V0cy5nZXQoZWxlbWVudCk7XHJcbiAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5kZWxldGUoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbk91dHNpZGVDbGljay50YXJnZXRzID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTY3JvbGxiYXIge1xyXG4gIHN0YXRpYyBnZXQgaXNSVEwoKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGNvbnN0IHdpZHRoID0gZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIHdpZHRoO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplID4gMSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBpc092ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKCFpc092ZXJmbG93aW5nKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBvdmVyZmxvdzogZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyxcclxuICAgICAgW3Byb3BlcnR5XTogZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0sXHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXNldChrZXkpIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIGlmICh0aGlzLmtleXMuc2l6ZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVba2V5XSA9IHRoaXMuc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICB9XHJcbn1cclxuU2Nyb2xsYmFyLmtleXMgPSBuZXcgU2V0KCk7XHJcblNjcm9sbGJhci5zdHlsZSA9IHt9O1xuXG5leHBvcnQgeyBPdXRzaWRlQ2xpY2sgYXMgTywgU2Nyb2xsYmFyIGFzIFMsIGV2ZW50UGF0aCBhcyBlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9