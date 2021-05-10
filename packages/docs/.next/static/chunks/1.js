(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-drawer_2.entry.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-drawer_2.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: plus_drawer, plus_drawer_toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_drawer_toggler", function() { return DrawerToggler; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-kebab-case-b5400a99.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/to-kebab-case-b5400a99.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-config-5cbf6bc5.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");






function Media(query) {
  const getMedia = (target, query) => {
    const breakpoints = sort(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
    query = normalize(target, query);
    if (!query)
      return;
    const [key, direction] = query.split('-');
    const isUp = direction === 'up';
    const isDown = direction === 'down';
    const index = breakpoints.findIndex((breakpoint) => breakpoint.key === key);
    const min = breakpoints[index].value;
    const max = (breakpoints[index + 1] || {}).value - 1;
    if (isUp || isNaN(max)) {
      query = `(min-width: ${min}px)`;
    }
    else if (isDown) {
      query = `(max-width: ${max}px)`;
    }
    else {
      query = `(min-width: ${min}px) and (max-width: ${max}px)`;
    }
    return window.matchMedia(query);
  };
  const normalize = (target, query) => {
    const isProperty = query.match(/\[(.*)\]/);
    if (isProperty) {
      const property = isProperty[1];
      query = query.replace(`[${property}]`, target[property]);
    }
    return query;
  };
  const sort = (breakpoints) => {
    return Object.keys(breakpoints)
      .map((key) => {
      return {
        key,
        value: breakpoints[key]
      };
    })
      .sort((a, b) => a.value - b.value);
  };
  return function (target, propertyKey) {
    let media;
    const connected = target.connectedCallback;
    target.connectedCallback = function () {
      media = getMedia(this, query);
      const callback = this[propertyKey];
      media.addEventListener('change', callback);
      connected && connected.bind(this)();
      // TODO
      const event = new Event('change');
      event.matches = media.matches;
      event.media = media.media;
      media.dispatchEvent(event);
    };
    const disconnected = target.disconnectedCallback;
    target.disconnectedCallback = function () {
      const callback = this[propertyKey];
      media.removeEventListener('change', callback);
      disconnected && disconnected.bind(this)();
    };
  };
}

const initial = {
  open: false,
  toggle: () => undefined
};
const { Inject, rebind } = Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["c"])(initial);

const drawerCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{--plus-drawer-size:280px;--plus-drawer-mini-size:0}:host{display:none;position:relative;z-index:1000}:host([temporary]:not([temporary=false])){position:fixed;top:0;right:0;bottom:0;left:0}:host(.open){--plus-drawer-margin:var(--plus-drawer-margin-max);--plus-drawer-margin-min:calc(-1 * var(--plus-drawer-size));--plus-drawer-margin-max:0;display:block}:host(.mini){--plus-drawer-margin-min:calc(-1 * var(--plus-drawer-size));--plus-drawer-margin-max:calc(-1 * var(--plus-drawer-size) + var(--plus-drawer-mini-size));--plus-drawer-mini-margin-min:0;--plus-drawer-mini-margin-max:calc(-1 * var(--plus-drawer-size) + var(--plus-drawer-mini-size));overflow:hidden}.backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1}.backdrop *{width:100%;height:100%;background-color:black;opacity:0.5}.content{height:100%;position:relative;z-index:1}.backdrop,.content{transition:inherit}.right,.left{width:var(--plus-drawer-size)}.top,.bottom{height:var(--plus-drawer-size)}.right,.left.reverse{margin:0 var(--plus-drawer-margin) 0 0}.left,.right.reverse{margin:0 0 0 var(--plus-drawer-margin)}.top,.bottom.reverse{margin:var(--plus-drawer-margin) 0 0 0}.bottom,.top.reverse{margin:0 0 var(--plus-drawer-margin) 0}:host(.fade.drawer-enter-active),:host(.fade.drawer-leave-active){overflow:hidden;transition:0.3s}:host(.fade.drawer-enter),:host(.fade.drawer-leave-active){--plus-drawer-margin:var(--plus-drawer-margin-min)}:host(.fade.drawer-enter) .backdrop,:host(.fade.drawer-leave-active) .backdrop{opacity:0}:host(.fade.drawer-leave),:host(.fade.drawer-enter-active){--plus-drawer-margin:var(--plus-drawer-margin-max)}:host(.fade.drawer-leave) .backdrop,:host(.fade.drawer-enter-active) .backdrop{opacity:1}:host(.fade.drawer-mini-enter-active),:host(.fade.drawer-mini-leave-active){overflow:hidden;transition:0.3s}:host(.fade.drawer-mini-enter),:host(.fade.drawer-mini-leave-active){--plus-drawer-margin:var(--plus-drawer-mini-margin-min)}:host(.fade.drawer-mini-leave),:host(.fade.drawer-mini-enter-active){--plus-drawer-margin:var(--plus-drawer-mini-margin-max)}";

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
const Drawer = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusClose = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusClose", 3);
    this.plusClosed = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusClosed", 2);
    this.plusOpen = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusOpen", 3);
    this.plusOpened = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusOpened", 2);
    /**
     * Activate the drawer’s backdrop to show or not.
     */
    this.backdrop = 'auto';
    /**
     * TODO
     */
    this.breakpoint = 'md';
    this.link = {
      toggle: () => this.toggle()
    };
    this.animations = {};
  }
  get classes() {
    const placement = Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.placement || 'start', this.isRTL);
    return Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["a"])('content', {
      [placement]: true,
      reverse: this.reverse
    });
  }
  get hasBackdrop() {
    if (!this.temporary)
      return false;
    if (this.backdrop === true || this.backdrop === 'auto')
      return true;
    return false;
  }
  get isOpen() {
    return this.$host.classList.contains('open');
  }
  get isRTL() {
    return Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
  }
  get styles() {
    return {
      '--plus-drawer-size': this.size,
      '--plus-drawer-mini-size': this.miniSize,
    };
  }
  /**
   * Methods
   */
  hide() {
    if (!this.isOpen)
      return;
    const event = this.plusClose.emit();
    if (!this.isOpen || event.defaultPrevented)
      return;
    this.animations.open.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => {
        this.hidden();
        this.plusClosed.emit();
      }
    });
  }
  show() {
    if (this.isOpen)
      return;
    const event = this.plusOpen.emit();
    if (this.isOpen || event.defaultPrevented)
      return;
    this.animations.open.enter({
      onEnter: () => this.shown(),
      onEntered: () => this.plusOpened.emit()
    });
  }
  toggle() {
    return this.isOpen ? this.hide() : this.show();
  }
  /**
   * Internal Methods
   */
  broadcast(value) {
    this.link.open = value;
  }
  dispose() {
    var _a, _b;
    (_a = this.animations.open) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.animations.mini) === null || _b === void 0 ? void 0 : _b.dispose();
  }
  init() {
    this.animations.open = new _to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["A"]({
      name: 'drawer',
      source: this.$host,
      target: this.$host
    });
    this.animations.mini = new _to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["A"]({
      name: 'drawer-mini',
      source: this.$host,
      target: this.$host
    });
  }
  hidden() {
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["S"].reset(this);
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["O"].remove(this.$content);
    this.$host.classList.remove('open');
    this.open = false;
    this.broadcast(false);
  }
  shown() {
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["S"].remove(this);
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["O"].add(this.$content, this.onOutsideClick);
    this.$host.classList.add('open');
    this.open = true;
    this.broadcast(true);
  }
  /**
   * Watchers
   */
  connectorWatcher() {
    rebind(this);
  }
  miniWatcher() {
    if (this.mini) {
      this.animations.mini.enter({
        onEnter: () => this.$host.classList.add('mini')
      });
    }
    else {
      this.animations.mini.leave({
        onLeaved: () => this.$host.classList.remove('mini')
      });
    }
  }
  openWatcher() {
    if (this.open) {
      if (this.isOpen)
        return;
      this.animations.open.enter({
        onEnter: () => this.shown()
      });
    }
    else {
      if (!this.isOpen)
        return;
      this.animations.open.leave({
        onLeave: () => this.broadcast(false),
        onLeaved: () => this.hidden(),
      });
    }
  }
  /**
   * Events handler
   */
  onMedia(event) {
    console.log('drawer', event);
  }
  onOutsideClick() {
    if (!this.isOpen || !this.temporary || this.persistent)
      return;
    this.hide();
  }
  /**
   * Lifecycles
   */
  connectedCallback() {
    this.init();
    this.open && this.shown();
  }
  disconnectedCallback() {
    this.dispose();
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: this.styles }, this.hasBackdrop && (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "backdrop" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null))), Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.classes, ref: (element) => this.$content = element }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "connector": ["connectorWatcher"],
    "mini": ["miniWatcher"],
    "open": ["openWatcher"]
  }; }
};
__decorate([
  Object(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_3__["G"])('drawer', {
    backdrop: 'auto',
    breakpoint: 'md'
  })
], Drawer.prototype, "config", void 0);
__decorate([
  Inject({ scope: '[connector]' })
], Drawer.prototype, "link", void 0);
__decorate([
  Media('[breakpoint]-down')
], Drawer.prototype, "onMedia", null);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_2__["B"]
], Drawer.prototype, "onOutsideClick", null);
Drawer.style = drawerCss;

const drawerTogglerCss = ":host{display:inline-block;cursor:default;user-select:none}:host([state=open]) [name=close],:host([state=close]) [name=open]{display:none}";

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
const DrawerToggler = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  connectorWatcher() {
    rebind(this);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { state: this.link.open ? 'open' : 'close', role: "button", onClick: () => this.link.toggle() }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, this.link.open ? 'Close' : 'Open'), Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "close" }), Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "open" })));
  }
  static get watchers() { return {
    "connector": ["connectorWatcher"]
  }; }
};
__decorate$1([
  Inject({ scope: '[connector]' })
], DrawerToggler.prototype, "link", void 0);
DrawerToggler.style = drawerTogglerCss;




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




/***/ }),

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/to-kebab-case-b5400a99.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/to-kebab-case-b5400a99.js ***!
  \*****************************************************************************************************/
/*! exports provided: A, a, c, i, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toAxis; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");


class Animation {
  constructor(config) {
    // TODO: auto detect functions
    this.config = Object.assign({}, {
      onEnter: () => undefined,
      onEntering: () => undefined,
      onEntered: () => undefined,
      onLeave: () => undefined,
      onLeaving: () => undefined,
      onLeaved: () => undefined,
    }, config);
  }
  add(...names) {
    names.map((item) => this.config.target.classList.add(this.name(item)));
  }
  duration() {
    return [this.config.source]
      .flat()
      .map((item) => {
      try {
        const style = getComputedStyle(item);
        const duration = [
          style.animationDelay,
          style.transitionDelay,
          style.animationDuration,
          style.transitionDuration,
        ]
          .map((item = '0s') => parseFloat(item) * (/ms/g.test(item) ? 1 : 1000));
        return Math.max(...duration.slice(0, 2)) + Math.max(...duration.slice(2));
      }
      catch (_a) {
        return 0;
      }
    })
      .sort((a, b) => a - b)
      .pop();
  }
  name(input) {
    return this.config.name ? `${this.config.name}-${input}` : input;
  }
  remove(...names) {
    names.map((item) => this.config.target.classList.remove(this.name(item)));
  }
  // TODO
  cancel() {
    clearTimeout(this.timeout);
    this.remove('enter', 'enter-active', 'enter-to');
    this.remove('leave', 'leave-active', 'leave-to');
  }
  dispose() {
    clearTimeout(this.timeout);
  }
  enter(config) {
    this.cancel();
    config = Object.assign({}, this.config, config);
    config.onEnter();
    this.remove('leave', 'leave-active');
    this.add('enter');
    requestAnimationFrame(() => setTimeout(() => {
      this.remove('enter');
      this.add('enter-active');
      config.onEntering();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.remove('enter', 'enter-active');
        config.onEntered();
      }, this.duration());
    }, 5));
  }
  leave(config) {
    this.cancel();
    config = Object.assign({}, this.config, config);
    config.onLeave();
    this.remove('enter', 'enter-active');
    this.add('leave');
    requestAnimationFrame(() => setTimeout(() => {
      this.remove('leave');
      this.add('leave-active');
      config.onLeaving();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.remove('leave', 'leave-active');
        config.onLeaved();
      }, this.duration());
    }, 5));
  }
}

const createLink = (initial) => {
  const instances = new Map();
  const getGroup = (instance, scope) => {
    const isProperty = scope.match(/\[*\]/);
    if (isProperty) {
      const property = scope.replace('[', '').replace(']', '');
      return instance[property];
    }
    return scope;
  };
  const getSiblings = (instance, self) => {
    const { group } = instances.get(instance);
    const result = new Map();
    instances.forEach((config, item) => {
      if (!self && instance === item)
        return;
      if (config.group !== group)
        return;
      result.set(item, config);
    });
    return result;
  };
  const getState = (instances) => {
    const configs = Array.from(instances.values());
    const original = configs.map((config) => config.originalState);
    const local = configs.map((config) => config.localState);
    return Object.assign({}, initial, ...original, ...local);
  };
  const getParent = (instance) => {
    const element = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance);
    const items = Array.from(instances);
    let parent = element.parentElement;
    while (parent) {
      if (parent.shadowRoot) {
        const item = items.find(([, itemConfig]) => itemConfig.element === parent);
        if (item)
          return item[0];
      }
      parent = parent.parentElement;
    }
  };
  const update = (instance, self) => {
    // instance siblings
    const instances = getSiblings(instance, self);
    // initial state
    const state = getState(instances);
    // for each instance
    instances.forEach((config, item) => {
      // remove old proxy
      delete item[config.property];
      // set new proxy
      item[config.property] = new Proxy(state, {
        set: (target, property, value) => {
          // TODO
          if (config.localState[property] === value)
            return true;
          config.localState[property] = value;
          requestAnimationFrame(() => update(item, true));
          return true;
        }
      });
      // rerender current instance
      requestAnimationFrame(() => Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["f"])(item));
    });
  };
  const bind = (instance, config) => {
    // create main config
    const options = Object.assign(Object.assign({}, config), { element: Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance), originalState: instance[config.property], localState: {}, group: getGroup(instance, config.scope) });
    // bind instance
    instances.set(instance, options);
    // update by instance
    update(instance, true);
    // TODO
    ensure(instance);
  };
  const unbind = (instance) => {
    // load instance
    const { property, originalState } = instances.get(instance);
    // remove proxy
    delete instance[property];
    // reset property value
    instance[property] = originalState;
    // update by instance
    update(instance, false);
    // unbind instance
    instances.delete(instance);
  };
  // TODO
  const rebind = (instance) => {
    const siblings = getSiblings(instance, true);
    siblings
      .forEach((config, instance) => config.group = getGroup(instance, config.scope));
    Array.from(siblings.keys())
      .forEach((instance) => ensure(instance));
    Array.from(siblings.keys())
      .forEach((instance) => update(instance, true));
  };
  const ensure = (instance) => {
    var _a;
    if (instances.get(instance).group)
      return;
    const parent = getParent(instance);
    if (!parent)
      return;
    const config = instances.get(parent);
    config.group = (_a = config.group) !== null && _a !== void 0 ? _a : Math.random().toString();
    instances.get(instance).group = config.group;
    update(instance, true);
  };
  const Inject = (config) => (instance, property) => {
    // store componentDidLoad function
    const load = instance.componentDidLoad;
    instance.componentDidLoad = function () {
      // TODO
      ensure(this);
      // call original componentDidLoad function
      load && load.bind(this)();
    };
    // store connectedCallback function
    const connected = instance.connectedCallback;
    // set new connectedCallback function
    instance.connectedCallback = function () {
      // bind current instance
      bind(this, Object.assign(Object.assign({}, config), { property }));
      // call original connectedCallback function
      connected && connected.bind(this)();
    };
    // store disconnectedCallback function
    const disconnected = instance.disconnectedCallback;
    // set new disconnectedCallback function
    instance.disconnectedCallback = function () {
      // unbind current instance
      unbind(this);
      // call original disconnectedCallback function
      disconnected && disconnected.bind(this)();
    };
  };
  return {
    Inject,
    rebind
  };
};

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
          const key = keys[i];
          const value = element[key];
          const name = toKebabCase(key);
          const type = Object.prototype.toString.call(value);
          switch (type) {
            case '[object Boolean]':
              value && names.push(`${name}`);
              break;
            case '[object Number]':
              names.push(`${name}-${value}`);
              break;
            case '[object String]':
              switch (value) {
                case '':
                case 'true':
                  names.push(`${name}`);
                  break;
                case 'false':
                  break;
                default:
                  names.push(`${name}-${value}`);
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

const isRTL = (instance) => {
  return getComputedStyle(Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance)).getPropertyValue('direction') === 'rtl';
};

const toAxis = (input, rtl) => {
  if (input.match(/start/))
    input = rtl ? 'right' : 'left';
  if (input.match(/end/))
    input = rtl ? 'left' : 'right';
  return input;
};

const toKebabCase = (input) => {
  return input
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((char) => char.toLowerCase())
    .join('-');
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1kcmF3ZXJfMi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vc2Nyb2xsYmFyLThkMTg4NTRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL3JlYWN0L25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvY29yZS9kaXN0L2VzbS90by1rZWJhYi1jYXNlLWI1NDAwYTk5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLFVBQVU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcENyQjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZLFdBQVc7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSyxHQUFHLE1BQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDREQUFVO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7O0FBRWtGIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJpbmQodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBsZXQgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEBib3VuZE1ldGhvZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJHt0eXBlb2YgZm59YCk7XHJcbiAgfVxyXG4gIC8vIEluIElFMTEgY2FsbGluZyBPYmplY3QuZGVmaW5lUHJvcGVydHkgaGFzIGEgc2lkZS1lZmZlY3Qgb2YgZXZhbHVhdGluZyB0aGVcclxuICAvLyBnZXR0ZXIgZm9yIHRoZSBwcm9wZXJ0eSB3aGljaCBpcyBiZWluZyByZXBsYWNlZC4gVGhpcyBjYXVzZXMgaW5maW5pdGVcclxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXHJcbiAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICByZXR1cm4ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXHJcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xyXG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgZm4gPSB2YWx1ZTtcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgIH0sXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgZm4gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJpbmQgYXMgQiB9O1xuIiwiY29uc3QgR0xPQkFMX0NPTkZJR19OQU1FID0gJ2h0bWxwbHVzJztcclxuY29uc3QgQlJFQUtQT0lOVFMgPSB7XHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NixcclxuICBtZDogNzY4LFxyXG4gIGxnOiA5OTIsXHJcbiAgeGw6IDEyMDAsXHJcbiAgeHhsOiAxNDAwXHJcbn07XG5cbmZ1bmN0aW9uIEdsb2JhbENvbmZpZyhuYW1lc3BhY2UsIGluaXRpYWwgPSB7fSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaW5zdGFuY2UsIG5hbWUpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RlZCA9IGluc3RhbmNlLmNvbm5lY3RlZENhbGxiYWNrO1xyXG4gICAgaW5zdGFuY2UuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvd1tHTE9CQUxfQ09ORklHX05BTUVdIHx8IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnRzID0gY29uZmlnLmNvbXBvbmVudHMgfHwge307XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbbmFtZXNwYWNlXSB8fCB7fTtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnRba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICh0aGlzW2tleV0gIT09IGluaXRpYWxba2V5XSlcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3RlZCAmJiBjb25uZWN0ZWQuYmluZCh0aGlzKSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJSRUFLUE9JTlRTIGFzIEIsIEdsb2JhbENvbmZpZyBhcyBHIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02MThiN2ZjOC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxpbmssIHQgYXMgdG9BeGlzLCBhIGFzIGNsYXNzZXMsIGkgYXMgaXNSVEwsIEEgYXMgQW5pbWF0aW9uIH0gZnJvbSAnLi90by1rZWJhYi1jYXNlLWI1NDAwYTk5LmpzJztcbmltcG9ydCB7IEIgYXMgQmluZCB9IGZyb20gJy4vYmluZC1kYWRjNDRkZC5qcyc7XG5pbXBvcnQgeyBCIGFzIEJSRUFLUE9JTlRTLCBHIGFzIEdsb2JhbENvbmZpZyB9IGZyb20gJy4vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNjcm9sbGJhciwgTyBhcyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyc7XG5cbmZ1bmN0aW9uIE1lZGlhKHF1ZXJ5KSB7XHJcbiAgY29uc3QgZ2V0TWVkaWEgPSAodGFyZ2V0LCBxdWVyeSkgPT4ge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludHMgPSBzb3J0KEJSRUFLUE9JTlRTKTtcclxuICAgIHF1ZXJ5ID0gbm9ybWFsaXplKHRhcmdldCwgcXVlcnkpO1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgW2tleSwgZGlyZWN0aW9uXSA9IHF1ZXJ5LnNwbGl0KCctJyk7XHJcbiAgICBjb25zdCBpc1VwID0gZGlyZWN0aW9uID09PSAndXAnO1xyXG4gICAgY29uc3QgaXNEb3duID0gZGlyZWN0aW9uID09PSAnZG93bic7XHJcbiAgICBjb25zdCBpbmRleCA9IGJyZWFrcG9pbnRzLmZpbmRJbmRleCgoYnJlYWtwb2ludCkgPT4gYnJlYWtwb2ludC5rZXkgPT09IGtleSk7XHJcbiAgICBjb25zdCBtaW4gPSBicmVha3BvaW50c1tpbmRleF0udmFsdWU7XHJcbiAgICBjb25zdCBtYXggPSAoYnJlYWtwb2ludHNbaW5kZXggKyAxXSB8fCB7fSkudmFsdWUgLSAxO1xyXG4gICAgaWYgKGlzVXAgfHwgaXNOYU4obWF4KSkge1xyXG4gICAgICBxdWVyeSA9IGAobWluLXdpZHRoOiAke21pbn1weClgO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNEb3duKSB7XHJcbiAgICAgIHF1ZXJ5ID0gYChtYXgtd2lkdGg6ICR7bWF4fXB4KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcXVlcnkgPSBgKG1pbi13aWR0aDogJHttaW59cHgpIGFuZCAobWF4LXdpZHRoOiAke21heH1weClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcclxuICB9O1xyXG4gIGNvbnN0IG5vcm1hbGl6ZSA9ICh0YXJnZXQsIHF1ZXJ5KSA9PiB7XHJcbiAgICBjb25zdCBpc1Byb3BlcnR5ID0gcXVlcnkubWF0Y2goL1xcWyguKilcXF0vKTtcclxuICAgIGlmIChpc1Byb3BlcnR5KSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNQcm9wZXJ0eVsxXTtcclxuICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKGBbJHtwcm9wZXJ0eX1dYCwgdGFyZ2V0W3Byb3BlcnR5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcXVlcnk7XHJcbiAgfTtcclxuICBjb25zdCBzb3J0ID0gKGJyZWFrcG9pbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpXHJcbiAgICAgIC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICB2YWx1ZTogYnJlYWtwb2ludHNba2V5XVxyXG4gICAgICB9O1xyXG4gICAgfSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEudmFsdWUgLSBiLnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgbGV0IG1lZGlhO1xyXG4gICAgY29uc3QgY29ubmVjdGVkID0gdGFyZ2V0LmNvbm5lY3RlZENhbGxiYWNrO1xyXG4gICAgdGFyZ2V0LmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZWRpYSA9IGdldE1lZGlhKHRoaXMsIHF1ZXJ5KTtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzW3Byb3BlcnR5S2V5XTtcclxuICAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spO1xyXG4gICAgICBjb25uZWN0ZWQgJiYgY29ubmVjdGVkLmJpbmQodGhpcykoKTtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbiAgICAgIGV2ZW50Lm1hdGNoZXMgPSBtZWRpYS5tYXRjaGVzO1xyXG4gICAgICBldmVudC5tZWRpYSA9IG1lZGlhLm1lZGlhO1xyXG4gICAgICBtZWRpYS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSB0YXJnZXQuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XHJcbiAgICB0YXJnZXQuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpc1twcm9wZXJ0eUtleV07XHJcbiAgICAgIG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGxiYWNrKTtcclxuICAgICAgZGlzY29ubmVjdGVkICYmIGRpc2Nvbm5lY3RlZC5iaW5kKHRoaXMpKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cblxuY29uc3QgaW5pdGlhbCA9IHtcclxuICBvcGVuOiBmYWxzZSxcclxuICB0b2dnbGU6ICgpID0+IHVuZGVmaW5lZFxyXG59O1xyXG5jb25zdCB7IEluamVjdCwgcmViaW5kIH0gPSBjcmVhdGVMaW5rKGluaXRpYWwpO1xuXG5jb25zdCBkcmF3ZXJDc3MgPSBcIiosKjo6YmVmb3JlLCo6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCw6aG9zdDo6YmVmb3JlLDpob3N0OjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7LS1wbHVzLWRyYXdlci1zaXplOjI4MHB4Oy0tcGx1cy1kcmF3ZXItbWluaS1zaXplOjB9Omhvc3R7ZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTAwMH06aG9zdChbdGVtcG9yYXJ5XTpub3QoW3RlbXBvcmFyeT1mYWxzZV0pKXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH06aG9zdCgub3Blbil7LS1wbHVzLWRyYXdlci1tYXJnaW46dmFyKC0tcGx1cy1kcmF3ZXItbWFyZ2luLW1heCk7LS1wbHVzLWRyYXdlci1tYXJnaW4tbWluOmNhbGMoLTEgKiB2YXIoLS1wbHVzLWRyYXdlci1zaXplKSk7LS1wbHVzLWRyYXdlci1tYXJnaW4tbWF4OjA7ZGlzcGxheTpibG9ja306aG9zdCgubWluaSl7LS1wbHVzLWRyYXdlci1tYXJnaW4tbWluOmNhbGMoLTEgKiB2YXIoLS1wbHVzLWRyYXdlci1zaXplKSk7LS1wbHVzLWRyYXdlci1tYXJnaW4tbWF4OmNhbGMoLTEgKiB2YXIoLS1wbHVzLWRyYXdlci1zaXplKSArIHZhcigtLXBsdXMtZHJhd2VyLW1pbmktc2l6ZSkpOy0tcGx1cy1kcmF3ZXItbWluaS1tYXJnaW4tbWluOjA7LS1wbHVzLWRyYXdlci1taW5pLW1hcmdpbi1tYXg6Y2FsYygtMSAqIHZhcigtLXBsdXMtZHJhd2VyLXNpemUpICsgdmFyKC0tcGx1cy1kcmF3ZXItbWluaS1zaXplKSk7b3ZlcmZsb3c6aGlkZGVufS5iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjF9LmJhY2tkcm9wICp7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6MC41fS5jb250ZW50e2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYmFja2Ryb3AsLmNvbnRlbnR7dHJhbnNpdGlvbjppbmhlcml0fS5yaWdodCwubGVmdHt3aWR0aDp2YXIoLS1wbHVzLWRyYXdlci1zaXplKX0udG9wLC5ib3R0b217aGVpZ2h0OnZhcigtLXBsdXMtZHJhd2VyLXNpemUpfS5yaWdodCwubGVmdC5yZXZlcnNle21hcmdpbjowIHZhcigtLXBsdXMtZHJhd2VyLW1hcmdpbikgMCAwfS5sZWZ0LC5yaWdodC5yZXZlcnNle21hcmdpbjowIDAgMCB2YXIoLS1wbHVzLWRyYXdlci1tYXJnaW4pfS50b3AsLmJvdHRvbS5yZXZlcnNle21hcmdpbjp2YXIoLS1wbHVzLWRyYXdlci1tYXJnaW4pIDAgMCAwfS5ib3R0b20sLnRvcC5yZXZlcnNle21hcmdpbjowIDAgdmFyKC0tcGx1cy1kcmF3ZXItbWFyZ2luKSAwfTpob3N0KC5mYWRlLmRyYXdlci1lbnRlci1hY3RpdmUpLDpob3N0KC5mYWRlLmRyYXdlci1sZWF2ZS1hY3RpdmUpe292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOjAuM3N9Omhvc3QoLmZhZGUuZHJhd2VyLWVudGVyKSw6aG9zdCguZmFkZS5kcmF3ZXItbGVhdmUtYWN0aXZlKXstLXBsdXMtZHJhd2VyLW1hcmdpbjp2YXIoLS1wbHVzLWRyYXdlci1tYXJnaW4tbWluKX06aG9zdCguZmFkZS5kcmF3ZXItZW50ZXIpIC5iYWNrZHJvcCw6aG9zdCguZmFkZS5kcmF3ZXItbGVhdmUtYWN0aXZlKSAuYmFja2Ryb3B7b3BhY2l0eTowfTpob3N0KC5mYWRlLmRyYXdlci1sZWF2ZSksOmhvc3QoLmZhZGUuZHJhd2VyLWVudGVyLWFjdGl2ZSl7LS1wbHVzLWRyYXdlci1tYXJnaW46dmFyKC0tcGx1cy1kcmF3ZXItbWFyZ2luLW1heCl9Omhvc3QoLmZhZGUuZHJhd2VyLWxlYXZlKSAuYmFja2Ryb3AsOmhvc3QoLmZhZGUuZHJhd2VyLWVudGVyLWFjdGl2ZSkgLmJhY2tkcm9we29wYWNpdHk6MX06aG9zdCguZmFkZS5kcmF3ZXItbWluaS1lbnRlci1hY3RpdmUpLDpob3N0KC5mYWRlLmRyYXdlci1taW5pLWxlYXZlLWFjdGl2ZSl7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246MC4zc306aG9zdCguZmFkZS5kcmF3ZXItbWluaS1lbnRlciksOmhvc3QoLmZhZGUuZHJhd2VyLW1pbmktbGVhdmUtYWN0aXZlKXstLXBsdXMtZHJhd2VyLW1hcmdpbjp2YXIoLS1wbHVzLWRyYXdlci1taW5pLW1hcmdpbi1taW4pfTpob3N0KC5mYWRlLmRyYXdlci1taW5pLWxlYXZlKSw6aG9zdCguZmFkZS5kcmF3ZXItbWluaS1lbnRlci1hY3RpdmUpey0tcGx1cy1kcmF3ZXItbWFyZ2luOnZhcigtLXBsdXMtZHJhd2VyLW1pbmktbWFyZ2luLW1heCl9XCI7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKVxyXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmNvbnN0IERyYXdlciA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gICAgdGhpcy5wbHVzQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcInBsdXNDbG9zZVwiLCAzKTtcclxuICAgIHRoaXMucGx1c0Nsb3NlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwicGx1c0Nsb3NlZFwiLCAyKTtcclxuICAgIHRoaXMucGx1c09wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcInBsdXNPcGVuXCIsIDMpO1xyXG4gICAgdGhpcy5wbHVzT3BlbmVkID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzT3BlbmVkXCIsIDIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBY3RpdmF0ZSB0aGUgZHJhd2Vy4oCZcyBiYWNrZHJvcCB0byBzaG93IG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5iYWNrZHJvcCA9ICdhdXRvJztcclxuICAgIC8qKlxyXG4gICAgICogVE9ET1xyXG4gICAgICovXHJcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSAnbWQnO1xyXG4gICAgdGhpcy5saW5rID0ge1xyXG4gICAgICB0b2dnbGU6ICgpID0+IHRoaXMudG9nZ2xlKClcclxuICAgIH07XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcclxuICB9XHJcbiAgZ2V0IGNsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0b0F4aXModGhpcy5wbGFjZW1lbnQgfHwgJ3N0YXJ0JywgdGhpcy5pc1JUTCk7XHJcbiAgICByZXR1cm4gY2xhc3NlcygnY29udGVudCcsIHtcclxuICAgICAgW3BsYWNlbWVudF06IHRydWUsXHJcbiAgICAgIHJldmVyc2U6IHRoaXMucmV2ZXJzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldCBoYXNCYWNrZHJvcCgpIHtcclxuICAgIGlmICghdGhpcy50ZW1wb3JhcnkpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wID09PSB0cnVlIHx8IHRoaXMuYmFja2Ryb3AgPT09ICdhdXRvJylcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kaG9zdC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKTtcclxuICB9XHJcbiAgZ2V0IGlzUlRMKCkge1xyXG4gICAgcmV0dXJuIGlzUlRMKHRoaXMpO1xyXG4gIH1cclxuICBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJy0tcGx1cy1kcmF3ZXItc2l6ZSc6IHRoaXMuc2l6ZSxcclxuICAgICAgJy0tcGx1cy1kcmF3ZXItbWluaS1zaXplJzogdGhpcy5taW5pU2l6ZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZHNcclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsdXNDbG9zZS5lbWl0KCk7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5vcGVuLmxlYXZlKHtcclxuICAgICAgb25MZWF2ZTogKCkgPT4gdGhpcy5icm9hZGNhc3QoZmFsc2UpLFxyXG4gICAgICBvbkxlYXZlZDogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuKCk7XHJcbiAgICAgICAgdGhpcy5wbHVzQ2xvc2VkLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNob3coKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbHVzT3Blbi5lbWl0KCk7XHJcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLm9wZW4uZW50ZXIoe1xyXG4gICAgICBvbkVudGVyOiAoKSA9PiB0aGlzLnNob3duKCksXHJcbiAgICAgIG9uRW50ZXJlZDogKCkgPT4gdGhpcy5wbHVzT3BlbmVkLmVtaXQoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzT3BlbiA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIE1ldGhvZHNcclxuICAgKi9cclxuICBicm9hZGNhc3QodmFsdWUpIHtcclxuICAgIHRoaXMubGluay5vcGVuID0gdmFsdWU7XHJcbiAgfVxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgKF9hID0gdGhpcy5hbmltYXRpb25zLm9wZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kaXNwb3NlKCk7XHJcbiAgICAoX2IgPSB0aGlzLmFuaW1hdGlvbnMubWluaSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRpc3Bvc2UoKTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5vcGVuID0gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgIG5hbWU6ICdkcmF3ZXInLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuJGhvc3QsXHJcbiAgICAgIHRhcmdldDogdGhpcy4kaG9zdFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMubWluaSA9IG5ldyBBbmltYXRpb24oe1xyXG4gICAgICBuYW1lOiAnZHJhd2VyLW1pbmknLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuJGhvc3QsXHJcbiAgICAgIHRhcmdldDogdGhpcy4kaG9zdFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGhpZGRlbigpIHtcclxuICAgIFNjcm9sbGJhci5yZXNldCh0aGlzKTtcclxuICAgIE91dHNpZGVDbGljay5yZW1vdmUodGhpcy4kY29udGVudCk7XHJcbiAgICB0aGlzLiRob3N0LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5icm9hZGNhc3QoZmFsc2UpO1xyXG4gIH1cclxuICBzaG93bigpIHtcclxuICAgIFNjcm9sbGJhci5yZW1vdmUodGhpcyk7XHJcbiAgICBPdXRzaWRlQ2xpY2suYWRkKHRoaXMuJGNvbnRlbnQsIHRoaXMub25PdXRzaWRlQ2xpY2spO1xyXG4gICAgdGhpcy4kaG9zdC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5icm9hZGNhc3QodHJ1ZSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFdhdGNoZXJzXHJcbiAgICovXHJcbiAgY29ubmVjdG9yV2F0Y2hlcigpIHtcclxuICAgIHJlYmluZCh0aGlzKTtcclxuICB9XHJcbiAgbWluaVdhdGNoZXIoKSB7XHJcbiAgICBpZiAodGhpcy5taW5pKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5taW5pLmVudGVyKHtcclxuICAgICAgICBvbkVudGVyOiAoKSA9PiB0aGlzLiRob3N0LmNsYXNzTGlzdC5hZGQoJ21pbmknKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMubWluaS5sZWF2ZSh7XHJcbiAgICAgICAgb25MZWF2ZWQ6ICgpID0+IHRoaXMuJGhvc3QuY2xhc3NMaXN0LnJlbW92ZSgnbWluaScpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBvcGVuV2F0Y2hlcigpIHtcclxuICAgIGlmICh0aGlzLm9wZW4pIHtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLm9wZW4uZW50ZXIoe1xyXG4gICAgICAgIG9uRW50ZXI6ICgpID0+IHRoaXMuc2hvd24oKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuaXNPcGVuKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLm9wZW4ubGVhdmUoe1xyXG4gICAgICAgIG9uTGVhdmU6ICgpID0+IHRoaXMuYnJvYWRjYXN0KGZhbHNlKSxcclxuICAgICAgICBvbkxlYXZlZDogKCkgPT4gdGhpcy5oaWRkZW4oKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV2ZW50cyBoYW5kbGVyXHJcbiAgICovXHJcbiAgb25NZWRpYShldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ2RyYXdlcicsIGV2ZW50KTtcclxuICB9XHJcbiAgb25PdXRzaWRlQ2xpY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICF0aGlzLnRlbXBvcmFyeSB8fCB0aGlzLnBlcnNpc3RlbnQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGVzXHJcbiAgICovXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMub3BlbiAmJiB0aGlzLnNob3duKCk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoaChIb3N0LCB7IHN0eWxlOiB0aGlzLnN0eWxlcyB9LCB0aGlzLmhhc0JhY2tkcm9wICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYmFja2Ryb3BcIiB9LCBoKFwiZGl2XCIsIG51bGwpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5jbGFzc2VzLCByZWY6IChlbGVtZW50KSA9PiB0aGlzLiRjb250ZW50ID0gZWxlbWVudCB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcclxuICB9XHJcbiAgZ2V0ICRob3N0KCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImNvbm5lY3RvclwiOiBbXCJjb25uZWN0b3JXYXRjaGVyXCJdLFxyXG4gICAgXCJtaW5pXCI6IFtcIm1pbmlXYXRjaGVyXCJdLFxyXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5XYXRjaGVyXCJdXHJcbiAgfTsgfVxyXG59O1xyXG5fX2RlY29yYXRlKFtcclxuICBHbG9iYWxDb25maWcoJ2RyYXdlcicsIHtcclxuICAgIGJhY2tkcm9wOiAnYXV0bycsXHJcbiAgICBicmVha3BvaW50OiAnbWQnXHJcbiAgfSlcclxuXSwgRHJhd2VyLnByb3RvdHlwZSwgXCJjb25maWdcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgSW5qZWN0KHsgc2NvcGU6ICdbY29ubmVjdG9yXScgfSlcclxuXSwgRHJhd2VyLnByb3RvdHlwZSwgXCJsaW5rXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gIE1lZGlhKCdbYnJlYWtwb2ludF0tZG93bicpXHJcbl0sIERyYXdlci5wcm90b3R5cGUsIFwib25NZWRpYVwiLCBudWxsKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgQmluZFxyXG5dLCBEcmF3ZXIucHJvdG90eXBlLCBcIm9uT3V0c2lkZUNsaWNrXCIsIG51bGwpO1xyXG5EcmF3ZXIuc3R5bGUgPSBkcmF3ZXJDc3M7XG5cbmNvbnN0IGRyYXdlclRvZ2dsZXJDc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpkZWZhdWx0O3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoW3N0YXRlPW9wZW5dKSBbbmFtZT1jbG9zZV0sOmhvc3QoW3N0YXRlPWNsb3NlXSkgW25hbWU9b3Blbl17ZGlzcGxheTpub25lfVwiO1xuXG52YXIgX19kZWNvcmF0ZSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKVxyXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmNvbnN0IERyYXdlclRvZ2dsZXIgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICB9XHJcbiAgY29ubmVjdG9yV2F0Y2hlcigpIHtcclxuICAgIHJlYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIHsgc3RhdGU6IHRoaXMubGluay5vcGVuID8gJ29wZW4nIDogJ2Nsb3NlJywgcm9sZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5saW5rLnRvZ2dsZSgpIH0sIGgoXCJzbG90XCIsIG51bGwsIHRoaXMubGluay5vcGVuID8gJ0Nsb3NlJyA6ICdPcGVuJyksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJjbG9zZVwiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwib3BlblwiIH0pKSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImNvbm5lY3RvclwiOiBbXCJjb25uZWN0b3JXYXRjaGVyXCJdXHJcbiAgfTsgfVxyXG59O1xyXG5fX2RlY29yYXRlJDEoW1xyXG4gIEluamVjdCh7IHNjb3BlOiAnW2Nvbm5lY3Rvcl0nIH0pXHJcbl0sIERyYXdlclRvZ2dsZXIucHJvdG90eXBlLCBcImxpbmtcIiwgdm9pZCAwKTtcclxuRHJhd2VyVG9nZ2xlci5zdHlsZSA9IGRyYXdlclRvZ2dsZXJDc3M7XG5cbmV4cG9ydCB7IERyYXdlciBhcyBwbHVzX2RyYXdlciwgRHJhd2VyVG9nZ2xlciBhcyBwbHVzX2RyYXdlcl90b2dnbGVyIH07XG4iLCJjb25zdCBldmVudFBhdGggPSAoZXZlbnQpID0+IHtcclxuICByZXR1cm4gZXZlbnQucGF0aCB8fCAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcclxufTtcblxuY2xhc3MgT3V0c2lkZUNsaWNrIHtcclxuICBzdGF0aWMgYWRkKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcclxuICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHBhdGguZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBlbGVtZW50KTtcclxuICAgICAgaWYgKDEgPCBpbmRleClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5zZXQoZWxlbWVudCwgZm4pO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy50YXJnZXRzLmdldChlbGVtZW50KTtcclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgIHJldHVybjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2ssIHRydWUpO1xyXG4gICAgdGhpcy50YXJnZXRzLmRlbGV0ZShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuT3V0c2lkZUNsaWNrLnRhcmdldHMgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFNjcm9sbGJhciB7XHJcbiAgc3RhdGljIGdldCBpc1JUTCgpIHtcclxuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2lkdGgoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICByZXR1cm4gd2lkdGg7XHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmUoa2V5KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgICBpZiAodGhpcy5rZXlzLnNpemUgPiAxKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcclxuICAgIHRoaXMuc3R5bGUgPSB7XHJcbiAgICAgIG92ZXJmbG93OiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93LFxyXG4gICAgICBbcHJvcGVydHldOiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSxcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcclxuICB9XHJcbiAgc3RhdGljIHJlc2V0KGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtrZXldID0gdGhpcy5zdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gIH1cclxufVxyXG5TY3JvbGxiYXIua2V5cyA9IG5ldyBTZXQoKTtcclxuU2Nyb2xsYmFyLnN0eWxlID0ge307XG5cbmV4cG9ydCB7IE91dHNpZGVDbGljayBhcyBPLCBTY3JvbGxiYXIgYXMgUywgZXZlbnRQYXRoIGFzIGUgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0RWxlbWVudCwgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuXG5jbGFzcyBBbmltYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gVE9ETzogYXV0byBkZXRlY3QgZnVuY3Rpb25zXHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgb25FbnRlcjogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkVudGVyaW5nOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICAgIG9uRW50ZXJlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkxlYXZlOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICAgIG9uTGVhdmluZzogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkxlYXZlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgfSwgY29uZmlnKTtcclxuICB9XHJcbiAgYWRkKC4uLm5hbWVzKSB7XHJcbiAgICBuYW1lcy5tYXAoKGl0ZW0pID0+IHRoaXMuY29uZmlnLnRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZShpdGVtKSkpO1xyXG4gIH1cclxuICBkdXJhdGlvbigpIHtcclxuICAgIHJldHVybiBbdGhpcy5jb25maWcuc291cmNlXVxyXG4gICAgICAuZmxhdCgpXHJcbiAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBbXHJcbiAgICAgICAgICBzdHlsZS5hbmltYXRpb25EZWxheSxcclxuICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EZWxheSxcclxuICAgICAgICAgIHN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgICAgc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgIF1cclxuICAgICAgICAgIC5tYXAoKGl0ZW0gPSAnMHMnKSA9PiBwYXJzZUZsb2F0KGl0ZW0pICogKC9tcy9nLnRlc3QoaXRlbSkgPyAxIDogMTAwMCkpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCguLi5kdXJhdGlvbi5zbGljZSgwLCAyKSkgKyBNYXRoLm1heCguLi5kdXJhdGlvbi5zbGljZSgyKSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgICAgLnBvcCgpO1xyXG4gIH1cclxuICBuYW1lKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubmFtZSA/IGAke3RoaXMuY29uZmlnLm5hbWV9LSR7aW5wdXR9YCA6IGlucHV0O1xyXG4gIH1cclxuICByZW1vdmUoLi4ubmFtZXMpIHtcclxuICAgIG5hbWVzLm1hcCgoaXRlbSkgPT4gdGhpcy5jb25maWcudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5uYW1lKGl0ZW0pKSk7XHJcbiAgfVxyXG4gIC8vIFRPRE9cclxuICBjYW5jZWwoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnLCAnZW50ZXItdG8nKTtcclxuICAgIHRoaXMucmVtb3ZlKCdsZWF2ZScsICdsZWF2ZS1hY3RpdmUnLCAnbGVhdmUtdG8nKTtcclxuICB9XHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gIH1cclxuICBlbnRlcihjb25maWcpIHtcclxuICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgIGNvbmZpZy5vbkVudGVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZSgnbGVhdmUnLCAnbGVhdmUtYWN0aXZlJyk7XHJcbiAgICB0aGlzLmFkZCgnZW50ZXInKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmUoJ2VudGVyJyk7XHJcbiAgICAgIHRoaXMuYWRkKCdlbnRlci1hY3RpdmUnKTtcclxuICAgICAgY29uZmlnLm9uRW50ZXJpbmcoKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnKTtcclxuICAgICAgICBjb25maWcub25FbnRlcmVkKCk7XHJcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24oKSk7XHJcbiAgICB9LCA1KSk7XHJcbiAgfVxyXG4gIGxlYXZlKGNvbmZpZykge1xyXG4gICAgdGhpcy5jYW5jZWwoKTtcclxuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gICAgY29uZmlnLm9uTGVhdmUoKTtcclxuICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnKTtcclxuICAgIHRoaXMuYWRkKCdsZWF2ZScpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgnbGVhdmUnKTtcclxuICAgICAgdGhpcy5hZGQoJ2xlYXZlLWFjdGl2ZScpO1xyXG4gICAgICBjb25maWcub25MZWF2aW5nKCk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgnbGVhdmUnLCAnbGVhdmUtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uZmlnLm9uTGVhdmVkKCk7XHJcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24oKSk7XHJcbiAgICB9LCA1KSk7XHJcbiAgfVxyXG59XG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAoaW5pdGlhbCkgPT4ge1xyXG4gIGNvbnN0IGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICBjb25zdCBnZXRHcm91cCA9IChpbnN0YW5jZSwgc2NvcGUpID0+IHtcclxuICAgIGNvbnN0IGlzUHJvcGVydHkgPSBzY29wZS5tYXRjaCgvXFxbKlxcXS8pO1xyXG4gICAgaWYgKGlzUHJvcGVydHkpIHtcclxuICAgICAgY29uc3QgcHJvcGVydHkgPSBzY29wZS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NvcGU7XHJcbiAgfTtcclxuICBjb25zdCBnZXRTaWJsaW5ncyA9IChpbnN0YW5jZSwgc2VsZikgPT4ge1xyXG4gICAgY29uc3QgeyBncm91cCB9ID0gaW5zdGFuY2VzLmdldChpbnN0YW5jZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaCgoY29uZmlnLCBpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghc2VsZiAmJiBpbnN0YW5jZSA9PT0gaXRlbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGlmIChjb25maWcuZ3JvdXAgIT09IGdyb3VwKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgcmVzdWx0LnNldChpdGVtLCBjb25maWcpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0U3RhdGUgPSAoaW5zdGFuY2VzKSA9PiB7XHJcbiAgICBjb25zdCBjb25maWdzID0gQXJyYXkuZnJvbShpbnN0YW5jZXMudmFsdWVzKCkpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBjb25maWdzLm1hcCgoY29uZmlnKSA9PiBjb25maWcub3JpZ2luYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBsb2NhbCA9IGNvbmZpZ3MubWFwKChjb25maWcpID0+IGNvbmZpZy5sb2NhbFN0YXRlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsLCAuLi5vcmlnaW5hbCwgLi4ubG9jYWwpO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0UGFyZW50ID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChpbnN0YW5jZSk7XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oaW5zdGFuY2VzKTtcclxuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgIGlmIChwYXJlbnQuc2hhZG93Um9vdCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChbLCBpdGVtQ29uZmlnXSkgPT4gaXRlbUNvbmZpZy5lbGVtZW50ID09PSBwYXJlbnQpO1xyXG4gICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1bMF07XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGUgPSAoaW5zdGFuY2UsIHNlbGYpID0+IHtcclxuICAgIC8vIGluc3RhbmNlIHNpYmxpbmdzXHJcbiAgICBjb25zdCBpbnN0YW5jZXMgPSBnZXRTaWJsaW5ncyhpbnN0YW5jZSwgc2VsZik7XHJcbiAgICAvLyBpbml0aWFsIHN0YXRlXHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKGluc3RhbmNlcyk7XHJcbiAgICAvLyBmb3IgZWFjaCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goKGNvbmZpZywgaXRlbSkgPT4ge1xyXG4gICAgICAvLyByZW1vdmUgb2xkIHByb3h5XHJcbiAgICAgIGRlbGV0ZSBpdGVtW2NvbmZpZy5wcm9wZXJ0eV07XHJcbiAgICAgIC8vIHNldCBuZXcgcHJveHlcclxuICAgICAgaXRlbVtjb25maWcucHJvcGVydHldID0gbmV3IFByb3h5KHN0YXRlLCB7XHJcbiAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgIGlmIChjb25maWcubG9jYWxTdGF0ZVtwcm9wZXJ0eV0gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNvbmZpZy5sb2NhbFN0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHVwZGF0ZShpdGVtLCB0cnVlKSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyByZXJlbmRlciBjdXJyZW50IGluc3RhbmNlXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmb3JjZVVwZGF0ZShpdGVtKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGJpbmQgPSAoaW5zdGFuY2UsIGNvbmZpZykgPT4ge1xyXG4gICAgLy8gY3JlYXRlIG1haW4gY29uZmlnXHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWcpLCB7IGVsZW1lbnQ6IGdldEVsZW1lbnQoaW5zdGFuY2UpLCBvcmlnaW5hbFN0YXRlOiBpbnN0YW5jZVtjb25maWcucHJvcGVydHldLCBsb2NhbFN0YXRlOiB7fSwgZ3JvdXA6IGdldEdyb3VwKGluc3RhbmNlLCBjb25maWcuc2NvcGUpIH0pO1xyXG4gICAgLy8gYmluZCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLnNldChpbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgICAvLyB1cGRhdGUgYnkgaW5zdGFuY2VcclxuICAgIHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSk7XHJcbiAgICAvLyBUT0RPXHJcbiAgICBlbnN1cmUoaW5zdGFuY2UpO1xyXG4gIH07XHJcbiAgY29uc3QgdW5iaW5kID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICAvLyBsb2FkIGluc3RhbmNlXHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCBvcmlnaW5hbFN0YXRlIH0gPSBpbnN0YW5jZXMuZ2V0KGluc3RhbmNlKTtcclxuICAgIC8vIHJlbW92ZSBwcm94eVxyXG4gICAgZGVsZXRlIGluc3RhbmNlW3Byb3BlcnR5XTtcclxuICAgIC8vIHJlc2V0IHByb3BlcnR5IHZhbHVlXHJcbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBvcmlnaW5hbFN0YXRlO1xyXG4gICAgLy8gdXBkYXRlIGJ5IGluc3RhbmNlXHJcbiAgICB1cGRhdGUoaW5zdGFuY2UsIGZhbHNlKTtcclxuICAgIC8vIHVuYmluZCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgfTtcclxuICAvLyBUT0RPXHJcbiAgY29uc3QgcmViaW5kID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IGdldFNpYmxpbmdzKGluc3RhbmNlLCB0cnVlKTtcclxuICAgIHNpYmxpbmdzXHJcbiAgICAgIC5mb3JFYWNoKChjb25maWcsIGluc3RhbmNlKSA9PiBjb25maWcuZ3JvdXAgPSBnZXRHcm91cChpbnN0YW5jZSwgY29uZmlnLnNjb3BlKSk7XHJcbiAgICBBcnJheS5mcm9tKHNpYmxpbmdzLmtleXMoKSlcclxuICAgICAgLmZvckVhY2goKGluc3RhbmNlKSA9PiBlbnN1cmUoaW5zdGFuY2UpKTtcclxuICAgIEFycmF5LmZyb20oc2libGluZ3Mua2V5cygpKVxyXG4gICAgICAuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSkpO1xyXG4gIH07XHJcbiAgY29uc3QgZW5zdXJlID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoaW5zdGFuY2VzLmdldChpbnN0YW5jZSkuZ3JvdXApXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudChpbnN0YW5jZSk7XHJcbiAgICBpZiAoIXBhcmVudClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlnID0gaW5zdGFuY2VzLmdldChwYXJlbnQpO1xyXG4gICAgY29uZmlnLmdyb3VwID0gKF9hID0gY29uZmlnLmdyb3VwKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XHJcbiAgICBpbnN0YW5jZXMuZ2V0KGluc3RhbmNlKS5ncm91cCA9IGNvbmZpZy5ncm91cDtcclxuICAgIHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBJbmplY3QgPSAoY29uZmlnKSA9PiAoaW5zdGFuY2UsIHByb3BlcnR5KSA9PiB7XHJcbiAgICAvLyBzdG9yZSBjb21wb25lbnREaWRMb2FkIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBsb2FkID0gaW5zdGFuY2UuY29tcG9uZW50RGlkTG9hZDtcclxuICAgIGluc3RhbmNlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgICAgZW5zdXJlKHRoaXMpO1xyXG4gICAgICAvLyBjYWxsIG9yaWdpbmFsIGNvbXBvbmVudERpZExvYWQgZnVuY3Rpb25cclxuICAgICAgbG9hZCAmJiBsb2FkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgICAvLyBzdG9yZSBjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgY29uc3QgY29ubmVjdGVkID0gaW5zdGFuY2UuY29ubmVjdGVkQ2FsbGJhY2s7XHJcbiAgICAvLyBzZXQgbmV3IGNvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBpbnN0YW5jZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gYmluZCBjdXJyZW50IGluc3RhbmNlXHJcbiAgICAgIGJpbmQodGhpcywgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWcpLCB7IHByb3BlcnR5IH0pKTtcclxuICAgICAgLy8gY2FsbCBvcmlnaW5hbCBjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICBjb25uZWN0ZWQgJiYgY29ubmVjdGVkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgICAvLyBzdG9yZSBkaXNjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgY29uc3QgZGlzY29ubmVjdGVkID0gaW5zdGFuY2UuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XHJcbiAgICAvLyBzZXQgbmV3IGRpc2Nvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBpbnN0YW5jZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gdW5iaW5kIGN1cnJlbnQgaW5zdGFuY2VcclxuICAgICAgdW5iaW5kKHRoaXMpO1xyXG4gICAgICAvLyBjYWxsIG9yaWdpbmFsIGRpc2Nvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgIGRpc2Nvbm5lY3RlZCAmJiBkaXNjb25uZWN0ZWQuYmluZCh0aGlzKSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBJbmplY3QsXHJcbiAgICByZWJpbmRcclxuICB9O1xyXG59O1xuXG5jb25zdCBjbGFzc2VzID0gKC4uLmlucHV0KSA9PiB7XHJcbiAgY29uc3QgbmFtZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRbaV07XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcclxuICAgICAgICBuYW1lcy5wdXNoKGNsYXNzZXMoZWxlbWVudCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRba2V5XTtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSB0b0tlYmFiQ2FzZShrZXkpO1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XHJcbiAgICAgICAgICAgICAgdmFsdWUgJiYgbmFtZXMucHVzaChgJHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxyXG4gICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7bmFtZX0tJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAndHJ1ZSc6XHJcbiAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7bmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChgJHtuYW1lfS0ke3ZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxyXG4gICAgICAgIG5hbWVzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuYW1lcy5qb2luKCcgJyk7XHJcbn07XG5cbmNvbnN0IGlzUlRMID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2V0RWxlbWVudChpbnN0YW5jZSkpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcclxufTtcblxuY29uc3QgdG9BeGlzID0gKGlucHV0LCBydGwpID0+IHtcclxuICBpZiAoaW5wdXQubWF0Y2goL3N0YXJ0LykpXHJcbiAgICBpbnB1dCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgaWYgKGlucHV0Lm1hdGNoKC9lbmQvKSlcclxuICAgIGlucHV0ID0gcnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuICByZXR1cm4gaW5wdXQ7XHJcbn07XG5cbmNvbnN0IHRvS2ViYWJDYXNlID0gKGlucHV0KSA9PiB7XHJcbiAgcmV0dXJuIGlucHV0XHJcbiAgICAubWF0Y2goL1tBLVpdezIsfSg/PVtBLVpdW2Etel0rWzAtOV0qfFxcYil8W0EtWl0/W2Etel0rWzAtOV0qfFtBLVpdfFswLTldKy9nKVxyXG4gICAgLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oJy0nKTtcclxufTtcblxuZXhwb3J0IHsgQW5pbWF0aW9uIGFzIEEsIGNsYXNzZXMgYXMgYSwgY3JlYXRlTGluayBhcyBjLCBpc1JUTCBhcyBpLCB0b0F4aXMgYXMgdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==