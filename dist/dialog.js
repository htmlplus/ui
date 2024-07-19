import { P as PlusCore, A as Animation, n as Scrollbar, o as on, l as off, p as toAxis, m as classes, h as html, j as attributes, a as Property, E as Event, Q as Query, c as Provider, M as Method, W as Watch, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host([animation][state=opening]),\n:host([animation][state=closing]) {\n  transition: all 0.5s ease-out;\n}\n\n:host([animation][state=opening]) .dialog,\n:host([animation][state=closing]) .dialog {\n  overflow: hidden;\n}\n\n:host([animation][state=opening]) ::slotted(*),\n:host([animation][state=closing]) ::slotted(*) {\n  transition: all 0.5s ease-out;\n}\n\n:host([animation][state=open]),\n:host([animation][state=closing]) {\n  opacity: 0;\n}\n\n:host([animation][state=open]) ::slotted(*),\n:host([animation][state=closing]) ::slotted(*) {\n  transform: translate(0, -50px);\n}\n\n:host([animation][state=open]) .y-bottom ::slotted(*),\n:host([animation][state=closing]) .y-bottom ::slotted(*) {\n  transform: translate(0, 50px);\n}\n\n:host([animation][state=open]) .x-right ::slotted(*),\n:host([animation][state=closing]) .x-right ::slotted(*) {\n  transform: translate(50px, 0);\n}\n\n:host([animation][state=open]) .x-left ::slotted(*),\n:host([animation][state=closing]) .x-left ::slotted(*) {\n  transform: translate(-50px, 0);\n}\n\n:host([animation][state=close]),\n:host([animation][state=opening]) {\n  opacity: 1;\n}\n\n:host([animation][state=close]) ::slotted(*),\n:host([animation][state=opening]) ::slotted(*) {\n  transform: translate(0, 0);\n}\n\n:host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: block;\n  outline: 0;\n  overflow: hidden;\n}\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.backdrop * {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.5;\n}\n\n.dialog {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n\n.table {\n  display: table;\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n\n.cell {\n  display: table-cell;\n}\n\n.scrollable ::slotted(*) {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.x-right .table {\n  margin-right: 0;\n}\n\n.x-left .table {\n  margin-left: 0;\n}\n\n.y-top .cell {\n  vertical-align: top;\n}\n\n.y-center .cell {\n  vertical-align: middle;\n}\n\n.y-bottom .cell {\n  vertical-align: bottom;\n}\n\n.full-height ::slotted(*) {\n  min-height: calc(100vh - 1rem);\n}\n\n.full-height.sticky ::slotted(*) {\n  min-height: 100vh;\n}\n\n.cell {\n  padding: 0.5rem;\n}\n\n.scrollable ::slotted(*) {\n  max-height: calc(100vh - 1rem);\n}\n\n.fullscreen .cell {\n  padding: 0;\n}\n\n.fullscreen ::slotted(*) {\n  border: 0;\n  border-radius: 0;\n}\n\n.fullscreen .cell {\n  max-width: none;\n}\n\n.fullscreen ::slotted(*) {\n  min-height: 100vh;\n}\n\n@media (min-width: 576px) {\n  .full-height ::slotted(*) {\n    min-height: calc(100vh - 3.5rem);\n  }\n  .full-height.sticky ::slotted(*) {\n    min-height: 100vh;\n  }\n  .cell {\n    padding: 1.75rem;\n  }\n  .scrollable ::slotted(*) {\n    max-height: calc(100vh - 3.5rem);\n  }\n  .cell {\n    max-width: 500px;\n  }\n  .size-sm .cell {\n    max-width: 300px;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .fullscreen-sm-down .cell {\n    padding: 0;\n  }\n  .fullscreen-sm-down ::slotted(*) {\n    border: 0;\n    border-radius: 0;\n  }\n  .fullscreen-sm-down .cell {\n    max-width: none;\n  }\n  .fullscreen-sm-down ::slotted(*) {\n    min-height: 100vh;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .fullscreen-md-down .cell {\n    padding: 0;\n  }\n  .fullscreen-md-down ::slotted(*) {\n    border: 0;\n    border-radius: 0;\n  }\n  .fullscreen-md-down .cell {\n    max-width: none;\n  }\n  .fullscreen-md-down ::slotted(*) {\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .size-lg .cell {\n    max-width: 800px;\n  }\n  .size-xl .cell {\n    max-width: 800px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .fullscreen-lg-down .cell {\n    padding: 0;\n  }\n  .fullscreen-lg-down ::slotted(*) {\n    border: 0;\n    border-radius: 0;\n  }\n  .fullscreen-lg-down .cell {\n    max-width: none;\n  }\n  .fullscreen-lg-down ::slotted(*) {\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .size-xl .cell {\n    max-width: 1140px;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .fullscreen-xl-down .cell {\n    padding: 0;\n  }\n  .fullscreen-xl-down ::slotted(*) {\n    border: 0;\n    border-radius: 0;\n  }\n  .fullscreen-xl-down .cell {\n    max-width: none;\n  }\n  .fullscreen-xl-down ::slotted(*) {\n    min-height: 100vh;\n  }\n}\n\n@media (max-width: 1399.98px) {\n  .fullscreen-xxl-down .cell {\n    padding: 0;\n  }\n  .fullscreen-xxl-down ::slotted(*) {\n    border: 0;\n    border-radius: 0;\n  }\n  .fullscreen-xxl-down .cell {\n    max-width: none;\n  }\n  .fullscreen-xxl-down ::slotted(*) {\n    min-height: 100vh;\n  }\n}\n\n:host([state=closed]) {\n  display: none;\n}\n\n.cell {\n  width: 100vw;\n}\n\n::slotted(*) {\n  pointer-events: auto;\n}\n\n.full-width .cell {\n  max-width: none !important;\n}\n\n.sticky .cell {\n  padding: 0;\n}\n\n.sticky ::slotted(*) {\n  border: 0;\n  border-radius: 0;\n}";
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
let Dialog = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.placement = "top";
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
        Dialog.instances.push(this);
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
        this.$host.style.zIndex = null;
        this.open = this.opened = false;
        Dialog.instances = Dialog.instances.filter((instance) => instance !== this);
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
      fullscreen: this.fullscreen,
      scrollable: this.scrollable
    }]);
  }
  get isCurrent() {
    return Dialog.instances.at(-1) === this;
  }
  get zIndex() {
    if (Dialog.instances.length < 1) return;
    const [instance] = Dialog.instances.slice(-1);
    if (!instance) return;
    const zIndex = window.getComputedStyle(instance.$host).getPropertyValue("z-index");
    return `${parseInt(zIndex) + 1}`;
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
        if (!next == !prev) break;
        this.try(next, true);
        break;
    }
  }
  initialize() {
    this.animate.initialize((this.opened = !!this.open) ? "entered" : "leaved");
  }
  terminate() {
    var _a;
    (_a = this.animate) == null ? void 0 : _a.dispose();
  }
  async try(open, silent) {
    if (this.opened == open) return await this.promise;
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
  loadedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`${attributes(this, [{
      "aria-hidden": this.opened ? null : "true"
    }, {
      "aria-modal": this.opened ? "true" : null
    }, {
      "tabindex": -1
    }, {
      "role": this.opened ? "dialog" : null
    }])}
        ${!this.transparent && html`<div class="backdrop" part="backdrop">
            <div />
          </div>`}
        <div class=${this.classes}>
          <div class="table">
            <div class="cell">
              <slot />
            </div>
          </div>
        </div>
      `;
  }
};
Dialog.tag = "plus-dialog";
Dialog.style = STYLE_IMPORTED;
Dialog.instances = [];
__decorateClass([
  Property({
    reflect: true,
    type: 258
  })
], Dialog.prototype, "animation", 2);
__decorateClass([
  Property({
    type: 256
  })
], Dialog.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "fullHeight", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "fullWidth", 2);
__decorateClass([
  Property({
    type: 10
  })
], Dialog.prototype, "fullscreen", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "keyboard", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Dialog.prototype, "open", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 8
  })
], Dialog.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "scrollable", 2);
__decorateClass([
  Property({
    type: 8
  })
], Dialog.prototype, "size", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "sticky", 2);
__decorateClass([
  Property({
    type: 2
  })
], Dialog.prototype, "transparent", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Dialog.prototype, "plusClose", 2);
__decorateClass([
  Event()
], Dialog.prototype, "plusClosed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Dialog.prototype, "plusOpen", 2);
__decorateClass([
  Event()
], Dialog.prototype, "plusOpened", 2);
__decorateClass([
  Query("slot")
], Dialog.prototype, "$cell", 2);
__decorateClass([
  Provider("dialog.connector")
], Dialog.prototype, "state", 1);
__decorateClass([
  Method()
], Dialog.prototype, "hide", 1);
__decorateClass([
  Method()
], Dialog.prototype, "show", 1);
__decorateClass([
  Method()
], Dialog.prototype, "toggle", 1);
__decorateClass([
  Watch(["open"])
], Dialog.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Dialog.prototype, "onEscape", 1);
__decorateClass([
  Bind()
], Dialog.prototype, "onClickOutside", 1);
Dialog = __decorateClass([
  Element()
], Dialog);
export {
  Dialog
};
