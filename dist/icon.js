import { s as setConfig, _ as __decorate, h as host, t as toUnit, g as getConfig, P as Property, d as Attributes, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;display:inline-flex;height:1em;justify-content:center;width:1em}:host([flip]:not([flip=false])),:host([rotate]:not([rotate=false])){filter:none}:host([flip=both]){transform:scale(-1)}:host([flip=horizontal]){transform:scaleX(-1)}:host([flip=vertical]){transform:scaleY(-1)}:host([rotate=\"90\"]){transform:rotate(90deg)}:host([rotate=\"180\"]){transform:rotate(180deg)}:host([rotate=\"270\"]){transform:rotate(270deg)}:host([size=xs]){height:.75em;width:.75em}:host([size=sm]){height:.875em;width:.875em}:host([size=lg]){height:1.33333em;width:1.33333em}:host([size=\"1x\"]){height:1em;width:1em}:host([size=\"2x\"]){height:2em;width:2em}:host([size=\"3x\"]){height:3em;width:3em}:host([size=\"4x\"]){height:4em;width:4em}:host([size=\"5x\"]){height:5em;width:5em}:host([size=\"6x\"]){height:6em;width:6em}:host([size=\"7x\"]){height:7em;width:7em}:host([size=\"8x\"]){height:8em;width:8em}:host([size=\"9x\"]){height:9em;width:9em}:host([size=\"10x\"]){height:10em;width:10em}";

const register = (name, nodes) => {
  setConfig({
    asset: {
      icon: {
        [name]: nodes
      }
    }
  });
};

register('3d-cube-sphere', [["path",{"d":"M6 17.6l-2 -1.1v-2.5"}],["path",{"d":"M4 10v-2.5l2 -1.1"}],["path",{"d":"M10 4.1l2 -1.1l2 1.1"}],["path",{"d":"M18 6.4l2 1.1v2.5"}],["path",{"d":"M20 14v2.5l-2 1.12"}],["path",{"d":"M14 19.9l-2 1.1l-2 -1.1"}],["path",{"d":"M12 12l2 -1.1"}],["path",{"d":"M18 8.6l2 -1.1"}],["path",{"d":"M12 12l0 2.5"}],["path",{"d":"M12 18.5l0 2.5"}],["path",{"d":"M12 12l-2 -1.12"}],["path",{"d":"M6 8.6l-2 -1.1"}]]);

register('plus', [["path",{"d":"M12 5l0 14"}],["path",{"d":"M5 12l14 0"}]]);

const ICON_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

let Icon2 = class Icon2 {
    get attributes() {
        if (!this.color)
            return;
        return {
            style: `color: ${this.color}`
        };
    }
    updatedCallback() {
        var _a;
        const shadowRoot = host(this).shadowRoot;
        const size = ICON_SIZES.includes(this.size) ? 'inherit' : toUnit(this.size);
        (_a = shadowRoot.querySelector('svg')) === null || _a === void 0 ? void 0 : _a.remove();
        const div = document.createElement('div');
        div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${size}"
        height="${size}"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        ${getConfig('asset', 'icon', this.name).map(([tag, attributes]) => `<${tag} ${Object.keys(attributes).map(key => `${key}="${attributes[key]}"`).join(' ')}/>`).join('')}
      </svg>
    `;
        shadowRoot.appendChild(div.firstElementChild);
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
