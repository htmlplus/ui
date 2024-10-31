import { P as PlusCore, t as toUnit, h as html, d as attributes, s as styles, a as Property, c as Event, Q as Query, e as State, S as Style, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{position:sticky;display:block;will-change:auto}.sizer-wrapper{position:relative;pointer-events:none;visibility:hidden}.sizer{position:absolute}";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let Sticky = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.top = 0;
  }
  get style() {
    return {
      "top": toUnit(this.top),
      "z-index": this.zIndex ?? void 0
    };
  }
  get sizer() {
    const top = toUnit(this.top);
    if (!top) return;
    return {
      top: `calc((${top} + 1px) * -1)`
    };
  }
  watchers(next, prev, key) {
    switch (key) {
      case "disabled":
        next ? this.terminate() : this.initialize();
        break;
      case "watcher":
        next ? this.initialize() : this.terminate();
        break;
    }
  }
  initialize() {
    if (!this.watcher) return;
    this.observer = new IntersectionObserver(this.onIntersecting, {
      threshold: [1]
    });
    this.observer.observe(this.$sizer);
  }
  terminate() {
    requestAnimationFrame(() => {
      var _a;
      this.state = void 0;
      (_a = this.observer) == null ? void 0 : _a.disconnect();
    });
  }
  onIntersecting(entries) {
    const [entry] = entries;
    this.state = entry.intersectionRatio < 1 ? "stick" : "normal";
    this.plusChange(this.state);
  }
  loadedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`${attributes(this, [{
      "state": this.watcher ? this.state : null
    }])}
        <div class="sizer-wrapper">
          <div class="sizer" style=${styles(this.sizer)}></div>
        </div>
        <slot />
        ${this.state && html`<div class=${this.state}>
            <slot name=${this.state} />
          </div>`}
      `;
  }
};
Sticky.tag = "plus-sticky";
Sticky.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 640
  })
], Sticky.prototype, "top", 2);
__decorateClass([
  Property({
    type: 4
  })
], Sticky.prototype, "watcher", 2);
__decorateClass([
  Property({
    type: 128
  })
], Sticky.prototype, "zIndex", 2);
__decorateClass([
  Event()
], Sticky.prototype, "plusChange", 2);
__decorateClass([
  Query(".sizer")
], Sticky.prototype, "$sizer", 2);
__decorateClass([
  State()
], Sticky.prototype, "state", 2);
__decorateClass([
  Style()
], Sticky.prototype, "style", 1);
__decorateClass([
  Watch(["disabled", "watcher"])
], Sticky.prototype, "watchers", 1);
__decorateClass([
  Bind()
], Sticky.prototype, "onIntersecting", 1);
Sticky = __decorateClass([
  Element()
], Sticky);
export {
  Sticky
};
