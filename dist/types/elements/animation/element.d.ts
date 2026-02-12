import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Creates an animation and applies it to the content.
 * Powered by the [Web Animations API](https://mdn.io/web-animations-api).
 * A wide range of animations is available [here](https://www.htmlplus.io/element/animation/names).
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, name, duration, easing, methods, keyframes, register-a-custom-name, button, intersection
 */
export declare class PlusAnimation extends PlusCore {
    /**
     * Determines how values are combined between this animation and other,
     * separate animations that do not specify their own specific composite operation.
     */
    composite?: 'add' | 'accumulate' | 'replace';
    /**
     * The number of milliseconds to delay the start of the animation.
     */
    delay?: number;
    /**
     * Whether the animation runs forwards (`normal`), backwards (`reverse`),
     * switches direction after each iteration (`alternate`), or runs
     * backwards and switches direction after each iteration (`alternate-reverse`).
     */
    direction?: 'alternate-reverse' | 'alternate' | 'normal' | 'reverse';
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
    fill?: 'backwards' | 'forwards' | 'none';
    /**
     * The [Animation](https://mdn.io/api-animation) object instance.
     */
    instance?: globalThis.Animation;
    /**
     * Determines how values build from iteration to iteration in this animation.
     * Can be set to `accumulate` or `replace`.
     */
    iterationComposite?: 'accumulate' | 'replace';
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
    name?: OverridableValue<string & {}>;
    /**
     * Sets the animation's playback rate.
     */
    playbackRate?: number;
    /**
     * Starts the animation.
     */
    run?: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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
        composite: "accumulate" | "add" | "replace";
        delay: number;
        direction: "reverse" | "normal" | "alternate-reverse" | "alternate";
        duration: number;
        easing: any;
        endDelay: number;
        fill: "none" | "backwards" | "forwards";
        iterationComposite: "accumulate" | "replace";
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusAnimationAttributesMapper = {
  'composite': 'composite';
  'delay': 'delay';
  'direction': 'direction';
  'duration': 'duration';
  'easing': 'easing';
  'endDelay': 'end-delay';
  'fill': 'fill';
  'instance': 'instance';
  'iterationComposite': 'iteration-composite';
  'iterations': 'iterations';
  'iterationStart': 'iteration-start';
  'keyframes': 'keyframes';
  'name': 'name';
  'playbackRate': 'playback-rate';
  'run': 'run';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAnimationOverridableKeys = 'name' | 'variant';
export interface PlusAnimationDisables {}
export interface PlusAnimationOverrides {}
export type PlusAnimationAttributes = Filter<PlusAnimationAttributesOverridden, PlusAnimationDisables, PlusAnimationAttributesMapper>;
export type PlusAnimationAttributesOverridden = Override<PlusAnimationAttributesBase, PlusAnimationOverrides, PlusAnimationOverridableKeys, PlusAnimationAttributesMapper>;
export type PlusAnimationAttributesBase = {
  /**
  * Determines how values are combined between this animation and other,
  * separate animations that do not specify their own specific composite operation.
  */
  "composite"?: 'add' | 'accumulate' | 'replace';
  /**
  * The number of milliseconds to delay the start of the animation.
  */
  "delay"?: number;
  /**
  * Whether the animation runs forwards (`normal`), backwards (`reverse`),
  * switches direction after each iteration (`alternate`), or runs
  * backwards and switches direction after each iteration (`alternate-reverse`).
  */
  "direction"?: 'alternate-reverse' | 'alternate' | 'normal' | 'reverse';
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
  "fill"?: 'backwards' | 'forwards' | 'none';
  /**
  * The [Animation](https://mdn.io/api-animation) object instance.
  */
  "instance"?: globalThis.Animation;
  /**
  * Determines how values build from iteration to iteration in this animation.
  * Can be set to `accumulate` or `replace`.
  */
  "iteration-composite"?: 'accumulate' | 'replace';
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
  "name"?: OverridableValue<string & {}>;
  /**
  * Sets the animation's playback rate.
  */
  "playback-rate"?: number;
  /**
  * Starts the animation.
  */
  "run"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAnimationProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAnimationEvents = Filter<PlusAnimationEventsBase, PlusAnimationDisables>;
export type PlusAnimationEventsBase = {
  /**
  * Fires when the [Animation.cancel()](https://mdn.io/animation-cancel)
  * method is called or when the animation enters the "`idle`" play state from another state.
  */
  plusCancel?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the animation finishes playing.
  */
  plusFinish?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the animation is removed (i.e., put into an `active` replace state).
  */
  plusRemove?: (event: CustomEvent<void>) => void;
};
export type PlusAnimationEventsJSX = Filter<PlusAnimationEventsBaseJSX, PlusAnimationDisables, {
  plusCancel: 'onPlusCancel';
  plusFinish: 'onPlusFinish';
  plusRemove: 'onPlusRemove';
}>;
export type PlusAnimationEventsBaseJSX = {
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
};
export type PlusAnimationMethods = Filter<PlusAnimationMethodsBase, PlusAnimationDisables>;
export type PlusAnimationMethodsBase = {
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
};
export type PlusAnimationProperties = Filter<PlusAnimationPropertiesOverridden, PlusAnimationDisables>;
export type PlusAnimationPropertiesOverridden = Override<PlusAnimationPropertiesBase, PlusAnimationOverrides, PlusAnimationOverridableKeys>;
export type PlusAnimationPropertiesBase = {
  /**
  * Determines how values are combined between this animation and other,
  * separate animations that do not specify their own specific composite operation.
  */
  composite?: 'add' | 'accumulate' | 'replace';
  /**
  * The number of milliseconds to delay the start of the animation.
  */
  delay?: number;
  /**
  * Whether the animation runs forwards (`normal`), backwards (`reverse`),
  * switches direction after each iteration (`alternate`), or runs
  * backwards and switches direction after each iteration (`alternate-reverse`).
  */
  direction?: 'alternate-reverse' | 'alternate' | 'normal' | 'reverse';
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
  fill?: 'backwards' | 'forwards' | 'none';
  /**
  * The [Animation](https://mdn.io/api-animation) object instance.
  */
  instance?: globalThis.Animation;
  /**
  * Determines how values build from iteration to iteration in this animation.
  * Can be set to `accumulate` or `replace`.
  */
  iterationComposite?: 'accumulate' | 'replace';
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
  name?: OverridableValue<string & {}>;
  /**
  * Sets the animation's playback rate.
  */
  playbackRate?: number;
  /**
  * Starts the animation.
  */
  run?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAnimationProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-animation': {
      properties: PlusAnimationPropertiesOverridden;
    };
  }
}
export type PlusAnimationElement = globalThis.HTMLPlusAnimationElement;
export type PlusAnimationJSX = PlusAnimationAttributes & PlusAnimationEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-animation": PlusAnimationJSX;
  }
}
declare global {
  interface HTMLPlusAnimationElement extends HTMLElement, PlusAnimationMethods, PlusAnimationProperties {}
  var HTMLPlusAnimationElement: {
    prototype: HTMLPlusAnimationElement;
    new (): HTMLPlusAnimationElement;
  };
  interface HTMLElementTagNameMap {
    "plus-animation": HTMLPlusAnimationElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-animation": PlusAnimationJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAnimationElement>, HTMLPlusAnimationElement>, keyof PlusAnimationJSX>;
    }
  }
}