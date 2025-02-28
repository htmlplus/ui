import { P as PlusCore, A as AsyncCache, f as ExternalDependencyError, h as html, d as attributes, N as NotEmptyPropertyError, a as Property, e as State, S as Style, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ':host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;direction:ltr}pre{margin:0 !important;display:flex;align-items:start}code{display:block;flex-grow:1}.copy{width:0;direction:rtl}.copy slot{direction:ltr}:host([theme=default]) code[class*=language-],:host([theme=default]) pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}:host([theme=default]) pre[class*=language-]::-moz-selection,:host([theme=default]) pre[class*=language-] ::-moz-selection,:host([theme=default]) code[class*=language-]::-moz-selection,:host([theme=default]) code[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}:host([theme=default]) pre[class*=language-]::selection,:host([theme=default]) pre[class*=language-] ::selection,:host([theme=default]) code[class*=language-]::selection,:host([theme=default]) code[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{:host([theme=default]) code[class*=language-],:host([theme=default]) pre[class*=language-]{text-shadow:none}}:host([theme=default]) pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:host([theme=default]) :not(pre)>code[class*=language-],:host([theme=default]) pre[class*=language-]{background:#f5f2f0}:host([theme=default]) :not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}:host([theme=default]) .token.comment,:host([theme=default]) .token.prolog,:host([theme=default]) .token.doctype,:host([theme=default]) .token.cdata{color:#708090}:host([theme=default]) .token.punctuation{color:#999}:host([theme=default]) .token.namespace{opacity:.7}:host([theme=default]) .token.property,:host([theme=default]) .token.tag,:host([theme=default]) .token.boolean,:host([theme=default]) .token.number,:host([theme=default]) .token.constant,:host([theme=default]) .token.symbol,:host([theme=default]) .token.deleted{color:#905}:host([theme=default]) .token.selector,:host([theme=default]) .token.attr-name,:host([theme=default]) .token.string,:host([theme=default]) .token.char,:host([theme=default]) .token.builtin,:host([theme=default]) .token.inserted{color:#690}:host([theme=default]) .token.operator,:host([theme=default]) .token.entity,:host([theme=default]) .token.url,:host([theme=default]) .language-css .token.string,:host([theme=default]) .style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5)}:host([theme=default]) .token.atrule,:host([theme=default]) .token.attr-value,:host([theme=default]) .token.keyword{color:#07a}:host([theme=default]) .token.function,:host([theme=default]) .token.class-name{color:#dd4a68}:host([theme=default]) .token.regex,:host([theme=default]) .token.important,:host([theme=default]) .token.variable{color:#e90}:host([theme=default]) .token.important,:host([theme=default]) .token.bold{font-weight:bold}:host([theme=default]) .token.italic{font-style:italic}:host([theme=default]) .token.entity{cursor:help}';
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
let PrismCore;
let Prism = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.language = "javascript";
    this.theme = "default";
    this.observer = new MutationObserver(this.onChange);
    this.cache = new AsyncCache({
      type: "global",
      namespace: "prism",
      resolver: async (params) => {
        if (typeof this.resolver !== "function") {
          console.warn([`The 'prism' element can't find the '${params.key}' file for '${params.value}'. `, `It uses an async 'resolver' function to load files, which isn't set up by default. `, `You may need to configure it properly. `, `Check the documentation for the correct resolver setup to fix the issue.`].join(""), this.$host);
          return;
        }
        try {
          return await this.resolver(params);
        } catch (error) {
          console.warn([`The 'prism' element is not able to resolve the '${params.key}' file for '${params.value}'. `, `There is a problem with the 'resolver' property, and its output cannot be used. `, "Make sure that the output of the property is correct."].join(""), this.$host);
          throw error;
        }
      }
    });
  }
  get attributes() {
    const attributes2 = {};
    for (const pluginKey of this.pluginKeys) {
      const plugin = this.plugins[pluginKey];
      if (typeof plugin !== "object") continue;
      for (const key in plugin) {
        if (Object.hasOwn(plugin, key)) {
          attributes2[`data-${key}`] = `${plugin[key]}`;
        }
      }
    }
    return attributes2;
  }
  get assets() {
    const assets = [];
    if (!PrismCore.languages[this.language]) {
      assets.push({
        key: "language",
        value: this.language
      });
    }
    if (this.theme && this.theme != "default") {
      assets.push({
        key: "theme",
        value: this.theme
      });
    }
    for (const pluginKey of this.pluginKeys) {
      assets.push({
        key: "plugin",
        value: pluginKey
      });
    }
    return assets;
  }
  get codeClass() {
    return [`language-${this.language}`].join(" ");
  }
  get html() {
    const cloned = this.$host.cloneNode(true);
    cloned.querySelectorAll("[slot]").forEach((slot) => slot.remove());
    return cloned.innerHTML;
  }
  get preClass() {
    return [`language-${this.language}`, ...this.pluginKeys].join(" ");
  }
  get pluginKeys() {
    return Object.keys(this.plugins || {}).filter((key) => !!this.plugins[key]);
  }
  async update() {
    if (!PrismCore) return;
    if (!this.language) {
      throw new NotEmptyPropertyError(this.$host, "language");
    }
    let style = "";
    for (const asset of this.assets) {
      if (!asset.value) continue;
      const result = await this.cache.resolve(asset);
      const content = (result == null ? void 0 : result.default) || result || "";
      if (typeof content != "string") continue;
      style += content;
    }
    PrismCore.highlightAllUnder(this.$host.shadowRoot, false);
    if (!style) return;
    return `:host([theme="${this.theme}"]){${style}}`;
  }
  onChange() {
    this.tick++;
  }
  connectedCallback() {
    return import("prismjs").then((module) => {
      PrismCore = module.default || module;
    }).catch((error) => {
      throw new ExternalDependencyError(this.$host, "prismjs", {
        cause: error
      });
    });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  updatedCallback() {
    this.observer.disconnect();
    if (!this.sync) return;
    this.observer.observe(this.$host, {
      childList: true
    });
  }
  render() {
    return html`<div>
        
        <pre ref=${($element) => attributes($element, [{
      "class": this.preClass
    }, {
      "part": "pre"
    }, this.attributes])}><code class=${this.codeClass} part="code" .innerHTML=${this.html}></code><span class="copy" part="copy"><slot name="copy" /></span></pre>
      </div>`;
  }
};
Prism.tag = "plus-prism";
Prism.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], Prism.prototype, "language", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], Prism.prototype, "theme", 2);
__decorateClass([
  Property({
    type: 256
  })
], Prism.prototype, "plugins", 2);
__decorateClass([
  Property({
    type: 4
  })
], Prism.prototype, "sync", 2);
__decorateClass([
  Property({
    type: 0
  })
], Prism.prototype, "resolver", 2);
__decorateClass([
  State()
], Prism.prototype, "tick", 2);
__decorateClass([
  Style()
], Prism.prototype, "update", 1);
__decorateClass([
  Bind()
], Prism.prototype, "onChange", 1);
Prism = __decorateClass([
  Element()
], Prism);
export {
  Prism
};
