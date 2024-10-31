import { P as PlusCore, A as Animation, j as Scrollbar, o as on, b as off, k as toAxis, l as classes, h as html, d as attributes, a as Property, c as Event, Q as Query, f as Provider, M as Method, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host([animation][state=opening]),:host([animation][state=closing]){transition:all .5s ease-out}:host([animation][state=opening]) .dialog,:host([animation][state=closing]) .dialog{overflow:hidden}:host([animation][state=opening]) ::slotted(*),:host([animation][state=closing]) ::slotted(*){transition:all .5s ease-out}:host([animation][state=open]),:host([animation][state=closing]){opacity:0}:host([animation][state=open]) ::slotted(*),:host([animation][state=closing]) ::slotted(*){transform:translate(0, -50px)}:host([animation][state=open]) .y-bottom ::slotted(*),:host([animation][state=closing]) .y-bottom ::slotted(*){transform:translate(0, 50px)}:host([animation][state=open]) .x-right ::slotted(*),:host([animation][state=closing]) .x-right ::slotted(*){transform:translate(50px, 0)}:host([animation][state=open]) .x-left ::slotted(*),:host([animation][state=closing]) .x-left ::slotted(*){transform:translate(-50px, 0)}:host([animation][state=close]),:host([animation][state=opening]){opacity:1}:host([animation][state=close]) ::slotted(*),:host([animation][state=opening]) ::slotted(*){transform:translate(0, 0)}:host{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;display:block;outline:0;overflow:hidden}.backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1}.backdrop *{width:100%;height:100%;background-color:#000;opacity:.5}.dialog{position:fixed;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;z-index:1}.table{display:table;margin:auto;height:100%;position:relative}.cell{display:table-cell}.scrollable ::slotted(*){overflow-x:hidden;overflow-y:auto}.x-right .table{margin-right:0}.x-left .table{margin-left:0}.y-top .cell{vertical-align:top}.y-center .cell{vertical-align:middle}.y-bottom .cell{vertical-align:bottom}.full-height ::slotted(*){min-height:calc(100vh - 1rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:.5rem}.scrollable ::slotted(*){max-height:calc(100vh - 1rem)}.fullscreen .cell{padding:0}.fullscreen ::slotted(*){border:0;border-radius:0}.fullscreen .cell{max-width:none}.fullscreen ::slotted(*){min-height:100vh}@media(min-width: 576px){.full-height ::slotted(*){min-height:calc(100vh - 3.5rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:1.75rem}.scrollable ::slotted(*){max-height:calc(100vh - 3.5rem)}.cell{max-width:500px}.size-sm .cell{max-width:300px}}@media(max-width: 575.98px){.fullscreen-sm-down .cell{padding:0}.fullscreen-sm-down ::slotted(*){border:0;border-radius:0}.fullscreen-sm-down .cell{max-width:none}.fullscreen-sm-down ::slotted(*){min-height:100vh}}@media(max-width: 767.98px){.fullscreen-md-down .cell{padding:0}.fullscreen-md-down ::slotted(*){border:0;border-radius:0}.fullscreen-md-down .cell{max-width:none}.fullscreen-md-down ::slotted(*){min-height:100vh}}@media(min-width: 992px){.size-lg .cell{max-width:800px}.size-xl .cell{max-width:800px}}@media(max-width: 991.98px){.fullscreen-lg-down .cell{padding:0}.fullscreen-lg-down ::slotted(*){border:0;border-radius:0}.fullscreen-lg-down .cell{max-width:none}.fullscreen-lg-down ::slotted(*){min-height:100vh}}@media(min-width: 1200px){.size-xl .cell{max-width:1140px}}@media(max-width: 1199.98px){.fullscreen-xl-down .cell{padding:0}.fullscreen-xl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xl-down .cell{max-width:none}.fullscreen-xl-down ::slotted(*){min-height:100vh}}@media(max-width: 1399.98px){.fullscreen-xxl-down .cell{padding:0}.fullscreen-xxl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xxl-down .cell{max-width:none}.fullscreen-xxl-down ::slotted(*){min-height:100vh}}:host([state=closed]){display:none}.cell{width:100vw}::slotted(*){pointer-events:auto}.full-width .cell{max-width:none !important}.sticky .cell{padding:0}.sticky ::slotted(*){border:0;border-radius:0}";
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
    type: 516
  })
], Dialog.prototype, "animation", 2);
__decorateClass([
  Property({
    type: 512
  })
], Dialog.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "fullHeight", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "fullWidth", 2);
__decorateClass([
  Property({
    type: 20
  })
], Dialog.prototype, "fullscreen", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "keyboard", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Dialog.prototype, "open", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 16
  })
], Dialog.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "scrollable", 2);
__decorateClass([
  Property({
    type: 16
  })
], Dialog.prototype, "size", 2);
__decorateClass([
  Property({
    type: 4
  })
], Dialog.prototype, "sticky", 2);
__decorateClass([
  Property({
    type: 4
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
