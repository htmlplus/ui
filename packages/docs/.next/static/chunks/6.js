(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-aspect-ratio.entry.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-aspect-ratio.entry.js ***!
  \******************************************************************************************************/
/*! exports provided: plus_aspect_ratio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_aspect_ratio", function() { return AspectRatio; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-config-5cbf6bc5.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const aspectRatioCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:block;position:relative;overflow:hidden;width:100%}::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%}";

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
const AspectRatio = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  get ratio() {
    if (typeof this.value === 'undefined')
      return;
    if (typeof this.value === 'string') {
      const sections = this.value.split('/').map((item) => parseInt(item));
      const value = sections[0] / sections[1] || 1;
      return value;
    }
    return this.value;
  }
  get style() {
    if (!this.value)
      return;
    return {
      paddingTop: `${100 / this.ratio}%`
    };
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.style && Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sizer", style: this.style }), Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
__decorate([
  Object(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__["G"])('aspectRatio')
], AspectRatio.prototype, "config", void 0);
AspectRatio.style = aspectRatioCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1hc3BlY3QtcmF0aW8uZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvcmVhY3Qvbm9kZV9tb2R1bGVzL0BodG1scGx1cy9jb3JlL2Rpc3QvZXNtL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7OztBQ2hDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRTtBQUNWO0FBQy9COztBQUVqQyw2Q0FBNkMsc0JBQXNCLGlDQUFpQyxzQkFBc0IsTUFBTSxjQUFjLGtCQUFrQixnQkFBZ0IsV0FBVyxhQUFhLGtCQUFrQixNQUFNLE9BQU8sV0FBVyxZQUFZOztBQUU5UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFDLENBQUMsb0RBQUksc0JBQXNCLDREQUFDLFNBQVMsb0NBQW9DLEdBQUcsNERBQUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRUFBWTtBQUNkO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7O0FDOUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQiLCJmaWxlIjoic3RhdGljL2NodW5rcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0xPQkFMX0NPTkZJR19OQU1FID0gJ2h0bWxwbHVzJztcclxuY29uc3QgQlJFQUtQT0lOVFMgPSB7XHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NixcclxuICBtZDogNzY4LFxyXG4gIGxnOiA5OTIsXHJcbiAgeGw6IDEyMDAsXHJcbiAgeHhsOiAxNDAwXHJcbn07XG5cbmZ1bmN0aW9uIEdsb2JhbENvbmZpZyhuYW1lc3BhY2UsIGluaXRpYWwgPSB7fSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaW5zdGFuY2UsIG5hbWUpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RlZCA9IGluc3RhbmNlLmNvbm5lY3RlZENhbGxiYWNrO1xyXG4gICAgaW5zdGFuY2UuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvd1tHTE9CQUxfQ09ORklHX05BTUVdIHx8IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnRzID0gY29uZmlnLmNvbXBvbmVudHMgfHwge307XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbbmFtZXNwYWNlXSB8fCB7fTtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnRba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICh0aGlzW2tleV0gIT09IGluaXRpYWxba2V5XSlcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3RlZCAmJiBjb25uZWN0ZWQuYmluZCh0aGlzKSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJSRUFLUE9JTlRTIGFzIEIsIEdsb2JhbENvbmZpZyBhcyBHIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuaW1wb3J0IHsgRyBhcyBHbG9iYWxDb25maWcgfSBmcm9tICcuL2dsb2JhbC1jb25maWctNWNiZjZiYzUuanMnO1xuaW1wb3J0ICcuL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyc7XG5cbmNvbnN0IGFzcGVjdFJhdGlvQ3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCV9OjpzbG90dGVkKCope3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfVwiO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBBc3BlY3RSYXRpbyA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICBnZXQgcmF0aW8oKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy52YWx1ZS5zcGxpdCgnLycpLm1hcCgoaXRlbSkgPT4gcGFyc2VJbnQoaXRlbSkpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlY3Rpb25zWzBdIC8gc2VjdGlvbnNbMV0gfHwgMTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFkZGluZ1RvcDogYCR7MTAwIC8gdGhpcy5yYXRpb30lYFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIHRoaXMuc3R5bGUgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcInNpemVyXCIsIHN0eWxlOiB0aGlzLnN0eWxlIH0pLCBoKFwic2xvdFwiLCBudWxsKSkpO1xyXG4gIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgR2xvYmFsQ29uZmlnKCdhc3BlY3RSYXRpbycpXHJcbl0sIEFzcGVjdFJhdGlvLnByb3RvdHlwZSwgXCJjb25maWdcIiwgdm9pZCAwKTtcclxuQXNwZWN0UmF0aW8uc3R5bGUgPSBhc3BlY3RSYXRpb0NzcztcblxuZXhwb3J0IHsgQXNwZWN0UmF0aW8gYXMgcGx1c19hc3BlY3RfcmF0aW8gfTtcbiIsImNvbnN0IGV2ZW50UGF0aCA9IChldmVudCkgPT4ge1xyXG4gIHJldHVybiBldmVudC5wYXRoIHx8IChldmVudC5jb21wb3NlZFBhdGggJiYgZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xyXG59O1xuXG5jbGFzcyBPdXRzaWRlQ2xpY2sge1xyXG4gIHN0YXRpYyBhZGQoZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xyXG4gICAgY29uc3QgZm4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgcGF0aCA9IGV2ZW50UGF0aChldmVudCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGF0aC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGVsZW1lbnQpO1xyXG4gICAgICBpZiAoMSA8IGluZGV4KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm4sIHRydWUpO1xyXG4gICAgdGhpcy50YXJnZXRzLnNldChlbGVtZW50LCBmbik7XHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmUoZWxlbWVudCkge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLnRhcmdldHMuZ2V0KGVsZW1lbnQpO1xyXG4gICAgaWYgKCFjYWxsYmFjaylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjaywgdHJ1ZSk7XHJcbiAgICB0aGlzLnRhcmdldHMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5PdXRzaWRlQ2xpY2sudGFyZ2V0cyA9IG5ldyBNYXAoKTtcblxuY2xhc3MgU2Nyb2xsYmFyIHtcclxuICBzdGF0aWMgZ2V0IGlzUlRMKCkge1xyXG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUod2luZG93LmRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcclxuICB9XHJcbiAgc3RhdGljIGdldCB3aWR0aCgpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XHJcbiAgICBkaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBjb25zdCB3aWR0aCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgIHJldHVybiB3aWR0aDtcclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZShrZXkpIHtcclxuICAgIHRoaXMua2V5cy5hZGQoa2V5KTtcclxuICAgIGlmICh0aGlzLmtleXMuc2l6ZSA+IDEpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgcmVjdC5yaWdodCkgPCB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGlmICghaXNPdmVyZmxvd2luZylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmlzUlRMID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xyXG4gICAgdGhpcy5zdHlsZSA9IHtcclxuICAgICAgb3ZlcmZsb3c6IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3csXHJcbiAgICAgIFtwcm9wZXJ0eV06IGRvY3VtZW50LmJvZHkuc3R5bGVbcHJvcGVydHldLFxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy53aWR0aDtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xyXG4gIH1cclxuICBzdGF0aWMgcmVzZXQoa2V5KSB7XHJcbiAgICB0aGlzLmtleXMuZGVsZXRlKGtleSk7XHJcbiAgICBpZiAodGhpcy5rZXlzLnNpemUpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxlKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW2tleV0gPSB0aGlzLnN0eWxlW2tleV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0ge307XHJcbiAgfVxyXG59XHJcblNjcm9sbGJhci5rZXlzID0gbmV3IFNldCgpO1xyXG5TY3JvbGxiYXIuc3R5bGUgPSB7fTtcblxuZXhwb3J0IHsgT3V0c2lkZUNsaWNrIGFzIE8sIFNjcm9sbGJhciBhcyBTLCBldmVudFBhdGggYXMgZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==