import { _ as __decorate, P as PlusBase, h as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{background-color:#dcdcdc;border-radius:.25rem;display:flex;overflow:hidden}::slotted(plus-progress-bar){overflow:visible}";

let ProgressBarStack = class ProgressBarStack extends PlusBase {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBarStack.TAG = "plus-progress-bar-stack";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBarStack.STYLES = css_248z;
ProgressBarStack = __decorate([
    Element()
], ProgressBarStack);

export { ProgressBarStack };
