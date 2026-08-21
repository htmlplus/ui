import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Can be used to quickly create animations that display numerical data in a more interesting way.
 *
 * @stable
 *
 * @examples default, range, reverse, duration, delay, separator, decimal, separator-decimal, numerals, intersection
 */
export declare class PlusCounter extends PlusCore {
    /**
     * Easing function. Click [here](http://robertpenner.com/easing) for more details.
     */
    easing: 'ease-out-expo' | 'linear';
    /**
     * Specifies decimal character.
     */
    decimal: string;
    /**
     * Amount of decimals to display.
     */
    decimals: number;
    /**
     * Delay in milliseconds before starting the transition.
     */
    delay: number;
    /**
     * Duration in milliseconds.
     */
    duration: number;
    /**
     * Initial value.
     */
    from: number;
    /**
     * Specifies numeral glyph substitution.
     */
    numerals: string[];
    /**
     * Starts/Stops the transition.
     */
    play: boolean;
    /**
     * Specifies character of thousands separator.
     */
    separator: string;
    /**
     * Target value.
     */
    to: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Is Triggered when transition ended.
     */
    plusComplete: EventEmitter<void>;
    /**
     * Completes the transition.
     */
    complete(): void;
    /**
     * Pauses the transition.
     */
    pause(): void;
    /**
     * Starts the transition.
     */
    start(): void;
    /**
     * Stops the transition.
     */
    stop(): void;
    counter?: number;
    state?: 'idle' | 'completed' | 'paused' | 'running' | 'stopped';
    remaining?: number;
    requestAnimationFrame?: number;
    startTime?: number;
    get easingFunction(): any;
    get formated(): string;
    get reverse(): boolean;
    watcher(): void;
    cancelAnimationFrame(): void;
    count(timestamp: number): void;
    reset(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCounterAttributesMapper = {};
export type PlusCounterOverridableKeys = 'preset';
export interface PlusCounterDisables {}
export interface PlusCounterOverrides {}
export type PlusCounterAttributes = Rename<PlusCounterProperties, PlusCounterAttributesMapper>;
export type PlusCounterAttributesOverridden = Rename<PlusCounterPropertiesOverridden, PlusCounterAttributesMapper>;
export type PlusCounterAttributesBase = Rename<PlusCounterPropertiesBase, PlusCounterAttributesMapper>;
export type PlusCounterEvents = Filter<PlusCounterEventsBase, PlusCounterDisables>;
export type PlusCounterEventsBase = ToEventHandlers<Pick<PlusCounter, PlusCounterEventsKeys>>;
export type PlusCounterEventsKeys = 'plusComplete';
export type PlusCounterEventsJSX = ToJSXEvent<PlusCounterEvents>;
export type PlusCounterEventsBaseJSX = ToJSXEvent<PlusCounterEventsBase>;
export type PlusCounterMethods = Filter<PlusCounterMethodsBase, PlusCounterDisables>;
export type PlusCounterMethodsBase = Pick<PlusCounter, PlusCounterMethodsKeys>;
export type PlusCounterMethodsKeys = 'complete' | 'pause' | 'start' | 'stop';
export type PlusCounterProperties = Filter<PlusCounterPropertiesOverridden, PlusCounterDisables>;
export type PlusCounterPropertiesOverridden = Override<PlusCounterPropertiesBase, PlusCounterOverrides, PlusCounterOverridableKeys>;
export type PlusCounterPropertiesBase = Pick<PlusCounter, PlusCounterPropertiesKeys>;
export type PlusCounterPropertiesKeys = 'easing' | 'decimal' | 'decimals' | 'delay' | 'duration' | 'from' | 'numerals' | 'play' | 'separator' | 'to' | 'overrides' | 'preset';
export type PlusCounterElement = globalThis.HTMLPlusCounterElement;
export type PlusCounterJSX = PlusCounterAttributes & PlusCounterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-counter": PlusCounterJSX;
  }
}
declare global {
  interface HTMLPlusCounterElement extends HTMLElement, PlusCounterMethods, PlusCounterProperties {}
  var HTMLPlusCounterElement: {
    prototype: HTMLPlusCounterElement;
    new (): HTMLPlusCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-counter": HTMLPlusCounterElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-counter': {
      properties: PlusCounterPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCounterElement>, HTMLPlusCounterElement>, keyof PlusCounterJSX>;
    }
  }
}