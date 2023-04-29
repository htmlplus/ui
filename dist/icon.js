import { _ as __decorate, h as host, t as toUnit, c as styles, P as Property, S as State, d as Attributes, W as Watch, b as Element } from './core/index.js';
import { getConfig, setConfig } from './config.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}svg{display:block;height:100%;width:100%}";

const ICON_SIZES = [
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
    '9x'
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
let Icon = class Icon {
    constructor() {
        /**
         * An asynchronous function to load SVG files.
         */
        this.resolver = name => {
            return import(`./icon/names/${name}.js`).then(module => (module === null || module === void 0 ? void 0 : module['default']) || module);
        };
    }
    get attributes() {
        var _a;
        return {
            'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : null,
            'aria-hidden': this.label ? null : `${!this.label}`,
            'role': this.label ? 'img' : null,
            'style': this.style
        };
    }
    get $host() {
        return host(this);
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
        if (!ICON_SIZES.includes(this.size)) {
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
        return styles({
            color: this.color,
            height: size,
            width: size,
            transform
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
            }).catch(() => undefined);
            return;
        }
        try {
            if (this.sync(this.cache))
                return;
        }
        catch (_a) { }
        if (typeof this.resolver != 'function') {
            console.warn([`The icon component is not able to find an SVG file with the name of \`${this.name}\`. `, 'This component uses an asynchronous function called `resolver` to load SVG files. ', 'The function is defined as built-in by default. ', 'It is possible that it has not been reconfigured correctly. ', 'To solve the problem, ', 'read the documentation to check the correct configuration of the `resolver` property.'].join(''), this.$host);
            return;
        }
        this.cache = this.resolver(this.name, parse).then(input => {
            this.sync(input);
        }).catch(() => {
            console.warn([`The icon component is not able to resolve an SVG file with the name of \`${this.name}\`. `, `There is a problem with the \`resolver\` property, and its output cannot be used. `, 'Make sure that the output of the property is an SVG.'].join(''), this.$host);
        });
    }
    watcher() {
        requestAnimationFrame(() => {
            this.update();
        });
    }
    render() {
        return this.svg || null;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.TAG = "plus-icon";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.STYLES = css_248z;
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
        type: 256
    })
], Icon.prototype, "size", void 0);
__decorate([
    State()
], Icon.prototype, "svg", void 0);
__decorate([
    Attributes()
], Icon.prototype, "attributes", null);
__decorate([
    Watch('name', true)
], Icon.prototype, "watcher", null);
Icon = __decorate([
    Element()
], Icon);

export { Icon };
