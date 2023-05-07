import { _ as __decorate, a as __awaiter, h as html, P as Property, E as Event, M as Method, H as Host, Q as Query, W as Watch, B as Bind, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block;height:150px;width:300px}:host([disabled]:not([disabled=false])){opacity:.5}canvas{display:block;height:100%;width:100%}";

let Core;
/**
 * @part canvas - The canvas element.
 * @stable
 */
let Signature = class Signature {
    constructor() {
        /**
         * Specifies the background color.
         */
        this.backgroundColor = 'rgba(0, 0, 0, 0)';
        /**
         * Specifies the color of the strokes.
         */
        this.color = 'black';
        /**
         * Specifies the maximum width of the strokes.
         */
        this.maxWidth = 2.5;
        /**
         * Specifies the minimum width of the strokes.
         */
        this.minWidth = 0.5;
        /**
         * Specifies the time distance between the previous point and the next one.
         */
        this.throttle = 16;
        /**
         * Specifies the velocity based on the previous velocity.
         */
        this.velocity = 0.7;
        this.history = [];
        this.index = -1;
        this.observer = new ResizeObserver(this.onResize);
    }
    /**
     * Specifies whether redo can be performed or not.
     */
    canRedo() {
        return this.index != this.history.length - 1;
    }
    /**
     * Specifies whether undo can be performed or not.
     */
    canUndo() {
        return this.index != -1;
    }
    /**
     * The canvas element.
     */
    canvas() {
        return this.$canvas;
    }
    /**
     * Clears the canvas.
     */
    clear() {
        this.index = -1;
        this.history = [];
        this.instance.clear();
    }
    /**
     * Draws from the data.
     * @param data Collections of points.
     * @param clear Clears the canvas before drawing new points.
     */
    fromData(data, clear) {
        if (clear)
            this.clear();
        this.instance.fromData(data);
    }
    /**
     * Draws from the data URL. [More](https://mdn.io/drawImage).
     * This method does not populate the internal data structure that represents the drawn signature.
     * Thus, after using `fromDataURL`, `toData` won't work properly.
     * @param dataUrl A string containing the [data URL](https://mdn.io/dataURL).
     * @param options TODO
     */
    fromDataURL(dataUrl, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.instance.fromDataURL(dataUrl, {
                ratio: options.ratio,
                width: options.width,
                height: options.height,
                xOffset: options.offsetX,
                yOffset: options.offsetY
            });
        });
    }
    /**
     * Returns `true` if canvas is empty.
     */
    isEmpty() {
        var _a;
        return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.isEmpty();
    }
    /**
     * Returns data of the canvas.
     * @returns Collections of points.
     */
    toData() {
        return JSON.parse(JSON.stringify(this.instance.toData()));
    }
    toDataURL(type, options) {
        if (type == 'image/svg+xml') {
            options = {
                includeBackgroundColor: options
            };
        }
        return this.instance.toDataURL(type, options);
    }
    /**
     * Returns SVG string.
     * @param includeBackgroundColor Adds the background color to the SVG output.
     */
    toSVG(includeBackgroundColor) {
        return this.instance.toSVG({
            includeBackgroundColor
        });
    }
    /**
     * Reverts the last undo action.
     */
    redo() {
        if (!this.canRedo())
            return;
        this.index++;
        const data = this.history[this.index] || [];
        this.instance.fromData(data);
    }
    /**
     * Syncs the canvas dimensions with the component dimensions.
     * @param clear Clears the canvas after resizing.
     */
    resize(clear) {
        const { width, height, offsetWidth, offsetHeight } = this.$canvas;
        if (width == offsetWidth && height == offsetHeight)
            return;
        this.$canvas.width = offsetWidth;
        this.$canvas.height = offsetHeight;
        if (!this.instance)
            return;
        if (clear !== null && clear !== void 0 ? clear : this.clearOnResize)
            return this.clear();
        this.fromData(this.toData());
    }
    /**
     * Reverts the last action.
     */
    undo() {
        if (!this.canUndo())
            return;
        this.index--;
        const data = this.history[this.index] || [];
        this.instance.fromData(data);
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'color':
                this.instance.penColor = next;
                break;
            case 'disabled':
                this.instance[next ? 'off' : 'on']();
                break;
            case 'distance':
                this.instance.minDistance = next;
                break;
            case 'velocity':
                this.instance.velocityFilterWeight = next;
                break;
            case 'backgroundColor':
            case 'dotSize':
            case 'maxWidth':
            case 'minWidth':
            case 'throttle':
                this.instance[name] = next;
                break;
            case 'resizable':
                this.observer[next ? 'observe' : 'unobserve'](this.$host);
                break;
        }
        // TODO
        this.fromData(this.toData());
    }
    bind() {
        this.instance = new Core(this.$canvas, {
            backgroundColor: this.backgroundColor,
            dotSize: this.dotSize,
            minDistance: this.distance,
            minWidth: this.minWidth,
            maxWidth: this.maxWidth,
            penColor: this.color,
            throttle: this.throttle,
            velocityFilterWeight: this.velocity
        });
        this.instance.addEventListener('endStroke', this.onEnd);
        const events = {
            afterUpdateStroke: this.plusAfter,
            beforeUpdateStroke: this.plusBefore,
            beginStroke: this.plusStart,
            endStroke: this.plusEnd
        };
        for (const key in events) {
            if (!events.hasOwnProperty(key))
                continue;
            this.instance.addEventListener(key, event => {
                events[key](event['detail']);
            });
        }
        if (this.disabled) {
            this.instance.off();
        }
        if (this.resizable) {
            this.observer.observe(this.$host);
        }
        // TODO
        requestAnimationFrame(() => this.resize());
    }
    unbind() {
        var _a;
        this.observer.disconnect();
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.off();
    }
    onEnd() {
        this.index++;
        this.history[this.index] = this.toData();
        this.history.length = this.index + 1;
    }
    onResize() {
        this.resize();
    }
    loadedCallback() {
        import('./vendors/signature_pad.js').then(moddule => {
            Core = moddule.default;
            this.bind();
        });
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return html `<canvas part="canvas"></canvas>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Signature.TAG = "plus-signature";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Signature.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Signature.prototype, "backgroundColor", void 0);
__decorate([
    Property({
        type: 2
    })
], Signature.prototype, "clearOnResize", void 0);
__decorate([
    Property({
        type: 256
    })
], Signature.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Signature.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "distance", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "dotSize", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "maxWidth", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "minWidth", void 0);
__decorate([
    Property({
        type: 2
    })
], Signature.prototype, "resizable", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "throttle", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "velocity", void 0);
__decorate([
    Event()
], Signature.prototype, "plusAfter", void 0);
__decorate([
    Event()
], Signature.prototype, "plusBefore", void 0);
__decorate([
    Event()
], Signature.prototype, "plusEnd", void 0);
__decorate([
    Event()
], Signature.prototype, "plusStart", void 0);
__decorate([
    Method()
], Signature.prototype, "canRedo", null);
__decorate([
    Method()
], Signature.prototype, "canUndo", null);
__decorate([
    Method()
], Signature.prototype, "canvas", null);
__decorate([
    Method()
], Signature.prototype, "clear", null);
__decorate([
    Method()
], Signature.prototype, "fromData", null);
__decorate([
    Method()
], Signature.prototype, "fromDataURL", null);
__decorate([
    Method()
], Signature.prototype, "isEmpty", null);
__decorate([
    Method()
], Signature.prototype, "toData", null);
__decorate([
    Method()
], Signature.prototype, "toDataURL", null);
__decorate([
    Method()
], Signature.prototype, "toSVG", null);
__decorate([
    Method()
], Signature.prototype, "redo", null);
__decorate([
    Method()
], Signature.prototype, "resize", null);
__decorate([
    Method()
], Signature.prototype, "undo", null);
__decorate([
    Host()
], Signature.prototype, "$host", void 0);
__decorate([
    Query('canvas')
], Signature.prototype, "$canvas", void 0);
__decorate([
    Watch()
], Signature.prototype, "watcher", null);
__decorate([
    Bind()
], Signature.prototype, "onEnd", null);
__decorate([
    Bind()
], Signature.prototype, "onResize", null);
Signature = __decorate([
    Element()
], Signature);

export { Signature };
