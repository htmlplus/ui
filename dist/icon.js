import { P as PlusCore, g as getConfig, s as setConfig, i as isCSSColor, e as isSize, t as toUnit, u as query, h as html, j as attributes, a as Property, f as Style, W as Watch, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ':host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  height: 1em;\n  width: 1em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n\n:host([flip=both]) {\n  scale: -1 -1;\n}\n\n:host([flip=horizontal]) {\n  scale: -1 1;\n}\n\n:host([flip=vertical]) {\n  scale: 1 -1;\n}\n\n:host::part(svg) {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n:host([size=xs]) {\n  height: 0.7em;\n  width: 0.7em;\n}\n\n:host([size=sm]) {\n  height: 0.85em;\n  width: 0.85em;\n}\n\n:host([size=md]) {\n  height: 1em;\n  width: 1em;\n}\n\n:host([size=lg]) {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n:host([size=xl]) {\n  height: 1.75em;\n  width: 1.75em;\n}\n\n:host([size="1x"]) {\n  height: 1em;\n  width: 1em;\n}\n\n:host([size="2x"]) {\n  height: 2em;\n  width: 2em;\n}\n\n:host([size="3x"]) {\n  height: 3em;\n  width: 3em;\n}\n\n:host([size="4x"]) {\n  height: 4em;\n  width: 4em;\n}\n\n:host([size="5x"]) {\n  height: 5em;\n  width: 5em;\n}\n\n:host([size="6x"]) {\n  height: 6em;\n  width: 6em;\n}\n\n:host([size="7x"]) {\n  height: 7em;\n  width: 7em;\n}\n\n:host([size="8x"]) {\n  height: 8em;\n  width: 8em;\n}\n\n:host([size="9x"]) {\n  height: 9em;\n  width: 9em;\n}';
const ICON_DEFAULT_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
  </svg>
`;
const ICON_FALLBACK_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
  </svg>
`;
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
let parser;
const parse = (input) => {
  var _a;
  if (input instanceof SVGElement) return input;
  const div = document.createElement("div");
  div.innerHTML = input;
  const element = div.firstElementChild;
  if (((_a = element == null ? void 0 : element.tagName) == null ? void 0 : _a.toLowerCase()) != "svg") throw new Error();
  parser || (parser = new DOMParser());
  const parsed = parser.parseFromString(element.outerHTML, "text/html").body.querySelector("svg");
  if (!parsed) throw new Error();
  const svg = document.adoptNode(parsed);
  svg.part.add("svg");
  svg.setAttribute("xmlns", svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
  return svg;
};
let Icon = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.resolver = async (name) => {
      return fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/${name}.svg`, {
        mode: "cors"
      }).then((response) => response.text());
    };
  }
  get cache() {
    return getConfig("asset", "icon", this.name);
  }
  set cache(cache) {
    setConfig({
      asset: {
        icon: {
          [this.name]: cache
        }
      }
    });
  }
  get style() {
    return {
      color: isCSSColor(this.color) ? this.color : void 0,
      height: !isSize(this.size) ? toUnit(this.size) : void 0,
      width: !isSize(this.size) ? toUnit(this.size) : void 0,
      rotate: this.rotate ? this.rotate + "deg" : void 0
    };
  }
  watcher() {
    requestAnimationFrame(() => this.update());
  }
  sync(input, cacheable) {
    var _a;
    const element = parse(input);
    if (cacheable) {
      this.cache = element;
    }
    (_a = query(this, "svg")) == null ? void 0 : _a.remove();
    const cloned = element.cloneNode(true);
    this.$host.shadowRoot.appendChild(cloned);
    return cloned;
  }
  update() {
    if (this.cache instanceof Promise) {
      this.cache.then((input) => {
        this.sync(input, true);
      }).catch(() => {
        this.sync(ICON_FALLBACK_SVG, false);
      });
      return;
    }
    try {
      if (this.sync(this.cache, true)) return;
    } catch {
    }
    if (typeof this.resolver != "function") {
      console.warn([`The icon element is not able to find an SVG file with the name of \`${this.name}\`. `, "This element uses an asynchronous function called `resolver` to load SVG files. ", "The function is defined as built-in by default. ", "It is possible that it has not been reconfigured correctly. ", "To solve the problem, ", "read the documentation to check the correct configuration of the `resolver` property."].join(""), this.$host);
      return;
    }
    this.cache = this.resolver(this.name, parse).then((input) => {
      return this.sync(input, true);
    }).catch(() => {
      this.sync(ICON_FALLBACK_SVG, false);
      console.warn([`The icon element is not able to resolve an SVG file with the name of \`${this.name}\`. `, `There is a problem with the \`resolver\` property, and its output cannot be used. `, "Make sure that the output of the property is an SVG."].join(""), this.$host);
    });
  }
  loadedCallback() {
    !this.name && this.sync(ICON_DEFAULT_SVG, false);
  }
  render() {
    return html`${attributes(this, [{
      "aria-hidden": this.label ? null : `${!this.label}`
    }, {
      "aria-label": this.label ?? null
    }, {
      "role": this.label ? "img" : null
    }])}`;
  }
};
Icon.tag = "plus-icon";
Icon.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 256
  })
], Icon.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Icon.prototype, "flip", 2);
__decorateClass([
  Property({
    type: 256
  })
], Icon.prototype, "label", 2);
__decorateClass([
  Property({
    type: 256
  })
], Icon.prototype, "name", 2);
__decorateClass([
  Property({
    type: 0
  })
], Icon.prototype, "resolver", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 64
  })
], Icon.prototype, "rotate", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 328
  })
], Icon.prototype, "size", 2);
__decorateClass([
  Style()
], Icon.prototype, "style", 1);
__decorateClass([
  Watch("name", true)
], Icon.prototype, "watcher", 1);
Icon = __decorateClass([
  Element()
], Icon);
export {
  Icon
};
