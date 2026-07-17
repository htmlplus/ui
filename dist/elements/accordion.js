import { Q as Query, P as PlusCore, A as Animation, j as jsxs, a as jsx, F as Fragment, b as Property, O as Overrides, V as Variant, E as Event, S as State, C as Consumer, M as Method, W as Watch, B as Bind, c as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{border:solid 1px #d3d3d3;border-radius:.25rem;display:block;overflow-anchor:none}:host(:not(:first-of-type)){border-top:0}:host(:not(:first-of-type):not(:last-of-type)){border-radius:0}:host(:first-of-type:not(:last-of-type)){border-bottom-right-radius:0;border-bottom-left-radius:0}:host(:last-of-type:not(:first-of-type)){border-top-right-radius:0;border-top-left-radius:0}:host([disabled]){opacity:.5}:host([disabled])::part(header){cursor:initial}:host::part(header){padding:1rem;position:relative;display:flex;align-items:center;border-radius:inherit;user-select:none;cursor:pointer;overflow-anchor:none}:host::part(summary){flex:1 1 auto;display:flex;align-items:center}:host::part(icon){flex:0 0 auto;display:flex;align-items:center}:host::part(body){transition:all .2s ease-in-out;overflow:hidden}:host::part(content){padding:1rem;display:block}:host([state=collapsed])::part(body){display:none}:host(:not([state=collapsed]))::part(header){border-bottom-right-radius:0;border-bottom-left-radius:0}:host::part(svg){transition:all .2s ease-in-out}:host([state^=collap])::part(svg){rotate:90deg}:host([state^=expand])::part(svg){rotate:-90deg}";
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
let PlusAccordion = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.open = false;
    this.summary = "";
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
        this.$body.style.height = `${this.$body.scrollHeight}px`;
      },
      onEntered: (silent) => {
        this.$body.style.height = "";
        if (silent) return;
        this.plusExpanded();
      },
      onLeave: () => {
        this.$body.style.height = `${this.$body.scrollHeight}px`;
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
        if (!next === !prev) break;
        this.try(this.open, true);
        break;
    }
  }
  getId(key) {
    if (this.$host.id) {
      return `${this.$host.id}-${key}`;
    }
  }
  initialize() {
    this.opened = this.open;
    const state = this.opened ? "entered" : "leaved";
    this.animate.initialize(state);
  }
  terminate() {
    this.animate?.dispose();
  }
  async try(open, silent) {
    if (this.disabled) return true;
    if (this.opened === open) return !!await this.promise;
    if (!silent) {
      const event = open ? this.plusExpand : this.plusCollapse;
      const prevented = event.call(this).defaultPrevented;
      if (prevented) return true;
    }
    this.opened = this.open = open;
    if (this.open) {
      this.accordions?.open(this.$host);
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
  readyCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("slot", { name: "top" }),
      /* @__PURE__ */ jsxs("div", { "aria-controls": this.getId("body"), "aria-disabled": this.disabled, "aria-expanded": this.open, id: this.getId("header"), part: "header", role: "button", tabIndex: this.disabled ? -1 : 0, onClick: this.onClick, onKeyDown: this.onKeyDown, children: [
        /* @__PURE__ */ jsx("slot", { name: "summary", part: "summary", children: this.summary }),
        /* @__PURE__ */ jsx("slot", { name: "icon", children: /* @__PURE__ */ jsx("slot", { name: `icon-${this.open ? "collapse" : "expand"}`, children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", part: "svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" }) }) }) })
      ] }),
      /* @__PURE__ */ jsx("slot", { name: "middle" }),
      /* @__PURE__ */ jsx("div", { part: "body", role: "region", "aria-labelledby": this.getId("header"), id: this.getId("body"), children: /* @__PURE__ */ jsx("slot", { part: "content" }) }),
      /* @__PURE__ */ jsx("slot", { name: "bottom" })
    ] });
  }
};
PlusAccordion.tag = "plus-accordion";
PlusAccordion.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusAccordion.prototype, "disabled", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusAccordion.prototype, "open", 2);
__decorateClass([
  Property({
    type: 1024
  })
], PlusAccordion.prototype, "summary", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusAccordion.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusAccordion.prototype, "variant", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusAccordion.prototype, "plusCollapse", 2);
__decorateClass([
  Event()
], PlusAccordion.prototype, "plusCollapsed", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusAccordion.prototype, "plusExpand", 2);
__decorateClass([
  Event()
], PlusAccordion.prototype, "plusExpanded", 2);
__decorateClass([
  State(),
  Consumer("accordions")
], PlusAccordion.prototype, "accordions", 2);
__decorateClass([
  Query("[part=body]")
], PlusAccordion.prototype, "$body", 2);
__decorateClass([
  Query("[part=header]")
], PlusAccordion.prototype, "$header", 2);
__decorateClass([
  Method()
], PlusAccordion.prototype, "collapse", 1);
__decorateClass([
  Method()
], PlusAccordion.prototype, "expand", 1);
__decorateClass([
  Method()
], PlusAccordion.prototype, "toggle", 1);
__decorateClass([
  Watch(["open"])
], PlusAccordion.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusAccordion.prototype, "onClick", 1);
__decorateClass([
  Bind()
], PlusAccordion.prototype, "onKeyDown", 1);
PlusAccordion = __decorateClass([
  Element()
], PlusAccordion);
export {
  PlusAccordion
};
