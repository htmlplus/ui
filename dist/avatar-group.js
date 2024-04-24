import { _ as __decorate, P as PlusCore, h as html, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;display:inline-flex;flex-wrap:wrap}:host ::slotted(plus-avatar){margin-inline-end:.5rem}:host ::slotted(plus-avatar:last-of-type){margin-inline-end:0!important}:host([hoverable]) ::slotted(plus-avatar:hover){z-index:1}:host([stacked]) ::slotted(plus-avatar){border:2px solid #fff;margin-inline-end:-.5rem}";

/**
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
let AvatarGroup = class AvatarGroup extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.tag = "plus-avatar-group";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup.prototype, "hoverable", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup.prototype, "stacked", void 0);
AvatarGroup = __decorate([
    Element()
], AvatarGroup);

export { AvatarGroup };
