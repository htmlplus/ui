import { s as setConfig, _ as __decorate, P as PlusBase, h as html, b as Property, E as Event, M as Method, W as Watch, B as Bind, c as Element } from './core/index.js';
import { getConfig } from './config.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}";

const ANIMATION_EASINGS = {
    'ease': 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'ease-in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    'ease-out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    'ease-in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    'ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    'ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    'ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
    'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    'ease-out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    'ease-in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'linear': 'linear'
};

const register = (name, keyframe) => {
  setConfig('PLUS', {
    asset: {
      animation: {
        [name]: keyframe
      }
    }
  });
};

register('fade-in', [
  { offset: 0, opacity: '0' },
  { offset: 1, opacity: '1' }
]);

register('fade-out', [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0' }
]);

/**
 * @stable
 * @slot default - The default slot.
 */
let Animation = class Animation extends PlusBase {
    constructor() {
        super(...arguments);
        /**
         * Determines how values are combined between this animation and other,
         * separate animations that do not specify their own specific composite operation.
         */
        this.composite = 'replace';
        /**
         * The number of milliseconds to delay the start of the animation.
         */
        this.delay = 0;
        /**
         * Whether the animation runs forwards (`normal`), backwards (`reverse`),
         * switches direction after each iteration (`alternate`), or runs
         * backwards and switches direction after each iteration (`alternate-reverse`).
         */
        this.direction = 'normal';
        /**
         * The number of milliseconds each iteration of the animation takes to complete.
         * Keep in mind that your animation will not run if this value is 0.
         */
        this.duration = 1000;
        /**
         * The rate of the animation's change over time.
         * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
         * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
         */
        this.easing = 'linear';
        /**
         * The number of milliseconds to delay after the end of an animation.
         * This is primarily of use when sequencing animations based on the end time of another animation.
         */
        this.endDelay = 0;
        /**
         * Dictates whether the animation's effects should be reflected by the element(s)
         * prior to playing ("`backwards`"), retained after the animation has completed
         * playing ("`forwards`"), or `both`.
         */
        this.fill = 'none';
        /**
         * Determines how values build from iteration to iteration in this animation.
         * Can be set to `accumulate` or `replace`.
         */
        this.iterationComposite = 'replace';
        /**
         * The number of times the animation should repeat. And can also take a value of
         * [Infinity](https://mdn.io/infinity)
         * to make it repeat for as long as the element exists.
         */
        this.iterations = 1;
        /**
         * Describes at what point in the iteration the animation should start.
         * 0.5 would indicate starting halfway through the first iteration for example,
         * and with this value set, an animation with 2 iterations would end halfway through
         * a third iteration.
         */
        this.iterationStart = 0;
        /**
         * Sets the animation's playback rate.
         */
        this.playbackRate = 1;
    }
    /**
     * Clears all [keyframeEffects](https://mdn.io/keyframe-effect)
     * caused by this animation and aborts its playback.
     */
    cancel() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    /**
     * Commits the end styling state of an animation to the element being animated, even after that
     * animation has been removed. It will cause the end styling state to be written to the element
     * being animated, in the form of properties inside a `style` attribute.
     */
    commitStyles() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.commitStyles();
    }
    /**
     * Seeks either end of an animation, depending on whether the animation is playing or reversing.
     */
    finish() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.finish();
    }
    /**
     * Suspends playing of an animation.
     */
    pause() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Explicitly persists an animation, when it would otherwise be removed due to the browser's
     * [Automatically removing filling animations](https://developer.mozilla.org/en-US/docs/Web/API/Animation#automatically_removing_filling_animations)
     * behavior.
     */
    persist() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.persist();
    }
    /**
     * Starts or resumes playing of an animation, or begins the animation again if it previously finished.
     */
    play() {
        var _a;
        this.run = true;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Reverses playback direction, stopping at the start of the animation.
     * If the animation is finished or unplayed, it will play from end to beginning.
     */
    reverse() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.reverse();
    }
    /**
     * Sets the speed of an animation after first synchronizing its playback position.
     */
    updatePlaybackRate(playbackRate) {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.updatePlaybackRate(playbackRate);
    }
    get options() {
        var _a, _b;
        return {
            composite: this.composite,
            delay: this.delay,
            direction: this.direction,
            duration: this.duration,
            easing: (_b = (_a = ANIMATION_EASINGS[this.easing]) !== null && _a !== void 0 ? _a : getConfig('asset', 'easing', this.easing)) !== null && _b !== void 0 ? _b : this.easing,
            endDelay: this.endDelay,
            fill: this.fill,
            iterationComposite: this.iterationComposite,
            iterations: this.iterations,
            iterationStart: this.iterationStart,
            playbackRate: this.playbackRate
        };
    }
    watcher() {
        this.run ? this.play() : this.pause();
    }
    onCancel() {
        this.run = false;
        this.plusCancel();
    }
    onFinish() {
        this.run = false;
        this.plusFinish();
    }
    onRemove() {
        this.run = false;
        this.plusRemove();
    }
    updatedCallback() {
        var _a, _b;
        this.disconnectedCallback();
        const keyframes = (_b = (_a = this.keyframes) !== null && _a !== void 0 ? _a : getConfig('asset', 'animation', this.name)) !== null && _b !== void 0 ? _b : [];
        this.instance = this.$host.animate(keyframes, this.options);
        this.instance.addEventListener('cancel', this.onCancel);
        this.instance.addEventListener('finish', this.onFinish);
        this.instance.addEventListener('remove', this.onRemove);
        if (this.run)
            return;
        this.pause();
    }
    disconnectedCallback() {
        var _a, _b, _c;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('cancel', this.onCancel);
        (_b = this.instance) === null || _b === void 0 ? void 0 : _b.removeEventListener('finish', this.onFinish);
        (_c = this.instance) === null || _c === void 0 ? void 0 : _c.removeEventListener('remove', this.onFinish);
    }
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Animation.TAG = "plus-animation";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Animation.STYLES = css_248z;
__decorate([
    Property({
        type: 8
    })
], Animation.prototype, "composite", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "delay", void 0);
__decorate([
    Property({
        type: 8
    })
], Animation.prototype, "direction", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "duration", void 0);
__decorate([
    Property({
        type: 256
    })
], Animation.prototype, "easing", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "endDelay", void 0);
__decorate([
    Property({
        type: 8
    })
], Animation.prototype, "fill", void 0);
__decorate([
    Property({
        type: 0
    })
], Animation.prototype, "instance", void 0);
__decorate([
    Property({
        type: 8
    })
], Animation.prototype, "iterationComposite", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "iterations", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "iterationStart", void 0);
__decorate([
    Property({
        type: 1
    })
], Animation.prototype, "keyframes", void 0);
__decorate([
    Property({
        type: 256
    })
], Animation.prototype, "name", void 0);
__decorate([
    Property({
        type: 64
    })
], Animation.prototype, "playbackRate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Animation.prototype, "run", void 0);
__decorate([
    Event()
], Animation.prototype, "plusCancel", void 0);
__decorate([
    Event()
], Animation.prototype, "plusFinish", void 0);
__decorate([
    Event()
], Animation.prototype, "plusRemove", void 0);
__decorate([
    Method()
], Animation.prototype, "cancel", null);
__decorate([
    Method()
], Animation.prototype, "commitStyles", null);
__decorate([
    Method()
], Animation.prototype, "finish", null);
__decorate([
    Method()
], Animation.prototype, "pause", null);
__decorate([
    Method()
], Animation.prototype, "persist", null);
__decorate([
    Method()
], Animation.prototype, "play", null);
__decorate([
    Method()
], Animation.prototype, "reverse", null);
__decorate([
    Method()
], Animation.prototype, "updatePlaybackRate", null);
__decorate([
    Watch('run', true)
], Animation.prototype, "watcher", null);
__decorate([
    Bind()
], Animation.prototype, "onCancel", null);
__decorate([
    Bind()
], Animation.prototype, "onFinish", null);
__decorate([
    Bind()
], Animation.prototype, "onRemove", null);
Animation = __decorate([
    Element()
], Animation);

export { Animation };
