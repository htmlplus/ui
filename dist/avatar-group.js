import { _ as __decorate, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-avatar-group-gutter-stacked:-0.5rem;--plus-avatar-group-gutter-unstacked:0.5rem}:host{align-items:center;display:inline-flex;flex-wrap:wrap}:host ::slotted(plus-avatar){margin-inline-end:var(--plus-avatar-group-gutter-unstacked)}:host ::slotted(plus-avatar:last-of-type){margin-inline-end:0!important}:host([hoverable]:not([hoverable=false])) ::slotted(plus-avatar:hover){z-index:1}:host([stacked]:not([stacked=false])) ::slotted(plus-avatar){box-shadow:0 0 0 2px #fff;margin-inline-end:var(--plus-avatar-group-gutter-stacked)}";

/**
 * @slot default - The default slot.
 */
let AvatarGroup = class AvatarGroup {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.TAG = "plus-avatar-group";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.STYLES = css_248z;
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
