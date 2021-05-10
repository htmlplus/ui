(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-dialog_6.entry.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-dialog_6.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: plus_dialog, plus_dialog_body, plus_dialog_content, plus_dialog_footer, plus_dialog_header, plus_dialog_toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog_body", function() { return DialogBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog_content", function() { return DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog_footer", function() { return DialogFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog_header", function() { return DialogHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_dialog_toggler", function() { return DialogToggler; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-kebab-case-b5400a99.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/to-kebab-case-b5400a99.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-config-5cbf6bc5.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/global-config-5cbf6bc5.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");






const GlobalState = () => {
  return (instance, name) => {
    let state;
    const descriptor = {
      set(value) {
        if (state)
          return;
        state = value;
      },
      get() {
        return state;
      },
      enumerable: true,
      configurable: true,
    };
    Object.defineProperty(instance, name, descriptor);
  };
};

const initial = {
  open: false,
  toggle: () => undefined
};
const { Inject, rebind } = Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["c"])(initial);

var DialogPlacementMap;
(function (DialogPlacementMap) {
  DialogPlacementMap["start"] = "start-center";
  DialogPlacementMap["left"] = "left-center";
  DialogPlacementMap["center"] = "center-center";
  DialogPlacementMap["right"] = "right-center";
  DialogPlacementMap["end"] = "end-center";
  DialogPlacementMap["top"] = "center-top";
  DialogPlacementMap["bottom"] = "center-bottom";
  DialogPlacementMap["start-top"] = "start-top";
  DialogPlacementMap["start-center"] = "start-center";
  DialogPlacementMap["start-bottom"] = "start-bottom";
  DialogPlacementMap["left-top"] = "left-top";
  DialogPlacementMap["left-center"] = "left-center";
  DialogPlacementMap["left-bottom"] = "left-bottom";
  DialogPlacementMap["center-top"] = "center-top";
  DialogPlacementMap["center-center"] = "center-center";
  DialogPlacementMap["center-bottom"] = "center-bottom";
  DialogPlacementMap["right-top"] = "right-top";
  DialogPlacementMap["right-center"] = "right-center";
  DialogPlacementMap["right-bottom"] = "right-bottom";
  DialogPlacementMap["end-top"] = "end-top";
  DialogPlacementMap["end-center"] = "end-center";
  DialogPlacementMap["end-bottom"] = "end-bottom";
})(DialogPlacementMap || (DialogPlacementMap = {}));

const dialogCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;display:none;outline:0;overflow:hidden}.backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1}.backdrop *{width:100%;height:100%;background-color:black;opacity:0.5}.dialog{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;z-index:1}.table{display:table;margin:auto;height:100%;position:relative}.cell{display:table-cell}.scrollable ::slotted(*){overflow-x:hidden;overflow-y:auto}.x-right .table{margin-right:0}.x-left .table{margin-left:0}.y-top .cell{vertical-align:top}.y-center .cell{vertical-align:middle}.y-bottom .cell{vertical-align:bottom}.full-height ::slotted(*){min-height:calc(100vh - 1rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:0.5rem}.scrollable ::slotted(*){max-height:calc(100vh - 1rem)}.fullscreen .cell{padding:0}.fullscreen ::slotted(*){border:0;border-radius:0}.fullscreen .cell{max-width:none}.fullscreen ::slotted(*){min-height:100vh}@media (min-width: 576px){.full-height ::slotted(*){min-height:calc(100vh - 3.5rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:1.75rem}.scrollable ::slotted(*){max-height:calc(100vh - 3.5rem)}.cell{max-width:500px}.size-sm .cell{max-width:300px}}@media (max-width: 575.98px){.fullscreen-sm-down .cell{padding:0}.fullscreen-sm-down ::slotted(*){border:0;border-radius:0}.fullscreen-sm-down .cell{max-width:none}.fullscreen-sm-down ::slotted(*){min-height:100vh}}@media (max-width: 767.98px){.fullscreen-md-down .cell{padding:0}.fullscreen-md-down ::slotted(*){border:0;border-radius:0}.fullscreen-md-down .cell{max-width:none}.fullscreen-md-down ::slotted(*){min-height:100vh}}@media (min-width: 992px){.size-lg .cell{max-width:800px}.size-xl .cell{max-width:800px}}@media (max-width: 991.98px){.fullscreen-lg-down .cell{padding:0}.fullscreen-lg-down ::slotted(*){border:0;border-radius:0}.fullscreen-lg-down .cell{max-width:none}.fullscreen-lg-down ::slotted(*){min-height:100vh}}@media (min-width: 1200px){.size-xl .cell{max-width:1140px}}@media (max-width: 1199.98px){.fullscreen-xl-down .cell{padding:0}.fullscreen-xl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xl-down .cell{max-width:none}.fullscreen-xl-down ::slotted(*){min-height:100vh}}@media (max-width: 1399.98px){.fullscreen-xxl-down .cell{padding:0}.fullscreen-xxl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xxl-down .cell{max-width:none}.fullscreen-xxl-down ::slotted(*){min-height:100vh}}:host(.open){display:block}.cell{width:100vw}::slotted(*){pointer-events:auto}.full-width .cell{max-width:none !important}.sticky .cell{padding:0}.sticky ::slotted(*){border:0;border-radius:0}:host(.fade.dialog-enter-active),:host(.fade.dialog-leave-active){transition:all 0.5s ease-out}:host(.fade.dialog-enter-active) .dialog,:host(.fade.dialog-leave-active) .dialog{overflow:hidden}:host(.fade.dialog-enter-active) ::slotted(*),:host(.fade.dialog-leave-active) ::slotted(*){transition:all 0.5s ease-out}:host(.fade.dialog-enter),:host(.fade.dialog-leave-active){opacity:0}:host(.fade.dialog-enter) ::slotted(*),:host(.fade.dialog-leave-active) ::slotted(*){transform:translate(0, -50px)}:host(.fade.dialog-enter) .y-bottom ::slotted(*),:host(.fade.dialog-leave-active) .y-bottom ::slotted(*){transform:translate(0, 50px)}:host(.fade.dialog-enter) .x-right ::slotted(*),:host(.fade.dialog-leave-active) .x-right ::slotted(*){transform:translate(50px, 0)}:host(.fade.dialog-enter) .x-left ::slotted(*),:host(.fade.dialog-leave-active) .x-left ::slotted(*){transform:translate(-50px, 0)}:host(.fade.dialog-leave),:host(.fade.dialog-enter-active){opacity:1}:host(.fade.dialog-leave) ::slotted(*),:host(.fade.dialog-enter-active) ::slotted(*){transform:translate(0, 0)}";

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
const Dialog = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusClose = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusClose", 3);
    this.plusClosed = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusClosed", 2);
    this.plusOpen = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusOpen", 3);
    this.plusOpened = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusOpened", 2);
    /**
     * Activate the dialog’s backdrop to show or not.
     */
    this.backdrop = true;
    /**
     * Closes the dialog when `escape` key is pressed.
     */
    this.keyboard = true;
    /**
     * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
     * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
     */
    this.placement = 'top';
    this.state = {
      instances: new Set()
    };
    this.link = {
      toggle: () => this.tryToggle()
    };
  }
  get classes() {
    let [x, y] = (DialogPlacementMap[this.placement] || '').split('-');
    x = Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["t"])(x, this.isRTL);
    return Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["a"])('dialog', {
      x,
      y,
      size: this.size,
      sticky: this.sticky,
      fullWidth: this.fullWidth,
      fullHeight: this.fullHeight,
      fullscreen: this.fullscreen,
      scrollable: this.scrollable
    });
  }
  get isCurrent() {
    const instances = Array.from(this.state.instances);
    const last = instances.length - 1;
    return instances[last] === this;
  }
  get isOpen() {
    return this.$host.classList.contains('open');
  }
  get isRTL() {
    return Object(_to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
  }
  /**
   * Methods
   */
  connectorWatcher() {
    rebind(this);
  }
  openWatcher() {
    if (this.open) {
      if (this.isOpen)
        return;
      this.animation.enter({
        onEnter: () => this.show()
      });
    }
    else {
      if (!this.isOpen)
        return;
      this.animation.leave({
        onLeave: () => this.broadcast(false),
        onLeaved: () => this.hide(),
      });
    }
  }
  broadcast(value) {
    this.link.open = value;
  }
  init() {
    this.animation = new _to_kebab_case_b5400a99_js__WEBPACK_IMPORTED_MODULE_1__["A"]({
      name: 'dialog',
      source: this.$host,
      target: this.$host
    });
  }
  hide() {
    this.resetAttributes();
    this.resetEvents();
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["O"].remove(this.$cell);
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["S"].reset(this);
    this.resetZIndex();
    this.state.instances.delete(this);
    this.$host.classList.remove('open');
    this.open = false;
    this.broadcast(false);
  }
  show() {
    this.setAttributes();
    this.setEvents();
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["O"].add(this.$cell, this.onOutsideClick);
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["S"].remove(this);
    this.setZIndex();
    this.state.instances.add(this);
    this.$host.classList.add('open');
    this.open = true;
    this.broadcast(true);
  }
  tryToHide() {
    if (!this.isOpen)
      return;
    const event = this.plusClose.emit();
    if (!this.isOpen || event.defaultPrevented)
      return;
    this.animation.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => {
        this.hide();
        this.plusClosed.emit();
      }
    });
  }
  tryToShow() {
    if (this.isOpen)
      return;
    const event = this.plusOpen.emit();
    if (this.isOpen || event.defaultPrevented)
      return;
    this.animation.enter({
      onEnter: () => this.show(),
      onEntered: () => this.plusOpened.emit()
    });
  }
  tryToggle() {
    this.isOpen ? this.tryToHide() : this.tryToShow();
  }
  dispose() {
    var _a;
    (_a = this.animation) === null || _a === void 0 ? void 0 : _a.dispose();
    this.resetEvents();
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["O"].remove(this.$cell);
    _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_4__["S"].reset(this);
    this.state.instances.delete(this);
  }
  /**
   * Attributes
   */
  setAttributes() {
    this.$host.removeAttribute('aria-hidden');
    this.$host.setAttribute('aria-modal', 'true');
    this.$host.setAttribute('role', 'dialog');
  }
  resetAttributes() {
    this.$host.setAttribute('aria-hidden', 'true');
    this.$host.removeAttribute('aria-modal');
    this.$host.removeAttribute('role');
  }
  /**
   * Events
   */
  setEvents() {
    document.addEventListener('keydown', this.onEscape, true);
  }
  resetEvents() {
    document.removeEventListener('keydown', this.onEscape, true);
  }
  /**
   * z-index
   */
  setZIndex() {
    const instance = Array.from(this.state.instances).slice(-1)[0];
    if (!instance)
      return;
    const zIndex = getComputedStyle(instance.$host).getPropertyValue('z-index');
    this.$host.style.zIndex = `${parseInt(zIndex) + 1}`;
  }
  resetZIndex() {
    this.$host.style.zIndex = null;
  }
  /**
   * Events handler
   */
  onEscape(event) {
    if (!this.isOpen || !this.isCurrent)
      return;
    if (!this.keyboard || event.key !== 'Escape')
      return;
    event.preventDefault();
    this.tryToHide();
  }
  onOutsideClick() {
    this.tryToHide();
  }
  /**
   * Lifecycles
   */
  connectedCallback() {
    this.init();
    this.open && this.show();
  }
  disconnectedCallback() {
    this.dispose();
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-hidden": "true", tabindex: "-1" }, this.backdrop && (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "backdrop" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null))), Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.classes }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "table" }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "cell", ref: (element) => (this.$cell = element) }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))))));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "connector": ["connectorWatcher"],
    "open": ["openWatcher"]
  }; }
};
__decorate([
  Object(_global_config_5cbf6bc5_js__WEBPACK_IMPORTED_MODULE_3__["G"])('dialog', {
    backdrop: true,
    keyboard: true,
    placement: 'top'
  })
], Dialog.prototype, "config", void 0);
__decorate([
  GlobalState()
], Dialog.prototype, "state", void 0);
__decorate([
  Inject({ scope: '[connector]' })
], Dialog.prototype, "link", void 0);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_2__["B"]
], Dialog.prototype, "onEscape", null);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_2__["B"]
], Dialog.prototype, "onOutsideClick", null);
Dialog.style = dialogCss;

const dialogBodyCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{position:relative;flex:1 1 auto;padding:1rem}:host([scrollable]:not([scrollable=false])){overflow:hidden;overflow-y:auto}";

const DialogBody = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
DialogBody.style = dialogBodyCss;

const dialogContentCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:solid 1px rgba(0, 0, 0, 0.2);border-radius:0.3rem;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);outline:0}";

const DialogContent = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
DialogContent.style = dialogContentCss;

const dialogFooterCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:0.75rem;border-top:solid 1px rgba(0, 0, 0, 0.2);border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}:host ::slotted(*){margin:0.25rem}";

const DialogFooter = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
DialogFooter.style = dialogFooterCss;

const dialogHeaderCss = "*,*::before,*::after{box-sizing:border-box}:host,:host::before,:host::after{box-sizing:border-box}:host{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem;border-bottom:solid 1px rgba(0, 0, 0, 0.2);border-top-right-radius:calc(0.3rem - 1px);border-top-left-radius:calc(0.3rem - 1px)}";

const DialogHeader = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
DialogHeader.style = dialogHeaderCss;

const dialogTogglerCss = ":host{display:inline-block;cursor:default;user-select:none}:host([state=open]) [name=close],:host([state=close]) [name=open]{display:none}";

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
const DialogToggler = class {
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
], DialogToggler.prototype, "link", void 0);
DialogToggler.style = dialogTogglerCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1kaWFsb2dfNi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vc2Nyb2xsYmFyLThkMTg4NTRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL3JlYWN0L25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvY29yZS9kaXN0L2VzbS90by1rZWJhYi1jYXNlLWI1NDAwYTk5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLFVBQVU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcENyQjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNB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O0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSyxHQUFHLE1BQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDREQUFVO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7O0FBRWtGIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJpbmQodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBsZXQgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEBib3VuZE1ldGhvZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJHt0eXBlb2YgZm59YCk7XHJcbiAgfVxyXG4gIC8vIEluIElFMTEgY2FsbGluZyBPYmplY3QuZGVmaW5lUHJvcGVydHkgaGFzIGEgc2lkZS1lZmZlY3Qgb2YgZXZhbHVhdGluZyB0aGVcclxuICAvLyBnZXR0ZXIgZm9yIHRoZSBwcm9wZXJ0eSB3aGljaCBpcyBiZWluZyByZXBsYWNlZC4gVGhpcyBjYXVzZXMgaW5maW5pdGVcclxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXHJcbiAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICByZXR1cm4ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXHJcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xyXG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgZm4gPSB2YWx1ZTtcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgIH0sXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgZm4gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJpbmQgYXMgQiB9O1xuIiwiY29uc3QgR0xPQkFMX0NPTkZJR19OQU1FID0gJ2h0bWxwbHVzJztcclxuY29uc3QgQlJFQUtQT0lOVFMgPSB7XHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NixcclxuICBtZDogNzY4LFxyXG4gIGxnOiA5OTIsXHJcbiAgeGw6IDEyMDAsXHJcbiAgeHhsOiAxNDAwXHJcbn07XG5cbmZ1bmN0aW9uIEdsb2JhbENvbmZpZyhuYW1lc3BhY2UsIGluaXRpYWwgPSB7fSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaW5zdGFuY2UsIG5hbWUpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RlZCA9IGluc3RhbmNlLmNvbm5lY3RlZENhbGxiYWNrO1xyXG4gICAgaW5zdGFuY2UuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvd1tHTE9CQUxfQ09ORklHX05BTUVdIHx8IHt9O1xyXG4gICAgICBjb25zdCBjb21wb25lbnRzID0gY29uZmlnLmNvbXBvbmVudHMgfHwge307XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbbmFtZXNwYWNlXSB8fCB7fTtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wb25lbnRba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICh0aGlzW2tleV0gIT09IGluaXRpYWxba2V5XSlcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3RlZCAmJiBjb25uZWN0ZWQuYmluZCh0aGlzKSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJSRUFLUE9JTlRTIGFzIEIsIEdsb2JhbENvbmZpZyBhcyBHIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02MThiN2ZjOC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxpbmssIHQgYXMgdG9BeGlzLCBhIGFzIGNsYXNzZXMsIGkgYXMgaXNSVEwsIEEgYXMgQW5pbWF0aW9uIH0gZnJvbSAnLi90by1rZWJhYi1jYXNlLWI1NDAwYTk5LmpzJztcbmltcG9ydCB7IEIgYXMgQmluZCB9IGZyb20gJy4vYmluZC1kYWRjNDRkZC5qcyc7XG5pbXBvcnQgeyBHIGFzIEdsb2JhbENvbmZpZyB9IGZyb20gJy4vZ2xvYmFsLWNvbmZpZy01Y2JmNmJjNS5qcyc7XG5pbXBvcnQgeyBPIGFzIE91dHNpZGVDbGljaywgUyBhcyBTY3JvbGxiYXIgfSBmcm9tICcuL3Njcm9sbGJhci04ZDE4ODU0ZS5qcyc7XG5cbmNvbnN0IEdsb2JhbFN0YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoaW5zdGFuY2UsIG5hbWUpID0+IHtcclxuICAgIGxldCBzdGF0ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XHJcbiAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzdGF0ZSA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9LFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBuYW1lLCBkZXNjcmlwdG9yKTtcclxuICB9O1xyXG59O1xuXG5jb25zdCBpbml0aWFsID0ge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIHRvZ2dsZTogKCkgPT4gdW5kZWZpbmVkXHJcbn07XHJcbmNvbnN0IHsgSW5qZWN0LCByZWJpbmQgfSA9IGNyZWF0ZUxpbmsoaW5pdGlhbCk7XG5cbnZhciBEaWFsb2dQbGFjZW1lbnRNYXA7XHJcbihmdW5jdGlvbiAoRGlhbG9nUGxhY2VtZW50TWFwKSB7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wic3RhcnRcIl0gPSBcInN0YXJ0LWNlbnRlclwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImxlZnRcIl0gPSBcImxlZnQtY2VudGVyXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wiY2VudGVyXCJdID0gXCJjZW50ZXItY2VudGVyXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wicmlnaHRcIl0gPSBcInJpZ2h0LWNlbnRlclwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImVuZFwiXSA9IFwiZW5kLWNlbnRlclwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcInRvcFwiXSA9IFwiY2VudGVyLXRvcFwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImJvdHRvbVwiXSA9IFwiY2VudGVyLWJvdHRvbVwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcInN0YXJ0LXRvcFwiXSA9IFwic3RhcnQtdG9wXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wic3RhcnQtY2VudGVyXCJdID0gXCJzdGFydC1jZW50ZXJcIjtcclxuICBEaWFsb2dQbGFjZW1lbnRNYXBbXCJzdGFydC1ib3R0b21cIl0gPSBcInN0YXJ0LWJvdHRvbVwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImxlZnQtdG9wXCJdID0gXCJsZWZ0LXRvcFwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImxlZnQtY2VudGVyXCJdID0gXCJsZWZ0LWNlbnRlclwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImxlZnQtYm90dG9tXCJdID0gXCJsZWZ0LWJvdHRvbVwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImNlbnRlci10b3BcIl0gPSBcImNlbnRlci10b3BcIjtcclxuICBEaWFsb2dQbGFjZW1lbnRNYXBbXCJjZW50ZXItY2VudGVyXCJdID0gXCJjZW50ZXItY2VudGVyXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wiY2VudGVyLWJvdHRvbVwiXSA9IFwiY2VudGVyLWJvdHRvbVwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcInJpZ2h0LXRvcFwiXSA9IFwicmlnaHQtdG9wXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wicmlnaHQtY2VudGVyXCJdID0gXCJyaWdodC1jZW50ZXJcIjtcclxuICBEaWFsb2dQbGFjZW1lbnRNYXBbXCJyaWdodC1ib3R0b21cIl0gPSBcInJpZ2h0LWJvdHRvbVwiO1xyXG4gIERpYWxvZ1BsYWNlbWVudE1hcFtcImVuZC10b3BcIl0gPSBcImVuZC10b3BcIjtcclxuICBEaWFsb2dQbGFjZW1lbnRNYXBbXCJlbmQtY2VudGVyXCJdID0gXCJlbmQtY2VudGVyXCI7XHJcbiAgRGlhbG9nUGxhY2VtZW50TWFwW1wiZW5kLWJvdHRvbVwiXSA9IFwiZW5kLWJvdHRvbVwiO1xyXG59KShEaWFsb2dQbGFjZW1lbnRNYXAgfHwgKERpYWxvZ1BsYWNlbWVudE1hcCA9IHt9KSk7XG5cbmNvbnN0IGRpYWxvZ0NzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMDA7ZGlzcGxheTpub25lO291dGxpbmU6MDtvdmVyZmxvdzpoaWRkZW59LmJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MX0uYmFja2Ryb3AgKnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTowLjV9LmRpYWxvZ3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87ei1pbmRleDoxfS50YWJsZXtkaXNwbGF5OnRhYmxlO21hcmdpbjphdXRvO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0uc2Nyb2xsYWJsZSA6OnNsb3R0ZWQoKil7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfS54LXJpZ2h0IC50YWJsZXttYXJnaW4tcmlnaHQ6MH0ueC1sZWZ0IC50YWJsZXttYXJnaW4tbGVmdDowfS55LXRvcCAuY2VsbHt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnktY2VudGVyIC5jZWxse3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ueS1ib3R0b20gLmNlbGx7dmVydGljYWwtYWxpZ246Ym90dG9tfS5mdWxsLWhlaWdodCA6OnNsb3R0ZWQoKil7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gMXJlbSl9LmZ1bGwtaGVpZ2h0LnN0aWNreSA6OnNsb3R0ZWQoKil7bWluLWhlaWdodDoxMDB2aH0uY2VsbHtwYWRkaW5nOjAuNXJlbX0uc2Nyb2xsYWJsZSA6OnNsb3R0ZWQoKil7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMXJlbSl9LmZ1bGxzY3JlZW4gLmNlbGx7cGFkZGluZzowfS5mdWxsc2NyZWVuIDo6c2xvdHRlZCgqKXtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9LmZ1bGxzY3JlZW4gLmNlbGx7bWF4LXdpZHRoOm5vbmV9LmZ1bGxzY3JlZW4gOjpzbG90dGVkKCope21pbi1oZWlnaHQ6MTAwdmh9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuZnVsbC1oZWlnaHQgOjpzbG90dGVkKCope21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMuNXJlbSl9LmZ1bGwtaGVpZ2h0LnN0aWNreSA6OnNsb3R0ZWQoKil7bWluLWhlaWdodDoxMDB2aH0uY2VsbHtwYWRkaW5nOjEuNzVyZW19LnNjcm9sbGFibGUgOjpzbG90dGVkKCope21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMuNXJlbSl9LmNlbGx7bWF4LXdpZHRoOjUwMHB4fS5zaXplLXNtIC5jZWxse21heC13aWR0aDozMDBweH19QG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KXsuZnVsbHNjcmVlbi1zbS1kb3duIC5jZWxse3BhZGRpbmc6MH0uZnVsbHNjcmVlbi1zbS1kb3duIDo6c2xvdHRlZCgqKXtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9LmZ1bGxzY3JlZW4tc20tZG93biAuY2VsbHttYXgtd2lkdGg6bm9uZX0uZnVsbHNjcmVlbi1zbS1kb3duIDo6c2xvdHRlZCgqKXttaW4taGVpZ2h0OjEwMHZofX1AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpey5mdWxsc2NyZWVuLW1kLWRvd24gLmNlbGx7cGFkZGluZzowfS5mdWxsc2NyZWVuLW1kLWRvd24gOjpzbG90dGVkKCope2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MH0uZnVsbHNjcmVlbi1tZC1kb3duIC5jZWxse21heC13aWR0aDpub25lfS5mdWxsc2NyZWVuLW1kLWRvd24gOjpzbG90dGVkKCope21pbi1oZWlnaHQ6MTAwdmh9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7LnNpemUtbGcgLmNlbGx7bWF4LXdpZHRoOjgwMHB4fS5zaXplLXhsIC5jZWxse21heC13aWR0aDo4MDBweH19QG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KXsuZnVsbHNjcmVlbi1sZy1kb3duIC5jZWxse3BhZGRpbmc6MH0uZnVsbHNjcmVlbi1sZy1kb3duIDo6c2xvdHRlZCgqKXtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9LmZ1bGxzY3JlZW4tbGctZG93biAuY2VsbHttYXgtd2lkdGg6bm9uZX0uZnVsbHNjcmVlbi1sZy1kb3duIDo6c2xvdHRlZCgqKXttaW4taGVpZ2h0OjEwMHZofX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuc2l6ZS14bCAuY2VsbHttYXgtd2lkdGg6MTE0MHB4fX1AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KXsuZnVsbHNjcmVlbi14bC1kb3duIC5jZWxse3BhZGRpbmc6MH0uZnVsbHNjcmVlbi14bC1kb3duIDo6c2xvdHRlZCgqKXtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9LmZ1bGxzY3JlZW4teGwtZG93biAuY2VsbHttYXgtd2lkdGg6bm9uZX0uZnVsbHNjcmVlbi14bC1kb3duIDo6c2xvdHRlZCgqKXttaW4taGVpZ2h0OjEwMHZofX1AbWVkaWEgKG1heC13aWR0aDogMTM5OS45OHB4KXsuZnVsbHNjcmVlbi14eGwtZG93biAuY2VsbHtwYWRkaW5nOjB9LmZ1bGxzY3JlZW4teHhsLWRvd24gOjpzbG90dGVkKCope2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MH0uZnVsbHNjcmVlbi14eGwtZG93biAuY2VsbHttYXgtd2lkdGg6bm9uZX0uZnVsbHNjcmVlbi14eGwtZG93biA6OnNsb3R0ZWQoKil7bWluLWhlaWdodDoxMDB2aH19Omhvc3QoLm9wZW4pe2Rpc3BsYXk6YmxvY2t9LmNlbGx7d2lkdGg6MTAwdnd9OjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOmF1dG99LmZ1bGwtd2lkdGggLmNlbGx7bWF4LXdpZHRoOm5vbmUgIWltcG9ydGFudH0uc3RpY2t5IC5jZWxse3BhZGRpbmc6MH0uc3RpY2t5IDo6c2xvdHRlZCgqKXtib3JkZXI6MDtib3JkZXItcmFkaXVzOjB9Omhvc3QoLmZhZGUuZGlhbG9nLWVudGVyLWFjdGl2ZSksOmhvc3QoLmZhZGUuZGlhbG9nLWxlYXZlLWFjdGl2ZSl7dHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLW91dH06aG9zdCguZmFkZS5kaWFsb2ctZW50ZXItYWN0aXZlKSAuZGlhbG9nLDpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZS1hY3RpdmUpIC5kaWFsb2d7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5mYWRlLmRpYWxvZy1lbnRlci1hY3RpdmUpIDo6c2xvdHRlZCgqKSw6aG9zdCguZmFkZS5kaWFsb2ctbGVhdmUtYWN0aXZlKSA6OnNsb3R0ZWQoKil7dHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLW91dH06aG9zdCguZmFkZS5kaWFsb2ctZW50ZXIpLDpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZS1hY3RpdmUpe29wYWNpdHk6MH06aG9zdCguZmFkZS5kaWFsb2ctZW50ZXIpIDo6c2xvdHRlZCgqKSw6aG9zdCguZmFkZS5kaWFsb2ctbGVhdmUtYWN0aXZlKSA6OnNsb3R0ZWQoKil7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtNTBweCl9Omhvc3QoLmZhZGUuZGlhbG9nLWVudGVyKSAueS1ib3R0b20gOjpzbG90dGVkKCopLDpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZS1hY3RpdmUpIC55LWJvdHRvbSA6OnNsb3R0ZWQoKil7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCA1MHB4KX06aG9zdCguZmFkZS5kaWFsb2ctZW50ZXIpIC54LXJpZ2h0IDo6c2xvdHRlZCgqKSw6aG9zdCguZmFkZS5kaWFsb2ctbGVhdmUtYWN0aXZlKSAueC1yaWdodCA6OnNsb3R0ZWQoKil7dHJhbnNmb3JtOnRyYW5zbGF0ZSg1MHB4LCAwKX06aG9zdCguZmFkZS5kaWFsb2ctZW50ZXIpIC54LWxlZnQgOjpzbG90dGVkKCopLDpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZS1hY3RpdmUpIC54LWxlZnQgOjpzbG90dGVkKCope3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwcHgsIDApfTpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZSksOmhvc3QoLmZhZGUuZGlhbG9nLWVudGVyLWFjdGl2ZSl7b3BhY2l0eToxfTpob3N0KC5mYWRlLmRpYWxvZy1sZWF2ZSkgOjpzbG90dGVkKCopLDpob3N0KC5mYWRlLmRpYWxvZy1lbnRlci1hY3RpdmUpIDo6c2xvdHRlZCgqKXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApfVwiO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgZWxzZVxyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSlcclxuICAgICAgICByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5jb25zdCBEaWFsb2cgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIHRoaXMucGx1c0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzQ2xvc2VcIiwgMyk7XHJcbiAgICB0aGlzLnBsdXNDbG9zZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcInBsdXNDbG9zZWRcIiwgMik7XHJcbiAgICB0aGlzLnBsdXNPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzT3BlblwiLCAzKTtcclxuICAgIHRoaXMucGx1c09wZW5lZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwicGx1c09wZW5lZFwiLCAyKTtcclxuICAgIC8qKlxyXG4gICAgICogQWN0aXZhdGUgdGhlIGRpYWxvZ+KAmXMgYmFja2Ryb3AgdG8gc2hvdyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmFja2Ryb3AgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIGRpYWxvZyB3aGVuIGBlc2NhcGVgIGtleSBpcyBwcmVzc2VkLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmtleWJvYXJkID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXJlIHRvIHNob3cgdGhlIGRpYWxvZyBib3ggYnkgY2hvb3NpbmcgdHdvIHZhbHVlcywgb25lIGZvciBob3Jpem9udGFsIGFuZCBhbm90aGVyIGZvciB2ZXJ0aWNhbC5cclxuICAgICAqIEhvcml6b250YWwgaGFzIGEgcmFuZ2Ugb2YgYGxlZnRgLCBgY2VudGVyYCwgYHJpZ2h0YCwgYHN0YXJ0YCwgYGVuZGAsIGFuZCB2ZXJ0aWNhbCB2YWx1ZXMgYXJlIGB0b3BgLCBgY2VudGVyYCBhbmQgYGJvdHRvbWAuXHJcbiAgICAgKi9cclxuICAgIHRoaXMucGxhY2VtZW50ID0gJ3RvcCc7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnN0YW5jZXM6IG5ldyBTZXQoKVxyXG4gICAgfTtcclxuICAgIHRoaXMubGluayA9IHtcclxuICAgICAgdG9nZ2xlOiAoKSA9PiB0aGlzLnRyeVRvZ2dsZSgpXHJcbiAgICB9O1xyXG4gIH1cclxuICBnZXQgY2xhc3NlcygpIHtcclxuICAgIGxldCBbeCwgeV0gPSAoRGlhbG9nUGxhY2VtZW50TWFwW3RoaXMucGxhY2VtZW50XSB8fCAnJykuc3BsaXQoJy0nKTtcclxuICAgIHggPSB0b0F4aXMoeCwgdGhpcy5pc1JUTCk7XHJcbiAgICByZXR1cm4gY2xhc3NlcygnZGlhbG9nJywge1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIHN0aWNreTogdGhpcy5zdGlja3ksXHJcbiAgICAgIGZ1bGxXaWR0aDogdGhpcy5mdWxsV2lkdGgsXHJcbiAgICAgIGZ1bGxIZWlnaHQ6IHRoaXMuZnVsbEhlaWdodCxcclxuICAgICAgZnVsbHNjcmVlbjogdGhpcy5mdWxsc2NyZWVuLFxyXG4gICAgICBzY3JvbGxhYmxlOiB0aGlzLnNjcm9sbGFibGVcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXQgaXNDdXJyZW50KCkge1xyXG4gICAgY29uc3QgaW5zdGFuY2VzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmluc3RhbmNlcyk7XHJcbiAgICBjb25zdCBsYXN0ID0gaW5zdGFuY2VzLmxlbmd0aCAtIDE7XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzW2xhc3RdID09PSB0aGlzO1xyXG4gIH1cclxuICBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuJGhvc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJyk7XHJcbiAgfVxyXG4gIGdldCBpc1JUTCgpIHtcclxuICAgIHJldHVybiBpc1JUTCh0aGlzKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogTWV0aG9kc1xyXG4gICAqL1xyXG4gIGNvbm5lY3RvcldhdGNoZXIoKSB7XHJcbiAgICByZWJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIG9wZW5XYXRjaGVyKCkge1xyXG4gICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbi5lbnRlcih7XHJcbiAgICAgICAgb25FbnRlcjogKCkgPT4gdGhpcy5zaG93KClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmlzT3BlbilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLmxlYXZlKHtcclxuICAgICAgICBvbkxlYXZlOiAoKSA9PiB0aGlzLmJyb2FkY2FzdChmYWxzZSksXHJcbiAgICAgICAgb25MZWF2ZWQ6ICgpID0+IHRoaXMuaGlkZSgpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgYnJvYWRjYXN0KHZhbHVlKSB7XHJcbiAgICB0aGlzLmxpbmsub3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5hbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgbmFtZTogJ2RpYWxvZycsXHJcbiAgICAgIHNvdXJjZTogdGhpcy4kaG9zdCxcclxuICAgICAgdGFyZ2V0OiB0aGlzLiRob3N0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMucmVzZXRBdHRyaWJ1dGVzKCk7XHJcbiAgICB0aGlzLnJlc2V0RXZlbnRzKCk7XHJcbiAgICBPdXRzaWRlQ2xpY2sucmVtb3ZlKHRoaXMuJGNlbGwpO1xyXG4gICAgU2Nyb2xsYmFyLnJlc2V0KHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFpJbmRleCgpO1xyXG4gICAgdGhpcy5zdGF0ZS5pbnN0YW5jZXMuZGVsZXRlKHRoaXMpO1xyXG4gICAgdGhpcy4kaG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuYnJvYWRjYXN0KGZhbHNlKTtcclxuICB9XHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlcygpO1xyXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgIE91dHNpZGVDbGljay5hZGQodGhpcy4kY2VsbCwgdGhpcy5vbk91dHNpZGVDbGljayk7XHJcbiAgICBTY3JvbGxiYXIucmVtb3ZlKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRaSW5kZXgoKTtcclxuICAgIHRoaXMuc3RhdGUuaW5zdGFuY2VzLmFkZCh0aGlzKTtcclxuICAgIHRoaXMuJGhvc3QuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuYnJvYWRjYXN0KHRydWUpO1xyXG4gIH1cclxuICB0cnlUb0hpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMucGx1c0Nsb3NlLmVtaXQoKTtcclxuICAgIGlmICghdGhpcy5pc09wZW4gfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5hbmltYXRpb24ubGVhdmUoe1xyXG4gICAgICBvbkxlYXZlOiAoKSA9PiB0aGlzLmJyb2FkY2FzdChmYWxzZSksXHJcbiAgICAgIG9uTGVhdmVkOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wbHVzQ2xvc2VkLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRyeVRvU2hvdygpIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsdXNPcGVuLmVtaXQoKTtcclxuICAgIGlmICh0aGlzLmlzT3BlbiB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmFuaW1hdGlvbi5lbnRlcih7XHJcbiAgICAgIG9uRW50ZXI6ICgpID0+IHRoaXMuc2hvdygpLFxyXG4gICAgICBvbkVudGVyZWQ6ICgpID0+IHRoaXMucGx1c09wZW5lZC5lbWl0KClcclxuICAgIH0pO1xyXG4gIH1cclxuICB0cnlUb2dnbGUoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA/IHRoaXMudHJ5VG9IaWRlKCkgOiB0aGlzLnRyeVRvU2hvdygpO1xyXG4gIH1cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgKF9hID0gdGhpcy5hbmltYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJlc2V0RXZlbnRzKCk7XHJcbiAgICBPdXRzaWRlQ2xpY2sucmVtb3ZlKHRoaXMuJGNlbGwpO1xyXG4gICAgU2Nyb2xsYmFyLnJlc2V0KHRoaXMpO1xyXG4gICAgdGhpcy5zdGF0ZS5pbnN0YW5jZXMuZGVsZXRlKHRoaXMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBBdHRyaWJ1dGVzXHJcbiAgICovXHJcbiAgc2V0QXR0cmlidXRlcygpIHtcclxuICAgIHRoaXMuJGhvc3QucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xyXG4gICAgdGhpcy4kaG9zdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xyXG4gICAgdGhpcy4kaG9zdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcbiAgfVxyXG4gIHJlc2V0QXR0cmlidXRlcygpIHtcclxuICAgIHRoaXMuJGhvc3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB0aGlzLiRob3N0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xyXG4gICAgdGhpcy4kaG9zdC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRXZlbnRzXHJcbiAgICovXHJcbiAgc2V0RXZlbnRzKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2NhcGUsIHRydWUpO1xyXG4gIH1cclxuICByZXNldEV2ZW50cygpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjYXBlLCB0cnVlKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogei1pbmRleFxyXG4gICAqL1xyXG4gIHNldFpJbmRleCgpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmluc3RhbmNlcykuc2xpY2UoLTEpWzBdO1xyXG4gICAgaWYgKCFpbnN0YW5jZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgekluZGV4ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbnN0YW5jZS4kaG9zdCkuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpO1xyXG4gICAgdGhpcy4kaG9zdC5zdHlsZS56SW5kZXggPSBgJHtwYXJzZUludCh6SW5kZXgpICsgMX1gO1xyXG4gIH1cclxuICByZXNldFpJbmRleCgpIHtcclxuICAgIHRoaXMuJGhvc3Quc3R5bGUuekluZGV4ID0gbnVsbDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRXZlbnRzIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkVzY2FwZShldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5pc0N1cnJlbnQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICghdGhpcy5rZXlib2FyZCB8fCBldmVudC5rZXkgIT09ICdFc2NhcGUnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy50cnlUb0hpZGUoKTtcclxuICB9XHJcbiAgb25PdXRzaWRlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnRyeVRvSGlkZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBMaWZlY3ljbGVzXHJcbiAgICovXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMub3BlbiAmJiB0aGlzLnNob3coKTtcclxuICB9XHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgdGFiaW5kZXg6IFwiLTFcIiB9LCB0aGlzLmJhY2tkcm9wICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYmFja2Ryb3BcIiB9LCBoKFwiZGl2XCIsIG51bGwpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5jbGFzc2VzIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWJsZVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjZWxsXCIsIHJlZjogKGVsZW1lbnQpID0+ICh0aGlzLiRjZWxsID0gZWxlbWVudCkgfSwgaChcInNsb3RcIiwgbnVsbCkpKSkpKTtcclxuICB9XHJcbiAgZ2V0ICRob3N0KCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImNvbm5lY3RvclwiOiBbXCJjb25uZWN0b3JXYXRjaGVyXCJdLFxyXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5XYXRjaGVyXCJdXHJcbiAgfTsgfVxyXG59O1xyXG5fX2RlY29yYXRlKFtcclxuICBHbG9iYWxDb25maWcoJ2RpYWxvZycsIHtcclxuICAgIGJhY2tkcm9wOiB0cnVlLFxyXG4gICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICBwbGFjZW1lbnQ6ICd0b3AnXHJcbiAgfSlcclxuXSwgRGlhbG9nLnByb3RvdHlwZSwgXCJjb25maWdcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgR2xvYmFsU3RhdGUoKVxyXG5dLCBEaWFsb2cucHJvdG90eXBlLCBcInN0YXRlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gIEluamVjdCh7IHNjb3BlOiAnW2Nvbm5lY3Rvcl0nIH0pXHJcbl0sIERpYWxvZy5wcm90b3R5cGUsIFwibGlua1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICBCaW5kXHJcbl0sIERpYWxvZy5wcm90b3R5cGUsIFwib25Fc2NhcGVcIiwgbnVsbCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gIEJpbmRcclxuXSwgRGlhbG9nLnByb3RvdHlwZSwgXCJvbk91dHNpZGVDbGlja1wiLCBudWxsKTtcclxuRGlhbG9nLnN0eWxlID0gZGlhbG9nQ3NzO1xuXG5jb25zdCBkaWFsb2dCb2R5Q3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXg6MSAxIGF1dG87cGFkZGluZzoxcmVtfTpob3N0KFtzY3JvbGxhYmxlXTpub3QoW3Njcm9sbGFibGU9ZmFsc2VdKSl7b3ZlcmZsb3c6aGlkZGVuO292ZXJmbG93LXk6YXV0b31cIjtcblxuY29uc3QgRGlhbG9nQm9keSA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbn07XHJcbkRpYWxvZ0JvZHkuc3R5bGUgPSBkaWFsb2dCb2R5Q3NzO1xuXG5jb25zdCBkaWFsb2dDb250ZW50Q3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtib3JkZXItcmFkaXVzOjAuM3JlbTtib3gtc2hhZG93OjAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtvdXRsaW5lOjB9XCI7XG5cbmNvbnN0IERpYWxvZ0NvbnRlbnQgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSk7XHJcbiAgfVxyXG59O1xyXG5EaWFsb2dDb250ZW50LnN0eWxlID0gZGlhbG9nQ29udGVudENzcztcblxuY29uc3QgZGlhbG9nRm9vdGVyQ3NzID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QsOmhvc3Q6OmJlZm9yZSw6aG9zdDo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtmbGV4LXNocmluazowO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cGFkZGluZzowLjc1cmVtO2JvcmRlci10b3A6c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czpjYWxjKDAuM3JlbSAtIDFweCk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czpjYWxjKDAuM3JlbSAtIDFweCl9Omhvc3QgOjpzbG90dGVkKCope21hcmdpbjowLjI1cmVtfVwiO1xuXG5jb25zdCBEaWFsb2dGb290ZXIgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSk7XHJcbiAgfVxyXG59O1xyXG5EaWFsb2dGb290ZXIuc3R5bGUgPSBkaWFsb2dGb290ZXJDc3M7XG5cbmNvbnN0IGRpYWxvZ0hlYWRlckNzcyA9IFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0LDpob3N0OjpiZWZvcmUsOmhvc3Q6OmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzoxcmVtO2JvcmRlci1ib3R0b206c29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czpjYWxjKDAuM3JlbSAtIDFweCk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czpjYWxjKDAuM3JlbSAtIDFweCl9XCI7XG5cbmNvbnN0IERpYWxvZ0hlYWRlciA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbn07XHJcbkRpYWxvZ0hlYWRlci5zdHlsZSA9IGRpYWxvZ0hlYWRlckNzcztcblxuY29uc3QgZGlhbG9nVG9nZ2xlckNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOmRlZmF1bHQ7dXNlci1zZWxlY3Q6bm9uZX06aG9zdChbc3RhdGU9b3Blbl0pIFtuYW1lPWNsb3NlXSw6aG9zdChbc3RhdGU9Y2xvc2VdKSBbbmFtZT1vcGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbnZhciBfX2RlY29yYXRlJDEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gIGVsc2VcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICBpZiAoZCA9IGRlY29yYXRvcnNbaV0pXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuY29uc3QgRGlhbG9nVG9nZ2xlciA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gIH1cclxuICBjb25uZWN0b3JXYXRjaGVyKCkge1xyXG4gICAgcmViaW5kKHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBzdGF0ZTogdGhpcy5saW5rLm9wZW4gPyAnb3BlbicgOiAnY2xvc2UnLCByb2xlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmxpbmsudG9nZ2xlKCkgfSwgaChcInNsb3RcIiwgbnVsbCwgdGhpcy5saW5rLm9wZW4gPyAnQ2xvc2UnIDogJ09wZW4nKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImNsb3NlXCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJvcGVuXCIgfSkpKTtcclxuICB9XHJcbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcclxuICAgIFwiY29ubmVjdG9yXCI6IFtcImNvbm5lY3RvcldhdGNoZXJcIl1cclxuICB9OyB9XHJcbn07XHJcbl9fZGVjb3JhdGUkMShbXHJcbiAgSW5qZWN0KHsgc2NvcGU6ICdbY29ubmVjdG9yXScgfSlcclxuXSwgRGlhbG9nVG9nZ2xlci5wcm90b3R5cGUsIFwibGlua1wiLCB2b2lkIDApO1xyXG5EaWFsb2dUb2dnbGVyLnN0eWxlID0gZGlhbG9nVG9nZ2xlckNzcztcblxuZXhwb3J0IHsgRGlhbG9nIGFzIHBsdXNfZGlhbG9nLCBEaWFsb2dCb2R5IGFzIHBsdXNfZGlhbG9nX2JvZHksIERpYWxvZ0NvbnRlbnQgYXMgcGx1c19kaWFsb2dfY29udGVudCwgRGlhbG9nRm9vdGVyIGFzIHBsdXNfZGlhbG9nX2Zvb3RlciwgRGlhbG9nSGVhZGVyIGFzIHBsdXNfZGlhbG9nX2hlYWRlciwgRGlhbG9nVG9nZ2xlciBhcyBwbHVzX2RpYWxvZ190b2dnbGVyIH07XG4iLCJjb25zdCBldmVudFBhdGggPSAoZXZlbnQpID0+IHtcclxuICByZXR1cm4gZXZlbnQucGF0aCB8fCAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcclxufTtcblxuY2xhc3MgT3V0c2lkZUNsaWNrIHtcclxuICBzdGF0aWMgYWRkKGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcclxuICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHBhdGguZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBlbGVtZW50KTtcclxuICAgICAgaWYgKDEgPCBpbmRleClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5zZXQoZWxlbWVudCwgZm4pO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy50YXJnZXRzLmdldChlbGVtZW50KTtcclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgIHJldHVybjtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2ssIHRydWUpO1xyXG4gICAgdGhpcy50YXJnZXRzLmRlbGV0ZShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuT3V0c2lkZUNsaWNrLnRhcmdldHMgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFNjcm9sbGJhciB7XHJcbiAgc3RhdGljIGdldCBpc1JUTCgpIHtcclxuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHdpbmRvdy5kb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgd2lkdGgoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICByZXR1cm4gd2lkdGg7XHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmUoa2V5KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgICBpZiAodGhpcy5rZXlzLnNpemUgPiAxKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAoIWlzT3ZlcmZsb3dpbmcpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5pc1JUTCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcclxuICAgIHRoaXMuc3R5bGUgPSB7XHJcbiAgICAgIG92ZXJmbG93OiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93LFxyXG4gICAgICBbcHJvcGVydHldOiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSxcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcclxuICB9XHJcbiAgc3RhdGljIHJlc2V0KGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtrZXldID0gdGhpcy5zdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gIH1cclxufVxyXG5TY3JvbGxiYXIua2V5cyA9IG5ldyBTZXQoKTtcclxuU2Nyb2xsYmFyLnN0eWxlID0ge307XG5cbmV4cG9ydCB7IE91dHNpZGVDbGljayBhcyBPLCBTY3JvbGxiYXIgYXMgUywgZXZlbnRQYXRoIGFzIGUgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0RWxlbWVudCwgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuXG5jbGFzcyBBbmltYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLy8gVE9ETzogYXV0byBkZXRlY3QgZnVuY3Rpb25zXHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgb25FbnRlcjogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkVudGVyaW5nOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICAgIG9uRW50ZXJlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkxlYXZlOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICAgIG9uTGVhdmluZzogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICBvbkxlYXZlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgfSwgY29uZmlnKTtcclxuICB9XHJcbiAgYWRkKC4uLm5hbWVzKSB7XHJcbiAgICBuYW1lcy5tYXAoKGl0ZW0pID0+IHRoaXMuY29uZmlnLnRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZShpdGVtKSkpO1xyXG4gIH1cclxuICBkdXJhdGlvbigpIHtcclxuICAgIHJldHVybiBbdGhpcy5jb25maWcuc291cmNlXVxyXG4gICAgICAuZmxhdCgpXHJcbiAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBbXHJcbiAgICAgICAgICBzdHlsZS5hbmltYXRpb25EZWxheSxcclxuICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EZWxheSxcclxuICAgICAgICAgIHN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgICAgc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgIF1cclxuICAgICAgICAgIC5tYXAoKGl0ZW0gPSAnMHMnKSA9PiBwYXJzZUZsb2F0KGl0ZW0pICogKC9tcy9nLnRlc3QoaXRlbSkgPyAxIDogMTAwMCkpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCguLi5kdXJhdGlvbi5zbGljZSgwLCAyKSkgKyBNYXRoLm1heCguLi5kdXJhdGlvbi5zbGljZSgyKSk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgICAgLnBvcCgpO1xyXG4gIH1cclxuICBuYW1lKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubmFtZSA/IGAke3RoaXMuY29uZmlnLm5hbWV9LSR7aW5wdXR9YCA6IGlucHV0O1xyXG4gIH1cclxuICByZW1vdmUoLi4ubmFtZXMpIHtcclxuICAgIG5hbWVzLm1hcCgoaXRlbSkgPT4gdGhpcy5jb25maWcudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5uYW1lKGl0ZW0pKSk7XHJcbiAgfVxyXG4gIC8vIFRPRE9cclxuICBjYW5jZWwoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnLCAnZW50ZXItdG8nKTtcclxuICAgIHRoaXMucmVtb3ZlKCdsZWF2ZScsICdsZWF2ZS1hY3RpdmUnLCAnbGVhdmUtdG8nKTtcclxuICB9XHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gIH1cclxuICBlbnRlcihjb25maWcpIHtcclxuICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgIGNvbmZpZy5vbkVudGVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZSgnbGVhdmUnLCAnbGVhdmUtYWN0aXZlJyk7XHJcbiAgICB0aGlzLmFkZCgnZW50ZXInKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmUoJ2VudGVyJyk7XHJcbiAgICAgIHRoaXMuYWRkKCdlbnRlci1hY3RpdmUnKTtcclxuICAgICAgY29uZmlnLm9uRW50ZXJpbmcoKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnKTtcclxuICAgICAgICBjb25maWcub25FbnRlcmVkKCk7XHJcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24oKSk7XHJcbiAgICB9LCA1KSk7XHJcbiAgfVxyXG4gIGxlYXZlKGNvbmZpZykge1xyXG4gICAgdGhpcy5jYW5jZWwoKTtcclxuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gICAgY29uZmlnLm9uTGVhdmUoKTtcclxuICAgIHRoaXMucmVtb3ZlKCdlbnRlcicsICdlbnRlci1hY3RpdmUnKTtcclxuICAgIHRoaXMuYWRkKCdsZWF2ZScpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgnbGVhdmUnKTtcclxuICAgICAgdGhpcy5hZGQoJ2xlYXZlLWFjdGl2ZScpO1xyXG4gICAgICBjb25maWcub25MZWF2aW5nKCk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgnbGVhdmUnLCAnbGVhdmUtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uZmlnLm9uTGVhdmVkKCk7XHJcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24oKSk7XHJcbiAgICB9LCA1KSk7XHJcbiAgfVxyXG59XG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAoaW5pdGlhbCkgPT4ge1xyXG4gIGNvbnN0IGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICBjb25zdCBnZXRHcm91cCA9IChpbnN0YW5jZSwgc2NvcGUpID0+IHtcclxuICAgIGNvbnN0IGlzUHJvcGVydHkgPSBzY29wZS5tYXRjaCgvXFxbKlxcXS8pO1xyXG4gICAgaWYgKGlzUHJvcGVydHkpIHtcclxuICAgICAgY29uc3QgcHJvcGVydHkgPSBzY29wZS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NvcGU7XHJcbiAgfTtcclxuICBjb25zdCBnZXRTaWJsaW5ncyA9IChpbnN0YW5jZSwgc2VsZikgPT4ge1xyXG4gICAgY29uc3QgeyBncm91cCB9ID0gaW5zdGFuY2VzLmdldChpbnN0YW5jZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaCgoY29uZmlnLCBpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghc2VsZiAmJiBpbnN0YW5jZSA9PT0gaXRlbSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGlmIChjb25maWcuZ3JvdXAgIT09IGdyb3VwKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgcmVzdWx0LnNldChpdGVtLCBjb25maWcpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0U3RhdGUgPSAoaW5zdGFuY2VzKSA9PiB7XHJcbiAgICBjb25zdCBjb25maWdzID0gQXJyYXkuZnJvbShpbnN0YW5jZXMudmFsdWVzKCkpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBjb25maWdzLm1hcCgoY29uZmlnKSA9PiBjb25maWcub3JpZ2luYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBsb2NhbCA9IGNvbmZpZ3MubWFwKChjb25maWcpID0+IGNvbmZpZy5sb2NhbFN0YXRlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsLCAuLi5vcmlnaW5hbCwgLi4ubG9jYWwpO1xyXG4gIH07XHJcbiAgY29uc3QgZ2V0UGFyZW50ID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChpbnN0YW5jZSk7XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oaW5zdGFuY2VzKTtcclxuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgIGlmIChwYXJlbnQuc2hhZG93Um9vdCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChbLCBpdGVtQ29uZmlnXSkgPT4gaXRlbUNvbmZpZy5lbGVtZW50ID09PSBwYXJlbnQpO1xyXG4gICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1bMF07XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGUgPSAoaW5zdGFuY2UsIHNlbGYpID0+IHtcclxuICAgIC8vIGluc3RhbmNlIHNpYmxpbmdzXHJcbiAgICBjb25zdCBpbnN0YW5jZXMgPSBnZXRTaWJsaW5ncyhpbnN0YW5jZSwgc2VsZik7XHJcbiAgICAvLyBpbml0aWFsIHN0YXRlXHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKGluc3RhbmNlcyk7XHJcbiAgICAvLyBmb3IgZWFjaCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goKGNvbmZpZywgaXRlbSkgPT4ge1xyXG4gICAgICAvLyByZW1vdmUgb2xkIHByb3h5XHJcbiAgICAgIGRlbGV0ZSBpdGVtW2NvbmZpZy5wcm9wZXJ0eV07XHJcbiAgICAgIC8vIHNldCBuZXcgcHJveHlcclxuICAgICAgaXRlbVtjb25maWcucHJvcGVydHldID0gbmV3IFByb3h5KHN0YXRlLCB7XHJcbiAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgIGlmIChjb25maWcubG9jYWxTdGF0ZVtwcm9wZXJ0eV0gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNvbmZpZy5sb2NhbFN0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHVwZGF0ZShpdGVtLCB0cnVlKSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyByZXJlbmRlciBjdXJyZW50IGluc3RhbmNlXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmb3JjZVVwZGF0ZShpdGVtKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGJpbmQgPSAoaW5zdGFuY2UsIGNvbmZpZykgPT4ge1xyXG4gICAgLy8gY3JlYXRlIG1haW4gY29uZmlnXHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWcpLCB7IGVsZW1lbnQ6IGdldEVsZW1lbnQoaW5zdGFuY2UpLCBvcmlnaW5hbFN0YXRlOiBpbnN0YW5jZVtjb25maWcucHJvcGVydHldLCBsb2NhbFN0YXRlOiB7fSwgZ3JvdXA6IGdldEdyb3VwKGluc3RhbmNlLCBjb25maWcuc2NvcGUpIH0pO1xyXG4gICAgLy8gYmluZCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLnNldChpbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgICAvLyB1cGRhdGUgYnkgaW5zdGFuY2VcclxuICAgIHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSk7XHJcbiAgICAvLyBUT0RPXHJcbiAgICBlbnN1cmUoaW5zdGFuY2UpO1xyXG4gIH07XHJcbiAgY29uc3QgdW5iaW5kID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICAvLyBsb2FkIGluc3RhbmNlXHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCBvcmlnaW5hbFN0YXRlIH0gPSBpbnN0YW5jZXMuZ2V0KGluc3RhbmNlKTtcclxuICAgIC8vIHJlbW92ZSBwcm94eVxyXG4gICAgZGVsZXRlIGluc3RhbmNlW3Byb3BlcnR5XTtcclxuICAgIC8vIHJlc2V0IHByb3BlcnR5IHZhbHVlXHJcbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBvcmlnaW5hbFN0YXRlO1xyXG4gICAgLy8gdXBkYXRlIGJ5IGluc3RhbmNlXHJcbiAgICB1cGRhdGUoaW5zdGFuY2UsIGZhbHNlKTtcclxuICAgIC8vIHVuYmluZCBpbnN0YW5jZVxyXG4gICAgaW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZSk7XHJcbiAgfTtcclxuICAvLyBUT0RPXHJcbiAgY29uc3QgcmViaW5kID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IGdldFNpYmxpbmdzKGluc3RhbmNlLCB0cnVlKTtcclxuICAgIHNpYmxpbmdzXHJcbiAgICAgIC5mb3JFYWNoKChjb25maWcsIGluc3RhbmNlKSA9PiBjb25maWcuZ3JvdXAgPSBnZXRHcm91cChpbnN0YW5jZSwgY29uZmlnLnNjb3BlKSk7XHJcbiAgICBBcnJheS5mcm9tKHNpYmxpbmdzLmtleXMoKSlcclxuICAgICAgLmZvckVhY2goKGluc3RhbmNlKSA9PiBlbnN1cmUoaW5zdGFuY2UpKTtcclxuICAgIEFycmF5LmZyb20oc2libGluZ3Mua2V5cygpKVxyXG4gICAgICAuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSkpO1xyXG4gIH07XHJcbiAgY29uc3QgZW5zdXJlID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoaW5zdGFuY2VzLmdldChpbnN0YW5jZSkuZ3JvdXApXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudChpbnN0YW5jZSk7XHJcbiAgICBpZiAoIXBhcmVudClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgY29uZmlnID0gaW5zdGFuY2VzLmdldChwYXJlbnQpO1xyXG4gICAgY29uZmlnLmdyb3VwID0gKF9hID0gY29uZmlnLmdyb3VwKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XHJcbiAgICBpbnN0YW5jZXMuZ2V0KGluc3RhbmNlKS5ncm91cCA9IGNvbmZpZy5ncm91cDtcclxuICAgIHVwZGF0ZShpbnN0YW5jZSwgdHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBJbmplY3QgPSAoY29uZmlnKSA9PiAoaW5zdGFuY2UsIHByb3BlcnR5KSA9PiB7XHJcbiAgICAvLyBzdG9yZSBjb21wb25lbnREaWRMb2FkIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBsb2FkID0gaW5zdGFuY2UuY29tcG9uZW50RGlkTG9hZDtcclxuICAgIGluc3RhbmNlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgICAgZW5zdXJlKHRoaXMpO1xyXG4gICAgICAvLyBjYWxsIG9yaWdpbmFsIGNvbXBvbmVudERpZExvYWQgZnVuY3Rpb25cclxuICAgICAgbG9hZCAmJiBsb2FkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgICAvLyBzdG9yZSBjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgY29uc3QgY29ubmVjdGVkID0gaW5zdGFuY2UuY29ubmVjdGVkQ2FsbGJhY2s7XHJcbiAgICAvLyBzZXQgbmV3IGNvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBpbnN0YW5jZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gYmluZCBjdXJyZW50IGluc3RhbmNlXHJcbiAgICAgIGJpbmQodGhpcywgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWcpLCB7IHByb3BlcnR5IH0pKTtcclxuICAgICAgLy8gY2FsbCBvcmlnaW5hbCBjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICBjb25uZWN0ZWQgJiYgY29ubmVjdGVkLmJpbmQodGhpcykoKTtcclxuICAgIH07XHJcbiAgICAvLyBzdG9yZSBkaXNjb25uZWN0ZWRDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgY29uc3QgZGlzY29ubmVjdGVkID0gaW5zdGFuY2UuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XHJcbiAgICAvLyBzZXQgbmV3IGRpc2Nvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBpbnN0YW5jZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gdW5iaW5kIGN1cnJlbnQgaW5zdGFuY2VcclxuICAgICAgdW5iaW5kKHRoaXMpO1xyXG4gICAgICAvLyBjYWxsIG9yaWdpbmFsIGRpc2Nvbm5lY3RlZENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgIGRpc2Nvbm5lY3RlZCAmJiBkaXNjb25uZWN0ZWQuYmluZCh0aGlzKSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBJbmplY3QsXHJcbiAgICByZWJpbmRcclxuICB9O1xyXG59O1xuXG5jb25zdCBjbGFzc2VzID0gKC4uLmlucHV0KSA9PiB7XHJcbiAgY29uc3QgbmFtZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRbaV07XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcclxuICAgICAgICBuYW1lcy5wdXNoKGNsYXNzZXMoZWxlbWVudCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRba2V5XTtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSB0b0tlYmFiQ2FzZShrZXkpO1xyXG4gICAgICAgICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XHJcbiAgICAgICAgICAgICAgdmFsdWUgJiYgbmFtZXMucHVzaChgJHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxyXG4gICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7bmFtZX0tJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAndHJ1ZSc6XHJcbiAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7bmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChgJHtuYW1lfS0ke3ZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxyXG4gICAgICAgIG5hbWVzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuYW1lcy5qb2luKCcgJyk7XHJcbn07XG5cbmNvbnN0IGlzUlRMID0gKGluc3RhbmNlKSA9PiB7XHJcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2V0RWxlbWVudChpbnN0YW5jZSkpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcclxufTtcblxuY29uc3QgdG9BeGlzID0gKGlucHV0LCBydGwpID0+IHtcclxuICBpZiAoaW5wdXQubWF0Y2goL3N0YXJ0LykpXHJcbiAgICBpbnB1dCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgaWYgKGlucHV0Lm1hdGNoKC9lbmQvKSlcclxuICAgIGlucHV0ID0gcnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuICByZXR1cm4gaW5wdXQ7XHJcbn07XG5cbmNvbnN0IHRvS2ViYWJDYXNlID0gKGlucHV0KSA9PiB7XHJcbiAgcmV0dXJuIGlucHV0XHJcbiAgICAubWF0Y2goL1tBLVpdezIsfSg/PVtBLVpdW2Etel0rWzAtOV0qfFxcYil8W0EtWl0/W2Etel0rWzAtOV0qfFtBLVpdfFswLTldKy9nKVxyXG4gICAgLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLmpvaW4oJy0nKTtcclxufTtcblxuZXhwb3J0IHsgQW5pbWF0aW9uIGFzIEEsIGNsYXNzZXMgYXMgYSwgY3JlYXRlTGluayBhcyBjLCBpc1JUTCBhcyBpLCB0b0F4aXMgYXMgdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==