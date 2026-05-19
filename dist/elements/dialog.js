import { Q as Query, P as PlusCore, m as Animation, n as Scrollbar, a as off, o as on, p as toAxis, r as classes, j as jsxs, b as jsx, c as Property, O as Overrides, V as Variant, e as Event, f as Provider, M as Method, W as Watch, B as Bind, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host([animation][state=opening]),:host([animation][state=closing]){transition:all .5s ease-out}:host([animation][state=opening]) .dialog,:host([animation][state=closing]) .dialog{overflow:hidden}:host([animation][state=opening]) ::slotted(*),:host([animation][state=closing]) ::slotted(*){transition:all .5s ease-out}:host([animation][state=open]),:host([animation][state=closing]){opacity:0}:host([animation][state=open]) ::slotted(*),:host([animation][state=closing]) ::slotted(*){transform:translate(0, -50px)}:host([animation][state=open]) .y-bottom ::slotted(*),:host([animation][state=closing]) .y-bottom ::slotted(*){transform:translate(0, 50px)}:host([animation][state=open]) .x-right ::slotted(*),:host([animation][state=closing]) .x-right ::slotted(*){transform:translate(50px, 0)}:host([animation][state=open]) .x-left ::slotted(*),:host([animation][state=closing]) .x-left ::slotted(*){transform:translate(-50px, 0)}:host([animation][state=close]),:host([animation][state=opening]){opacity:1}:host([animation][state=close]) ::slotted(*),:host([animation][state=opening]) ::slotted(*){transform:translate(0, 0)}:host{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;display:block;outline:0;overflow:hidden}.backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1}.backdrop *{width:100%;height:100%;background-color:#000;opacity:.5}.dialog{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;z-index:1}.table{display:table;margin:auto;height:100%;position:relative}.cell{display:table-cell}.scrollable ::slotted(*){overflow-x:hidden;overflow-y:auto}.x-right .table{margin-right:0}.x-left .table{margin-left:0}.y-top .cell{vertical-align:top}.y-center .cell{vertical-align:middle}.y-bottom .cell{vertical-align:bottom}.full-height ::slotted(*){min-height:calc(100vh - 1rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:.5rem}.scrollable ::slotted(*){max-height:calc(100vh - 1rem)}@media(min-width: 576px){.full-height ::slotted(*){min-height:calc(100vh - 3.5rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:1.75rem}.scrollable ::slotted(*){max-height:calc(100vh - 3.5rem)}.cell{max-width:500px}.size-sm .cell{max-width:300px}}@media(min-width: 992px){.size-lg .cell{max-width:800px}.size-xl .cell{max-width:800px}}@media(min-width: 1200px){.size-xl .cell{max-width:1140px}}:host([fullscreen]) .cell{padding:0}:host([fullscreen]) ::slotted(*){border:0;border-radius:0}:host([fullscreen]) .cell{max-width:none}:host([fullscreen]) ::slotted(*){min-height:100vh}:host([state=closed]){display:none}.cell{width:100vw}::slotted(*){pointer-events:auto}.full-width .cell{max-width:none !important}.sticky .cell{padding:0}.sticky ::slotted(*){border:0;border-radius:0}";
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
let PlusDialog = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.connector = "";
    this.fullHeight = false;
    this.fullWidth = false;
    this.fullscreen = false;
    this.keyboard = false;
    this.open = false;
    this.persistent = false;
    this.placement = "top";
    this.scrollable = false;
    this.sticky = false;
    this.transparent = false;
    this.animate = new Animation({
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
        Scrollbar.remove(this);
        on(document, "keydown", this.onEscape, true);
        on(this.$cell, "outside", this.onClickOutside, true);
        this.$host.style.zIndex = this.zIndex;
        this.open = this.opened = true;
        PlusDialog.instances.push(this);
      },
      onEntering: () => {
        this.opened = this.open = true;
      },
      onEntered: (silent) => {
        if (silent) return;
        this.plusOpened();
      },
      onLeave: () => {
      },
      onLeaving: () => {
        this.opened = this.open = false;
      },
      onLeaved: (silent) => {
        Scrollbar.reset(this);
        off(document, "keydown", this.onEscape, true);
        off(this.$cell, "outside", this.onClickOutside, true);
        this.$host.style.zIndex = "";
        this.open = this.opened = false;
        PlusDialog.instances = PlusDialog.instances.filter((instance) => instance !== this);
        if (silent) return;
        this.plusClosed();
      }
    });
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
    let placement = this.placement || "";
    if (placement.match(/^(top|bottom)$/)) placement = `-${placement}`;
    let [x, y] = placement.split("-");
    x = x || "center";
    y = y || "center";
    x = toAxis(x, this.isRTL);
    return classes(["dialog", {
      x,
      y,
      size: this.size,
      sticky: this.sticky,
      fullWidth: this.fullWidth,
      fullHeight: this.fullHeight,
      scrollable: this.scrollable
    }]);
  }
  get isCurrent() {
    return PlusDialog.instances.at(-1) === this;
  }
  get zIndex() {
    if (PlusDialog.instances.length < 1) return "";
    const [instance] = PlusDialog.instances.slice(-1);
    if (!instance) return "";
    const zIndex = window.getComputedStyle(instance.$host).getPropertyValue("z-index");
    return `${parseInt(zIndex, 10) + 1}`;
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
        this.try(!!this.open, true);
        break;
    }
  }
  initialize() {
    this.opened = !!this.open;
    const state = this.opened ? "entered" : "leaved";
    this.animate.initialize(state);
  }
  terminate() {
    this.animate?.dispose();
  }
  async try(open, silent) {
    if (this.opened === open) return !!await this.promise;
    if (!silent) {
      const event = open ? this.plusOpen : this.plusClose;
      const prevented = event.call(this).defaultPrevented;
      if (prevented) return true;
    }
    this.opened = this.open = open;
    const fn = this.open ? this.animate.enter : this.animate.leave;
    this.promise = fn.bind(this.animate)(silent);
    return await this.promise;
  }
  onEscape(event) {
    if (!this.opened) return;
    if (!this.isCurrent) return;
    if (!this.keyboard || event.key !== "Escape") return;
    event.preventDefault();
    this.try(false, false);
  }
  onClickOutside() {
    if (!this.opened) return;
    if (!this.isCurrent) return;
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
    return /* @__PURE__ */ jsxs("host", { "aria-hidden": this.opened ? null : "true", "aria-modal": this.opened ? "true" : null, tabIndex: -1, role: this.opened ? "dialog" : null, value: this, children: [
      !this.transparent && /* @__PURE__ */ jsx("div", { className: "backdrop", part: "backdrop", children: /* @__PURE__ */ jsx("div", {}) }),
      /* @__PURE__ */ jsx("div", { className: this.classes, children: /* @__PURE__ */ jsx("div", { className: "table", children: /* @__PURE__ */ jsx("div", { className: "cell", children: /* @__PURE__ */ jsx("slot", {}) }) }) })
    ] });
  }
};
PlusDialog.tag = "plus-dialog";
PlusDialog.style = STYLE_IMPORTED;
PlusDialog.instances = [];
__decorateClass([
  Property({
    reflect: true,
    type: 1032
  })
], PlusDialog.prototype, "animation", 2);
__decorateClass([
  Property({
    type: 1024
  })
], PlusDialog.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "fullHeight", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "fullWidth", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDialog.prototype, "fullscreen", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "keyboard", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDialog.prototype, "open", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 32
  })
], PlusDialog.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "scrollable", 2);
__decorateClass([
  Property({
    type: 32
  })
], PlusDialog.prototype, "size", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "sticky", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusDialog.prototype, "transparent", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDialog.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusDialog.prototype, "variant", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusDialog.prototype, "plusClose", 2);
__decorateClass([
  Event()
], PlusDialog.prototype, "plusClosed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusDialog.prototype, "plusOpen", 2);
__decorateClass([
  Event()
], PlusDialog.prototype, "plusOpened", 2);
__decorateClass([
  Query("slot")
], PlusDialog.prototype, "$cell", 2);
__decorateClass([
  Provider("dialog.connector")
], PlusDialog.prototype, "state", 1);
__decorateClass([
  Method()
], PlusDialog.prototype, "hide", 1);
__decorateClass([
  Method()
], PlusDialog.prototype, "show", 1);
__decorateClass([
  Method()
], PlusDialog.prototype, "toggle", 1);
__decorateClass([
  Watch(["open"])
], PlusDialog.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusDialog.prototype, "onEscape", 1);
__decorateClass([
  Bind()
], PlusDialog.prototype, "onClickOutside", 1);
PlusDialog = __decorateClass([
  Element()
], PlusDialog);
export {
  PlusDialog
};
