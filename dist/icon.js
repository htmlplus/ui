import { _ as __decorate, P as PlusCore, a as __awaiter, g as getConfig, s as setConfig, i as isCSSColor, f as isSize, t as toUnit, v as query, h as html, k as attributes, b as Property, j as Style, W as Watch, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([flip=both]){scale:-1 -1}:host([flip=horizontal]){scale:-1 1}:host([flip=vertical]){scale:1 -1}:host::part(svg){display:block;height:100%;width:100%}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}";

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

let parser;
const parse = (input) => {
    var _a;
    if (input instanceof SVGElement)
        return input;
    const div = document.createElement('div');
    div.innerHTML = input;
    const element = div.firstElementChild;
    if (((_a = element === null || element === void 0 ? void 0 : element.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) != 'svg')
        throw new Error();
    parser || (parser = new DOMParser());
    const parsed = parser.parseFromString(element.outerHTML, 'text/html').body.querySelector('svg');
    if (!parsed)
        throw new Error();
    const svg = document.adoptNode(parsed);
    svg.part.add('svg');
    svg.setAttribute('xmlns', svg.getAttribute('xmlns') || 'http://www.w3.org/2000/svg');
    return svg;
};
/**
 * @stable
 *
 * @part svg - The svg element.
 */
let Icon = class Icon extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * An asynchronous function to load SVG files.
         */
        this.resolver = (name) => __awaiter(this, void 0, void 0, function* () {
            return fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/${name}.svg`, {
                mode: 'cors'
            }).then(response => response.text());
        });
    }
    get cache() {
        return getConfig('asset', 'icon', this.name);
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
            color: isCSSColor(this.color) ? this.color : undefined,
            height: !isSize(this.size) ? toUnit(this.size) : undefined,
            width: !isSize(this.size) ? toUnit(this.size) : undefined,
            rotate: this.rotate ? this.rotate + 'deg' : undefined
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
        (_a = query(this, 'svg')) === null || _a === void 0 ? void 0 : _a.remove();
        const cloned = element.cloneNode(true);
        this.$host.shadowRoot.appendChild(cloned);
        return cloned;
    }
    update() {
        if (this.cache instanceof Promise) {
            this.cache.then(input => {
                this.sync(input, true);
            }).catch(() => {
                this.sync(ICON_FALLBACK_SVG, false);
            });
            return;
        }
        try {
            if (this.sync(this.cache, true))
                return;
        }
        catch (_a) { }
        if (typeof this.resolver != 'function') {
            console.warn([`The icon element is not able to find an SVG file with the name of \`${this.name}\`. `, 'This element uses an asynchronous function called `resolver` to load SVG files. ', 'The function is defined as built-in by default. ', 'It is possible that it has not been reconfigured correctly. ', 'To solve the problem, ', 'read the documentation to check the correct configuration of the `resolver` property.'].join(''), this.$host);
            return;
        }
        this.cache = this.resolver(this.name, parse).then(input => {
            return this.sync(input, true);
        }).catch(() => {
            this.sync(ICON_FALLBACK_SVG, false);
            console.warn([`The icon element is not able to resolve an SVG file with the name of \`${this.name}\`. `, `There is a problem with the \`resolver\` property, and its output cannot be used. `, 'Make sure that the output of the property is an SVG.'].join(''), this.$host);
        });
    }
    loadedCallback() {
        !this.name && this.sync(ICON_DEFAULT_SVG, false);
    }
    render() {
        var _a;
        return html `${attributes(this, [{
                "aria-hidden": this.label ? null : `${!this.label}`
            }, {
                "aria-label": (_a = this.label) !== null && _a !== void 0 ? _a : null
            }, {
                "role": this.label ? 'img' : null
            }])}`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.tag = "plus-icon";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Icon.prototype, "flip", void 0);
__decorate([
    Property({
        type: 256
    })
], Icon.prototype, "label", void 0);
__decorate([
    Property({
        type: 256
    })
], Icon.prototype, "name", void 0);
__decorate([
    Property({
        type: 0
    })
], Icon.prototype, "resolver", void 0);
__decorate([
    Property({
        reflect: true,
        type: 64
    })
], Icon.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 328
    })
], Icon.prototype, "size", void 0);
__decorate([
    Style()
], Icon.prototype, "style", null);
__decorate([
    Watch('name', true)
], Icon.prototype, "watcher", null);
Icon = __decorate([
    Element()
], Icon);

export { Icon };
