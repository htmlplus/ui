import { _ as __decorate, P as PlusCore, i as isCSSColor, h as html, k as attributes, b as Property, j as Style, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host([type=double-bounce]) .root div{animation:bounce 2s ease-in-out infinite;background-color:currentColor;border-radius:50%;height:100%;left:0;opacity:.6;position:absolute;top:0;width:100%}:host([type=double-bounce]) .root div:nth-child(2){animation-delay:-1s}@keyframes bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}:host([type=default]) .root div{animation:spinner .8s linear infinite;height:100%;left:0;position:absolute;top:0;transform-origin:50% 50%;width:100%}:host([type=default]) .root div:after{background:currentColor;border-radius:20%;content:\" \";display:block;height:25%;left:46.25%;position:absolute;top:0;width:7.5%}:host([type=default]) .root div:first-child{animation-delay:-.7s;transform:rotate(0deg)}:host([type=default]) .root div:nth-child(2){animation-delay:-.6s;transform:rotate(45deg)}:host([type=default]) .root div:nth-child(3){animation-delay:-.5s;transform:rotate(90deg)}:host([type=default]) .root div:nth-child(4){animation-delay:-.4s;transform:rotate(135deg)}:host([type=default]) .root div:nth-child(5){animation-delay:-.3s;transform:rotate(180deg)}:host([type=default]) .root div:nth-child(6){animation-delay:-.2s;transform:rotate(225deg)}:host([type=default]) .root div:nth-child(7){animation-delay:-.1s;transform:rotate(270deg)}:host([type=default]) .root div:nth-child(8){animation-delay:0s;transform:rotate(315deg)}@keyframes spinner{0%{opacity:1}to{opacity:0}}:host([type=dual-ring]) .root:after{animation:dual-ring 1.2s linear infinite;border-color:currentcolor transparent;border-radius:50%;border-style:solid;border-width:.2em;content:\" \";display:block;height:100%;width:100%}@keyframes dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host([type=ring]) .root:after{animation:ring 1.2s linear infinite;border:.2em solid;border-left:.2em solid transparent;border-radius:50%;content:\" \";display:block;height:100%;width:100%}@keyframes ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host([type=ripple]) .root{animation:ripple 1s ease-in-out infinite;background-color:currentColor;border-radius:100%}@keyframes ripple{0%{transform:scale(0)}to{opacity:0;transform:scale(1)}}:host([type=square]) .root{animation:square 1.2s ease-in-out infinite;background-color:currentColor;height:85%;margin:7.5%;width:85%}@keyframes square{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}:host{color:currentColor;color:var(--plus-color,currentColor);display:inline-block;overflow:hidden;vertical-align:middle}:host([size=inherit]){height:1em;width:1em}:host([size=sm]){height:1rem;width:1rem}:host([size=md]){height:2rem;width:2rem}:host([size=lg]){height:3rem;width:3rem}.root{display:block;height:100%;position:relative;width:100%}";

/**
 * @stable
 */
let Spinner = class Spinner extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the size of the spinner.
         */
        this.size = 'inherit';
        /**
         * Specifies which variant of the spinner to use.
         */
        this.type = 'default';
    }
    get style() {
        return {
            color: isCSSColor(this.color) ? this.color : undefined
        };
    }
    get elements() {
        var _a;
        const map = {
            'default': 8,
            'double-bounce': 2
        };
        const number = (_a = map[this.type]) !== null && _a !== void 0 ? _a : 1;
        return Array.from(Array(number).keys());
    }
    render() {
        return html `${attributes(this, [{
                "role": "status"
            }])}
        <div class="root">
          ${this.elements.map(element => html `<div key=${element} />`)}
        </div>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Spinner.tag = "plus-spinner";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Spinner.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Spinner.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Spinner.prototype, "size", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Spinner.prototype, "type", void 0);
__decorate([
    Style()
], Spinner.prototype, "style", null);
Spinner = __decorate([
    Element()
], Spinner);

export { Spinner };
