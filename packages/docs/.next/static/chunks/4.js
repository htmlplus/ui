(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-tabs_5.entry.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-tabs_5.entry.js ***!
  \************************************************************************************************/
/*! exports provided: plus_tabs, plus_tabs_bar, plus_tabs_panel, plus_tabs_panels, plus_tabs_tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tabs_bar", function() { return TabsBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tabs_panel", function() { return TabsPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tabs_panels", function() { return TabsPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tabs_tab", function() { return TabsTab; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




class Channel {
  constructor() {
    this.callbacks = {};
  }
  send(name, data, reverse) {
    name = reverse ? `${name}:reverse` : name;
    if (!Array.isArray(this.callbacks[name]))
      return;
    this.callbacks[name].forEach((callback) => callback(data));
  }
  on(name, callback, reverse) {
    if (!name)
      return;
    name = reverse ? `${name}:reverse` : name;
    if (!Array.isArray(this.callbacks[name])) {
      this.callbacks[name] = [];
    }
    this.callbacks[name].push(callback);
  }
  off(name, callback, reverse) {
    name = reverse ? `${name}:reverse` : name;
    const callbacks = this.callbacks[name] || [];
    const index = callbacks.findIndex((item) => item === callback);
    if (index < 0)
      return;
    this.callbacks[name].splice(index, 1);
    if (!this.callbacks[name].length)
      delete this.callbacks[name];
  }
  replace(current, next, callback, reverse) {
    this.off(current, callback, reverse);
    this.on(next, callback, reverse);
  }
}

const createTunnel = (defaultState, consumerRender) => {
  const listeners = new Map();
  const states = new Map();
  const targets = new Map();
  const update = (props, instance, scope) => {
    if (scope) {
      const element = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(scope);
      if (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance).closest(element.nodeName) !== element)
        return;
    }
    const state = states.get(scope) || defaultState;
    [...props].forEach(fieldName => {
      instance[fieldName] = state[fieldName];
    });
  };
  const subscribe = (instance, props) => {
    if (!listeners.has(instance)) {
      const scope = (() => {
        const keys = Array.from(states.keys());
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const parent = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(key);
          if (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance).closest(parent.nodeName) !== parent)
            continue;
          return key;
        }
      })();
      listeners.set(instance, props);
      update(props, instance, scope);
    }
    return () => {
      listeners.delete(instance);
    };
  };
  const Consumer = ({}, children) => {
    return consumerRender(subscribe, children[0]);
  };
  const Inject = () => (instance, key) => {
    const prototype = instance;
    const target = targets.get(instance);
    const keys = target ? [...target.keys, key] : [key];
    const connected = target ? target.connected : prototype.connectedCallback;
    const disconnected = target ? target.disconnected : prototype.disconnectedCallback;
    targets.set(instance, {
      keys,
      connected,
      disconnected
    });
    prototype.connectedCallback = function () {
      subscribe(this, keys);
      if (!connected)
        return;
      return connected.call(this);
    };
    prototype.disconnectedCallback = function () {
      listeners.delete(this);
      if (!disconnected)
        return;
      disconnected.call(this);
    };
  };
  const Provider = ({ state, scope, disabled }, children) => {
    if (disabled)
      return children;
    states.set(scope, state);
    listeners.forEach((a, b) => update(a, b, scope));
    return children;
  };
  return {
    Consumer,
    Inject,
    Provider
  };
};

const channel = new Channel();

const TabsTunnel = createTunnel({}, (subscribe, child) => Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("plus-tunnel-consumer", { subscribe: subscribe, renderer: child }));

const tabsCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:flex;flex-direction:column}:host([vertical]:not([vertical=false])){flex-direction:row}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar[reverse]:not([reverse=false])){flex-direction:column-reverse}";

const Tabs = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.wowChange = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "wowChange", 3);
    this.request = (value) => {
      const event = this.wowChange.emit(value);
      if (event.defaultPrevented)
        return;
      this.value = value;
      channel.send(this.connector, this.value);
    };
  }
  get state() {
    return {
      active: this.value,
      request: this.request
    };
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TabsTunnel.Provider, { state: this.state, scope: this }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
};
Tabs.style = tabsCss;

const tabsBarCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{flex:0 0 auto;display:flex;overflow:auto}:host([reverse]:not([reverse=false])){flex-direction:row-reverse}:host([grow]:not([grow=false])) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=start]),:host([justify=end][reverse]:not([reverse=false])){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]:not([reverse=false])){justify-content:flex-end}";

const TabsBar = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * TODO
     */
    this.justify = 'start';
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "tablist" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
TabsBar.style = tabsBarCss;

const tabsPanelCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:none}:host([active]:not([active=false])){display:block}";

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
const TabsPanel = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { active: this.active && this.active === this.value }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
__decorate([
  TabsTunnel.Inject()
], TabsPanel.prototype, "active", void 0);
TabsPanel.style = tabsPanelCss;

const tabsPanelsCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:block}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const TabsPanels = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  get state() {
    return {
      active: this.active
    };
  }
  update(active) {
    this.active = active;
  }
  watcher(newValue, oldValue) {
    channel.off(oldValue, this.update);
    channel.on(newValue, this.update);
  }
  componentDidLoad() {
    channel.on(this.connector, this.update);
  }
  disconnectedCallback() {
    channel.off(this.connector, this.update);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TabsTunnel.Provider, { disabled: !this.connector, scope: this, state: this.state }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  static get watchers() { return {
    "connector": ["watcher"]
  }; }
};
__decorate$1([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], TabsPanels.prototype, "update", null);
TabsPanels.style = tabsPanelsCss;

const tabsTabCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:flex;align-items:center;justify-content:center;user-select:none;padding:0.5rem 1rem}:host([disabled]:not([disabled=false])) span{opacity:0.5}:host([active]:not([active=false])){background-color:#d2d2d2}";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const TabsTab = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { active: this.active && this.active === this.value, onClick: () => !this.disabled && this.request(this.value) }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
};
__decorate$2([
  TabsTunnel.Inject()
], TabsTab.prototype, "active", void 0);
__decorate$2([
  TabsTunnel.Inject()
], TabsTab.prototype, "request", void 0);
TabsTab.style = tabsTabCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy10YWJzXzUuZW50cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvcmVhY3Qvbm9kZV9tb2R1bGVzL0BodG1scGx1cy9jb3JlL2Rpc3QvZXNtL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixVQUFVO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ3BDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZHO0FBQzlEO0FBQ2Q7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBLFlBQVksNERBQUMsQ0FBQyxvREFBSSxHQUFHLCtHQUErRyxFQUFFLDREQUFDLGVBQWUsNERBQUM7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrSTs7Ozs7Ozs7Ozs7OztBQ25RL0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJpbmQodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBsZXQgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEBib3VuZE1ldGhvZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJHt0eXBlb2YgZm59YCk7XHJcbiAgfVxyXG4gIC8vIEluIElFMTEgY2FsbGluZyBPYmplY3QuZGVmaW5lUHJvcGVydHkgaGFzIGEgc2lkZS1lZmZlY3Qgb2YgZXZhbHVhdGluZyB0aGVcclxuICAvLyBnZXR0ZXIgZm9yIHRoZSBwcm9wZXJ0eSB3aGljaCBpcyBiZWluZyByZXBsYWNlZC4gVGhpcyBjYXVzZXMgaW5maW5pdGVcclxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXHJcbiAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICByZXR1cm4ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXHJcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xyXG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgZm4gPSB2YWx1ZTtcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgIH0sXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgZm4gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJpbmQgYXMgQiB9O1xuIiwiaW1wb3J0IHsgZyBhcyBnZXRFbGVtZW50LCBoLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuaW1wb3J0IHsgQiBhcyBCaW5kIH0gZnJvbSAnLi9iaW5kLWRhZGM0NGRkLmpzJztcbmltcG9ydCAnLi9zY3JvbGxiYXItOGQxODg1NGUuanMnO1xuXG5jbGFzcyBDaGFubmVsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XHJcbiAgfVxyXG4gIHNlbmQobmFtZSwgZGF0YSwgcmV2ZXJzZSkge1xyXG4gICAgbmFtZSA9IHJldmVyc2UgPyBgJHtuYW1lfTpyZXZlcnNlYCA6IG5hbWU7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5jYWxsYmFja3NbbmFtZV0pKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmNhbGxiYWNrc1tuYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZGF0YSkpO1xyXG4gIH1cclxuICBvbihuYW1lLCBjYWxsYmFjaywgcmV2ZXJzZSkge1xyXG4gICAgaWYgKCFuYW1lKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBuYW1lID0gcmV2ZXJzZSA/IGAke25hbWV9OnJldmVyc2VgIDogbmFtZTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmNhbGxiYWNrc1tuYW1lXSkpIHtcclxuICAgICAgdGhpcy5jYWxsYmFja3NbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FsbGJhY2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gIH1cclxuICBvZmYobmFtZSwgY2FsbGJhY2ssIHJldmVyc2UpIHtcclxuICAgIG5hbWUgPSByZXZlcnNlID8gYCR7bmFtZX06cmV2ZXJzZWAgOiBuYW1lO1xyXG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NbbmFtZV0gfHwgW107XHJcbiAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGNhbGxiYWNrKTtcclxuICAgIGlmIChpbmRleCA8IDApXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuY2FsbGJhY2tzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW25hbWVdLmxlbmd0aClcclxuICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW25hbWVdO1xyXG4gIH1cclxuICByZXBsYWNlKGN1cnJlbnQsIG5leHQsIGNhbGxiYWNrLCByZXZlcnNlKSB7XHJcbiAgICB0aGlzLm9mZihjdXJyZW50LCBjYWxsYmFjaywgcmV2ZXJzZSk7XHJcbiAgICB0aGlzLm9uKG5leHQsIGNhbGxiYWNrLCByZXZlcnNlKTtcclxuICB9XHJcbn1cblxuY29uc3QgY3JlYXRlVHVubmVsID0gKGRlZmF1bHRTdGF0ZSwgY29uc3VtZXJSZW5kZXIpID0+IHtcclxuICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XHJcbiAgY29uc3Qgc3RhdGVzID0gbmV3IE1hcCgpO1xyXG4gIGNvbnN0IHRhcmdldHMgPSBuZXcgTWFwKCk7XHJcbiAgY29uc3QgdXBkYXRlID0gKHByb3BzLCBpbnN0YW5jZSwgc2NvcGUpID0+IHtcclxuICAgIGlmIChzY29wZSkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChzY29wZSk7XHJcbiAgICAgIGlmIChnZXRFbGVtZW50KGluc3RhbmNlKS5jbG9zZXN0KGVsZW1lbnQubm9kZU5hbWUpICE9PSBlbGVtZW50KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzLmdldChzY29wZSkgfHwgZGVmYXVsdFN0YXRlO1xyXG4gICAgWy4uLnByb3BzXS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgIGluc3RhbmNlW2ZpZWxkTmFtZV0gPSBzdGF0ZVtmaWVsZE5hbWVdO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBzdWJzY3JpYmUgPSAoaW5zdGFuY2UsIHByb3BzKSA9PiB7XHJcbiAgICBpZiAoIWxpc3RlbmVycy5oYXMoaW5zdGFuY2UpKSB7XHJcbiAgICAgIGNvbnN0IHNjb3BlID0gKCgpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gQXJyYXkuZnJvbShzdGF0ZXMua2V5cygpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRFbGVtZW50KGtleSk7XHJcbiAgICAgICAgICBpZiAoZ2V0RWxlbWVudChpbnN0YW5jZSkuY2xvc2VzdChwYXJlbnQubm9kZU5hbWUpICE9PSBwYXJlbnQpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCk7XHJcbiAgICAgIGxpc3RlbmVycy5zZXQoaW5zdGFuY2UsIHByb3BzKTtcclxuICAgICAgdXBkYXRlKHByb3BzLCBpbnN0YW5jZSwgc2NvcGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29uc3QgQ29uc3VtZXIgPSAoe30sIGNoaWxkcmVuKSA9PiB7XHJcbiAgICByZXR1cm4gY29uc3VtZXJSZW5kZXIoc3Vic2NyaWJlLCBjaGlsZHJlblswXSk7XHJcbiAgfTtcclxuICBjb25zdCBJbmplY3QgPSAoKSA9PiAoaW5zdGFuY2UsIGtleSkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG90eXBlID0gaW5zdGFuY2U7XHJcbiAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzLmdldChpbnN0YW5jZSk7XHJcbiAgICBjb25zdCBrZXlzID0gdGFyZ2V0ID8gWy4uLnRhcmdldC5rZXlzLCBrZXldIDogW2tleV07XHJcbiAgICBjb25zdCBjb25uZWN0ZWQgPSB0YXJnZXQgPyB0YXJnZXQuY29ubmVjdGVkIDogcHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrO1xyXG4gICAgY29uc3QgZGlzY29ubmVjdGVkID0gdGFyZ2V0ID8gdGFyZ2V0LmRpc2Nvbm5lY3RlZCA6IHByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaztcclxuICAgIHRhcmdldHMuc2V0KGluc3RhbmNlLCB7XHJcbiAgICAgIGtleXMsXHJcbiAgICAgIGNvbm5lY3RlZCxcclxuICAgICAgZGlzY29ubmVjdGVkXHJcbiAgICB9KTtcclxuICAgIHByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3Vic2NyaWJlKHRoaXMsIGtleXMpO1xyXG4gICAgICBpZiAoIWNvbm5lY3RlZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHJldHVybiBjb25uZWN0ZWQuY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBwcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxpc3RlbmVycy5kZWxldGUodGhpcyk7XHJcbiAgICAgIGlmICghZGlzY29ubmVjdGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGlzY29ubmVjdGVkLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29uc3QgUHJvdmlkZXIgPSAoeyBzdGF0ZSwgc2NvcGUsIGRpc2FibGVkIH0sIGNoaWxkcmVuKSA9PiB7XHJcbiAgICBpZiAoZGlzYWJsZWQpXHJcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIHN0YXRlcy5zZXQoc2NvcGUsIHN0YXRlKTtcclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChhLCBiKSA9PiB1cGRhdGUoYSwgYiwgc2NvcGUpKTtcclxuICAgIHJldHVybiBjaGlsZHJlbjtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBDb25zdW1lcixcclxuICAgIEluamVjdCxcclxuICAgIFByb3ZpZGVyXHJcbiAgfTtcclxufTtcblxuY29uc3QgY2hhbm5lbCA9IG5ldyBDaGFubmVsKCk7XG5cbmNvbnN0IFRhYnNUdW5uZWwgPSBjcmVhdGVUdW5uZWwoe30sIChzdWJzY3JpYmUsIGNoaWxkKSA9PiBoKFwicGx1cy10dW5uZWwtY29uc3VtZXJcIiwgeyBzdWJzY3JpYmU6IHN1YnNjcmliZSwgcmVuZGVyZXI6IGNoaWxkIH0pKTtcblxuY29uc3QgdGFic0NzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFt2ZXJ0aWNhbF06bm90KFt2ZXJ0aWNhbD1mYWxzZV0pKXtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoW3ZlcnRpY2FsXTpub3QoW3ZlcnRpY2FsPWZhbHNlXSkpIDo6c2xvdHRlZChwbHVzLXRhYnMtYmFyKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW3ZlcnRpY2FsXTpub3QoW3ZlcnRpY2FsPWZhbHNlXSkpIDo6c2xvdHRlZChwbHVzLXRhYnMtYmFyW3JldmVyc2VdOm5vdChbcmV2ZXJzZT1mYWxzZV0pKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX1cIjtcblxuY29uc3QgVGFicyA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gICAgdGhpcy53b3dDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndvd0NoYW5nZVwiLCAzKTtcclxuICAgIHRoaXMucmVxdWVzdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBldmVudCA9IHRoaXMud293Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgY2hhbm5lbC5zZW5kKHRoaXMuY29ubmVjdG9yLCB0aGlzLnZhbHVlKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGl2ZTogdGhpcy52YWx1ZSxcclxuICAgICAgcmVxdWVzdDogdGhpcy5yZXF1ZXN0XHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChUYWJzVHVubmVsLlByb3ZpZGVyLCB7IHN0YXRlOiB0aGlzLnN0YXRlLCBzY29wZTogdGhpcyB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcclxuICB9XHJcbn07XHJcblRhYnMuc3R5bGUgPSB0YWJzQ3NzO1xuXG5jb25zdCB0YWJzQmFyQ3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e2ZsZXg6MCAwIGF1dG87ZGlzcGxheTpmbGV4O292ZXJmbG93OmF1dG99Omhvc3QoW3JldmVyc2VdOm5vdChbcmV2ZXJzZT1mYWxzZV0pKXtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdChbZ3Jvd106bm90KFtncm93PWZhbHNlXSkpIDo6c2xvdHRlZChwbHVzLXRhYnMtdGFiKXtmbGV4LWdyb3c6MX06aG9zdChbanVzdGlmeT1zdGFydF0pLDpob3N0KFtqdXN0aWZ5PWVuZF1bcmV2ZXJzZV06bm90KFtyZXZlcnNlPWZhbHNlXSkpe2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0KFtqdXN0aWZ5PWNlbnRlcl0pe2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QoW2p1c3RpZnk9ZW5kXSksOmhvc3QoW2p1c3RpZnk9c3RhcnRdW3JldmVyc2VdOm5vdChbcmV2ZXJzZT1mYWxzZV0pKXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XCI7XG5cbmNvbnN0IFRhYnNCYXIgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIC8qKlxyXG4gICAgICogVE9ET1xyXG4gICAgICovXHJcbiAgICB0aGlzLmp1c3RpZnkgPSAnc3RhcnQnO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInRhYmxpc3RcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xyXG4gIH1cclxufTtcclxuVGFic0Jhci5zdHlsZSA9IHRhYnNCYXJDc3M7XG5cbmNvbnN0IHRhYnNQYW5lbENzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtkaXNwbGF5Om5vbmV9Omhvc3QoW2FjdGl2ZV06bm90KFthY3RpdmU9ZmFsc2VdKSl7ZGlzcGxheTpibG9ja31cIjtcblxudmFyIF9fZGVjb3JhdGUgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gIGVsc2VcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICBpZiAoZCA9IGRlY29yYXRvcnNbaV0pXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuY29uc3QgVGFic1BhbmVsID0gY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcclxuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoaChIb3N0LCB7IGFjdGl2ZTogdGhpcy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUgPT09IHRoaXMudmFsdWUgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbn07XHJcbl9fZGVjb3JhdGUoW1xyXG4gIFRhYnNUdW5uZWwuSW5qZWN0KClcclxuXSwgVGFic1BhbmVsLnByb3RvdHlwZSwgXCJhY3RpdmVcIiwgdm9pZCAwKTtcclxuVGFic1BhbmVsLnN0eWxlID0gdGFic1BhbmVsQ3NzO1xuXG5jb25zdCB0YWJzUGFuZWxzQ3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e2Rpc3BsYXk6YmxvY2t9XCI7XG5cbnZhciBfX2RlY29yYXRlJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gIGVsc2VcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICBpZiAoZCA9IGRlY29yYXRvcnNbaV0pXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuY29uc3QgVGFic1BhbmVscyA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICBnZXQgc3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXHJcbiAgICB9O1xyXG4gIH1cclxuICB1cGRhdGUoYWN0aXZlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcclxuICB9XHJcbiAgd2F0Y2hlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGNoYW5uZWwub2ZmKG9sZFZhbHVlLCB0aGlzLnVwZGF0ZSk7XHJcbiAgICBjaGFubmVsLm9uKG5ld1ZhbHVlLCB0aGlzLnVwZGF0ZSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XHJcbiAgICBjaGFubmVsLm9uKHRoaXMuY29ubmVjdG9yLCB0aGlzLnVwZGF0ZSk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgY2hhbm5lbC5vZmYodGhpcy5jb25uZWN0b3IsIHRoaXMudXBkYXRlKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoVGFic1R1bm5lbC5Qcm92aWRlciwgeyBkaXNhYmxlZDogIXRoaXMuY29ubmVjdG9yLCBzY29wZTogdGhpcywgc3RhdGU6IHRoaXMuc3RhdGUgfSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImNvbm5lY3RvclwiOiBbXCJ3YXRjaGVyXCJdXHJcbiAgfTsgfVxyXG59O1xyXG5fX2RlY29yYXRlJDEoW1xyXG4gIEJpbmRcclxuXSwgVGFic1BhbmVscy5wcm90b3R5cGUsIFwidXBkYXRlXCIsIG51bGwpO1xyXG5UYWJzUGFuZWxzLnN0eWxlID0gdGFic1BhbmVsc0NzcztcblxuY29uc3QgdGFic1RhYkNzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjAuNXJlbSAxcmVtfTpob3N0KFtkaXNhYmxlZF06bm90KFtkaXNhYmxlZD1mYWxzZV0pKSBzcGFue29wYWNpdHk6MC41fTpob3N0KFthY3RpdmVdOm5vdChbYWN0aXZlPWZhbHNlXSkpe2JhY2tncm91bmQtY29sb3I6I2QyZDJkMn1cIjtcblxudmFyIF9fZGVjb3JhdGUkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBUYWJzVGFiID0gY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcclxuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoaChIb3N0LCB7IGFjdGl2ZTogdGhpcy5hY3RpdmUgJiYgdGhpcy5hY3RpdmUgPT09IHRoaXMudmFsdWUsIG9uQ2xpY2s6ICgpID0+ICF0aGlzLmRpc2FibGVkICYmIHRoaXMucmVxdWVzdCh0aGlzLnZhbHVlKSB9LCBoKFwic3BhblwiLCBudWxsLCBoKFwic2xvdFwiLCBudWxsKSkpKTtcclxuICB9XHJcbn07XHJcbl9fZGVjb3JhdGUkMihbXHJcbiAgVGFic1R1bm5lbC5JbmplY3QoKVxyXG5dLCBUYWJzVGFiLnByb3RvdHlwZSwgXCJhY3RpdmVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZSQyKFtcclxuICBUYWJzVHVubmVsLkluamVjdCgpXHJcbl0sIFRhYnNUYWIucHJvdG90eXBlLCBcInJlcXVlc3RcIiwgdm9pZCAwKTtcclxuVGFic1RhYi5zdHlsZSA9IHRhYnNUYWJDc3M7XG5cbmV4cG9ydCB7IFRhYnMgYXMgcGx1c190YWJzLCBUYWJzQmFyIGFzIHBsdXNfdGFic19iYXIsIFRhYnNQYW5lbCBhcyBwbHVzX3RhYnNfcGFuZWwsIFRhYnNQYW5lbHMgYXMgcGx1c190YWJzX3BhbmVscywgVGFic1RhYiBhcyBwbHVzX3RhYnNfdGFiIH07XG4iLCJjb25zdCBldmVudFBhdGggPSAoZXZlbnQpID0+IHtcclxuICByZXR1cm4gZXZlbnQucGF0aCB8fCAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcclxufTtcblxuY2xhc3MgT3V0c2lkZUNsaWNrIHtcclxuICBzdGF0aWMgYWRkKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcclxuICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHBhdGguZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBlbGVtZW50KTtcclxuICAgICAgaWYgKDEgPCBpbmRleClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5zZXQoZWxlbWVudCwgZm4pO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy50YXJnZXRzLmdldChlbGVtZW50KTtcclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgIHJldHVybjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2ssIHRydWUpO1xyXG4gICAgdGhpcy50YXJnZXRzLmRlbGV0ZShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuT3V0c2lkZUNsaWNrLnRhcmdldHMgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFNjcm9sbGJhciB7XHJcbiAgc3RhdGljIGdldCBpc1JUTCgpIHtcclxuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2lkdGgoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICByZXR1cm4gd2lkdGg7XHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmUoa2V5KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgICBpZiAodGhpcy5rZXlzLnNpemUgPiAxKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcclxuICAgIHRoaXMuc3R5bGUgPSB7XHJcbiAgICAgIG92ZXJmbG93OiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93LFxyXG4gICAgICBbcHJvcGVydHldOiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSxcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcclxuICB9XHJcbiAgc3RhdGljIHJlc2V0KGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtrZXldID0gdGhpcy5zdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gIH1cclxufVxyXG5TY3JvbGxiYXIua2V5cyA9IG5ldyBTZXQoKTtcclxuU2Nyb2xsYmFyLnN0eWxlID0ge307XG5cbmV4cG9ydCB7IE91dHNpZGVDbGljayBhcyBPLCBTY3JvbGxiYXIgYXMgUywgZXZlbnRQYXRoIGFzIGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=