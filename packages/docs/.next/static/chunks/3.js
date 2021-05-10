(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-menu.entry.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-menu.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: plus_menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_menu", function() { return Menu; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const toUnit = (input) => {
  if (input == null || input === '')
    return undefined;
  if (isNaN(+input))
    return String(input);
  return `${Number(input)}px`;
};

const props = ['bottom', 'height', 'left', 'right', 'top', 'width'];
class RectObserver {
  constructor(callback) {
    this.callback = callback;
    this.nodes = new Map();
  }
  disconnect() {
    this.nodes.forEach((state, node) => (this.unobserve(node), state));
  }
  observe(node) {
    const empty = this.nodes.size === 0;
    const entry = {
      boundingClientRect: undefined,
      target: node,
    };
    this.nodes.set(node, entry);
    if (empty)
      this.do();
  }
  unobserve(node) {
    this.nodes.delete(node);
    if (!this.nodes.size)
      cancelAnimationFrame(this.key);
  }
  changed(a, b) {
    if (typeof a !== typeof b)
      return true;
    return props.some((prop) => a[prop] !== b[prop]);
  }
  do() {
    const entries = [];
    this.nodes.forEach((state, node) => {
      const rect = node.getBoundingClientRect();
      if (!this.changed(rect, state.boundingClientRect))
        return;
      state.boundingClientRect = rect;
      entries.push(state);
    });
    if (entries.length)
      this.callback(entries, this);
    this.key = window.requestAnimationFrame(() => this.do());
  }
}

const menuCss = ":host{display:inline-block;position:relative}.activator{display:block}.content{display:block;width:150px;height:250px;border:solid 2px green}";

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
const Menu = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusClose = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusClose", 3);
    /**
     * TODO
     */
    this.alignX = 'start';
    /**
     * TODO
     */
    this.alignY = 'bottom';
    /**
     * TODO
     */
    this.growX = 'auto';
    /**
     * TODO
     */
    this.growY = 'auto';
    /**
     * TODO
     */
    this.trigger = 'click';
  }
  get getGrowX() {
    if (this.growX && this.growX !== 'auto')
      return this.growX;
    const aligns = ['start', 'right', 'left', 'end'];
    for (let i = 0; i < aligns.length; i++) {
      const align = aligns[i];
      if (this.alignX !== align)
        continue;
      if (this.alignY === 'center')
        return align;
      return aligns[aligns.length - 1 - i];
    }
    return 'both';
  }
  get getGrowY() {
    if (this.growY && this.growY !== 'auto')
      return this.growY;
    if (this.alignY !== 'center')
      return this.alignY;
    return 'both';
  }
  get reverse() {
    return getComputedStyle(this.$host).getPropertyValue('direction') === 'rtl';
  }
  get style() {
    return this.s();
  }
  bind() {
    this.clean();
    if (!this.fixed || !this.open)
      return;
    this.observer = new RectObserver(this.update);
    requestAnimationFrame(() => this.observer.observe(this.$host));
  }
  clean() {
    if (!this.observer)
      return;
    this.observer.disconnect();
    this.observer = undefined;
  }
  click(event) {
    const elements = Object(_scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__["e"])(event);
    const index = elements.findIndex((element) => element === this.$activator);
    if (index < 2)
      return;
    if (this.alignX === 'pointer')
      this.x = `${event.offsetX}px`;
    if (this.alignY === 'pointer')
      this.y = `${event.offsetY}px`;
    this.open = !this.open;
    if (!this.open)
      this.plusClose.emit();
  }
  s(basex, basey) {
    const constants = {
      alignX: {
        'start': !this.reverse ? '0%' : '100%',
        'left': '0%',
        'center': '50%',
        'right': '100%',
        'end': !this.reverse ? '100%' : '0%',
      },
      alignY: {
        'top': '0%',
        'center': '50%',
        'bottom': '100%',
      },
      growX: {
        'start': !this.reverse ? '-100%' : '0%',
        'left': '-100%',
        'both': '-50%',
        'right': '0%',
        'end': !this.reverse ? '0%' : '-100%',
      },
      growY: {
        'top': '-100%',
        'both': '-50%',
        'bottom': '0%',
      }
    };
    let x = constants.growX[this.getGrowX];
    let y = constants.growY[this.getGrowY];
    let top = basey || (this.alignY === 'pointer' ? this.y : constants.alignY[this.alignY]);
    let left = basex || (this.alignX === 'pointer' ? this.x : constants.alignX[this.alignX]);
    if (this.offsetX && !this.getGrowX.match(/both/)) {
      const offset = toUnit(this.offsetX);
      const operator = this.getGrowX.match(/left|start/) ? '-' : '+';
      left = `calc(${left} ${operator} ${offset})`;
    }
    if (this.offsetY && !this.getGrowY.match(/both/)) {
      const offset = toUnit(this.offsetY);
      const operator = this.getGrowY.match(/top/) ? '-' : '+';
      top = `calc(${top} ${operator} ${offset})`;
    }
    return {
      top,
      left,
      transform: `translate(${x}, ${y})`,
      position: this.fixed ? 'fixed' : 'absolute',
      'z-index': '1',
    };
  }
  update(entries) {
    const content = this.$host.shadowRoot.querySelector('.content');
    if (!content)
      return;
    const rect = entries[0].boundingClientRect;
    const style = this.s(rect.x.toString() + 'px', rect.y.toString() + 'px');
    Object.keys(style).map((key) => this.$content.style[key] = style[key]);
  }
  onOutsideClick(event) {
    if (!this.open)
      return;
    const path = Object(_scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__["e"])(event);
    const activator = this.$host.shadowRoot.querySelector('.activator');
    if (path.find((element) => element === activator))
      return;
    if (this.persistent && path.find((element) => element === this.$host))
      return;
    const result = this.plusClose.emit();
    if (!result.preventDefault)
      return;
    this.open = false;
    this.clean();
  }
  componentDidLoad() {
    this.bind();
  }
  disconnectedCallback() {
    this.clean();
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "activator", ref: (element) => this.$activator = element, onClick: (event) => this.click(event) }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "activator" })), this.open && (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content", ref: (element) => this.$content = element, style: this.fixed ? {} : this.style }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "fixed": ["bind"],
    "open": ["bind"]
  }; }
};
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Menu.prototype, "update", null);
Menu.style = menuCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy1tZW51LmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL3JlYWN0L25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvY29yZS9kaXN0L2VzbS9zY3JvbGxiYXItOGQxODg1NGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsVUFBVTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUNwQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkc7QUFDOUQ7QUFDVTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixxQkFBcUIsa0JBQWtCLFdBQVcsY0FBYyxTQUFTLGNBQWMsWUFBWSxhQUFhLHVCQUF1Qjs7QUFFOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCLHFCQUFxQiw0REFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEtBQUssR0FBRyxTQUFTLEdBQUcsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJLEdBQUcsU0FBUyxHQUFHLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxJQUFJLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQUMsQ0FBQyxvREFBSSxRQUFRLDREQUFDLFNBQVMseUdBQXlHLEVBQUUsNERBQUMsVUFBVSxvQkFBb0Isa0JBQWtCLDREQUFDLFNBQVMsb0ZBQW9GLGVBQWUsRUFBRSw0REFBQztBQUNoVDtBQUNBLGVBQWUsUUFBUSw0REFBVSxPQUFPO0FBQ3hDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7QUM5TzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCaW5kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgbGV0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBAYm91bmRNZXRob2QgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBub3Q6ICR7dHlwZW9mIGZufWApO1xyXG4gIH1cclxuICAvLyBJbiBJRTExIGNhbGxpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5IGhhcyBhIHNpZGUtZWZmZWN0IG9mIGV2YWx1YXRpbmcgdGhlXHJcbiAgLy8gZ2V0dGVyIGZvciB0aGUgcHJvcGVydHkgd2hpY2ggaXMgYmVpbmcgcmVwbGFjZWQuIFRoaXMgY2F1c2VzIGluZmluaXRlXHJcbiAgLy8gcmVjdXJzaW9uIGFuZCBhbiBcIk91dCBvZiBzdGFjayBzcGFjZVwiIGVycm9yLlxyXG4gIGxldCBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldCgpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xyXG4gICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgICBjb25zdCBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIGJvdW5kRm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgIGZuID0gdmFsdWU7XHJcbiAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGJvdW5kRm47XHJcbiAgICB9LFxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgIGZuID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxufVxuXG5leHBvcnQgeyBCaW5kIGFzIEIgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTYxOGI3ZmM4LmpzJztcbmltcG9ydCB7IEIgYXMgQmluZCB9IGZyb20gJy4vYmluZC1kYWRjNDRkZC5qcyc7XG5pbXBvcnQgeyBlIGFzIGV2ZW50UGF0aCB9IGZyb20gJy4vc2Nyb2xsYmFyLThkMTg4NTRlLmpzJztcblxuY29uc3QgdG9Vbml0ID0gKGlucHV0KSA9PiB7XHJcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgaW5wdXQgPT09ICcnKVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICBpZiAoaXNOYU4oK2lucHV0KSlcclxuICAgIHJldHVybiBTdHJpbmcoaW5wdXQpO1xyXG4gIHJldHVybiBgJHtOdW1iZXIoaW5wdXQpfXB4YDtcclxufTtcblxuY29uc3QgcHJvcHMgPSBbJ2JvdHRvbScsICdoZWlnaHQnLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnd2lkdGgnXTtcclxuY2xhc3MgUmVjdE9ic2VydmVyIHtcclxuICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5ub2RlcyA9IG5ldyBNYXAoKTtcclxuICB9XHJcbiAgZGlzY29ubmVjdCgpIHtcclxuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgoc3RhdGUsIG5vZGUpID0+ICh0aGlzLnVub2JzZXJ2ZShub2RlKSwgc3RhdGUpKTtcclxuICB9XHJcbiAgb2JzZXJ2ZShub2RlKSB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMubm9kZXMuc2l6ZSA9PT0gMDtcclxuICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IHVuZGVmaW5lZCxcclxuICAgICAgdGFyZ2V0OiBub2RlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubm9kZXMuc2V0KG5vZGUsIGVudHJ5KTtcclxuICAgIGlmIChlbXB0eSlcclxuICAgICAgdGhpcy5kbygpO1xyXG4gIH1cclxuICB1bm9ic2VydmUobm9kZSkge1xyXG4gICAgdGhpcy5ub2Rlcy5kZWxldGUobm9kZSk7XHJcbiAgICBpZiAoIXRoaXMubm9kZXMuc2l6ZSlcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5rZXkpO1xyXG4gIH1cclxuICBjaGFuZ2VkKGEsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHByb3BzLnNvbWUoKHByb3ApID0+IGFbcHJvcF0gIT09IGJbcHJvcF0pO1xyXG4gIH1cclxuICBkbygpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcclxuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgoc3RhdGUsIG5vZGUpID0+IHtcclxuICAgICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGlmICghdGhpcy5jaGFuZ2VkKHJlY3QsIHN0YXRlLmJvdW5kaW5nQ2xpZW50UmVjdCkpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBzdGF0ZS5ib3VuZGluZ0NsaWVudFJlY3QgPSByZWN0O1xyXG4gICAgICBlbnRyaWVzLnB1c2goc3RhdGUpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZW50cmllcy5sZW5ndGgpXHJcbiAgICAgIHRoaXMuY2FsbGJhY2soZW50cmllcywgdGhpcyk7XHJcbiAgICB0aGlzLmtleSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5kbygpKTtcclxuICB9XHJcbn1cblxuY29uc3QgbWVudUNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LmFjdGl2YXRvcntkaXNwbGF5OmJsb2NrfS5jb250ZW50e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjI1MHB4O2JvcmRlcjpzb2xpZCAycHggZ3JlZW59XCI7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICBlbHNlXHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKVxyXG4gICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmNvbnN0IE1lbnUgPSBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xyXG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcclxuICAgIHRoaXMucGx1c0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzQ2xvc2VcIiwgMyk7XHJcbiAgICAvKipcclxuICAgICAqIFRPRE9cclxuICAgICAqL1xyXG4gICAgdGhpcy5hbGlnblggPSAnc3RhcnQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWxpZ25ZID0gJ2JvdHRvbSc7XHJcbiAgICAvKipcclxuICAgICAqIFRPRE9cclxuICAgICAqL1xyXG4gICAgdGhpcy5ncm93WCA9ICdhdXRvJztcclxuICAgIC8qKlxyXG4gICAgICogVE9ET1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdyb3dZID0gJ2F1dG8nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPXHJcbiAgICAgKi9cclxuICAgIHRoaXMudHJpZ2dlciA9ICdjbGljayc7XHJcbiAgfVxyXG4gIGdldCBnZXRHcm93WCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3dYICYmIHRoaXMuZ3Jvd1ggIT09ICdhdXRvJylcclxuICAgICAgcmV0dXJuIHRoaXMuZ3Jvd1g7XHJcbiAgICBjb25zdCBhbGlnbnMgPSBbJ3N0YXJ0JywgJ3JpZ2h0JywgJ2xlZnQnLCAnZW5kJ107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsaWducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBhbGlnbiA9IGFsaWduc1tpXTtcclxuICAgICAgaWYgKHRoaXMuYWxpZ25YICE9PSBhbGlnbilcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgaWYgKHRoaXMuYWxpZ25ZID09PSAnY2VudGVyJylcclxuICAgICAgICByZXR1cm4gYWxpZ247XHJcbiAgICAgIHJldHVybiBhbGlnbnNbYWxpZ25zLmxlbmd0aCAtIDEgLSBpXTtcclxuICAgIH1cclxuICAgIHJldHVybiAnYm90aCc7XHJcbiAgfVxyXG4gIGdldCBnZXRHcm93WSgpIHtcclxuICAgIGlmICh0aGlzLmdyb3dZICYmIHRoaXMuZ3Jvd1kgIT09ICdhdXRvJylcclxuICAgICAgcmV0dXJuIHRoaXMuZ3Jvd1k7XHJcbiAgICBpZiAodGhpcy5hbGlnblkgIT09ICdjZW50ZXInKVxyXG4gICAgICByZXR1cm4gdGhpcy5hbGlnblk7XHJcbiAgICByZXR1cm4gJ2JvdGgnO1xyXG4gIH1cclxuICBnZXQgcmV2ZXJzZSgpIHtcclxuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHRoaXMuJGhvc3QpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcclxuICB9XHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucygpO1xyXG4gIH1cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5jbGVhbigpO1xyXG4gICAgaWYgKCF0aGlzLmZpeGVkIHx8ICF0aGlzLm9wZW4pXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgUmVjdE9ic2VydmVyKHRoaXMudXBkYXRlKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy4kaG9zdCkpO1xyXG4gIH1cclxuICBjbGVhbigpIHtcclxuICAgIGlmICghdGhpcy5vYnNlcnZlcilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB0aGlzLm9ic2VydmVyID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjbGljayhldmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50cy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRoaXMuJGFjdGl2YXRvcik7XHJcbiAgICBpZiAoaW5kZXggPCAyKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodGhpcy5hbGlnblggPT09ICdwb2ludGVyJylcclxuICAgICAgdGhpcy54ID0gYCR7ZXZlbnQub2Zmc2V0WH1weGA7XHJcbiAgICBpZiAodGhpcy5hbGlnblkgPT09ICdwb2ludGVyJylcclxuICAgICAgdGhpcy55ID0gYCR7ZXZlbnQub2Zmc2V0WX1weGA7XHJcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgaWYgKCF0aGlzLm9wZW4pXHJcbiAgICAgIHRoaXMucGx1c0Nsb3NlLmVtaXQoKTtcclxuICB9XHJcbiAgcyhiYXNleCwgYmFzZXkpIHtcclxuICAgIGNvbnN0IGNvbnN0YW50cyA9IHtcclxuICAgICAgYWxpZ25YOiB7XHJcbiAgICAgICAgJ3N0YXJ0JzogIXRoaXMucmV2ZXJzZSA/ICcwJScgOiAnMTAwJScsXHJcbiAgICAgICAgJ2xlZnQnOiAnMCUnLFxyXG4gICAgICAgICdjZW50ZXInOiAnNTAlJyxcclxuICAgICAgICAncmlnaHQnOiAnMTAwJScsXHJcbiAgICAgICAgJ2VuZCc6ICF0aGlzLnJldmVyc2UgPyAnMTAwJScgOiAnMCUnLFxyXG4gICAgICB9LFxyXG4gICAgICBhbGlnblk6IHtcclxuICAgICAgICAndG9wJzogJzAlJyxcclxuICAgICAgICAnY2VudGVyJzogJzUwJScsXHJcbiAgICAgICAgJ2JvdHRvbSc6ICcxMDAlJyxcclxuICAgICAgfSxcclxuICAgICAgZ3Jvd1g6IHtcclxuICAgICAgICAnc3RhcnQnOiAhdGhpcy5yZXZlcnNlID8gJy0xMDAlJyA6ICcwJScsXHJcbiAgICAgICAgJ2xlZnQnOiAnLTEwMCUnLFxyXG4gICAgICAgICdib3RoJzogJy01MCUnLFxyXG4gICAgICAgICdyaWdodCc6ICcwJScsXHJcbiAgICAgICAgJ2VuZCc6ICF0aGlzLnJldmVyc2UgPyAnMCUnIDogJy0xMDAlJyxcclxuICAgICAgfSxcclxuICAgICAgZ3Jvd1k6IHtcclxuICAgICAgICAndG9wJzogJy0xMDAlJyxcclxuICAgICAgICAnYm90aCc6ICctNTAlJyxcclxuICAgICAgICAnYm90dG9tJzogJzAlJyxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCB4ID0gY29uc3RhbnRzLmdyb3dYW3RoaXMuZ2V0R3Jvd1hdO1xyXG4gICAgbGV0IHkgPSBjb25zdGFudHMuZ3Jvd1lbdGhpcy5nZXRHcm93WV07XHJcbiAgICBsZXQgdG9wID0gYmFzZXkgfHwgKHRoaXMuYWxpZ25ZID09PSAncG9pbnRlcicgPyB0aGlzLnkgOiBjb25zdGFudHMuYWxpZ25ZW3RoaXMuYWxpZ25ZXSk7XHJcbiAgICBsZXQgbGVmdCA9IGJhc2V4IHx8ICh0aGlzLmFsaWduWCA9PT0gJ3BvaW50ZXInID8gdGhpcy54IDogY29uc3RhbnRzLmFsaWduWFt0aGlzLmFsaWduWF0pO1xyXG4gICAgaWYgKHRoaXMub2Zmc2V0WCAmJiAhdGhpcy5nZXRHcm93WC5tYXRjaCgvYm90aC8pKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRvVW5pdCh0aGlzLm9mZnNldFgpO1xyXG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMuZ2V0R3Jvd1gubWF0Y2goL2xlZnR8c3RhcnQvKSA/ICctJyA6ICcrJztcclxuICAgICAgbGVmdCA9IGBjYWxjKCR7bGVmdH0gJHtvcGVyYXRvcn0gJHtvZmZzZXR9KWA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vZmZzZXRZICYmICF0aGlzLmdldEdyb3dZLm1hdGNoKC9ib3RoLykpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gdG9Vbml0KHRoaXMub2Zmc2V0WSk7XHJcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5nZXRHcm93WS5tYXRjaCgvdG9wLykgPyAnLScgOiAnKyc7XHJcbiAgICAgIHRvcCA9IGBjYWxjKCR7dG9wfSAke29wZXJhdG9yfSAke29mZnNldH0pYDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcCxcclxuICAgICAgbGVmdCxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7eH0sICR7eX0pYCxcclxuICAgICAgcG9zaXRpb246IHRoaXMuZml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyxcclxuICAgICAgJ3otaW5kZXgnOiAnMScsXHJcbiAgICB9O1xyXG4gIH1cclxuICB1cGRhdGUoZW50cmllcykge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuJGhvc3Quc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgaWYgKCFjb250ZW50KVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCByZWN0ID0gZW50cmllc1swXS5ib3VuZGluZ0NsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBzdHlsZSA9IHRoaXMucyhyZWN0LngudG9TdHJpbmcoKSArICdweCcsIHJlY3QueS50b1N0cmluZygpICsgJ3B4Jyk7XHJcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkubWFwKChrZXkpID0+IHRoaXMuJGNvbnRlbnQuc3R5bGVba2V5XSA9IHN0eWxlW2tleV0pO1xyXG4gIH1cclxuICBvbk91dHNpZGVDbGljayhldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLm9wZW4pXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHBhdGggPSBldmVudFBhdGgoZXZlbnQpO1xyXG4gICAgY29uc3QgYWN0aXZhdG9yID0gdGhpcy4kaG9zdC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmF0b3InKTtcclxuICAgIGlmIChwYXRoLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGl2YXRvcikpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICh0aGlzLnBlcnNpc3RlbnQgJiYgcGF0aC5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSB0aGlzLiRob3N0KSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wbHVzQ2xvc2UuZW1pdCgpO1xyXG4gICAgaWYgKCFyZXN1bHQucHJldmVudERlZmF1bHQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGVhbigpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRMb2FkKCkge1xyXG4gICAgdGhpcy5iaW5kKCk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5jbGVhbigpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGl2YXRvclwiLCByZWY6IChlbGVtZW50KSA9PiB0aGlzLiRhY3RpdmF0b3IgPSBlbGVtZW50LCBvbkNsaWNrOiAoZXZlbnQpID0+IHRoaXMuY2xpY2soZXZlbnQpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJhY3RpdmF0b3JcIiB9KSksIHRoaXMub3BlbiAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRlbnRcIiwgcmVmOiAoZWxlbWVudCkgPT4gdGhpcy4kY29udGVudCA9IGVsZW1lbnQsIHN0eWxlOiB0aGlzLmZpeGVkID8ge30gOiB0aGlzLnN0eWxlIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcclxuICB9XHJcbiAgZ2V0ICRob3N0KCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxyXG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XHJcbiAgICBcImZpeGVkXCI6IFtcImJpbmRcIl0sXHJcbiAgICBcIm9wZW5cIjogW1wiYmluZFwiXVxyXG4gIH07IH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgQmluZFxyXG5dLCBNZW51LnByb3RvdHlwZSwgXCJ1cGRhdGVcIiwgbnVsbCk7XHJcbk1lbnUuc3R5bGUgPSBtZW51Q3NzO1xuXG5leHBvcnQgeyBNZW51IGFzIHBsdXNfbWVudSB9O1xuIiwiY29uc3QgZXZlbnRQYXRoID0gKGV2ZW50KSA9PiB7XHJcbiAgcmV0dXJuIGV2ZW50LnBhdGggfHwgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKSk7XHJcbn07XG5cbmNsYXNzIE91dHNpZGVDbGljayB7XHJcbiAgc3RhdGljIGFkZChlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoID0gZXZlbnRQYXRoKGV2ZW50KTtcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXRoLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZWxlbWVudCk7XHJcbiAgICAgIGlmICgxIDwgaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRhcmdldHMuc2V0KGVsZW1lbnQsIGZuKTtcclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMudGFyZ2V0cy5nZXQoZWxlbWVudCk7XHJcbiAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5kZWxldGUoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbk91dHNpZGVDbGljay50YXJnZXRzID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTY3JvbGxiYXIge1xyXG4gIHN0YXRpYyBnZXQgaXNSVEwoKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGNvbnN0IHdpZHRoID0gZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIHdpZHRoO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplID4gMSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBpc092ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKCFpc092ZXJmbG93aW5nKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBvdmVyZmxvdzogZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyxcclxuICAgICAgW3Byb3BlcnR5XTogZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0sXHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXNldChrZXkpIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIGlmICh0aGlzLmtleXMuc2l6ZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVba2V5XSA9IHRoaXMuc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICB9XHJcbn1cclxuU2Nyb2xsYmFyLmtleXMgPSBuZXcgU2V0KCk7XHJcblNjcm9sbGJhci5zdHlsZSA9IHt9O1xuXG5leHBvcnQgeyBPdXRzaWRlQ2xpY2sgYXMgTywgU2Nyb2xsYmFyIGFzIFMsIGV2ZW50UGF0aCBhcyBlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9