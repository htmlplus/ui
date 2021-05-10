(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

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

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-transition.entry.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-transition.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: plus_transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_transition", function() { return Transition; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");
/* harmony import */ var _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind-dadc44dd.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/bind-dadc44dd.js");
/* harmony import */ var _scrollbar_8d18854e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-8d18854e.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/scrollbar-8d18854e.js");




const transitionCss = ":host([name=bounce]){animation-name:bounce;transform-origin:center bottom}@keyframes bounce{from,20%,53%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, 0, 0)}40%,43%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -30px, 0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -15px, 0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, 0, 0) scaleY(0.95)}90%{transform:translate3d(0, -4px, 0) scaleY(1.02)}}:host([name=bounce-in]){animation-name:bounce-in;animation-duration:calc(var(--plus-transition-duration) * 0.75)}@keyframes bounce-in{from,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}20%{transform:scale3d(1.1, 1.1, 1.1)}40%{transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;transform:scale3d(1.03, 1.03, 1.03)}80%{transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;transform:scale3d(1, 1, 1)}}:host([name=fade-in-down]){animation-name:fade-in-down}@keyframes fade-in-down{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:translate3d(0, 0, 0)}}:host([name=flip-in-y]){animation-name:flip-in-y;backface-visibility:visible !important}@keyframes flip-in-y{from{transform:perspective(400px) rotate3d(0, 1, 0, 90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0, 1, 0, -20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0, 1, 0, 10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0, 1, 0, -5deg)}to{transform:perspective(400px)}}:host([name=shake-x]){animation-name:shake-x}@keyframes shake-x{from,to{transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{transform:translate3d(10px, 0, 0)}}:host([name=shake-y]){animation-name:shake-y}@keyframes shake-y{from,to{transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{transform:translate3d(0, -10px, 0)}20%,40%,60%,80%{transform:translate3d(0, 10px, 0)}}:host([name=flash]){animation-name:flash}@keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}:host([name=pulse]){animation-name:pulse;animation-timing-function:ease-in-out}@keyframes pulse{from{transform:scale3d(1, 1, 1)}50%{transform:scale3d(1.05, 1.05, 1.05)}to{transform:scale3d(1, 1, 1)}}:host([name=rubber-band]){animation-name:rubber-band}@keyframes rubber-band{from{transform:scale3d(1, 1, 1)}30%{transform:scale3d(1.25, 0.75, 1)}40%{transform:scale3d(0.75, 1.25, 1)}50%{transform:scale3d(1.15, 0.85, 1)}65%{transform:scale3d(0.95, 1.05, 1)}75%{transform:scale3d(1.05, 0.95, 1)}to{transform:scale3d(1, 1, 1)}}:host([name=head-shake]){animation-name:head-shake;animation-timing-function:ease-in-out}@keyframes head-shake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}:host([name=swing]){animation-name:swing;transform-origin:top center}@keyframes swing{20%{transform:rotate3d(0, 0, 1, 15deg)}40%{transform:rotate3d(0, 0, 1, -10deg)}60%{transform:rotate3d(0, 0, 1, 5deg)}80%{transform:rotate3d(0, 0, 1, -5deg)}to{transform:rotate3d(0, 0, 1, 0deg)}}:host([name=heart-beat]){animation-name:heart-beat;animation-duration:calc(var(--plus-transition-duration) * 1.3);animation-timing-function:ease-in-out}@keyframes heart-beat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}:host([name=typing]){overflow:hidden;white-space:nowrap;border-right:2px solid currentColor;animation-name:typing, typing-cursor;animation-duration:calc(var(--plus-transition-duration) * 4), calc(var(--plus-transition-duration) / 4) !important;animation-timing-function:steps(44), steps(44);animation-delay:calc(var(--plus-transition-delay) + 1), var(--plus-transition-delay) !important;animation-iteration-count:var(--plus-transition-repeat), infinite !important;animation-direction:var(--plus-transition-direction), normal !important;animation-fill-mode:both, none}@keyframes typing{from{width:0}to{width:100%}}@keyframes typing-cursor{50%{border-color:transparent}}:host{--plus-transition-delay:0s;--plus-transition-duration:1s;--plus-transition-repeat:1}:host{display:block;animation-fill-mode:both;animation-delay:var(--plus-transition-delay);animation-duration:var(--plus-transition-duration);animation-iteration-count:var(--plus-transition-repeat)}:host([pause=\"\"]),:host([pause=true]){animation-play-state:paused}:host([pause=hover]),:host([start=hover]:hover){animation-play-state:running}:host([start=hover]),:host([pause=hover]:hover){animation-play-state:paused}:host([duration=slower]){--plus-transition-duration:3s}:host([duration=slow]){--plus-transition-duration:2s}:host([duration=normal]){--plus-transition-duration:1s}:host([duration=fast]){--plus-transition-duration:0.8s}:host([duration=faster]){--plus-transition-duration:0.5s}:host([direction=normal]){--plus-transition-direction:normal}:host([direction=reverse]){--plus-transition-direction:reverse}:host([direction=alternate]){--plus-transition-direction:alternate}:host([direction=alternate-reverse]){--plus-transition-direction:alternate-reverse}";

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
const Transition = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.plusCancel = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusCancel", 3);
    this.plusEnd = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusEnd", 3);
    this.plusIteration = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusIteration", 3);
    this.plusStart = Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "plusStart", 3);
    /**
     * TODO
     */
    this.duration = 'normal';
  }
  get styles() {
    var _a, _b;
    return {
      '--plus-transition-delay': (_a = this.delay) !== null && _a !== void 0 ? _a : null,
      '--plus-transition-duration': isNaN(parseFloat(this.duration)) ? null : this.duration,
      '--plus-transition-repeat': (_b = this.repeat) !== null && _b !== void 0 ? _b : null,
    };
  }
  get events() {
    return [
      {
        event: 'animationcancel',
        handler: this.onCancel
      },
      {
        event: 'animationend',
        handler: this.onEnd
      },
      {
        event: 'animationiteration',
        handler: this.onIteration
      },
      {
        event: 'animationstart',
        handler: this.onStart
      }
    ];
  }
  onCancel() {
    this.plusCancel.emit();
  }
  onEnd() {
    this.plusEnd.emit();
  }
  onIteration() {
    this.plusIteration.emit();
  }
  onStart() {
    this.plusStart.emit();
  }
  connectedCallback() {
    this.events.map(({ event, handler }) => this.$host.addEventListener(event, handler));
  }
  disconnectedCallback() {
    this.events.map(({ event, handler }) => this.$host.removeEventListener(event, handler));
  }
  render() {
    return (Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: this.styles }, Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Transition.prototype, "onCancel", null);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Transition.prototype, "onEnd", null);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Transition.prototype, "onIteration", null);
__decorate([
  _bind_dadc44dd_js__WEBPACK_IMPORTED_MODULE_1__["B"]
], Transition.prototype, "onStart", null);
Transition.style = transitionCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vYmluZC1kYWRjNDRkZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy10cmFuc2l0aW9uLmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL3JlYWN0L25vZGVfbW9kdWxlcy9AaHRtbHBsdXMvY29yZS9kaXN0L2VzbS9zY3JvbGxiYXItOGQxODg1NGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsVUFBVTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUNwQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkc7QUFDOUQ7QUFDZDs7QUFFakMsNENBQTRDLHNCQUFzQiwrQkFBK0Isa0JBQWtCLGdCQUFnQiw4REFBOEQsK0JBQStCLFFBQVEsaUVBQWlFLCtDQUErQyxJQUFJLGlFQUFpRSxnREFBZ0QsSUFBSSwrREFBK0QsNENBQTRDLElBQUksZ0RBQWdELHdCQUF3Qix5QkFBeUIsZ0VBQWdFLHFCQUFxQix3QkFBd0IsOERBQThELEdBQUcsVUFBVSxpQ0FBaUMsSUFBSSxpQ0FBaUMsSUFBSSxpQ0FBaUMsSUFBSSxVQUFVLG9DQUFvQyxJQUFJLG9DQUFvQyxHQUFHLFVBQVUs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bURBQUk7QUFDTjtBQUNBOztBQUV5Qzs7Ozs7Ozs7Ozs7OztBQzdGekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJpbmQodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBsZXQgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEBib3VuZE1ldGhvZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJHt0eXBlb2YgZm59YCk7XHJcbiAgfVxyXG4gIC8vIEluIElFMTEgY2FsbGluZyBPYmplY3QuZGVmaW5lUHJvcGVydHkgaGFzIGEgc2lkZS1lZmZlY3Qgb2YgZXZhbHVhdGluZyB0aGVcclxuICAvLyBnZXR0ZXIgZm9yIHRoZSBwcm9wZXJ0eSB3aGljaCBpcyBiZWluZyByZXBsYWNlZC4gVGhpcyBjYXVzZXMgaW5maW5pdGVcclxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXHJcbiAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICByZXR1cm4ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXHJcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xyXG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgZm4gPSB2YWx1ZTtcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgIH0sXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgZm4gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG59XG5cbmV4cG9ydCB7IEJpbmQgYXMgQiB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNjE4YjdmYzguanMnO1xuaW1wb3J0IHsgQiBhcyBCaW5kIH0gZnJvbSAnLi9iaW5kLWRhZGM0NGRkLmpzJztcbmltcG9ydCAnLi9zY3JvbGxiYXItOGQxODg1NGUuanMnO1xuXG5jb25zdCB0cmFuc2l0aW9uQ3NzID0gXCI6aG9zdChbbmFtZT1ib3VuY2VdKXthbmltYXRpb24tbmFtZTpib3VuY2U7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tfUBrZXlmcmFtZXMgYm91bmNle2Zyb20sMjAlLDUzJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX00MCUsNDMle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKSBzY2FsZVkoMS4xKX03MCV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApIHNjYWxlWSgxLjA1KX04MCV7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlWSgwLjk1KX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIC00cHgsIDApIHNjYWxlWSgxLjAyKX19Omhvc3QoW25hbWU9Ym91bmNlLWluXSl7YW5pbWF0aW9uLW5hbWU6Ym91bmNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbikgKiAwLjc1KX1Aa2V5ZnJhbWVzIGJvdW5jZS1pbntmcm9tLDIwJSw0MCUsNjAlLDgwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzZCgwLjMsIDAuMywgMC4zKX0yMCV7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLCAxLjEsIDEuMSl9NDAle3RyYW5zZm9ybTpzY2FsZTNkKDAuOSwgMC45LCAwLjkpfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyl9ODAle3RyYW5zZm9ybTpzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKX19Omhvc3QoW25hbWU9ZmFkZS1pbi1kb3duXSl7YW5pbWF0aW9uLW5hbWU6ZmFkZS1pbi1kb3dufUBrZXlmcmFtZXMgZmFkZS1pbi1kb3due2Zyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX19Omhvc3QoW25hbWU9ZmxpcC1pbi15XSl7YW5pbWF0aW9uLW5hbWU6ZmxpcC1pbi15O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fUBrZXlmcmFtZXMgZmxpcC1pbi15e2Zyb217dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMjBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7b3BhY2l0eToxfTgwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKX10b3t0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfX06aG9zdChbbmFtZT1zaGFrZS14XSl7YW5pbWF0aW9uLW5hbWU6c2hha2UteH1Aa2V5ZnJhbWVzIHNoYWtlLXh7ZnJvbSx0b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCl9MTAlLDMwJSw1MCUsNzAlLDkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApfTIwJSw0MCUsNjAlLDgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwgMCwgMCl9fTpob3N0KFtuYW1lPXNoYWtlLXldKXthbmltYXRpb24tbmFtZTpzaGFrZS15fUBrZXlmcmFtZXMgc2hha2UteXtmcm9tLHRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX0xMCUsMzAlLDUwJSw3MCUsOTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCl9MjAlLDQwJSw2MCUsODAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKX19Omhvc3QoW25hbWU9Zmxhc2hdKXthbmltYXRpb24tbmFtZTpmbGFzaH1Aa2V5ZnJhbWVzIGZsYXNoe2Zyb20sNTAlLHRve29wYWNpdHk6MX0yNSUsNzUle29wYWNpdHk6MH19Omhvc3QoW25hbWU9cHVsc2VdKXthbmltYXRpb24tbmFtZTpwdWxzZTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUBrZXlmcmFtZXMgcHVsc2V7ZnJvbXt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKX01MCV7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSl9dG97dHJhbnNmb3JtOnNjYWxlM2QoMSwgMSwgMSl9fTpob3N0KFtuYW1lPXJ1YmJlci1iYW5kXSl7YW5pbWF0aW9uLW5hbWU6cnViYmVyLWJhbmR9QGtleWZyYW1lcyBydWJiZXItYmFuZHtmcm9te3RyYW5zZm9ybTpzY2FsZTNkKDEsIDEsIDEpfTMwJXt0cmFuc2Zvcm06c2NhbGUzZCgxLjI1LCAwLjc1LCAxKX00MCV7dHJhbnNmb3JtOnNjYWxlM2QoMC43NSwgMS4yNSwgMSl9NTAle3RyYW5zZm9ybTpzY2FsZTNkKDEuMTUsIDAuODUsIDEpfTY1JXt0cmFuc2Zvcm06c2NhbGUzZCgwLjk1LCAxLjA1LCAxKX03NSV7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwgMC45NSwgMSl9dG97dHJhbnNmb3JtOnNjYWxlM2QoMSwgMSwgMSl9fTpob3N0KFtuYW1lPWhlYWQtc2hha2VdKXthbmltYXRpb24tbmFtZTpoZWFkLXNoYWtlO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9QGtleWZyYW1lcyBoZWFkLXNoYWtlezAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTYuNSV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyl9MTguNSV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpfTMxLjUle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpfTQzLjUle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9fTpob3N0KFtuYW1lPXN3aW5nXSl7YW5pbWF0aW9uLW5hbWU6c3dpbmc7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyfUBrZXlmcmFtZXMgc3dpbmd7MjAle3RyYW5zZm9ybTpyb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyl9NDAle3RyYW5zZm9ybTpyb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpfTYwJXt0cmFuc2Zvcm06cm90YXRlM2QoMCwgMCwgMSwgNWRlZyl9ODAle3RyYW5zZm9ybTpyb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpfX06aG9zdChbbmFtZT1oZWFydC1iZWF0XSl7YW5pbWF0aW9uLW5hbWU6aGVhcnQtYmVhdDthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1wbHVzLXRyYW5zaXRpb24tZHVyYXRpb24pICogMS4zKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fUBrZXlmcmFtZXMgaGVhcnQtYmVhdHswJXt0cmFuc2Zvcm06c2NhbGUoMSl9MTQle3RyYW5zZm9ybTpzY2FsZSgxLjMpfTI4JXt0cmFuc2Zvcm06c2NhbGUoMSl9NDIle3RyYW5zZm9ybTpzY2FsZSgxLjMpfTcwJXt0cmFuc2Zvcm06c2NhbGUoMSl9fTpob3N0KFtuYW1lPXR5cGluZ10pe292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCBjdXJyZW50Q29sb3I7YW5pbWF0aW9uLW5hbWU6dHlwaW5nLCB0eXBpbmctY3Vyc29yO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbikgKiA0KSwgY2FsYyh2YXIoLS1wbHVzLXRyYW5zaXRpb24tZHVyYXRpb24pIC8gNCkgIWltcG9ydGFudDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOnN0ZXBzKDQ0KSwgc3RlcHMoNDQpO2FuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLXBsdXMtdHJhbnNpdGlvbi1kZWxheSkgKyAxKSwgdmFyKC0tcGx1cy10cmFuc2l0aW9uLWRlbGF5KSAhaW1wb3J0YW50O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6dmFyKC0tcGx1cy10cmFuc2l0aW9uLXJlcGVhdCksIGluZmluaXRlICFpbXBvcnRhbnQ7YW5pbWF0aW9uLWRpcmVjdGlvbjp2YXIoLS1wbHVzLXRyYW5zaXRpb24tZGlyZWN0aW9uKSwgbm9ybWFsICFpbXBvcnRhbnQ7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoLCBub25lfUBrZXlmcmFtZXMgdHlwaW5ne2Zyb217d2lkdGg6MH10b3t3aWR0aDoxMDAlfX1Aa2V5ZnJhbWVzIHR5cGluZy1jdXJzb3J7NTAle2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH19Omhvc3R7LS1wbHVzLXRyYW5zaXRpb24tZGVsYXk6MHM7LS1wbHVzLXRyYW5zaXRpb24tZHVyYXRpb246MXM7LS1wbHVzLXRyYW5zaXRpb24tcmVwZWF0OjF9Omhvc3R7ZGlzcGxheTpibG9jazthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWRlbGF5OnZhcigtLXBsdXMtdHJhbnNpdGlvbi1kZWxheSk7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbik7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1wbHVzLXRyYW5zaXRpb24tcmVwZWF0KX06aG9zdChbcGF1c2U9XFxcIlxcXCJdKSw6aG9zdChbcGF1c2U9dHJ1ZV0pe2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH06aG9zdChbcGF1c2U9aG92ZXJdKSw6aG9zdChbc3RhcnQ9aG92ZXJdOmhvdmVyKXthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfTpob3N0KFtzdGFydD1ob3Zlcl0pLDpob3N0KFtwYXVzZT1ob3Zlcl06aG92ZXIpe2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH06aG9zdChbZHVyYXRpb249c2xvd2VyXSl7LS1wbHVzLXRyYW5zaXRpb24tZHVyYXRpb246M3N9Omhvc3QoW2R1cmF0aW9uPXNsb3ddKXstLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbjoyc306aG9zdChbZHVyYXRpb249bm9ybWFsXSl7LS1wbHVzLXRyYW5zaXRpb24tZHVyYXRpb246MXN9Omhvc3QoW2R1cmF0aW9uPWZhc3RdKXstLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjhzfTpob3N0KFtkdXJhdGlvbj1mYXN0ZXJdKXstLXBsdXMtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjVzfTpob3N0KFtkaXJlY3Rpb249bm9ybWFsXSl7LS1wbHVzLXRyYW5zaXRpb24tZGlyZWN0aW9uOm5vcm1hbH06aG9zdChbZGlyZWN0aW9uPXJldmVyc2VdKXstLXBsdXMtdHJhbnNpdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX06aG9zdChbZGlyZWN0aW9uPWFsdGVybmF0ZV0pey0tcGx1cy10cmFuc2l0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGV9Omhvc3QoW2RpcmVjdGlvbj1hbHRlcm5hdGUtcmV2ZXJzZV0pey0tcGx1cy10cmFuc2l0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGUtcmV2ZXJzZX1cIjtcblxudmFyIF9fZGVjb3JhdGUgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gIGVsc2VcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICBpZiAoZCA9IGRlY29yYXRvcnNbaV0pXHJcbiAgICAgICAgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuY29uc3QgVHJhbnNpdGlvbiA9IGNsYXNzIHtcclxuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XHJcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xyXG4gICAgdGhpcy5wbHVzQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzQ2FuY2VsXCIsIDMpO1xyXG4gICAgdGhpcy5wbHVzRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzRW5kXCIsIDMpO1xyXG4gICAgdGhpcy5wbHVzSXRlcmF0aW9uID0gY3JlYXRlRXZlbnQodGhpcywgXCJwbHVzSXRlcmF0aW9uXCIsIDMpO1xyXG4gICAgdGhpcy5wbHVzU3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcInBsdXNTdGFydFwiLCAzKTtcclxuICAgIC8qKlxyXG4gICAgICogVE9ET1xyXG4gICAgICovXHJcbiAgICB0aGlzLmR1cmF0aW9uID0gJ25vcm1hbCc7XHJcbiAgfVxyXG4gIGdldCBzdHlsZXMoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJy0tcGx1cy10cmFuc2l0aW9uLWRlbGF5JzogKF9hID0gdGhpcy5kZWxheSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcclxuICAgICAgJy0tcGx1cy10cmFuc2l0aW9uLWR1cmF0aW9uJzogaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmR1cmF0aW9uKSkgPyBudWxsIDogdGhpcy5kdXJhdGlvbixcclxuICAgICAgJy0tcGx1cy10cmFuc2l0aW9uLXJlcGVhdCc6IChfYiA9IHRoaXMucmVwZWF0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgZ2V0IGV2ZW50cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBldmVudDogJ2FuaW1hdGlvbmNhbmNlbCcsXHJcbiAgICAgICAgaGFuZGxlcjogdGhpcy5vbkNhbmNlbFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZXZlbnQ6ICdhbmltYXRpb25lbmQnLFxyXG4gICAgICAgIGhhbmRsZXI6IHRoaXMub25FbmRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGV2ZW50OiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcclxuICAgICAgICBoYW5kbGVyOiB0aGlzLm9uSXRlcmF0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBldmVudDogJ2FuaW1hdGlvbnN0YXJ0JyxcclxuICAgICAgICBoYW5kbGVyOiB0aGlzLm9uU3RhcnRcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLnBsdXNDYW5jZWwuZW1pdCgpO1xyXG4gIH1cclxuICBvbkVuZCgpIHtcclxuICAgIHRoaXMucGx1c0VuZC5lbWl0KCk7XHJcbiAgfVxyXG4gIG9uSXRlcmF0aW9uKCkge1xyXG4gICAgdGhpcy5wbHVzSXRlcmF0aW9uLmVtaXQoKTtcclxuICB9XHJcbiAgb25TdGFydCgpIHtcclxuICAgIHRoaXMucGx1c1N0YXJ0LmVtaXQoKTtcclxuICB9XHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmV2ZW50cy5tYXAoKHsgZXZlbnQsIGhhbmRsZXIgfSkgPT4gdGhpcy4kaG9zdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKSk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5ldmVudHMubWFwKCh7IGV2ZW50LCBoYW5kbGVyIH0pID0+IHRoaXMuJGhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcikpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBzdHlsZTogdGhpcy5zdHlsZXMgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcclxuICB9XHJcbiAgZ2V0ICRob3N0KCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxyXG59O1xyXG5fX2RlY29yYXRlKFtcclxuICBCaW5kXHJcbl0sIFRyYW5zaXRpb24ucHJvdG90eXBlLCBcIm9uQ2FuY2VsXCIsIG51bGwpO1xyXG5fX2RlY29yYXRlKFtcclxuICBCaW5kXHJcbl0sIFRyYW5zaXRpb24ucHJvdG90eXBlLCBcIm9uRW5kXCIsIG51bGwpO1xyXG5fX2RlY29yYXRlKFtcclxuICBCaW5kXHJcbl0sIFRyYW5zaXRpb24ucHJvdG90eXBlLCBcIm9uSXRlcmF0aW9uXCIsIG51bGwpO1xyXG5fX2RlY29yYXRlKFtcclxuICBCaW5kXHJcbl0sIFRyYW5zaXRpb24ucHJvdG90eXBlLCBcIm9uU3RhcnRcIiwgbnVsbCk7XHJcblRyYW5zaXRpb24uc3R5bGUgPSB0cmFuc2l0aW9uQ3NzO1xuXG5leHBvcnQgeyBUcmFuc2l0aW9uIGFzIHBsdXNfdHJhbnNpdGlvbiB9O1xuIiwiY29uc3QgZXZlbnRQYXRoID0gKGV2ZW50KSA9PiB7XHJcbiAgcmV0dXJuIGV2ZW50LnBhdGggfHwgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKSk7XHJcbn07XG5cbmNsYXNzIE91dHNpZGVDbGljayB7XHJcbiAgc3RhdGljIGFkZChlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoID0gZXZlbnRQYXRoKGV2ZW50KTtcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXRoLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZWxlbWVudCk7XHJcbiAgICAgIGlmICgxIDwgaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbiwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRhcmdldHMuc2V0KGVsZW1lbnQsIGZuKTtcclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMudGFyZ2V0cy5nZXQoZWxlbWVudCk7XHJcbiAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrLCB0cnVlKTtcclxuICAgIHRoaXMudGFyZ2V0cy5kZWxldGUoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbk91dHNpZGVDbGljay50YXJnZXRzID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTY3JvbGxiYXIge1xyXG4gIHN0YXRpYyBnZXQgaXNSVEwoKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh3aW5kb3cuZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IHdpZHRoKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGNvbnN0IHdpZHRoID0gZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIHdpZHRoO1xyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlKGtleSkge1xyXG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5cy5zaXplID4gMSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBpc092ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKCFpc092ZXJmbG93aW5nKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuaXNSVEwgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBvdmVyZmxvdzogZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyxcclxuICAgICAgW3Byb3BlcnR5XTogZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0sXHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXNldChrZXkpIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIGlmICh0aGlzLmtleXMuc2l6ZSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVba2V5XSA9IHRoaXMuc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICB9XHJcbn1cclxuU2Nyb2xsYmFyLmtleXMgPSBuZXcgU2V0KCk7XHJcblNjcm9sbGJhci5zdHlsZSA9IHt9O1xuXG5leHBvcnQgeyBPdXRzaWRlQ2xpY2sgYXMgTywgU2Nyb2xsYmFyIGFzIFMsIGV2ZW50UGF0aCBhcyBlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9