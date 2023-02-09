import { _ as __decorate, P as Property, E as Event, S as State, A as Attributes, M as Method, B as Bind, W as Watch, a as Element } from './core/index.js';

const COUNTER_EASINGS = {
    'ease-out-expo': (currentTime, beginningValue, changeInValue, duration) => {
        return (changeInValue * (-Math.pow(2, (-10 * currentTime) / duration) + 1) * 1024) / 1023 + beginningValue;
    }
};

/**
 * @stable
 */
let Counter = class Counter {
    constructor() {
        /**
         * Easing function. Click [here](http://robertpenner.com/easing) for more details.
         */
        this.easing = 'ease-out-expo';
        /**
         * Specifies decimal character.
         */
        this.decimal = '.';
        /**
         * Amount of decimals to display.
         */
        this.decimals = 0;
        /**
         * Delay in milliseconds before starting the transition.
         */
        this.delay = 0;
        /**
         * Duration in milliseconds.
         */
        this.duration = 1000;
        /**
         * Initial value.
         */
        this.from = 0;
        /**
         * Specifies numeral glyph substitution.
         */
        this.numerals = [];
        this.state = 'idle';
    }
    get attributes() {
        return {
            state: this.state
        };
    }
    get easingFunction() {
        return (COUNTER_EASINGS[this.easing] || this.easing);
    }
    get formated() {
        var _a;
        const counter = (_a = this.counter) !== null && _a !== void 0 ? _a : this.from;
        const negative = counter < 0 ? '-' : '';
        let result;
        let x1;
        let x2;
        let x3;
        result = Math.abs(counter).toFixed(this.decimals);
        result += '';
        const x = result.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? this.decimal + x[1] : '';
        if (this.separator) {
            x3 = '';
            for (let i = 0, length = x1.length; i < length; ++i) {
                if (i !== 0 && i % 3 === 0) {
                    x3 = this.separator + x3;
                }
                x3 = x1[length - i - 1] + x3;
            }
            x1 = x3;
        }
        if (this.numerals && this.numerals.length) {
            x1 = x1.replace(/[0-9]/g, w => this.numerals[+w]);
            x2 = x2.replace(/[0-9]/g, w => this.numerals[+w]);
        }
        return negative + x1 + x2;
    }
    get reverse() {
        return this.to < this.from;
    }
    /**
     * Completes the transition.
     */
    complete() {
        cancelAnimationFrame(this.requestAnimationFrame);
        this.reset();
        this.counter = this.to;
        this.state = 'completed';
        this.play = false;
    }
    /**
     * Pauses the transition.
     */
    pause() {
        if (this.state != 'running')
            return;
        cancelAnimationFrame(this.requestAnimationFrame);
        this.state = 'paused';
    }
    /**
     * Starts the transition.
     */
    start() {
        switch (this.state) {
            case 'completed':
            case 'idle':
            case 'stopped':
                setTimeout(() => {
                    this.reset();
                    this.state = 'running';
                    this.play = true;
                    this.requestAnimationFrame = requestAnimationFrame(this.count);
                }, this.delay);
                break;
            case 'paused':
                this.startTime = performance.now() - (this.duration - this.remaining);
                this.state = 'running';
                this.requestAnimationFrame = requestAnimationFrame(this.count);
                break;
        }
    }
    /**
     * Stops the transition.
     */
    stop() {
        cancelAnimationFrame(this.requestAnimationFrame);
        this.reset();
        this.counter = this.from;
        this.state = 'stopped';
        this.play = false;
    }
    count(timestamp) {
        if (!this.startTime)
            this.startTime = timestamp;
        const progress = timestamp - this.startTime;
        this.remaining = this.duration - progress;
        if (!this.easingFunction) {
            this.counter = this.from + (this.to - this.from) * (progress / this.duration);
        }
        else if (this.reverse) {
            this.counter = this.from - this.easingFunction(progress, 0, this.from - this.to, this.duration);
        }
        else {
            this.counter = this.easingFunction(progress, this.from, this.to - this.from, this.duration);
        }
        const done = this.reverse ? this.counter < this.to : this.counter > this.to;
        this.counter = done ? this.to : this.counter;
        this.counter = Number(this.counter.toFixed(this.decimals));
        if (progress < this.duration) {
            this.requestAnimationFrame = requestAnimationFrame(this.count);
            return;
        }
        this.complete();
        this.plusComplete();
    }
    reset() {
        this.remaining = undefined;
        this.startTime = undefined;
    }
    watcher() {
        // TODO: remove requestAnimationFrame
        requestAnimationFrame(() => {
            if (this.play == true && this.state != 'running')
                this.start();
            if (this.play != true && this.state == 'paused')
                this.stop();
            if (this.play != true && this.state == 'running')
                this.stop();
        });
    }
    disconnectedCallback() {
        this.stop();
    }
    render() {
        return this.formated;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Counter.TAG = "plus-counter";
__decorate([
    Property({
        type: 8
    })
], Counter.prototype, "easing", void 0);
__decorate([
    Property({
        type: 256
    })
], Counter.prototype, "decimal", void 0);
__decorate([
    Property({
        type: 64
    })
], Counter.prototype, "decimals", void 0);
__decorate([
    Property({
        type: 64
    })
], Counter.prototype, "delay", void 0);
__decorate([
    Property({
        type: 64
    })
], Counter.prototype, "duration", void 0);
__decorate([
    Property({
        type: 64
    })
], Counter.prototype, "from", void 0);
__decorate([
    Property({
        type: 1
    })
], Counter.prototype, "numerals", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Counter.prototype, "play", void 0);
__decorate([
    Property({
        type: 256
    })
], Counter.prototype, "separator", void 0);
__decorate([
    Property({
        type: 64
    })
], Counter.prototype, "to", void 0);
__decorate([
    Event()
], Counter.prototype, "plusComplete", void 0);
__decorate([
    State()
], Counter.prototype, "counter", void 0);
__decorate([
    State()
], Counter.prototype, "state", void 0);
__decorate([
    Attributes()
], Counter.prototype, "attributes", null);
__decorate([
    Method()
], Counter.prototype, "complete", null);
__decorate([
    Method()
], Counter.prototype, "pause", null);
__decorate([
    Method()
], Counter.prototype, "start", null);
__decorate([
    Method()
], Counter.prototype, "stop", null);
__decorate([
    Bind()
], Counter.prototype, "count", null);
__decorate([
    Watch(['play'], true)
], Counter.prototype, "watcher", null);
Counter = __decorate([
    Element("plus-counter")
], Counter);

export { Counter };