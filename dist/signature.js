import { _ as __decorate, x as PlusForm, h as html, b as Property, E as Event, M as Method, Q as Query, W as Watch, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block;height:150px;width:300px}:host([disabled]){opacity:.5}canvas{display:block;height:100%;width:100%}";

let Core;
/**
 * @stable
 *
 * @part canvas - The canvas element.
 */
let Signature = class Signature extends PlusForm {
    constructor() {
        super(...arguments);
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
        this.observer = new ResizeObserver(() => this.resize());
        this.timeout = 0;
    }
    /**
     * The canvas element.
     */
    get canvas() {
        return this.$canvas;
    }
    /**
     * Specifies whether redo can be performed or not.
     */
    get redoable() {
        return this.index != this.history.length - 1;
    }
    /**
     * Specifies whether undo can be performed or not.
     */
    get undoable() {
        return this.index != -1;
    }
    /**
     * Reverts the last undo action.
     */
    redo() {
        if (!this.redoable)
            return;
        this.index++;
        const data = this.history[this.index] || [];
        this.instance.fromData(data);
        this.update(true, true);
    }
    /**
     * Syncs the canvas dimensions with the element dimensions.
     * @param clear - Clears the canvas after resizing.
     */
    resize(clear) {
        const { width, height, offsetWidth, offsetHeight } = this.$canvas;
        if (width == offsetWidth && height == offsetHeight)
            return;
        this.$canvas.width = offsetWidth;
        this.$canvas.height = offsetHeight;
        if (!this.instance)
            return;
        if (clear !== null && clear !== void 0 ? clear : this.clearOnResize) {
            return this.reset(true);
        }
        this.instance.fromData(this.clone());
    }
    /**
     * Reverts the last action.
     */
    undo() {
        if (!this.undoable)
            return;
        this.index--;
        const data = this.history[this.index] || [];
        this.instance.fromData(data);
        this.update(true, true);
    }
    watcher(next, prev, name) {
        // TODO
        if (!this.instance) {
            return setTimeout(() => {
                this.watcher(next, prev, name);
            }, 250);
        }
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
            case 'value':
                // TODO
                this.load();
                break;
        }
        if (name == 'value')
            return;
        // TODO
        this.instance.fromData(this.clone());
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
        this.instance.addEventListener('beginStroke', this.onStart);
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
    clone() {
        return JSON.parse(JSON.stringify(this.instance.toData()));
    }
    // TODO
    load() {
        if (this.previous == this.value)
            return;
        this.reset(false);
        this.previous = this.value;
        const image = document.createElement('img');
        image.src = 'data:image/svg+xml;base64,' + btoa(this.value);
        image.onerror = () => {
            image.remove();
        };
        image.onload = () => {
            const context = this.$canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            image.remove();
        };
    }
    reset(includeValue) {
        this.index = -1;
        this.history = [];
        this.instance.clear();
        if (!includeValue)
            return;
        this.previous = this.value = undefined;
    }
    unbind() {
        var _a;
        this.observer.disconnect();
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.off();
    }
    update(force, silent) {
        if (!force && this.timeout > Date.now())
            return;
        this.timeout = Date.now() + 500;
        const value = this.instance.isEmpty() ? undefined : this.instance.toSVG();
        this.previous = this.value = value;
        if (silent)
            return;
        this.plusChange();
    }
    onStart() {
        if (this.value && this.index == -1) {
            this.reset(true);
        }
    }
    onEnd() {
        this.index++;
        this.history[this.index] = this.clone();
        this.history.length = this.index + 1;
        this.update(false, false);
    }
    loadedCallback() {
        return import('./vendors/signature_pad.js').then(module => {
            Core = module.default;
            this.bind();
        }).catch(() => {
            throw new Error("The `signature` element depends on an external package, but it doesn't seem to be installed. Running `npm install signature_pad` will fix this problem.");
        });
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return html `<canvas part="canvas"></canvas>`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Signature.tag = "plus-signature";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Signature.style = css_248z;
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
        type: 256
    })
], Signature.prototype, "value", void 0);
__decorate([
    Property({
        type: 64
    })
], Signature.prototype, "velocity", void 0);
__decorate([
    Property({
        type: 0
    })
], Signature.prototype, "canvas", null);
__decorate([
    Property({
        type: 0
    })
], Signature.prototype, "redoable", null);
__decorate([
    Property({
        type: 0
    })
], Signature.prototype, "undoable", null);
__decorate([
    Event()
], Signature.prototype, "plusChange", void 0);
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
], Signature.prototype, "redo", null);
__decorate([
    Method()
], Signature.prototype, "resize", null);
__decorate([
    Method()
], Signature.prototype, "undo", null);
__decorate([
    Query('canvas')
], Signature.prototype, "$canvas", void 0);
__decorate([
    Watch()
], Signature.prototype, "watcher", null);
__decorate([
    Bind()
], Signature.prototype, "onStart", null);
__decorate([
    Bind()
], Signature.prototype, "onEnd", null);
Signature = __decorate([
    Element()
], Signature);

export { Signature };
