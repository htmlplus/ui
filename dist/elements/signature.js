import { Q as Query, i as PlusForm, j as getCSSColor, E as ExternalDependencyError, b as _internal_h_, c as Property, O as Overrides, V as Variant, e as Event, M as Method, W as Watch, B as Bind, d as Element } from "../core/index.js";
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
let PlusSignature = class extends PlusForm {
  constructor() {
    super(...arguments);
    this.backgroundColor = "lightgray";
    this.penColor = "black";
    this.minDistance = 5;
    this.maxWidth = 2.5;
    this.minWidth = 0.5;
    this.throttle = 16;
    this.velocityFilterWeight = 0.7;
    this.history = [];
    this.index = -1;
    this.observer = new ResizeObserver(() => this.resize());
    this.timeout = 0;
  }
  get canvas() {
    return this.$canvas;
  }
  get redoable() {
    return this.index !== this.history.length - 1;
  }
  get undoable() {
    return this.index !== -1;
  }
  clear() {
    if (!this.ensureInstance()) return;
    this.index = -1;
    this.history = [];
    this.instance?.clear();
    this.previous = this.value = void 0;
  }
  async fromDataURL(dataUrl, options) {
    if (this.ensureInstance()) {
      await this.instance?.fromDataURL(dataUrl, options);
    }
  }
  redo() {
    if (!this.ensureInstance()) return;
    if (!this.redoable) return;
    this.index++;
    const data = this.history[this.index] || [];
    this.instance?.fromData(data, {
      clear: true
    });
    this.previous = this.value = this.clone();
    this.plusChange(this.value);
  }
  redraw() {
    if (this.ensureInstance()) {
      this.instance?.redraw();
    }
  }
  resize(clear) {
    const {
      width,
      height,
      offsetWidth,
      offsetHeight
    } = this.$canvas;
    if (width === offsetWidth && height === offsetHeight) return;
    this.$canvas.width = offsetWidth;
    this.$canvas.height = offsetHeight;
    if (!this.ensureInstance()) return;
    if (clear ?? this.clearOnResize) {
      return this.clear();
    }
    this.instance?.fromData(this.clone(), {
      clear: true
    });
  }
  toDataURL(type, quality) {
    if (this.ensureInstance()) {
      return this.$canvas?.toDataURL(type, quality);
    }
  }
  toSVG(options) {
    if (this.ensureInstance()) {
      return this.instance?.toSVG(options);
    }
  }
  undo() {
    if (!this.ensureInstance()) return;
    if (!this.undoable) return;
    this.index--;
    const data = this.history[this.index] || [];
    this.instance?.fromData(data, {
      clear: true
    });
    this.previous = this.value = this.clone();
    this.plusChange(this.value);
  }
  get options() {
    return {
      backgroundColor: getCSSColor(this.$host, this.backgroundColor),
      canvasContextOptions: this.canvasContextOptions,
      dotSize: this.dotSize,
      minDistance: this.minDistance,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      penColor: getCSSColor(this.$host, this.penColor),
      throttle: this.throttle,
      velocityFilterWeight: this.velocityFilterWeight
    };
  }
  watcher(next, _prev, name) {
    if (!this.instance) return;
    switch (name) {
      case "backgroundColor":
        this.instance.backgroundColor = getCSSColor(this.$host, this.backgroundColor) || this.instance.backgroundColor;
        break;
      case "penColor":
        this.instance.penColor = getCSSColor(this.$host, this.penColor) || this.instance.penColor;
        break;
      case "disabled":
        if (this.disabled) {
          this.instance.off();
        } else {
          this.instance.on();
        }
        break;
      case "canvasContextOptions":
      case "dotSize":
      case "maxWidth":
      case "minDistance":
      case "minWidth":
      case "throttle":
      case "velocityFilterWeight":
        this.instance[name] = next;
        break;
      case "resizable":
        if (this.resizable) {
          this.observer.observe(this.$host);
        } else {
          this.observer.unobserve(this.$host);
        }
        break;
      case "value":
        if (this.value !== this.previous) {
          this.previous = this.value || [];
          this.instance.fromData(this.value || [], {
            clear: true
          });
        }
        break;
    }
  }
  clone() {
    return JSON.parse(JSON.stringify(this.instance?.toData() || []));
  }
  ensureInstance() {
    if (this.instance) return true;
    console.warn("[Signature] Cannot perform operation because signature_pad is not initialized. Wait for the `ready` event before calling this method.");
    return false;
  }
  initialize() {
    this.instance = new Core(this.$canvas, this.options);
    this.instance?.addEventListener("beginStroke", this.onStart);
    this.instance?.addEventListener("endStroke", this.onEnd);
    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd
    };
    for (const key in events) {
      if (Object.hasOwn(events, key)) {
        this.instance?.addEventListener(key, (event) => {
          events[key].call(this, event.detail);
        });
      }
    }
    if (this.disabled) {
      this.instance?.off();
    }
    if (this.resizable) {
      this.observer.observe(this.$host);
    }
    this.resize();
    this.plusReady();
  }
  terminate() {
    this.observer.disconnect();
    this.instance?.off();
  }
  onReset() {
    this.clear();
    this.plusChange(this.value);
  }
  onStart() {
    if (this.value && this.index === -1) {
      this.clear();
    }
  }
  onEnd() {
    this.index++;
    this.history[this.index] = this.clone();
    this.history.length = this.index + 1;
    this.previous = this.value = this.clone();
    this.plusChange(this.value);
  }
  readyCallback() {
    import("signature_pad").then((module) => {
      Core = module.default;
      this.initialize();
    }).catch((error) => {
      throw new ExternalDependencyError(this.$host, "signature_pad", {
        cause: error
      });
    });
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return _internal_h_`<canvas part="canvas" tabindex=${0}></canvas>`;
  }
};
PlusSignature.tag = "plus-signature";
PlusSignature.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "backgroundColor", 2);
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "canvasContextOptions", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusSignature.prototype, "clearOnResize", 2);
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "penColor", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "minDistance", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "dotSize", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "maxWidth", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "minWidth", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusSignature.prototype, "resizable", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "throttle", 2);
__decorateClass([
  Property({
    type: 1
  })
], PlusSignature.prototype, "value", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusSignature.prototype, "velocityFilterWeight", 2);
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "canvas", 1);
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "redoable", 1);
__decorateClass([
  Property({
    type: 0
  })
], PlusSignature.prototype, "undoable", 1);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusSignature.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusSignature.prototype, "variant", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusAfter", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusBefore", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusChange", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusEnd", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusReady", 2);
__decorateClass([
  Event()
], PlusSignature.prototype, "plusStart", 2);
__decorateClass([
  Method()
], PlusSignature.prototype, "clear", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "fromDataURL", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "redo", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "redraw", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "resize", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "toDataURL", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "toSVG", 1);
__decorateClass([
  Method()
], PlusSignature.prototype, "undo", 1);
__decorateClass([
  Query("canvas")
], PlusSignature.prototype, "$canvas", 2);
__decorateClass([
  Watch()
], PlusSignature.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusSignature.prototype, "onReset", 1);
__decorateClass([
  Bind()
], PlusSignature.prototype, "onStart", 1);
__decorateClass([
  Bind()
], PlusSignature.prototype, "onEnd", 1);
PlusSignature = __decorateClass([
  Element()
], PlusSignature);
export {
  PlusSignature
};
