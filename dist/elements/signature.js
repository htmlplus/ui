import { g as PlusForm, h as html, a as Property, c as Event, M as Method, Q as Query, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;width:300px;height:150px}:host([disabled]){opacity:.5}canvas{display:block;width:100%;height:100%}";
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
let Core;
let Signature = class extends PlusForm {
  constructor() {
    super(...arguments);
    this.backgroundColor = "lightgray";
    this.color = "black";
    this.maxWidth = 2.5;
    this.minWidth = 0.5;
    this.throttle = 16;
    this.velocity = 0.7;
    this.history = [];
    this.index = -1;
    this.observer = new ResizeObserver(() => this.resize());
    this.timeout = 0;
  }
  get canvas() {
    return this.$canvas;
  }
  get redoable() {
    return this.index != this.history.length - 1;
  }
  get undoable() {
    return this.index != -1;
  }
  redo() {
    if (!this.redoable) return;
    this.index++;
    const data = this.history[this.index] || [];
    this.instance.fromData(data);
    this.update(true, true);
  }
  resize(clear) {
    const {
      width,
      height,
      offsetWidth,
      offsetHeight
    } = this.$canvas;
    if (width == offsetWidth && height == offsetHeight) return;
    this.$canvas.width = offsetWidth;
    this.$canvas.height = offsetHeight;
    if (!this.instance) return;
    if (clear ?? this.clearOnResize) {
      return this.reset(true);
    }
    this.instance.fromData(this.clone());
  }
  undo() {
    if (!this.undoable) return;
    this.index--;
    const data = this.history[this.index] || [];
    this.instance.fromData(data);
    this.update(true, true);
  }
  watcher(next, prev, name) {
    if (!this.instance) {
      return setTimeout(() => {
        this.watcher(next, prev, name);
      }, 250);
    }
    switch (name) {
      case "color":
        this.instance.penColor = next;
        break;
      case "disabled":
        this.instance[next ? "off" : "on"]();
        break;
      case "distance":
        this.instance.minDistance = next;
        break;
      case "velocity":
        this.instance.velocityFilterWeight = next;
        break;
      case "backgroundColor":
      case "dotSize":
      case "maxWidth":
      case "minWidth":
      case "throttle":
        this.instance[name] = next;
        break;
      case "resizable":
        this.observer[next ? "observe" : "unobserve"](this.$host);
        break;
      case "value":
        this.load();
        break;
    }
    if (name == "value") return;
    this.instance.fromData(this.clone());
  }
  clone() {
    return JSON.parse(JSON.stringify(this.instance.toData()));
  }
  initialize() {
    const options = {
      backgroundColor: this.backgroundColor,
      dotSize: this.dotSize,
      minDistance: this.distance,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      penColor: this.color,
      throttle: this.throttle,
      velocityFilterWeight: this.velocity
    };
    this.instance = new Core(this.$canvas, options);
    this.instance.addEventListener("beginStroke", this.onStart);
    this.instance.addEventListener("endStroke", this.onEnd);
    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd
    };
    for (const key in events) {
      if (!events.hasOwnProperty(key)) continue;
      this.instance.addEventListener(key, (event) => {
        events[key](event["detail"]);
      });
    }
    if (this.disabled) {
      this.instance.off();
    }
    if (this.resizable) {
      this.observer.observe(this.$host);
    }
    requestAnimationFrame(() => this.resize());
  }
  // TODO
  load() {
    if (this.previous == this.value) return;
    this.reset(false);
    this.previous = this.value;
    const image = document.createElement("img");
    image.src = "data:image/svg+xml;base64," + btoa(this.value);
    image.onerror = () => {
      image.remove();
    };
    image.onload = () => {
      const context = this.$canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      image.remove();
    };
  }
  reset(includeValue) {
    this.index = -1;
    this.history = [];
    this.instance.clear();
    if (!includeValue) return;
    this.previous = this.value = void 0;
  }
  terminate() {
    var _a;
    this.observer.disconnect();
    (_a = this.instance) == null ? void 0 : _a.off();
  }
  toSVG() {
    return this.instance.toSVG().replace(/<svg[^>]*>(.*?)<\/svg>/, `<svg viewBox="0 0 ${this.$canvas.width} ${this.$canvas.height}">$1<svg>`);
  }
  update(force, silent) {
    if (!force && this.timeout > Date.now()) return;
    this.timeout = Date.now() + 500;
    const value = this.instance.isEmpty() ? void 0 : this.toSVG();
    this.previous = this.value = value;
    if (silent) return;
    this.plusChange();
  }
  onReset() {
    this.value = void 0;
  }
  onStart() {
    if (this.value && this.index == -1) {
      this.reset(true);
    }
  }
  onEnd() {
    this.index++;
    this.history[this.index] = this.clone();
    this.history.length = this.index + 1;
    this.update(false, false);
  }
  loadedCallback() {
    return import("../vendors/signature_pad.js").then((module) => {
      Core = module.default;
      try {
        this.initialize();
      } catch {
        throw new Error("TODO");
      }
    }).catch(() => {
      throw new Error("The `signature` element depends on an external package, but it doesn't seem to be installed. Running `npm install signature_pad` will fix this problem.");
    });
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`<canvas part="canvas" tabindex=${0}></canvas>`;
  }
};
Signature.tag = "plus-signature";
Signature.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], Signature.prototype, "backgroundColor", 2);
__decorateClass([
  Property({
    type: 4
  })
], Signature.prototype, "clearOnResize", 2);
__decorateClass([
  Property({
    type: 512
  })
], Signature.prototype, "color", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "distance", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "dotSize", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "maxWidth", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "minWidth", 2);
__decorateClass([
  Property({
    type: 4
  })
], Signature.prototype, "resizable", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "throttle", 2);
__decorateClass([
  Property({
    type: 512
  })
], Signature.prototype, "value", 2);
__decorateClass([
  Property({
    type: 128
  })
], Signature.prototype, "velocity", 2);
__decorateClass([
  Property({
    type: 0
  })
], Signature.prototype, "canvas", 1);
__decorateClass([
  Property({
    type: 0
  })
], Signature.prototype, "redoable", 1);
__decorateClass([
  Property({
    type: 0
  })
], Signature.prototype, "undoable", 1);
__decorateClass([
  Event()
], Signature.prototype, "plusChange", 2);
__decorateClass([
  Event()
], Signature.prototype, "plusAfter", 2);
__decorateClass([
  Event()
], Signature.prototype, "plusBefore", 2);
__decorateClass([
  Event()
], Signature.prototype, "plusEnd", 2);
__decorateClass([
  Event()
], Signature.prototype, "plusStart", 2);
__decorateClass([
  Method()
], Signature.prototype, "redo", 1);
__decorateClass([
  Method()
], Signature.prototype, "resize", 1);
__decorateClass([
  Method()
], Signature.prototype, "undo", 1);
__decorateClass([
  Query("canvas")
], Signature.prototype, "$canvas", 2);
__decorateClass([
  Watch()
], Signature.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Signature.prototype, "onReset", 1);
__decorateClass([
  Bind()
], Signature.prototype, "onStart", 1);
__decorateClass([
  Bind()
], Signature.prototype, "onEnd", 1);
Signature = __decorateClass([
  Element()
], Signature);
export {
  Signature
};
