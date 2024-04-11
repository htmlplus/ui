import { _ as __decorate, P as PlusCore, h as html, e as styles, b as Property, f as CSSColorVariable, i as CSSSizeVariable, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{--plus-avatar-color:gray;--plus-avatar-size:3rem}:host{align-items:center;background-color:hsl(from var(--plus-avatar-color) h s 90%);border-radius:.25rem;color:var(--plus-avatar-color);display:inline-flex;height:var(--plus-avatar-size);justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle;width:var(--plus-avatar-size)}:host([shape=circle]){border-radius:50%}:host([shape=round]){border-radius:.25rem}:host([shape=tile]){border-radius:0}:host([size=xxs]){--plus-avatar-size:1rem}:host([size=xs]){--plus-avatar-size:1.5rem}:host([size=sm]){--plus-avatar-size:2rem}:host([size=md]){--plus-avatar-size:3rem}:host([size=lg]){--plus-avatar-size:4rem}:host([size=xl]){--plus-avatar-size:6rem}:host([size=xxl]){--plus-avatar-size:8rem}slot[name]{display:block;position:absolute}slot:not([name]){border-radius:inherit;font-size:calc(var(--plus-avatar-size)*.35)}::slotted(a){inset:0;position:absolute}::slotted(:not([slot]):not(plus-icon)){border-radius:inherit;height:100%;width:100%}";

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let Avatar = class Avatar extends PlusCore {
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
    render() {
        return html `
        <slot />
        ${Object.keys(this.placements).map(placement => html `<slot name=${placement} style=${styles(this.placements[placement])} />`)}
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
        type: 256
    }),
    CSSColorVariable()
], Avatar.prototype, "color", void 0);
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
    }),
    CSSSizeVariable()
], Avatar.prototype, "size", void 0);
Avatar = __decorate([
    Element()
], Avatar);

export { Avatar };
