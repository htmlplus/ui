import { Q as Query, P as PlusCore, k as Animation, l as Scrollbar, b as off, o as on, m as toAxis, n as classes, t as toCSSUnit, s as styles, h as html, a as Property, O as Overrides, c as Event, g as Provider, M as Method, W as Watch, B as Bind, E as Element } from "../core/index.js";
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
let Drawer = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.miniSize = 80;
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
    const offset = `calc(${this.open ? this.mini ? `-${size} + ${miniSize}` : "0px" : `-${size}`})`;
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
        this.try(next, true);
        break;
      case "mini":
        if (!next === !prev) break;
        this.animate.mini[next ? "enter" : "leave"]();
        break;
    }
  }
  initialize() {
    this.opened = !!this.open;
    this.animate.main.initialize(this.open ? "entered" : "leaved");
    this.animate.mini.initialize(this.mini ? "entered" : "leaved");
  }
  terminate() {
    this.animate.main?.dispose();
    this.animate.mini?.dispose();
  }
  async try(open, silent) {
    if (this.opened === open) return await this.promise;
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
    return html`
				${this.hasBackdrop ? html`<div part="backdrop">
						<div />
					</div>` : null}
				<div class=${this.classes} part="root" style=${styles(this.style)}>
					<slot />
				</div>
			`;
  }
};
Drawer.tag = "plus-drawer";
Drawer.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 516
  })
], Drawer.prototype, "animation", 2);
__decorateClass([
  Property({
    type: 4
  })
], Drawer.prototype, "backdrop", 2);
__decorateClass([
  Property({
    type: 512
  })
], Drawer.prototype, "connector", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Drawer.prototype, "floating", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Drawer.prototype, "mini", 2);
__decorateClass([
  Property({
    type: 640
  })
], Drawer.prototype, "miniSize", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Drawer.prototype, "open", 2);
__decorateClass([
  Property({
    type: 4
  })
], Drawer.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 16
  })
], Drawer.prototype, "placement", 2);
__decorateClass([
  Property({
    type: 4
  })
], Drawer.prototype, "flexible", 2);
__decorateClass([
  Property({
    type: 640
  })
], Drawer.prototype, "size", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Drawer.prototype, "overrides", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Drawer.prototype, "plusClose", 2);
__decorateClass([
  Event()
], Drawer.prototype, "plusClosed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Drawer.prototype, "plusOpen", 2);
__decorateClass([
  Event()
], Drawer.prototype, "plusOpened", 2);
__decorateClass([
  Query("[part=root]")
], Drawer.prototype, "$root", 2);
__decorateClass([
  Provider("drawer.connector")
], Drawer.prototype, "state", 1);
__decorateClass([
  Method()
], Drawer.prototype, "hide", 1);
__decorateClass([
  Method()
], Drawer.prototype, "show", 1);
__decorateClass([
  Method()
], Drawer.prototype, "toggle", 1);
__decorateClass([
  Watch(["mini", "open"])
], Drawer.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Drawer.prototype, "onClickOutside", 1);
Drawer = __decorateClass([
  Element()
], Drawer);
export {
  Drawer
};
