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
 * @examples default, name, duration, easing, methods, keyframes, register-a-custom-name, name-type-safe, button, intersection
 */
export declare class PlusAnimation extends PlusCore {
    /**
     * Determines how values are combined between this animation and other,
     * separate animations that do not specify their own specific composite operation.
     */
    composite: 'add' | 'accumulate' | 'replace';
    /**
     * The number of milliseconds to delay the start of the animation.
     */
    delay: number;
    /**
     * Whether the animation runs forwards (`normal`), backwards (`reverse`),
     * switches direction after each iteration (`alternate`), or runs
     * backwards and switches direction after each iteration (`alternate-reverse`).
     */
    direction: 'alternate-reverse' | 'alternate' | 'normal' | 'reverse';
    /**
     * The number of milliseconds each iteration of the animation takes to complete.
     * Keep in mind that your animation will not run if this value is 0.
     */
    duration: number;
    /**
     * The rate of the animation's change over time.
     * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
     * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
     */
    easing: string;
    /**
     * The number of milliseconds to delay after the end of an animation.
     * This is primarily of use when sequencing animations based on the end time of another animation.
     */
    endDelay: number;
    /**
     * Dictates whether the animation's effects should be reflected by the element(s)
     * prior to playing ("`backwards`"), retained after the animation has completed
     * playing ("`forwards`"), or `both`.
     */
    fill: 'backwards' | 'forwards' | 'none';
    /**
     * The [Animation](https://mdn.io/api-animation) object instance.
     */
    instance?: globalThis.Animation;
    /**
     * Determines how values build from iteration to iteration in this animation.
     * Can be set to `accumulate` or `replace`.
     */
    iterationComposite: 'accumulate' | 'replace';
    /**
     * The number of times the animation should repeat. And can also take a value of
     * [Infinity](https://mdn.io/infinity)
     * to make it repeat for as long as the element exists.
     */
    iterations: number;
    /**
     * Describes at what point in the iteration the animation should start.
     * 0.5 would indicate starting halfway through the first iteration for example,
     * and with this value set, an animation with 2 iterations would end halfway through
     * a third iteration.
     */
    iterationStart: number;
    /**
     * A [keyframes](https://mdn.io/keyframe-formats)
     * object or `null`.
     */
    keyframes?: Keyframe[];
    /**
     * Specifies what kind of animation will play.
     * The list of available animations is [here](/element/animation/names).
     */
    name?: OverridableValue<string>;
    /**
     * Sets the animation's playback rate.
     */
    playbackRate: number;
    /**
     * Starts the animation.
     */
    run: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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
        composite: "replace" | "accumulate" | "add";
        delay: number;
        direction: "reverse" | "normal" | "alternate-reverse" | "alternate";
        duration: number;
        easing: any;
        endDelay: number;
        fill: "none" | "backwards" | "forwards";
        iterationComposite: "replace" | "accumulate";
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusAnimationAttributesMapper = {
  'endDelay': 'end-delay';
  'iterationComposite': 'iteration-composite';
  'iterationStart': 'iteration-start';
  'playbackRate': 'playback-rate';
};
export type PlusAnimationOverridableKeys = 'name' | 'preset';
export interface PlusAnimationDisables {}
export interface PlusAnimationOverrides {}
export type PlusAnimationAttributes = Rename<PlusAnimationProperties, PlusAnimationAttributesMapper>;
export type PlusAnimationAttributesOverridden = Rename<PlusAnimationPropertiesOverridden, PlusAnimationAttributesMapper>;
export type PlusAnimationAttributesBase = Rename<PlusAnimationPropertiesBase, PlusAnimationAttributesMapper>;
export type PlusAnimationEvents = Filter<PlusAnimationEventsBase, PlusAnimationDisables>;
export type PlusAnimationEventsBase = ToEventHandlers<Pick<PlusAnimation, PlusAnimationEventsKeys>>;
export type PlusAnimationEventsKeys = 'plusCancel' | 'plusFinish' | 'plusRemove';
export type PlusAnimationEventsJSX = ToJSXEvent<PlusAnimationEvents>;
export type PlusAnimationEventsBaseJSX = ToJSXEvent<PlusAnimationEventsBase>;
export type PlusAnimationMethods = Filter<PlusAnimationMethodsBase, PlusAnimationDisables>;
export type PlusAnimationMethodsBase = Pick<PlusAnimation, PlusAnimationMethodsKeys>;
export type PlusAnimationMethodsKeys = 'cancel' | 'commitStyles' | 'finish' | 'pause' | 'persist' | 'play' | 'reverse' | 'updatePlaybackRate';
export type PlusAnimationProperties = Filter<PlusAnimationPropertiesOverridden, PlusAnimationDisables>;
export type PlusAnimationPropertiesOverridden = Override<PlusAnimationPropertiesBase, PlusAnimationOverrides, PlusAnimationOverridableKeys>;
export type PlusAnimationPropertiesBase = Pick<PlusAnimation, PlusAnimationPropertiesKeys>;
export type PlusAnimationPropertiesKeys = 'composite' | 'delay' | 'direction' | 'duration' | 'easing' | 'endDelay' | 'fill' | 'instance' | 'iterationComposite' | 'iterations' | 'iterationStart' | 'keyframes' | 'name' | 'playbackRate' | 'run' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-animation': {
      properties: PlusAnimationPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-animation": PlusAnimationJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAnimationElement>, HTMLPlusAnimationElement>, keyof PlusAnimationJSX>;
    }
  }
}