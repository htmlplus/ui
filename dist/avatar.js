import { _ as __decorate, P as PlusCore, i as isSize, t as toUnit, h as html, e as attributes, d as styles, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{--plus-avatar-border-radius:0.25rem;--plus-avatar-font-size-ratio:0.35;--plus-avatar-size:auto}:host{align-items:center;background-color:#d3d3d3;border-radius:var(--plus-avatar-border-radius);color:gray;display:inline-flex;font-size:calc(var(--plus-avatar-size)*var(--plus-avatar-font-size-ratio));height:var(--plus-avatar-size);justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle;width:var(--plus-avatar-size)}:host([shape=circle]){--plus-avatar-border-radius:50%}:host([shape=round]){--plus-avatar-border-radius:0.25rem}:host([shape=tile]){--plus-avatar-border-radius:0}:host([size=xxs]){--plus-avatar-size:1rem}:host([size=xs]){--plus-avatar-size:1.5rem}:host([size=sm]){--plus-avatar-size:2rem}:host([size=md]){--plus-avatar-size:3rem}:host([size=lg]){--plus-avatar-size:4rem}:host([size=xl]){--plus-avatar-size:6rem}:host([size=xxl]){--plus-avatar-size:8rem}::slotted(:not([slot])){border-radius:var(--plus-avatar-border-radius);height:100%;width:100%}::slotted(a){inset:0;position:absolute}div{position:absolute}";

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let Avatar = class Avatar extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the shape of the element.
         */
        this.shape = 'round';
        /**
         * Specifies the size of the element.
         */
        this.size = 'md';
    }
    get placements() {
        const offset = this.shape == 'circle' ? '14.64466%' : '0';
        return {
            'bottom': {
                bottom: 0,
                [this.isRTL ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, +50%)'
            },
            'center': {
                top: '50%',
                [this.isRTL ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, -50%)'
            },
            'end': {
                top: '50%',
                [this.isRTL ? 'left' : 'right']: 0,
                transform: 'translate(+50%, -50%)'
            },
            'end-bottom': {
                bottom: offset,
                [this.isRTL ? 'left' : 'right']: offset,
                transform: 'translate(+50%, +50%)'
            },
            'end-top': {
                top: offset,
                [this.isRTL ? 'left' : 'right']: offset,
                transform: 'translate(+50%, -50%)'
            },
            'left': {
                top: '50%',
                left: 0,
                transform: 'translate(-50%, -50%)'
            },
            'left-bottom': {
                bottom: offset,
                left: offset,
                transform: 'translate(-50%, +50%)'
            },
            'left-top': {
                top: offset,
                left: offset,
                transform: 'translate(-50%, -50%)'
            },
            'right': {
                top: '50%',
                right: 0,
                transform: 'translate(+50%, -50%)'
            },
            'right-bottom': {
                bottom: offset,
                right: offset,
                transform: 'translate(+50%, +50%)'
            },
            'right-top': {
                top: offset,
                right: offset,
                transform: 'translate(+50%, -50%)'
            },
            'start': {
                top: '50%',
                [this.isRTL ? 'right' : 'left']: 0,
                transform: 'translate(-50%, -50%)'
            },
            'start-bottom': {
                bottom: offset,
                [this.isRTL ? 'right' : 'left']: offset,
                transform: 'translate(-50%, +50%)'
            },
            'start-top': {
                top: offset,
                [this.isRTL ? 'right' : 'left']: offset,
                transform: 'translate(-50%, -50%)'
            },
            'top': {
                top: 0,
                [this.isRTL ? 'right' : 'left']: '50%',
                transform: 'translate(-50%, -50%)'
            }
        };
    }
    get style() {
        if (isSize(this.size))
            return {};
        return {
            '--plus-avatar-size': toUnit(this.size)
        };
    }
    render() {
        return html `${attributes(this, [{
                "style": styles(this.style)
            }])}
        <slot />
        ${Object.keys(this.placements).map(placement => html `<div class=${placement} style=${styles(this.placements[placement])}>
            <slot name=${placement} />
          </div>`)}
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar.tag = "plus-avatar";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Avatar.prototype, "shape", void 0);
__decorate([
    Property({
        reflect: true,
        type: 328
    })
], Avatar.prototype, "size", void 0);
Avatar = __decorate([
    Element()
], Avatar);

export { Avatar };
