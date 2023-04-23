import { _ as __decorate, t as toUnit, c as styles, h as host, a as __awaiter, P as Property, S as State, d as Attributes, b as Element } from './core/index.js';
import { getConfig, setConfig } from './config.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([flip]:not([flip=false])),:host([rotate]:not([rotate=false])){filter:none}:host([flip=both]){transform:scale(-1)}:host([flip=horizontal]){transform:scaleX(-1)}:host([flip=vertical]){transform:scaleY(-1)}:host([rotate=\"90\"]){transform:rotate(90deg)}:host([rotate=\"180\"]){transform:rotate(180deg)}:host([rotate=\"270\"]){transform:rotate(270deg)}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}:host([size=\"10x\"]){height:10em;width:10em}svg{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2;display:block;height:100%;width:100%}";

const SYMBOL_SIZES = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
];

let domParser;
const parse = (input) => {
    var _a;
    if (input instanceof SVGElement)
        return input;
    const div = document.createElement('div');
    div.innerHTML = input;
    const element = div.firstElementChild;
    if (((_a = element === null || element === void 0 ? void 0 : element.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) != 'svg')
        throw new Error();
    domParser || (domParser = new DOMParser());
    const parsed = domParser.parseFromString(element.outerHTML, 'text/html').body.querySelector('svg');
    if (!parsed)
        throw new Error();
    const svg = document.adoptNode(parsed);
    svg.part.add('svg');
    svg.setAttribute('xmlns', svg.getAttribute('xmlns') || 'http://www.w3.org/2000/svg');
    return svg;
};
/**
 * @part svg - The svg element.
 */
let Symbol = class Symbol {
    constructor() {
        /**
         * TODO
         */
        this.defaults = true;
    }
    get attributes() {
        var _a, _b;
        const size = SYMBOL_SIZES.includes(this.size) ? null : toUnit(this.size);
        return {
            'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : null,
            'aria-hidden': `${!this.label}`,
            'role': this.label ? 'img' : null,
            'style': styles({
                color: (_b = this.color) !== null && _b !== void 0 ? _b : null,
                height: size,
                width: size
            })
        };
    }
    get $host() {
        return host(this);
    }
    get cache() {
        return getConfig('asset', 'symbol', this.name);
    }
    set cache(cache) {
        setConfig({
            asset: {
                symbol: {
                    [this.name]: cache
                }
            }
        });
    }
    connectCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.defaults)
                return;
            yield import('./index2.js');
        });
    }
    update(input) {
        var _a;
        this.svg = (_a = (this.cache = parse(input))) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
    }
    updateCallback() {
        if (this.svg)
            return;
        if (this.cache instanceof Promise) {
            this.cache.then(() => {
                this.update(this.cache);
            }).catch(error => {
                console.warn('TODO3', this.$host);
            });
            return;
        }
        try {
            this.update(this.cache);
        }
        catch (_a) { }
        if (this.svg)
            return;
        if (!this.resolver)
            return console.warn('TODO1', this.$host);
        this.cache = this.resolver(this.name, parse).then(input => {
            this.update(input);
        }).catch(error => {
            console.warn('TODO2', this.$host);
        });
    }
    render() {
        return this.svg || null;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Symbol.TAG = "plus-symbol";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Symbol.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Symbol.prototype, "color", void 0);
__decorate([
    Property({
        type: 2
    })
], Symbol.prototype, "defaults", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Symbol.prototype, "flip", void 0);
__decorate([
    Property({
        type: 256
    })
], Symbol.prototype, "label", void 0);
__decorate([
    Property({
        type: 256
    })
], Symbol.prototype, "name", void 0);
__decorate([
    Property({
        type: 0
    })
], Symbol.prototype, "resolver", void 0);
__decorate([
    Property({
        reflect: true,
        type: 64
    })
], Symbol.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Symbol.prototype, "size", void 0);
__decorate([
    State()
], Symbol.prototype, "svg", void 0);
__decorate([
    Attributes()
], Symbol.prototype, "attributes", null);
Symbol = __decorate([
    Element()
], Symbol);

export { Symbol };
