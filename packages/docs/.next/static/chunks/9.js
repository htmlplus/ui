(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-switch.entry.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-switch.entry.js ***!
  \************************************************************************************************/
/*! exports provided: plus_switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_switch", function() { return Switch; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-config-5cbf6bc5.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const switchCss = ":host{--plus-switch-slots-gutter:0.5em;--plus-switch-track-width:3em;--plus-switch-track-height:1.5em;--plus-switch-track-border:solid 2px gray;--plus-switch-track-radius:1.5em;--plus-switch-track-background:none;--plus-switch-thumb-underlay-width:1.5em;--plus-switch-thumb-underlay-height:1.5em;--plus-switch-thumb-underlay-border:none;--plus-switch-thumb-underlay-radius:50%;--plus-switch-thumb-underlay-background:none;--plus-switch-thumb-underlay-offset:0px;--plus-switch-thumb-underlay-transition:0.3s;--plus-switch-thumb-width:75%;--plus-switch-thumb-height:75%;--plus-switch-thumb-border:none;--plus-switch-thumb-radius:50%;--plus-switch-thumb-background:gray}:host{display:inline-block}:host>div{display:inline-flex;align-items:center}:host .track{width:var(--plus-switch-track-width);height:var(--plus-switch-track-height);border:var(--plus-switch-track-border);background:var(--plus-switch-track-background);border-radius:var(--plus-switch-track-radius);position:relative;display:inline-flex;flex-direction:inherit;flex-wrap:nowrap;justify-content:space-between;align-items:center;user-select:none}:host .slot.on{margin-right:var(--plus-switch-slots-gutter-start);margin-left:var(--plus-switch-slots-gutter-end)}:host .slot.off{margin-right:var(--plus-switch-slots-gutter-end);margin-left:var(--plus-switch-slots-gutter-start)}:host .thumb-underlay{width:var(--plus-switch-thumb-underlay-width);height:var(--plus-switch-thumb-underlay-height);border-radius:var(--plus-switch-thumb-underlay-radius);border:var(--plus-switch-thumb-underlay-border);background-color:var(--plus-switch-thumb-underlay-background);transition:var(--plus-switch-thumb-underlay-transition);position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}:host .thumb{width:var(--plus-switch-thumb-width);height:var(--plus-switch-thumb-height);border-radius:var(--plus-switch-thumb-radius);border:var(--plus-switch-thumb-border);background-color:var(--plus-switch-thumb-background)}:host([checked]:not([checked=false])){--plus-switch-track-border:solid 2px black;--plus-switch-thumb-background:black}:host([disabled]:not([disabled=false])){opacity:0.5}:host([reverse]:not([reverse=false]))>div{flex-direction:row-reverse}:host .slot,:host([inset]:not([inset=false])[reverse]:not([reverse=false])) .slot{--plus-switch-slots-gutter-start:0;--plus-switch-slots-gutter-end:var(--plus-switch-slots-gutter)}:host([inset]:not([inset=false])) .slot,:host([reverse]:not([reverse=false])) .slot{--plus-switch-slots-gutter-start:var(--plus-switch-slots-gutter);--plus-switch-slots-gutter-end:0}:host .thumb-underlay,:host([checked]:not([checked=false])[reverse]:not([reverse=false])) .thumb-underlay{left:var(--plus-switch-thumb-underlay-offset);transform:translateX(0)}:host([checked]:not([checked=false])) .thumb-underlay,:host([reverse]:not([reverse=false])) .thumb-underlay{left:calc(100% - var(--plus-switch-thumb-underlay-offset));transform:translateX(-100%)}";

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
const Switch = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusChange = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusChange", 7);
  }
  get inactiveElement() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slot off" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "off" })));
  }
  get activeElement() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "slot on" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "on" })));
  }
  get handleElement() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "thumb-underlay" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "thumb" })));
  }
  handler(event) {
    event.preventDefault();
    if (this.disabled)
      return;
    this.checked = !this.checked;
    this.plusChange.emit();
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "switch", "aria-checked": `${!!this.checked}`, "aria-disabled": `${!!this.disabled}`, onClick: (event) => this.handler(event), onKeyPress: (event) => this.handler(event) }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, !this.inset && this.inactiveElement, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "track" }, this.inset && this.inactiveElement, this.handleElement, this.inset && this.activeElement), !this.inset && this.activeElement)));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
__decorate([
  Object(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_1__["G"])('switch')
], Switch.prototype, "config", void 0);
Switch.style = switchCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1zd2l0Y2guZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvcmVhY3Qvbm9kZV9tb2R1bGVzL0BodG1scGx1cy9jb3JlL2Rpc3QvZXNtL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7OztBQ2hDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RztBQUM3QztBQUMvQjs7QUFFakMseUJBQXlCLGlDQUFpQyw4QkFBOEIsaUNBQWlDLDBDQUEwQyxpQ0FBaUMsb0NBQW9DLHlDQUF5QywwQ0FBMEMseUNBQXlDLHdDQUF3Qyw2Q0FBNkMsd0NBQXdDLDZDQUE2Qyw4QkFBOEIsK0JBQStCLGdDQUFnQywrQkFBK0Isb0NBQW9DLE1BQU0scUJBQXFCLFVBQVUsb0JBQW9CLG1CQUFtQixhQUFhLHFDQUFxQyx1Q0FBdUMsdUNBQXVDLCtDQUErQyw4Q0FBOEMsa0JBQWtCLG9CQUFvQix1QkFBdUIsaUJBQWlCLDhCQUE4QixtQkFBbUIsaUJBQWlCLGVBQWUsbURBQW1ELGdEQUFnRCxnQkFBZ0IsaURBQWlELGtEQUFrRCxzQkFBc0IsOENBQThDLGdEQUFnRCx1REFBdUQsZ0RBQWdELDhEQUE4RCx3REFBd0Qsa0JBQWtCLGFBQWEsbUJBQW1CLHVCQUF1QixVQUFVLGFBQWEscUNBQXFDLHVDQUF1Qyw4Q0FBOEMsdUNBQXVDLHFEQUFxRCxzQ0FBc0MsMkNBQTJDLHFDQUFxQyx3Q0FBd0MsWUFBWSwwQ0FBMEMsMkJBQTJCLGtGQUFrRixtQ0FBbUMsK0RBQStELG9GQUFvRixpRUFBaUUsaUNBQWlDLDBHQUEwRyw4Q0FBOEMsd0JBQXdCLDRHQUE0RywyREFBMkQsNEJBQTRCOztBQUUvNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCLHNCQUFzQiw0REFBVztBQUNqQztBQUNBO0FBQ0EsWUFBWSw0REFBQyxTQUFTLG9CQUFvQixFQUFFLDREQUFDLFVBQVUsY0FBYztBQUNyRTtBQUNBO0FBQ0EsWUFBWSw0REFBQyxTQUFTLG1CQUFtQixFQUFFLDREQUFDLFVBQVUsYUFBYTtBQUNuRTtBQUNBO0FBQ0EsWUFBWSw0REFBQyxTQUFTLDBCQUEwQixFQUFFLDREQUFDLFNBQVMsaUJBQWlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQUMsQ0FBQyxvREFBSSxHQUFHLG9DQUFvQyxlQUFlLHVCQUF1QixnQkFBZ0Isd0ZBQXdGLEVBQUUsNERBQUMsbURBQW1ELDREQUFDLFNBQVMsaUJBQWlCO0FBQ3hSO0FBQ0EsZUFBZSxRQUFRLDREQUFVLE9BQU87QUFDeEM7QUFDQTtBQUNBLEVBQUUsb0VBQVk7QUFDZDtBQUNBOztBQUVpQzs7Ozs7Ozs7Ozs7OztBQy9DakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdMT0JBTF9DT05GSUdfTkFNRSA9ICdodG1scGx1cyc7XHJcbmNvbnN0IEJSRUFLUE9JTlRTID0ge1xyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzYsXHJcbiAgbWQ6IDc2OCxcclxuICBsZzogOTkyLFxyXG4gIHhsOiAxMjAwLFxyXG4gIHh4bDogMTQwMFxyXG59O1xuXG5mdW5jdGlvbiBHbG9iYWxDb25maWcobmFtZXNwYWNlLCBpbml0aWFsID0ge30pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGluc3RhbmNlLCBuYW1lKSB7XHJcbiAgICBjb25zdCBjb25uZWN0ZWQgPSBpbnN0YW5jZS5jb25uZWN0ZWRDYWxsYmFjaztcclxuICAgIGluc3RhbmNlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB3aW5kb3dbR0xPQkFMX0NPTkZJR19OQU1FXSB8fCB7fTtcclxuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbmZpZy5jb21wb25lbnRzIHx8IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzW25hbWVzcGFjZV0gfHwge307XHJcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29tcG9uZW50W2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAodGhpc1trZXldICE9PSBpbml0aWFsW2tleV0pXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0ZWQgJiYgY29ubmVjdGVkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgfTtcclxufVxuXG5leHBvcnQgeyBCUkVBS1BPSU5UUyBhcyBCLCBHbG9iYWxDb25maWcgYXMgRyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuaW1wb3J0IHsgRyBhcyBHbG9iYWxDb25maWcgfSBmcm9tICcuL2dsb2JhbC1jb25maWctNWNiZjZiYzUuanMnO1xuaW1wb3J0ICcuL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyc7XG5cbmNvbnN0IHN3aXRjaENzcyA9IFwiOmhvc3R7LS1wbHVzLXN3aXRjaC1zbG90cy1ndXR0ZXI6MC41ZW07LS1wbHVzLXN3aXRjaC10cmFjay13aWR0aDozZW07LS1wbHVzLXN3aXRjaC10cmFjay1oZWlnaHQ6MS41ZW07LS1wbHVzLXN3aXRjaC10cmFjay1ib3JkZXI6c29saWQgMnB4IGdyYXk7LS1wbHVzLXN3aXRjaC10cmFjay1yYWRpdXM6MS41ZW07LS1wbHVzLXN3aXRjaC10cmFjay1iYWNrZ3JvdW5kOm5vbmU7LS1wbHVzLXN3aXRjaC10aHVtYi11bmRlcmxheS13aWR0aDoxLjVlbTstLXBsdXMtc3dpdGNoLXRodW1iLXVuZGVybGF5LWhlaWdodDoxLjVlbTstLXBsdXMtc3dpdGNoLXRodW1iLXVuZGVybGF5LWJvcmRlcjpub25lOy0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktcmFkaXVzOjUwJTstLXBsdXMtc3dpdGNoLXRodW1iLXVuZGVybGF5LWJhY2tncm91bmQ6bm9uZTstLXBsdXMtc3dpdGNoLXRodW1iLXVuZGVybGF5LW9mZnNldDowcHg7LS1wbHVzLXN3aXRjaC10aHVtYi11bmRlcmxheS10cmFuc2l0aW9uOjAuM3M7LS1wbHVzLXN3aXRjaC10aHVtYi13aWR0aDo3NSU7LS1wbHVzLXN3aXRjaC10aHVtYi1oZWlnaHQ6NzUlOy0tcGx1cy1zd2l0Y2gtdGh1bWItYm9yZGVyOm5vbmU7LS1wbHVzLXN3aXRjaC10aHVtYi1yYWRpdXM6NTAlOy0tcGx1cy1zd2l0Y2gtdGh1bWItYmFja2dyb3VuZDpncmF5fTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0PmRpdntkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAudHJhY2t7d2lkdGg6dmFyKC0tcGx1cy1zd2l0Y2gtdHJhY2std2lkdGgpO2hlaWdodDp2YXIoLS1wbHVzLXN3aXRjaC10cmFjay1oZWlnaHQpO2JvcmRlcjp2YXIoLS1wbHVzLXN3aXRjaC10cmFjay1ib3JkZXIpO2JhY2tncm91bmQ6dmFyKC0tcGx1cy1zd2l0Y2gtdHJhY2stYmFja2dyb3VuZCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1wbHVzLXN3aXRjaC10cmFjay1yYWRpdXMpO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleC1kaXJlY3Rpb246aW5oZXJpdDtmbGV4LXdyYXA6bm93cmFwO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt1c2VyLXNlbGVjdDpub25lfTpob3N0IC5zbG90Lm9ue21hcmdpbi1yaWdodDp2YXIoLS1wbHVzLXN3aXRjaC1zbG90cy1ndXR0ZXItc3RhcnQpO21hcmdpbi1sZWZ0OnZhcigtLXBsdXMtc3dpdGNoLXNsb3RzLWd1dHRlci1lbmQpfTpob3N0IC5zbG90Lm9mZnttYXJnaW4tcmlnaHQ6dmFyKC0tcGx1cy1zd2l0Y2gtc2xvdHMtZ3V0dGVyLWVuZCk7bWFyZ2luLWxlZnQ6dmFyKC0tcGx1cy1zd2l0Y2gtc2xvdHMtZ3V0dGVyLXN0YXJ0KX06aG9zdCAudGh1bWItdW5kZXJsYXl7d2lkdGg6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktd2lkdGgpO2hlaWdodDp2YXIoLS1wbHVzLXN3aXRjaC10aHVtYi11bmRlcmxheS1oZWlnaHQpO2JvcmRlci1yYWRpdXM6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktcmFkaXVzKTtib3JkZXI6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktYm9yZGVyKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXBsdXMtc3dpdGNoLXRodW1iLXVuZGVybGF5LWJhY2tncm91bmQpO3RyYW5zaXRpb246dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktdHJhbnNpdGlvbik7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3otaW5kZXg6MX06aG9zdCAudGh1bWJ7d2lkdGg6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItd2lkdGgpO2hlaWdodDp2YXIoLS1wbHVzLXN3aXRjaC10aHVtYi1oZWlnaHQpO2JvcmRlci1yYWRpdXM6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItcmFkaXVzKTtib3JkZXI6dmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItYm9yZGVyKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXBsdXMtc3dpdGNoLXRodW1iLWJhY2tncm91bmQpfTpob3N0KFtjaGVja2VkXTpub3QoW2NoZWNrZWQ9ZmFsc2VdKSl7LS1wbHVzLXN3aXRjaC10cmFjay1ib3JkZXI6c29saWQgMnB4IGJsYWNrOy0tcGx1cy1zd2l0Y2gtdGh1bWItYmFja2dyb3VuZDpibGFja306aG9zdChbZGlzYWJsZWRdOm5vdChbZGlzYWJsZWQ9ZmFsc2VdKSl7b3BhY2l0eTowLjV9Omhvc3QoW3JldmVyc2VdOm5vdChbcmV2ZXJzZT1mYWxzZV0pKT5kaXZ7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QgLnNsb3QsOmhvc3QoW2luc2V0XTpub3QoW2luc2V0PWZhbHNlXSlbcmV2ZXJzZV06bm90KFtyZXZlcnNlPWZhbHNlXSkpIC5zbG90ey0tcGx1cy1zd2l0Y2gtc2xvdHMtZ3V0dGVyLXN0YXJ0OjA7LS1wbHVzLXN3aXRjaC1zbG90cy1ndXR0ZXItZW5kOnZhcigtLXBsdXMtc3dpdGNoLXNsb3RzLWd1dHRlcil9Omhvc3QoW2luc2V0XTpub3QoW2luc2V0PWZhbHNlXSkpIC5zbG90LDpob3N0KFtyZXZlcnNlXTpub3QoW3JldmVyc2U9ZmFsc2VdKSkgLnNsb3R7LS1wbHVzLXN3aXRjaC1zbG90cy1ndXR0ZXItc3RhcnQ6dmFyKC0tcGx1cy1zd2l0Y2gtc2xvdHMtZ3V0dGVyKTstLXBsdXMtc3dpdGNoLXNsb3RzLWd1dHRlci1lbmQ6MH06aG9zdCAudGh1bWItdW5kZXJsYXksOmhvc3QoW2NoZWNrZWRdOm5vdChbY2hlY2tlZD1mYWxzZV0pW3JldmVyc2VdOm5vdChbcmV2ZXJzZT1mYWxzZV0pKSAudGh1bWItdW5kZXJsYXl7bGVmdDp2YXIoLS1wbHVzLXN3aXRjaC10aHVtYi11bmRlcmxheS1vZmZzZXQpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTpob3N0KFtjaGVja2VkXTpub3QoW2NoZWNrZWQ9ZmFsc2VdKSkgLnRodW1iLXVuZGVybGF5LDpob3N0KFtyZXZlcnNlXTpub3QoW3JldmVyc2U9ZmFsc2VdKSkgLnRodW1iLXVuZGVybGF5e2xlZnQ6Y2FsYygxMDAlIC0gdmFyKC0tcGx1cy1zd2l0Y2gtdGh1bWItdW5kZXJsYXktb2Zmc2V0KSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpfVwiO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBTd2l0Y2ggPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIHRoaXMucGx1c0NoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwicGx1c0NoYW5nZVwiLCA3KTtcclxuICB9XHJcbiAgZ2V0IGluYWN0aXZlRWxlbWVudCgpIHtcclxuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcInNsb3Qgb2ZmXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcIm9mZlwiIH0pKSk7XHJcbiAgfVxyXG4gIGdldCBhY3RpdmVFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2xvdCBvblwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJvblwiIH0pKSk7XHJcbiAgfVxyXG4gIGdldCBoYW5kbGVFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGh1bWItdW5kZXJsYXlcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGh1bWJcIiB9KSkpO1xyXG4gIH1cclxuICBoYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLnBsdXNDaGFuZ2UuZW1pdCgpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInN3aXRjaFwiLCBcImFyaWEtY2hlY2tlZFwiOiBgJHshIXRoaXMuY2hlY2tlZH1gLCBcImFyaWEtZGlzYWJsZWRcIjogYCR7ISF0aGlzLmRpc2FibGVkfWAsIG9uQ2xpY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVyKGV2ZW50KSwgb25LZXlQcmVzczogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZXIoZXZlbnQpIH0sIGgoXCJkaXZcIiwgbnVsbCwgIXRoaXMuaW5zZXQgJiYgdGhpcy5pbmFjdGl2ZUVsZW1lbnQsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFja1wiIH0sIHRoaXMuaW5zZXQgJiYgdGhpcy5pbmFjdGl2ZUVsZW1lbnQsIHRoaXMuaGFuZGxlRWxlbWVudCwgdGhpcy5pbnNldCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQpLCAhdGhpcy5pbnNldCAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQpKSk7XHJcbiAgfVxyXG4gIGdldCAkaG9zdCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgR2xvYmFsQ29uZmlnKCdzd2l0Y2gnKVxyXG5dLCBTd2l0Y2gucHJvdG90eXBlLCBcImNvbmZpZ1wiLCB2b2lkIDApO1xyXG5Td2l0Y2guc3R5bGUgPSBzd2l0Y2hDc3M7XG5cbmV4cG9ydCB7IFN3aXRjaCBhcyBwbHVzX3N3aXRjaCB9O1xuIiwiY29uc3QgZXZlbnRQYXRoID0gKGV2ZW50KSA9PiB7XHJcbiAgcmV0dXJuIGV2ZW50LnBhdGggfHwgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKSk7XHJcbn07XG5cbmNsYXNzIE91dHNpZGVDbGljayB7XHJcbiAgc3RhdGljIGFkZChlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoID0gZXZlbnRQYXRoKGV2ZW50KTtcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXRoLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZWxlbWVudCk7XHJcbiAgICAgIGlmICgxIDwgaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRhcmdldHMuc2V0KGVsZW1lbnQsIGZuKTtcclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMudGFyZ2V0cy5nZXQoZWxlbWVudCk7XHJcbiAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5kZWxldGUoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbk91dHNpZGVDbGljay50YXJnZXRzID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTY3JvbGxiYXIge1xyXG4gIHN0YXRpYyBnZXQgaXNSVEwoKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGNvbnN0IHdpZHRoID0gZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIHdpZHRoO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplID4gMSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBpc092ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKCFpc092ZXJmbG93aW5nKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBvdmVyZmxvdzogZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyxcclxuICAgICAgW3Byb3BlcnR5XTogZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0sXHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXNldChrZXkpIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIGlmICh0aGlzLmtleXMuc2l6ZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVba2V5XSA9IHRoaXMuc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICB9XHJcbn1cclxuU2Nyb2xsYmFyLmtleXMgPSBuZXcgU2V0KCk7XHJcblNjcm9sbGJhci5zdHlsZSA9IHt9O1xuXG5leHBvcnQgeyBPdXRzaWRlQ2xpY2sgYXMgTywgU2Nyb2xsYmFyIGFzIFMsIGV2ZW50UGF0aCBhcyBlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9