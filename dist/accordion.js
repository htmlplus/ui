import { P as PlusCore, A as Animation, h as html, a as Property, E as Event, S as State, C as Consumer, Q as Query, M as Method, W as Watch, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  border: solid 1px lightgray;\n  border-radius: 0.25rem;\n  display: block;\n  overflow-anchor: none;\n}\n\n:host(:not(:first-of-type)) {\n  border-top: 0;\n}\n\n:host(:not(:first-of-type):not(:last-of-type)) {\n  border-radius: 0;\n}\n\n:host(:first-of-type:not(:last-of-type)) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n:host(:last-of-type:not(:first-of-type)) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n:host([disabled]) {\n  opacity: 0.5;\n}\n\n:host([disabled])::part(header) {\n  cursor: initial;\n}\n\n:host::part(header) {\n  padding: 1rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: inherit;\n  user-select: none;\n  cursor: pointer;\n  overflow-anchor: none;\n}\n\n:host::part(summary) {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n}\n\n:host::part(icon) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n:host::part(body) {\n  transition: all 0.2s ease-in-out;\n  overflow: hidden;\n}\n\n:host::part(content) {\n  padding: 1rem;\n  display: block;\n}\n\n:host([state=collapsed])::part(body) {\n  display: none;\n}\n\n:host(:not([state=collapsed]))::part(header) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n:host::part(svg) {\n  transition: all 0.2s ease-in-out;\n}\n\n:host([state^=collap])::part(svg) {\n  rotate: 90deg;\n}\n\n:host([state^=expand])::part(svg) {\n  rotate: -90deg;\n}";
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
let Accordion = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.animate = new Animation({
      key: "state",
      source: () => this.$body,
      target: () => this.$host,
      states: {
        enter: "expand",
        entering: "expanding",
        entered: "expanded",
        leave: "collapse",
        leaving: "collapsing",
        leaved: "collapsed"
      },
      onEnter: () => {
        this.$body.style.height = "0";
      },
      onEntering: () => {
        this.opened = this.open = true;
        this.$body.style.height = this.$body.scrollHeight + "px";
      },
      onEntered: (silent) => {
        this.$body.style.height = "";
        if (silent) return;
        this.plusExpanded();
      },
      onLeave: () => {
        this.$body.style.height = this.$body.scrollHeight + "px";
      },
      onLeaving: () => {
        this.opened = this.open = false;
        this.$body.style.height = "0";
      },
      onLeaved: (silent) => {
        this.$body.style.height = "";
        if (silent) return;
        this.plusCollapsed();
      }
    });
    this.opened = false;
  }
  collapse() {
    return this.try(false, true);
  }
  expand() {
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
  getId(key) {
    if (this.$host.id) {
      return this.$host.id + "-" + key;
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
    var _a;
    if (this.disabled) return true;
    if (this.opened == open) return await this.promise;
    if (!silent) {
      const event = open ? this.plusExpand : this.plusCollapse;
      const prevented = event.call(this).defaultPrevented;
      if (prevented) return true;
    }
    this.opened = this.open = open;
    if (this.open) {
      (_a = this.accordions) == null ? void 0 : _a.open(this.$host);
    }
    const fn = this.open ? this.animate.enter : this.animate.leave;
    this.promise = fn.bind(this.animate)(silent);
    return await this.promise;
  }
  onClick() {
    this.try(!this.open, false);
  }
  onKeyDown(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
        this.try(!this.open, false);
        break;
    }
  }
  loadedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`
        <slot name="top" />
        <div aria-controls=${this.getId("body")} aria-disabled=${!!this.disabled} aria-expanded=${!!this.open} id=${this.getId("header")} part="header" role="button" tabindex=${this.disabled ? -1 : 0} onClick=${this.onClick} onKeyDown=${this.onKeyDown}>
          <slot name="summary" part="summary">
            ${this.summary}
          </slot>
          <slot name="icon">
            <slot name=${`icon-${this.open ? "collapse" : "expand"}`}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" focusable="false" viewbox="0 0 16 16" part="svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </slot>
          </slot>
        </div>
        <slot name="middle" />
        <div part="body" role="region" aria-labelledby=${this.getId("header")} id=${this.getId("body")}>
          <slot part="content" />
        </div>
        <slot name="bottom" />
      `;
  }
};
Accordion.tag = "plus-accordion";
Accordion.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Accordion.prototype, "disabled", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Accordion.prototype, "open", 2);
__decorateClass([
  Property({
    type: 256
  })
], Accordion.prototype, "summary", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Accordion.prototype, "plusCollapse", 2);
__decorateClass([
  Event()
], Accordion.prototype, "plusCollapsed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Accordion.prototype, "plusExpand", 2);
__decorateClass([
  Event()
], Accordion.prototype, "plusExpanded", 2);
__decorateClass([
  State(),
  Consumer("accordions")
], Accordion.prototype, "accordions", 2);
__decorateClass([
  Query("[part=body]")
], Accordion.prototype, "$body", 2);
__decorateClass([
  Query("[part=header]")
], Accordion.prototype, "$header", 2);
__decorateClass([
  Method()
], Accordion.prototype, "collapse", 1);
__decorateClass([
  Method()
], Accordion.prototype, "expand", 1);
__decorateClass([
  Method()
], Accordion.prototype, "toggle", 1);
__decorateClass([
  Watch(["open"])
], Accordion.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Accordion.prototype, "onClick", 1);
__decorateClass([
  Bind()
], Accordion.prototype, "onKeyDown", 1);
Accordion = __decorateClass([
  Element()
], Accordion);
export {
  Accordion
};
