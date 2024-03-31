import { _ as __decorate, P as PlusCore, a as __awaiter, g as getConfig, s as setConfig, i as isSize, t as toUnit, u as isCSSColor, h as html, f as attributes, e as styles, b as Property, S as State, W as Watch, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;color:var(--plus-color,currentColor);display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}svg{display:block;height:100%;width:100%}";

const ICON_FALLBACK_SVG = `
  <svg width="16" height="16" fill="red" viewBox="0 0 16 16">
    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
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
        let size, transform;
        if (!isSize(this.size)) {
            size = toUnit(this.size);
        }
        if (this.rotate) {
            transform = `${transform || ''}rotate(${this.rotate}deg) `;
        }
        if (this.flip) {
            switch (this.flip) {
                case 'both':
                    transform = `${transform || ''}scale(-1)`;
                    break;
                case 'horizontal':
                    transform = `${transform || ''}scaleX(-1)`;
                    break;
                case 'vertical':
                    transform = `${transform || ''}scaleY(-1)`;
                    break;
            }
        }
        return {
            color: isCSSColor(this.color) ? this.color : null,
            height: size,
            width: size,
            transform
        };
    }
    watcher() {
        requestAnimationFrame(() => {
            this.update();
        });
    }
    sync(input) {
        if (input) {
            this.cache = parse(input);
        }
        if (!this.cache)
            return;
        this.svg = this.cache.cloneNode(true);
        return true;
    }
    update() {
        if (this.cache instanceof Promise) {
            this.cache.then(() => {
                this.sync();
            }).catch(() => {
                // TODO
                this.svg = parse(ICON_FALLBACK_SVG).cloneNode(true);
            });
            return;
        }
        try {
            if (this.sync(this.cache))
                return;
        }
        catch (_a) { }
        if (typeof this.resolver != 'function') {
            console.warn([`The icon element is not able to find an SVG file with the name of \`${this.name}\`. `, 'This element uses an asynchronous function called `resolver` to load SVG files. ', 'The function is defined as built-in by default. ', 'It is possible that it has not been reconfigured correctly. ', 'To solve the problem, ', 'read the documentation to check the correct configuration of the `resolver` property.'].join(''), this.$host);
            return;
        }
        this.cache = this.resolver(this.name, parse).then(input => {
            this.sync(input);
        }).catch(() => {
            // TODO
            this.svg = parse(ICON_FALLBACK_SVG).cloneNode(true);
            console.warn([`The icon element is not able to resolve an SVG file with the name of \`${this.name}\`. `, `There is a problem with the \`resolver\` property, and its output cannot be used. `, 'Make sure that the output of the property is an SVG.'].join(''), this.$host);
        });
    }
    render() {
        var _a;
        return html `${attributes(this, [{
                "aria-hidden": this.label ? null : `${!this.label}`
            }, {
                "aria-label": (_a = this.label) !== null && _a !== void 0 ? _a : null
            }, {
                "role": this.label ? 'img' : null
            }, {
                "style": styles(this.style)
            }])}
        ${this.svg || null}
      `;
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
    State()
], Icon.prototype, "svg", void 0);
__decorate([
    Watch('name', true)
], Icon.prototype, "watcher", null);
Icon = __decorate([
    Element()
], Icon);

export { Icon };
