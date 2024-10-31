import { P as PlusCore, o as on, b as off, h as html, d as attributes, a as Property, M as Method, Q as Query, e as State, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{width:max-content;background-color:#000;color:#fff;font-weight:bold;padding:4px 8px;border-radius:4px;font-size:90%;position:absolute}:host([fixed]){position:fixed}:host([state=hide]){display:none}:host([state=show]){display:block}[part=arrow]{display:none;position:absolute;width:0;height:0}:host([arrow]) [part=arrow]{display:block}:host([arrow]):host([placement-computed^=top]){transform:translateY(-6px)}:host([arrow]):host([placement-computed^=top]) [part=arrow]{bottom:-6px;transform:translateX(-50%);border-top:solid 6px #000;border-right:solid 6px rgba(0,0,0,0);border-bottom:solid 0px rgba(0,0,0,0);border-left:solid 6px rgba(0,0,0,0)}:host([arrow]):host([placement-computed^=right]){transform:translateX(6px)}:host([arrow]):host([placement-computed^=right]) [part=arrow]{left:-6px;transform:translateY(-50%);border-top:solid 6px rgba(0,0,0,0);border-right:solid 6px #000;border-bottom:solid 6px rgba(0,0,0,0);border-left:solid 0px rgba(0,0,0,0)}:host([arrow]):host([placement-computed^=bottom]){transform:translateY(6px)}:host([arrow]):host([placement-computed^=bottom]) [part=arrow]{top:-6px;transform:translateX(-50%);border-top:solid 0px rgba(0,0,0,0);border-right:solid 6px rgba(0,0,0,0);border-bottom:solid 6px #000;border-left:solid 6px rgba(0,0,0,0)}:host([arrow]):host([placement-computed^=left]){transform:translateX(-6px)}:host([arrow]):host([placement-computed^=left]) [part=arrow]{right:-6px;transform:translateY(-50%);border-top:solid 6px rgba(0,0,0,0);border-right:solid 0px rgba(0,0,0,0);border-bottom:solid 6px rgba(0,0,0,0);border-left:solid 6px #000}";
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
let FloatingCore;
let Tooltip = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.offset = [0, 10];
    this.reference = "previous";
    this.trigger = ["focus", "hover"];
    this.z = "auto";
    this.state = "hide";
  }
  hide() {
    var _a;
    if (this.state == "hide") return;
    clearTimeout(this.timeout);
    const delay = ((_a = this.delay) == null ? void 0 : _a[1]) || this.delay || 0;
    this.timeout = setTimeout(() => {
      this.state = "hide";
      this.observe(false);
    }, delay);
  }
  show() {
    var _a;
    if (this.state == "show") return;
    clearTimeout(this.timeout);
    const delay = ((_a = this.delay) == null ? void 0 : _a[0]) || this.delay || 0;
    this.timeout = setTimeout(() => {
      this.state = "show";
      this.observe(true);
    }, delay);
  }
  update() {
    this.$host.removeAttribute("placement-computed");
    FloatingCore.computePosition(this.$activator, this.$host, this.options).then((data) => {
      const {
        x,
        y,
        placement,
        middlewareData
      } = data;
      this.$host.setAttribute("placement-computed", placement);
      Object.assign(this.$host.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      if (!this.arrow) return;
      const {
        x: arrowX,
        y: arrowY
      } = middlewareData.arrow;
      Object.assign(this.$arrow.style, {
        left: arrowX == null ? "" : `${arrowX}px`,
        top: arrowY == null ? "" : `${arrowY}px`
      });
    });
  }
  get $reference() {
    if (typeof this.reference != "string") return this.reference;
    switch (this.reference) {
      case "next":
        return this.$host.nextElementSibling;
      case "parent":
        return this.$host.parentElement;
      case "previous":
        return this.$host.previousElementSibling;
    }
    return document.querySelector(this.reference);
  }
  get options() {
    const PLACEMENT = {
      "top": "top",
      "top-left": this.isRTL ? "top-end" : "top-start",
      "top-right": this.isRTL ? "top-start" : "top-end",
      "top-start": "top-start",
      "top-end": "top-end",
      "right": "right",
      "right-top": "right-start",
      "right-bottom": "right-end",
      "bottom": "bottom",
      "bottom-left": this.isRTL ? "bottom-end" : "bottom-start",
      "bottom-right": this.isRTL ? "bottom-start" : "bottom-end",
      "bottom-start": "bottom-start",
      "bottom-end": "bottom-end",
      "left": "left",
      "left-top": "left-start",
      "left-bottom": "left-end",
      "start": this.isRTL ? "right" : "left",
      "start-top": this.isRTL ? "right-start" : "left-start",
      "start-bottom": this.isRTL ? "right-end" : "left-end",
      "end": this.isRTL ? "left" : "right",
      "end-top": this.isRTL ? "left-start" : "right-start",
      "end-bottom": this.isRTL ? "left-end" : "right-end"
    };
    const padding = [this.offset].flat();
    return {
      middleware: [
        FloatingCore.offset({
          crossAxis: padding[0] || 0,
          mainAxis: padding[1] || 0
        }),
        FloatingCore.flip(),
        this.arrow && FloatingCore.arrow({
          element: this.$arrow
        })
        // FloatingCore.hide()
      ],
      placement: PLACEMENT[this.placement],
      strategy: this.fixed ? "fixed" : "absolute"
    };
  }
  watcher(next, prev, key) {
    switch (key) {
      case "disabled":
        next ? this.terminate() : this.initialize();
        break;
      case "fixed":
      case "offset":
      case "placement":
        if (this.state == "hide") break;
        this.update();
        break;
      case "reference":
      case "trigger":
        this.terminate();
        this.initialize();
        break;
    }
  }
  initialize() {
    if (this.disabled) return;
    this.$activator = this.$reference;
    clearTimeout(this.timeout);
    if (!this.$activator) return;
    this.events(false).forEach(([type, handler]) => {
      on(this.$activator, type, handler);
    });
  }
  terminate() {
    clearTimeout(this.timeout);
    if (!this.$activator) return;
    this.events(true).forEach(([type, handler]) => {
      off(this.$activator, type, handler);
    });
  }
  events(all) {
    return [["click", "click", this.onShow], ["click", "blur", this.onHide], ["click", "outside", this.onHide], ["focus", "focus", this.onShow], ["focus", "blur", this.onHide], ["hover", "mouseenter", this.onShow], ["hover", "mouseleave", this.onHide]].filter((row) => all || [this.trigger].flat().includes(row[0])).map((row) => row.slice(1));
  }
  observe(active) {
    var _a;
    (_a = this.cleanup) == null ? void 0 : _a.call(this);
    if (!active) return;
    this.cleanup = FloatingCore.autoUpdate(this.$activator, this.$host, this.update.bind(this));
  }
  onHide() {
    this.hide();
  }
  onShow() {
    this.show();
  }
  connectedCallback() {
    return import("@floating-ui/dom").then((module) => {
      FloatingCore = module;
      this.initialize();
    }).catch(() => {
      throw new Error("The `tooltip` element depends on an external package, but it doesn't seem to be installed. Running `npm install @floating-ui/dom` will fix this problem.");
    });
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`${attributes(this, [{
      "role": "tooltip"
    }, {
      "state": this.state
    }])}
        <slot />
        <div part="arrow"></div>
      `;
  }
};
Tooltip.tag = "plus-tooltip";
Tooltip.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Tooltip.prototype, "arrow", 2);
__decorateClass([
  Property({
    type: 129
  })
], Tooltip.prototype, "delay", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Tooltip.prototype, "disabled", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Tooltip.prototype, "fixed", 2);
__decorateClass([
  Property({
    type: 129
  })
], Tooltip.prototype, "offset", 2);
__decorateClass([
  Property({
    type: 16
  })
], Tooltip.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 528
  })
], Tooltip.prototype, "reference", 2);
__decorateClass([
  Property({
    type: 17
  })
], Tooltip.prototype, "trigger", 2);
__decorateClass([
  Property({
    type: 16
  })
], Tooltip.prototype, "z", 2);
__decorateClass([
  Method()
], Tooltip.prototype, "hide", 1);
__decorateClass([
  Method()
], Tooltip.prototype, "show", 1);
__decorateClass([
  Method()
], Tooltip.prototype, "update", 1);
__decorateClass([
  Query("[part=arrow]")
], Tooltip.prototype, "$arrow", 2);
__decorateClass([
  State()
], Tooltip.prototype, "state", 2);
__decorateClass([
  Watch()
], Tooltip.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Tooltip.prototype, "onHide", 1);
__decorateClass([
  Bind()
], Tooltip.prototype, "onShow", 1);
Tooltip = __decorateClass([
  Element()
], Tooltip);
export {
  Tooltip
};
