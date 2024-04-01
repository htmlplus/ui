import { _ as __decorate, P as PlusCore, h as html, f as attributes, e as styles, q as isCSSColor, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}@keyframes indeterminate{0%{left:0;transform:translateX(-100%)}to{left:100%;transform:translateX(0)}}:host{--plus-progress-bar-current-background-color:#1e90ff}:host{background-color:#dcdcdc;border-radius:.25rem;direction:ltr;display:flex;font-size:.75rem;height:1rem;overflow:hidden;position:relative}:host>*{inset:0;position:absolute}:host::part(underlay){background-color:transparent}:host::part(indicator){align-items:center;color:#fff;display:flex;flex-direction:column;justify-content:center;overflow:hidden;transition:width .6s ease;white-space:nowrap}:host([sync])::part(indicator){transition:none}:host::part(buffer){background-color:var(--plus-progress-bar-current-background-color);opacity:.25}:host::part(indicator){background-color:var(--plus-progress-bar-current-background-color)}:host([variant=indeterminate])::part(indicator){animation:indeterminate 2s linear infinite;width:50%!important}";

/**
 * @slot default - The default slot.
 */
let ProgressBar = class ProgressBar extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the minimum value of the progress.
         */
        this.min = 0;
        /**
         * Specifies the maximum value of the progress.
         */
        this.max = 100;
        /**
         * Specifies the progress of the bar by a number between `min` and `max`.
         */
        this.value = 0;
    }
    get percentage() {
        return this.progress + '%';
    }
    get progress() {
        return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
    }
    get stacked() {
        return this.$host.parentElement.nodeName.startsWith(this.$host.nodeName);
    }
    render() {
        return html `${attributes(this, [{
                "aria-valuemin": this.min
            }, {
                "aria-valuemax": this.max
            }, {
                "aria-valuenow": this.progress
            }, {
                "role": "progressbar"
            }, {
                "style": styles({
                    'minWidth': this.stacked ? this.percentage : null,
                    '--plus-progress-bar-current-background-color': isCSSColor(this.color) ? this.color : undefined
                })
            }])}
        <div part="underlay"></div>
        <div part="buffer" style=${styles({
            width: `${this.buffer || 0}%`
        })}></div>
        <div part="indicator" style=${styles({
            width: this.stacked ? '100%' : this.percentage
        })}>
          <slot>${this.label ? this.percentage : null}</slot>
        </div>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBar.tag = "plus-progress-bar";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
ProgressBar.style = css_248z;
__decorate([
    Property({
        type: 64
    })
], ProgressBar.prototype, "buffer", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], ProgressBar.prototype, "color", void 0);
__decorate([
    Property({
        type: 2
    })
], ProgressBar.prototype, "label", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar.prototype, "min", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar.prototype, "max", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], ProgressBar.prototype, "sync", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], ProgressBar.prototype, "variant", void 0);
__decorate([
    Property({
        type: 64
    })
], ProgressBar.prototype, "value", void 0);
ProgressBar = __decorate([
    Element()
], ProgressBar);

export { ProgressBar };
