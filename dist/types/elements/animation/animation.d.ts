import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AnimationComposite, AnimationDirection, AnimationFill, AnimationIterationComposite } from './animation.types';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Animation extends PlusCore {
    /**
     * Determines how values are combined between this animation and other,
     * separate animations that do not specify their own specific composite operation.
     */
    composite?: AnimationComposite;
    /**
     * The number of milliseconds to delay the start of the animation.
     */
    delay?: number;
    /**
     * Whether the animation runs forwards (`normal`), backwards (`reverse`),
     * switches direction after each iteration (`alternate`), or runs
     * backwards and switches direction after each iteration (`alternate-reverse`).
     */
    direction?: AnimationDirection;
    /**
     * The number of milliseconds each iteration of the animation takes to complete.
     * Keep in mind that your animation will not run if this value is 0.
     */
    duration?: number;
    /**
     * The rate of the animation's change over time.
     * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
     * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
     */
    easing?: string;
    /**
     * The number of milliseconds to delay after the end of an animation.
     * This is primarily of use when sequencing animations based on the end time of another animation.
     */
    endDelay?: number;
    /**
     * Dictates whether the animation's effects should be reflected by the element(s)
     * prior to playing ("`backwards`"), retained after the animation has completed
     * playing ("`forwards`"), or `both`.
     */
    fill?: AnimationFill;
    /**
     * The [Animation](https://mdn.io/api-animation) object instance.
     */
    instance?: globalThis.Animation;
    /**
     * Determines how values build from iteration to iteration in this animation.
     * Can be set to `accumulate` or `replace`.
     */
    iterationComposite?: AnimationIterationComposite;
    /**
     * The number of times the animation should repeat. And can also take a value of
     * [Infinity](https://mdn.io/infinity)
     * to make it repeat for as long as the element exists.
     */
    iterations?: number;
    /**
     * Describes at what point in the iteration the animation should start.
     * 0.5 would indicate starting halfway through the first iteration for example,
     * and with this value set, an animation with 2 iterations would end halfway through
     * a third iteration.
     */
    iterationStart?: number;
    /**
     * A [keyframes](https://mdn.io/keyframe-formats)
     * object or `null`.
     */
    keyframes?: Keyframe[];
    /**
     * Specifies what kind of animation will play.
     * The list of available animations is [here](/element/animation/names).
     */
    name?: string;
    /**
     * Sets the animation's playback rate.
     */
    playbackRate?: number;
    /**
     * Starts the animation.
     */
    run?: boolean;
    /**
     * Fires when the [Animation.cancel()](https://mdn.io/animation-cancel)
     * method is called or when the animation enters the "`idle`" play state from another state.
     */
    plusCancel: EventEmitter<void>;
    /**
     * Fires when the animation finishes playing.
     */
    plusFinish: EventEmitter<void>;
    /**
     * Fires when the animation is removed (i.e., put into an `active` replace state).
     */
    plusRemove: EventEmitter<void>;
    /**
     * Clears all [keyframeEffects](https://mdn.io/keyframe-effect)
     * caused by this animation and aborts its playback.
     */
    cancel(): void;
    /**
     * Commits the end styling state of an animation to the element being animated, even after that
     * animation has been removed. It will cause the end styling state to be written to the element
     * being animated, in the form of properties inside a `style` attribute.
     */
    commitStyles(): void;
    /**
     * Seeks either end of an animation, depending on whether the animation is playing or reversing.
     */
    finish(): void;
    /**
     * Suspends playing of an animation.
     */
    pause(): void;
    /**
     * Explicitly persists an animation, when it would otherwise be removed due to the browser's
     * [Automatically removing filling animations](https://developer.mozilla.org/en-US/docs/Web/API/Animation#automatically_removing_filling_animations)
     * behavior.
     */
    persist(): void;
    /**
     * Starts or resumes playing of an animation, or begins the animation again if it previously finished.
     */
    play(): void;
    /**
     * Reverses playback direction, stopping at the start of the animation.
     * If the animation is finished or unplayed, it will play from end to beginning.
     */
    reverse(): void;
    /**
     * Sets the speed of an animation after first synchronizing its playback position.
     */
    updatePlaybackRate(playbackRate: number): void;
    get options(): {
        composite: AnimationComposite;
        delay: number;
        direction: AnimationDirection;
        duration: number;
        easing: any;
        endDelay: number;
        fill: AnimationFill;
        iterationComposite: AnimationIterationComposite;
        iterations: number;
        iterationStart: number;
        playbackRate: number;
    };
    watcher(): void;
    onCancel(): void;
    onFinish(): void;
    onRemove(): void;
    updatedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface AnimationAttributes {
  /**
  * Determines how values are combined between this animation and other,
  * separate animations that do not specify their own specific composite operation.
  */
  "composite"?: AnimationComposite;
  /**
  * The number of milliseconds to delay the start of the animation.
  */
  "delay"?: number;
  /**
  * Whether the animation runs forwards (`normal`), backwards (`reverse`),
  * switches direction after each iteration (`alternate`), or runs
  * backwards and switches direction after each iteration (`alternate-reverse`).
  */
  "direction"?: AnimationDirection;
  /**
  * The number of milliseconds each iteration of the animation takes to complete.
  * Keep in mind that your animation will not run if this value is 0.
  */
  "duration"?: number;
  /**
  * The rate of the animation's change over time.
  * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
  * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
  */
  "easing"?: string;
  /**
  * The number of milliseconds to delay after the end of an animation.
  * This is primarily of use when sequencing animations based on the end time of another animation.
  */
  "end-delay"?: number;
  /**
  * Dictates whether the animation's effects should be reflected by the element(s)
  * prior to playing ("`backwards`"), retained after the animation has completed
  * playing ("`forwards`"), or `both`.
  */
  "fill"?: AnimationFill;
  /**
  * The [Animation](https://mdn.io/api-animation) object instance.
  */
  "instance"?: globalThis.Animation;
  /**
  * Determines how values build from iteration to iteration in this animation.
  * Can be set to `accumulate` or `replace`.
  */
  "iteration-composite"?: AnimationIterationComposite;
  /**
  * The number of times the animation should repeat. And can also take a value of
  * [Infinity](https://mdn.io/infinity)
  * to make it repeat for as long as the element exists.
  */
  "iterations"?: number;
  /**
  * Describes at what point in the iteration the animation should start.
  * 0.5 would indicate starting halfway through the first iteration for example,
  * and with this value set, an animation with 2 iterations would end halfway through
  * a third iteration.
  */
  "iteration-start"?: number;
  /**
  * A [keyframes](https://mdn.io/keyframe-formats)
  * object or `null`.
  */
  "keyframes"?: Keyframe[];
  /**
  * Specifies what kind of animation will play.
  * The list of available animations is [here](/element/animation/names).
  */
  "name"?: string;
  /**
  * Sets the animation's playback rate.
  */
  "playback-rate"?: number;
  /**
  * Starts the animation.
  */
  "run"?: boolean;
}
export interface AnimationEvents {
  /**
  * Fires when the [Animation.cancel()](https://mdn.io/animation-cancel)
  * method is called or when the animation enters the "`idle`" play state from another state.
  */
  onPlusCancel?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the animation finishes playing.
  */
  onPlusFinish?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the animation is removed (i.e., put into an `active` replace state).
  */
  onPlusRemove?: (event: CustomEvent<void>) => void;
}
export interface AnimationMethods {
  /**
  * Clears all [keyframeEffects](https://mdn.io/keyframe-effect)
  * caused by this animation and aborts its playback.
  */
  cancel();
  /**
  * Commits the end styling state of an animation to the element being animated, even after that
  * animation has been removed. It will cause the end styling state to be written to the element
  * being animated, in the form of properties inside a `style` attribute.
  */
  commitStyles();
  /**
  * Seeks either end of an animation, depending on whether the animation is playing or reversing.
  */
  finish();
  /**
  * Suspends playing of an animation.
  */
  pause();
  /**
  * Explicitly persists an animation, when it would otherwise be removed due to the browser's
  * [Automatically removing filling animations](https://developer.mozilla.org/en-US/docs/Web/API/Animation#automatically_removing_filling_animations)
  * behavior.
  */
  persist();
  /**
  * Starts or resumes playing of an animation, or begins the animation again if it previously finished.
  */
  play();
  /**
  * Reverses playback direction, stopping at the start of the animation.
  * If the animation is finished or unplayed, it will play from end to beginning.
  */
  reverse();
  /**
  * Sets the speed of an animation after first synchronizing its playback position.
  */
  updatePlaybackRate(playbackRate: number);
}
export interface AnimationProperties {
  /**
  * Determines how values are combined between this animation and other,
  * separate animations that do not specify their own specific composite operation.
  */
  composite?: AnimationComposite;
  /**
  * The number of milliseconds to delay the start of the animation.
  */
  delay?: number;
  /**
  * Whether the animation runs forwards (`normal`), backwards (`reverse`),
  * switches direction after each iteration (`alternate`), or runs
  * backwards and switches direction after each iteration (`alternate-reverse`).
  */
  direction?: AnimationDirection;
  /**
  * The number of milliseconds each iteration of the animation takes to complete.
  * Keep in mind that your animation will not run if this value is 0.
  */
  duration?: number;
  /**
  * The rate of the animation's change over time.
  * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
  * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
  */
  easing?: string;
  /**
  * The number of milliseconds to delay after the end of an animation.
  * This is primarily of use when sequencing animations based on the end time of another animation.
  */
  endDelay?: number;
  /**
  * Dictates whether the animation's effects should be reflected by the element(s)
  * prior to playing ("`backwards`"), retained after the animation has completed
  * playing ("`forwards`"), or `both`.
  */
  fill?: AnimationFill;
  /**
  * The [Animation](https://mdn.io/api-animation) object instance.
  */
  instance?: globalThis.Animation;
  /**
  * Determines how values build from iteration to iteration in this animation.
  * Can be set to `accumulate` or `replace`.
  */
  iterationComposite?: AnimationIterationComposite;
  /**
  * The number of times the animation should repeat. And can also take a value of
  * [Infinity](https://mdn.io/infinity)
  * to make it repeat for as long as the element exists.
  */
  iterations?: number;
  /**
  * Describes at what point in the iteration the animation should start.
  * 0.5 would indicate starting halfway through the first iteration for example,
  * and with this value set, an animation with 2 iterations would end halfway through
  * a third iteration.
  */
  iterationStart?: number;
  /**
  * A [keyframes](https://mdn.io/keyframe-formats)
  * object or `null`.
  */
  keyframes?: Keyframe[];
  /**
  * Specifies what kind of animation will play.
  * The list of available animations is [here](/element/animation/names).
  */
  name?: string;
  /**
  * Sets the animation's playback rate.
  */
  playbackRate?: number;
  /**
  * Starts the animation.
  */
  run?: boolean;
}
export interface AnimationJSX extends AnimationEvents, AnimationProperties {}
declare global {
  interface HTMLPlusAnimationElement extends HTMLElement, AnimationMethods, AnimationProperties {}
  var HTMLPlusAnimationElement: {
    prototype: HTMLPlusAnimationElement;
    new (): HTMLPlusAnimationElement;
  };
  interface HTMLElementTagNameMap {
    "plus-animation": HTMLPlusAnimationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-animation": AnimationEvents & AnimationAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AnimationElement = globalThis.HTMLPlusAnimationElement;