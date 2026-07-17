import { Q as Query, P as PlusCore, A as Animation, m as Scrollbar, l as off, o as on, n as toAxis, i as classes, f as toCSSUnit, j as jsxs, a as jsx, F as Fragment, b as Property, O as Overrides, V as Variant, E as Event, d as Provider, M as Method, W as Watch, B as Bind, c as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;position:relative;overflow:hidden;z-index:1000}[part=backdrop]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;transition:inherit}[part=backdrop] *{width:100%;height:100%;background-color:#000;opacity:.5}[part=root]{height:100%;position:relative;z-index:1;transition:inherit}.right,.left{width:var(--plus-drawer-size)}.top,.bottom{height:var(--plus-drawer-size)}.right,.left.reverse{margin:0 var(--plus-drawer-offset, 0) 0 0}.left,.right.reverse{margin:0 0 0 var(--plus-drawer-offset, 0)}.top,.bottom.reverse{margin:var(--plus-drawer-offset, 0) 0 0 0}.bottom,.top.reverse{margin:0 0 var(--plus-drawer-offset, 0) 0}:host([floating]){position:fixed;top:0;right:0;bottom:0;left:0}:host([animation]){transition:.3s}:host([animation][state=closed]){display:none}:host([animation][state=opened][state-mini=closed]){overflow:visible}:host([animation][state=open]),:host([animation][state=closing]){padding:.000001px}:host([animation][state=open]) [part=backdrop],:host([animation][state=closing]) [part=backdrop]{opacity:0}";
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
let PlusDrawer = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.backdrop = false;
    this.connector = "";
    this.floating = false;
    this.mini = false;
    this.miniSize = 80;
    this.open = false;
    this.persistent = false;
    this.flexible = false;
    this.size = 280;
    this.animate = {
      main: new Animation({
        key: "state",
        source: () => this.$host,
        target: () => this.$host,
        states: {
          enter: "open",
          entering: "opening",
          entered: "opened",
          leave: "close",
          leaving: "closing",
          leaved: "closed"
        },
        onEnter: () => {
          this.floating && Scrollbar.remove(this);
          on(this.$root, "outside", this.onClickOutside, true);
          this.open = this.opened = true;
        },
        onEntering: () => {
        },
        onEntered: (silent) => {
          if (silent) return;
          this.plusOpened();
        },
        onLeave: () => {
        },
        onLeaving: () => {
        },
        onLeaved: (silent) => {
          Scrollbar.reset(this);
          off(this.$root, "outside", this.onClickOutside, true);
          this.open = this.opened = false;
          if (silent) return;
          this.plusClosed();
        }
      }),
      mini: new Animation({
        key: "state-mini",
        source: () => this.$host,
        target: () => this.$host,
        states: {
          enter: "open",
          entering: "opening",
          entered: "opened",
          leave: "close",
          leaving: "closing",
          leaved: "closed"
        }
      })
    };
    this.opened = false;
  }
  get state() {
    return {
      open: this.opened,
      toggle: () => {
        this.try(!this.open, false);
      }
    };
  }
  get classes() {
    const placement = toAxis(this.placement || "start", this.isRTL);
    return classes([{
      [placement]: true,
      reverse: this.flexible
    }]);
  }
  get hasBackdrop() {
    return this.backdrop && this.floating;
  }
  get style() {
    const size = toCSSUnit(this.size);
    const miniSize = toCSSUnit(this.miniSize);
    const offset = `calc(${this.open ? this.mini ? `${size} * -1 + ${miniSize}` : "0px" : `${size} * -1`})`;
    return {
      "--plus-drawer-size": size,
      "--plus-drawer-offset": offset
    };
  }
  hide() {
    return this.try(false, true);
  }
  show() {
    return this.try(true, true);
  }
  toggle() {
    return this.try(!this.open, true);
  }
  watcher(next, prev, name) {
    switch (name) {
      case "open":
        if (!next === !prev) break;
        this.try(this.open, true);
        break;
      case "mini":
        if (!next === !prev) break;
        this.animate.mini[next ? "enter" : "leave"]();
        break;
    }
  }
  initialize() {
    this.opened = this.open;
    this.animate.main.initialize(this.open ? "entered" : "leaved");
    this.animate.mini.initialize(this.mini ? "entered" : "leaved");
  }
  terminate() {
    this.animate.main?.dispose();
    this.animate.mini?.dispose();
  }
  async try(open, silent) {
    if (this.opened === open) return !!await this.promise;
    if (!silent) {
      const event = open ? this.plusOpen : this.plusClose;
      const prevented = event.call(this).defaultPrevented;
      if (prevented) return true;
    }
    this.opened = this.open = open;
    const fn = this.open ? this.animate.main.enter : this.animate.main.leave;
    this.promise = fn.bind(this.animate.main)(silent);
    return await this.promise;
  }
  onClickOutside() {
    if (!this.opened) return;
    if (!this.floating) return;
    if (this.persistent) return;
    this.try(false, false);
  }
  readyCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      !!this.hasBackdrop && /* @__PURE__ */ jsx("div", { part: "backdrop", children: /* @__PURE__ */ jsx("div", {}) }),
      /* @__PURE__ */ jsx("div", { className: this.classes, part: "root", style: this.style, children: /* @__PURE__ */ jsx("slot", {}) })
    ] });
  }
};
PlusDrawer.tag = "plus-drawer";
PlusDrawer.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 1032
  })
], PlusDrawer.prototype, "animation", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDrawer.prototype, "backdrop", 2);
__decorateClass([
  Property({
    type: 1024
  })
], PlusDrawer.prototype, "connector", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDrawer.prototype, "floating", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDrawer.prototype, "mini", 2);
__decorateClass([
  Property({
    type: 1280
  })
], PlusDrawer.prototype, "miniSize", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDrawer.prototype, "open", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDrawer.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 32
  })
], PlusDrawer.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDrawer.prototype, "flexible", 2);
__decorateClass([
  Property({
    type: 1280
  })
], PlusDrawer.prototype, "size", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDrawer.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusDrawer.prototype, "variant", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusDrawer.prototype, "plusClose", 2);
__decorateClass([
  Event()
], PlusDrawer.prototype, "plusClosed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusDrawer.prototype, "plusOpen", 2);
__decorateClass([
  Event()
], PlusDrawer.prototype, "plusOpened", 2);
__decorateClass([
  Query("[part=root]")
], PlusDrawer.prototype, "$root", 2);
__decorateClass([
  Provider("drawer.connector")
], PlusDrawer.prototype, "state", 1);
__decorateClass([
  Method()
], PlusDrawer.prototype, "hide", 1);
__decorateClass([
  Method()
], PlusDrawer.prototype, "show", 1);
__decorateClass([
  Method()
], PlusDrawer.prototype, "toggle", 1);
__decorateClass([
  Watch(["mini", "open"])
], PlusDrawer.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusDrawer.prototype, "onClickOutside", 1);
PlusDrawer = __decorateClass([
  Element()
], PlusDrawer);
export {
  PlusDrawer
};
