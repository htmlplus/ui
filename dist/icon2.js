import { _ as __decorate, t as toUnit, c as styles, h as host, g as getConfig, P as Property, d as Attributes, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;vertical-align:middle;width:1em}:host([flip]:not([flip=false])),:host([rotate]:not([rotate=false])){filter:none}:host([flip=both]){transform:scale(-1)}:host([flip=horizontal]){transform:scaleX(-1)}:host([flip=vertical]){transform:scaleY(-1)}:host([rotate=\"90\"]){transform:rotate(90deg)}:host([rotate=\"180\"]){transform:rotate(180deg)}:host([rotate=\"270\"]){transform:rotate(270deg)}:host([size=xs]){height:.7em;width:.7em}:host([size=sm]){height:.85em;width:.85em}:host([size=md]){height:1em;width:1em}:host([size=lg]){height:1.5em;width:1.5em}:host([size=xl]){height:1.75em;width:1.75em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}:host([size=\"10x\"]){height:10em;width:10em}svg{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}";

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
    '9x',
    '10x'
];

/**
 * @part svg - The svg element.
 */
let Icon2 = class Icon2 {
    get attributes() {
        const size = ICON_SIZES.includes(this.size) ? null : toUnit(this.size);
        return {
            style: styles({
                color: this.color ? `color: ${this.color}` : null,
                height: size,
                width: size
            })
        };
    }
    updatedCallback() {
        var _a;
        (_a = host(this).shadowRoot.querySelector('svg')) === null || _a === void 0 ? void 0 : _a.remove();
        const div = document.createElement('div');
        div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        part="svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        ${getConfig('asset', 'icon', this.name).map(([tag, attributes]) => `<${tag} ${Object.keys(attributes).map(key => `${key}="${attributes[key]}"`).join(' ')}/>`).join('')}
      </svg>
    `;
        host(this).shadowRoot.appendChild(div.firstElementChild);
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon2.TAG = "plus-icon2";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon2.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon2.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 0
    })
], Icon2.prototype, "flip", void 0);
__decorate([
    Property({
        type: 0
    })
], Icon2.prototype, "name", void 0);
__decorate([
    Property({
        reflect: true,
        type: 0
    })
], Icon2.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 0
    })
], Icon2.prototype, "size", void 0);
__decorate([
    Attributes()
], Icon2.prototype, "attributes", null);
Icon2 = __decorate([
    Element()
], Icon2);

export { Icon2 };
